import { HiOutlineArrowUp } from "react-icons/hi";
import SocialLinks from "./module/SocialLink";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      dir="rtl"
      className="relative mt-24 overflow-hidden border-t border-white/10 bg-section"
    >
      {/* نور پس‌زمینه */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="flex flex-col items-center justify-between gap-7 md:flex-row">
          <div className="text-center md:text-right">
            <a
              href="#home"
              className="text-xl font-bold text-white transition hover:text-primary"
            >
              یاسمن عابدی
            </a>

            <p className="mt-2 text-sm text-slate-400">
              توسعه‌دهنده‌ی فرانت‌اند؛ در حال ساخت تجربه‌های وب زیبا و کاربردی.
            </p>
          </div>

          <nav
            aria-label="شبکه‌های اجتماعی"
            className="flex items-center gap-3"
          >
            <SocialLinks className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-primary" />
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 text-center text-xs text-slate-500 sm:flex-row">
          <p>
            © {currentYear} یاسمن عابدی — ساخته‌شده با{" "}
            <span className="text-red-500">♥</span> و React
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 transition hover:text-primary"
          >
            بازگشت به بالا
            <HiOutlineArrowUp className="text-base" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
