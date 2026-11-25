import { Link } from "react-scroll";
import SocialLinks from "./module/SocialLink";

function Home() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-section flex items-center justify-center py-12 px-7 md:px-10"
    >
      {/* نورهای ملایم پس‌زمینه */}
      <div className="pointer-events-none absolute -top-40 right-1/4 z-0 h-96 w-96 rounded-full bg-violet-500/40 blur-3xl" />

      <div className="pointer-events-none absolute top-40 -left-40 z-0 h-96 w-96 rounded-full bg-indigo-500/40 blur-3xl" />

      <div className="relative z-10 flex w-full max-w-6xl mx-auto flex-col-reverse items-center justify-between gap-12 md:flex-row-reverse">
        {/* بخش متن و اطلاعات شخصی */}
        <div className="flex-1 space-y-6 text-center md:text-right">
          {/* خوش‌آمدگویی */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary md:mx-0">
            <span>👋</span>
            <span>سلام، خوش آمدید</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            من <span className="text-primary">یاسمن عابدی</span> هستم
          </h1>

          <h2 className="text-xl font-semibold text-slate-300 md:text-2xl">
            Frontend Developer | React & Next.js
          </h2>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-400 md:mx-0 md:text-lg">
            توسعه‌دهنده فرانت‌اند با تمرکز بر ساخت وب‌اپلیکیشن‌های سریع، مدرن و
            با تجربه کاربری روان.
          </p>

          {/* دکمه‌ها و شبکه‌های اجتماعی */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 md:justify-start">
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              className="cursor-pointer rounded-xl bg-primary px-6 py-3 font-medium text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/40"
            >
              ارتباط با من
            </Link>

            <a
              href="#about"
              className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-slate-200 transition-all duration-300 hover:bg-slate-800 hover:text-white"
            >
              مشاهده رزومه
            </a>

            <SocialLinks className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-primary" />
          </div>
        </div>

        {/* تصویر پروفایل */}
        <div className="flex flex-1 items-center justify-center">
          <div className="relative">
            {/* افکت نئونی دور عکس */}
            <div className="absolute -inset-1 animate-pulse rounded-full bg-linear-to-r from-primary to-purple-600 opacity-60 blur-2xl" />

            {/* کادر تصویر */}
            <div className="relative h-64 w-64 rounded-full bg-gradient-to-br from-violet-400 via-purple-600 to-indigo-900 p-[3px] shadow-[0_0_25px_rgba(139,92,246,0.5),0_0_60px_rgba(124,58,237,0.3)] md:h-80 md:w-80">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 border-violet-400/50 bg-gradient-to-br from-violet-600 to-indigo-900">
                <img
                  src="/profile/profile.png"
                  alt="یاسمن عابدی"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
