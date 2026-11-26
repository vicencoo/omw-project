import { useEffect, useRef, useState } from "react";
import { axios } from "../../api/axios";

const STORAGE_KEY = "omw-signup";
const SCROLL_TRIGGER = 300;
const SHOW_EVERY_DAYS = 7;

export const useEmailSignup = (t) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done
  const [error, setError] = useState("");
  const openedAt = useRef(0);

  const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  // Show again after a week, never after the visitor has signed up
  const shouldShow = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return true;
    if (saved === "subscribed") return false;
    const shownAt = Number(saved);
    return (
      !shownAt || Date.now() - shownAt > SHOW_EVERY_DAYS * 24 * 60 * 60 * 1000
    );
  };

  const close = () => setOpen(false);

  // Open once, after the visitor scrolls a little (on any page)
  useEffect(() => {
    if (!shouldShow()) return;
    const onScroll = () => {
      if (window.scrollY > SCROLL_TRIGGER) {
        openedAt.current = Date.now();
        localStorage.setItem(STORAGE_KEY, String(Date.now()));
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close with Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    const cleanEmail = email.trim().toLowerCase(); // pasted emails often have spaces
    if (!isEmail(cleanEmail)) return setError(t("errors.invalid_email"));

    setStatus("sending");
    try {
      await axios.post("/subscribe", {
        email: cleanEmail,
        website: honeypot, // hidden field, bots fill it
        elapsed: Date.now() - openedAt.current, // bots submit instantly
        source: "popup",
        page: window.location.pathname,
      });
      localStorage.setItem(STORAGE_KEY, "subscribed");
      setStatus("done");
      setTimeout(() => setOpen(false), 2500);
    } catch (err) {
      setStatus("idle");
      const code = err.response?.data?.code || "generic";
      setError(t(`errors.${code}`, { defaultValue: t("errors.generic") }));
    }
  };

  return {
    open,
    email,
    honeypot,
    status,
    error,
    setEmail,
    setHoneypot,
    submit,
    close,
  };
};
