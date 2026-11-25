function Projects() {
  const projectList = [
    {
      id: 1,
      title: "پلتفرم آگهی آنلاین (مشابه دیوار)",
      description:
        "سامانه ثبت و مرور آگهی آنلاین با قابلیت احراز هویت با شماره موبایل (OTP)، مدیریت توکن و کوکی، پنل کاربری و ثبت آگهی با تصویر.",
      image: "/projects/divar.png",
      tags: ["React", "React Query", "Tailwind CSS", "REST API"],
    },
    {
      id: 2,
      title: "اپلیکیشن سفارش آنلاین غذا (Foodly)",
      description:
        "پلتفرم سفارش و تحویل غذا با منوی دسته‌بندی‌شده، نمایش اطلاعات رستوران‌ها و رابط کاربری جذاب و ریسپانسیو.",
      image: "/projects/foodly.png",
      tags: ["React", "JavaScript"],
    },
    {
      id: 3,
      title: "سامانه محاسبه خواب (کی بخوابم؟)",
      description:
        "وب‌اپلیکیشن کاربردی برای محاسبه زمان مناسب خواب و بیداری بر اساس چرخه‌های خواب انسان با طراحی تاریک و چشم‌نواز.",
      image: "/projects/keyBekhabam.png",
      tags: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      id: 4,
      title: "فروشگاه آنلاین خودرو (Car Store)",
      description:
        "پلتفرم تخصصی بررسی، فیلتر و مقایسه آنلاین خودروها با پیاده‌سازی رندرینگ بهینه و معماری تایپ‌سیف.",
      image: "/projects/car-store.png",
      tags: ["Next.js", "TypeScript"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-slate-900/50 px-6 py-20 text-white md:px-12"
    >
      {/* هاله‌های ملایم پس‌زمینه */}
      <div className="pointer-events-none absolute -right-32 top-20 z-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 z-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-12">
        {/* عنوان بخش */}
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            نمونه <span className="text-primary">کارها</span>
          </h2>

          <p className="mx-auto max-w-lg text-sm leading-7 text-slate-400 md:text-base">
            منتخبی از پروژه‌هایی که با تمرکز بر کدنویسی تمیز و تجربه کاربری مدرن
            پیاده‌سازی کرده‌ام
          </p>

          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
        </div>

        {/* کارت‌های پروژه */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projectList.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-slate-800/70"
            >
              {/* تصویر */}
              <div className="relative h-56 overflow-hidden bg-slate-800 sm:h-64">
                <img
                  src={project.image}
                  alt={`تصویر پروژه ${project.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent opacity-70" />
              </div>

              {/* توضیحات */}
              <div className="space-y-4 p-5 md:p-6">
                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-primary md:text-xl">
                  {project.title}
                </h3>

                <p className="text-justify text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* فناوری‌های استفاده‌شده */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-slate-200 transition-colors group-hover:border-primary/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
