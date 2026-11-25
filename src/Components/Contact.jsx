import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaTelegramPlane,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    text: "",
    isError: false,
  });

  const contactInfo = [
    {
      id: 1,
      title: "ایمیل مستقیم",
      value: "yasaman471@gmail.com",
      link: "mailto:yasaman471@gmail.com",
      icon: <HiOutlineMail className="text-2xl text-primary" />,
    },
    {
      id: 2,
      title: "موقعیت",
      value: "ایران - گیلان",
      icon: <HiOutlineLocationMarker className="text-2xl text-primary" />,
    },
  ];

  const socialLinks = [
    {
      name: "Telegram",
      link: "https://t.me/Yasaman471",
      icon: <FaTelegramPlane className="text-xl" />,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/yasaman-abedi",
      icon: <FaLinkedinIn className="text-xl" />,
    },
    {
      name: "GitHub",
      link: "https://github.com/Yasaman471",
      icon: <FaGithub className="text-xl" />,
    },
    {
      name: "Email",
      link: "mailto:yasaman471@gmail.com",
      icon: <FaEnvelope className="text-xl" />,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ text: "", isError: false });

    const form = e.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      await emailjs.send(
        "service_37pubpr",
        "template_wfxnn2y",
        templateParams,
        {
          publicKey: "mwtF3yTjRvsbyh1RF",
        },
      );

      setStatusMessage({
        text: "پیام شما با موفقیت ارسال شد! به زودی پاسخ می‌دهم.",
        isError: false,
      });
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMessage({
        text: "متاسفانه مشکلی در ارسال رخ داد. لطفاً دوباره تلاش کنید.",
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-slate-900/50 px-6 py-20 text-white md:px-12"
    >
      {/* هاله‌های نرم پس‌زمینه */}
      <div className="pointer-events-none absolute -left-28 top-20 z-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 z-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-12">
        {/* عنوان بخش */}
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            ارتباط <span className="text-primary">با من</span>
          </h2>
          <p className="mx-auto max-w-lg text-sm leading-7 text-slate-400 md:text-base">
            برای همکاری در پروژه‌های جدید، موقعیت‌های شغلی یا گفت‌وگو خوشحال
            می‌شم با من در تماس باشی
          </p>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
        </div>

        {/* دو ستون: اطلاعات ارتباطی + فرم پیام */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* ستون راست: اطلاعات و شبکه‌ها */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white">راه‌های گفت‌وگو</h3>
              <p className="text-sm leading-7 text-slate-300 text-justify">
                همیشه آماده گفتگو در زمینه فرصت‌های شغلی فرانت‌اند، ساخت محصولات
                وب یا تبادل ایده در حوزه React و Next.js هستم.
              </p>

              {/* کارت‌های اطلاعات تماس */}
              <div className="space-y-4 pt-2">
                {contactInfo.map((info) => (
                  <div
                    key={info.id}
                    className="flex items-center gap-4 rounded-xl border border-slate-700/40 bg-slate-800/60 p-4 transition-colors hover:border-primary/40"
                  >
                    <div className="rounded-lg bg-slate-900/60 p-3">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm font-medium text-slate-200 transition-colors hover:text-primary dir-ltr"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-slate-200">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* دکمه‌های سوشال مدیا */}
              <div className="pt-4 border-t border-slate-700/50">
                <p className="text-xs text-slate-400 mb-3">شبکه‌های اجتماعی:</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.name}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/70 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/20 hover:text-white"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ستون چپ: فرم پیام */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 md:p-8 space-y-5"
            >
              <h3 className="text-xl font-bold text-white mb-2">ارسال پیام</h3>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* فیلد نام */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    نام و نام خانوادگی
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="نام و نام خانوادگی"
                    className="w-full rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* فیلد ایمیل */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">
                    ایمیل شما
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    dir="ltr"
                    placeholder="name@example.com"
                    className="w-full rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              {/* فیلد موضوع */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  موضوع پیام
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="پیشنهاد پروژه / همکاری"
                  className="w-full rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* متن پیام */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  متن پیام
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="توضیحات پیام یا پروژه شما..."
                  className="w-full resize-none rounded-xl border border-slate-700/60 bg-slate-900/60 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              {/* نمایش پیام وضعیت ارسال (موفقیت یا خطا) */}
              {statusMessage.text && (
                <div
                  className={`rounded-xl p-3 text-sm text-center ${
                    statusMessage.isError
                      ? "bg-red-500/10 text-red-400 border border-red-500/20"
                      : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              {/* دکمه ارسال */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/40 active:scale-[0.99] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "در حال ارسال پیام..." : "ارسال پیام"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
