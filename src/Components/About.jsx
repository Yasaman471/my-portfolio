import { FaReact, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

function About() {
  const skills = [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-slate-900/50">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* عنوان بخش */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            درباره <span className="text-primary">من</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            آشنایی بیشتر با من، علایق و مهارت‌های فنی‌ام
          </p>
        </div>

        {/* متن معرفی */}
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 md:p-8 leading-8 text-slate-300 text-justify">
          <p>
            سلام مجدد! من{" "}
            <span className="text-white font-semibold">یاسمن عابدی</span> هستم؛
            مسیر برنامه‌نویسی برای من با علاقه به خلق رابط‌های کاربری جذاب،
            واکنش‌گرا (Responsive) و تمیز شروع شد. تمرکز اصلی من روی اکوسیستم
            مدرن فرانت‌اند یعنی React و Next.js است و تلاش می‌کنم کدهایی خوانا،
            بهینه و منطبق بر استانداردهای روز بنویسم. همیشه در حال یادگیری
            تکنولوژی‌های جدید و چالش‌های تازه هستم.
          </p>
        </div>

        {/* جعبه مهارت‌ها (Skills) */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-white text-center md:text-right">
            مهارت‌ها و ابزارهایی که با آن‌ها کار می‌کنم:
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-800/60 border border-slate-700/40 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-3xl mb-2">{skill.icon}</span>
                <span className="text-sm font-medium text-slate-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
