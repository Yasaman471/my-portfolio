import { useState } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    text: "",
    isError: false,
  });
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
    <div className="lg:col-span-3">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-700/50 bg-card p-6 md:p-8 space-y-5"
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
              className="w-full rounded-xl border border-slate-700/60 bg-bg-base px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
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
              className="w-full rounded-xl border border-slate-700/60 bg-bg-base px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
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
            className="w-full rounded-xl border border-slate-700/60 bg-bg-base px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* متن پیام */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">متن پیام</label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="توضیحات پیام یا پروژه شما..."
            className="w-full resize-none rounded-xl border border-slate-700/60 bg-bg-base px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
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
  );
}

export default Form;
