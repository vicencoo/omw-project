const crypto = require("crypto");
const { Op } = require("sequelize");
const Subscriber = require("../models/Subscriber");

const { Resolver } = require("dns").promises;

// Ask public DNS servers directly, so the check doesn't depend on the computer's DNS settings
const resolver = new Resolver();
resolver.setServers(["1.1.1.1", "8.8.8.8"]);

const MIN_FILL_TIME_MS = 1000; // faster than this = bot
const MAX_PER_IP_PER_HOUR = 5;

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "10minutemail.com",
  "guerrillamail.com",
  "tempmail.com",
  "temp-mail.org",
  "yopmail.com",
  "trashmail.com",
  "getnada.com",
  "sharklasers.com",
  "maildrop.cc",
  "dispostable.com",
  "throwawaymail.com",
  "fakeinbox.com",
  "mintemail.com",
  "emailondeck.com",
]);

const sha256 = (value) =>
  crypto.createHash("sha256").update(value).digest("hex");

const isEmail = (value) =>
  /^[^\s@]{1,64}@[^\s@]+\.[^\s@]{2,}$/.test(value) && value.length <= 254;

const domainReceivesEmail = async (domain) => {
  try {
    const records = await Promise.race([
      // dns.resolveMx(domain),
      resolver.resolveMx(domain),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), 3000),
      ),
    ]);
    return records.length > 0;
  } catch (err) {
    return !["ENOTFOUND", "ENODATA"].includes(err.code);
  }
};

exports.subscribe = async (req, res) => {
  try {
    const { email: rawEmail, website, elapsed, source, page } = req.body || {};

    const ip = (
      req.headers["x-forwarded-for"] ||
      req.socket.remoteAddress ||
      ""
    )
      .split(",")[0]
      .trim();
    const ipHash = sha256(ip + process.env.SUPABASE_DB_URL); // secret salt, the IP itself is never stored

    // 1. Honeypot: pretend success, save nothing
    if (website) return res.json({ ok: true });

    // 2. Too fast to be a person
    if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_TIME_MS) {
      return res.json({ ok: true });
    }

    // 3. Rate limit per IP
    const recent = await Subscriber.count({
      where: {
        ip_hash: ipHash,
        created_at: { [Op.gte]: new Date(Date.now() - 60 * 60 * 1000) },
      },
    });
    if (recent >= MAX_PER_IP_PER_HOUR) {
      return res.status(429).json({ ok: false, code: "too_many" });
    }

    // 4. Email checks
    const email = String(rawEmail || "")
      .trim()
      .toLowerCase();
    if (!isEmail(email)) {
      return res.status(400).json({ ok: false, code: "invalid_email" });
    }

    const domain = email.split("@")[1];
    if (
      DISPOSABLE_DOMAINS.has(domain) ||
      !(await domainReceivesEmail(domain))
    ) {
      return res.status(400).json({ ok: false, code: "fake_email" });
    }

    // 5. Save (an email already in the list is left as it is, same reply either way)
    await Subscriber.findOrCreate({
      where: { email },
      defaults: {
        consent: true,
        source: String(source || "popup").slice(0, 50),
        page: String(page || "").slice(0, 200),
        ip_hash: ipHash,
      },
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return res.status(500).json({ ok: false, code: "generic" });
  }
};
