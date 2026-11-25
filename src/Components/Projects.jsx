import { projectList } from "../constants/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-section px-6 py-20 text-white md:px-12"
    >
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
              className="group overflow-hidden rounded-2xl border border-slate-700/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              {/* تصویر */}
              <div className="relative h-56 overflow-hidden bg-card sm:h-64">
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
