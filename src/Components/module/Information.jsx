import { contactInfo } from "../../constants/contact";

import SocialLinks from "./SocialLink";

function Information() {
  return (
    <div className="rounded-2xl border border-slate-700/50 bg-card p-6 md:p-8 space-y-6">
      <h3 className="text-xl font-bold text-white">راه‌های گفت‌وگو</h3>
      <p className="text-sm leading-7 text-slate-300 text-justify">
        همیشه آماده گفتگو در زمینه فرصت‌های شغلی فرانت‌اند، ساخت محصولات وب یا
        تبادل ایده در حوزه React و Next.js هستم.
      </p>

      {/* کارت‌های اطلاعات تماس */}
      <div className="space-y-4 pt-2">
        {contactInfo.map((info) => (
          <div
            key={info.id}
            className="flex items-center gap-4 rounded-xl border border-slate-700/40 bg-card p-4 transition-colors hover:border-primary/40"
          >
            <div className="rounded-lg bg-bg-base p-3">{info.icon}</div>
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
      <div className="border-t border-slate-700/50 pt-4">
        <p className="mb-3 text-xs text-slate-400">شبکه‌های اجتماعی:</p>

        <SocialLinks className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/50 bg-card text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/20 hover:text-white" />
      </div>
    </div>
  );
}

export default Information;
