import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram } from "react-icons/fa";
import { Link } from "react-scroll";
import profileImg from "../assets/profile.png";

function Home() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-7 md:px-10"
    >
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-12 w-full max-w-6xl mx-auto">
        {/* بخش متن و اطلاعات شخصی (راست‌چین برای زبان فارسی) */}
        <div className="flex-1 text-center md:text-right space-y-6">
          {/* خوش‌آمدگویی */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mx-auto md:mx-0">
            <span>👋</span>
            <span>سلام، خوش آمدید</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            من <span className="text-primary">یاسمن عابدی</span> هستم
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-slate-300">
            Frontend Developer | React & Next.js
          </h2>

          <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
            توسعه‌دهنده فرانت‌اند با تمرکز بر ساخت وب‌اپلیکیشن‌های سریع، مدرن و
            با تجربه کاربری روان.
          </p>

          {/* دکمه‌های اقدام (CTA) */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              className="cursor-pointer px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40"
            >
              ارتباط با من
            </Link>

            <a
              href="#about"
              className="px-6 py-3 rounded-xl border border-slate-700 text-slate-200 font-medium hover:bg-slate-800 hover:text-white transition-all duration-300"
            >
              مشاهده رزومه
            </a>

            {/* شبکه‌های اجتماعی با لینک‌های صحیح */}
            <div className="flex items-center gap-3">
              {/* گیت‌هاب */}
              <a
                href="https://github.com/Yasaman471"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-xl bg-slate-800/80 text-slate-300 hover:text-primary hover:bg-slate-800 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>

              {/* لینکدین (یوزرنیم خودت را جایگزین کن) */}
              <a
                href="https://linkedin.com/in/yasaman-abedi"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-xl bg-slate-800/80 text-slate-300 hover:text-primary hover:bg-slate-800 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              {/* تلگرام */}
              <a
                href="https://t.me/Yasaman471"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="p-3 rounded-xl bg-slate-800/80 text-slate-300 hover:text-primary hover:bg-slate-800 transition-all duration-300"
              >
                <FaTelegram size={20} />
              </a>

              {/* ایمیل */}
              <a
                href="mailto:yasaman471@gmail.com"
                aria-label="Email"
                className="p-3 rounded-xl bg-slate-800/80 text-slate-300 hover:text-primary hover:bg-slate-800 transition-all duration-300"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* بخش تصویر پروفایل */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            {/* افکت نئونی */}
            <div className="absolute -inset-1 rounded-full bg-linear-to-r from-primary to-purple-600 opacity-60 blur-2xl animate-pulse"></div>

            {/* کادر تصویر */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-linear-to-b from-primary/50 to-slate-800">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-primary/40 flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="یاسمن عابدی"
                  className="w-full h-full object-cover"
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
