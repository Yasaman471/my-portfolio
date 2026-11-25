import Information from "./module/Information";
import Form from "./module/Form";

function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-section px-6 py-20 text-white md:px-12"
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

        {/* اطلاعات ارتباطی + فرم پیام */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Information />
          </div>

          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;
