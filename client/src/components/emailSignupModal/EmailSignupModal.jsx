import { useTranslation } from "react-i18next";
import { Text } from "../Text";
import { useEmailSignup } from "./useEmailSignup";

export const EmailSignupModal = () => {
  const { t } = useTranslation("signup");
  const {
    email,
    error,
    honeypot,
    open,
    setEmail,
    setHoneypot,
    status,
    submit,
    close,
  } = useEmailSignup(t);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-1100 flex items-end bg-black/25 sm:items-center sm:justify-center sm:bg-black/45 sm:p-4"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="omw-signup-title"
        className="relative w-full rounded-t-3xl bg-white px-5 pt-6 pb-7 text-[#0F1A14] sm:max-w-md sm:rounded-3xl sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label={t("close")}
          className="absolute top-2.5 right-3 p-1.5 text-2xl leading-none text-[#4A5C51] hover:text-red-700"
        >
          ×
        </button>

        {status === "done" ? (
          <>
            <Text
              Tag="h2"
              id={"omw-signup-title"}
              font="font-bold"
              size="text-xl"
              text={t("thanks_title")}
              className="mr-7 mb-2 leading-tight"
            />
            <Text
              className="leading-relaxed text-[#4A5C51]"
              size="text-sm"
              text={t("thanks_text")}
            />
          </>
        ) : (
          <form onSubmit={submit} noValidate>
            <Text
              Tag="h2"
              id="omw-signup-title"
              text={t("title")}
              font="font-bold"
              className="mr-7 mb-2 text-xl leading-tight"
            />
            <Text
              className="mb-4 leading-relaxed text-[#4A5C51]"
              size="text-sm"
              text={t("text")}
            />

            <label htmlFor="omw-email" className="sr-only">
              {t("email_label")}
            </label>
            <input
              id="omw-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder={t("placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-3 w-full rounded-xl border border-[#C9D8CE] px-3.5 py-3 text-base outline-none focus:border-[#13703A] focus:ring-2 focus:ring-[#13703A]/20"
            />

            {/* Honeypot: hidden from people and autofill, bots fill it */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="hp_company"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {error && <p className="mb-3 text-sm text-[#B3261E]">{error}</p>}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-[#13703A] px-4 py-3 text-[15px] font-semibold text-white hover:bg-[#0D5A2D] disabled:opacity-70"
            >
              {status === "sending" ? t("sending") : t("button")}
            </button>
            <p className="mt-2.5 text-center text-xs text-[#6B7C71]">
              {t("note")}
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
