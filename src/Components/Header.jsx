import { useState } from "react";
import { Link } from "react-scroll";
import { HiBars3, HiXMark } from "react-icons/hi2";

const NAV_LINKS = [
  { name: "خانه", link: "home" },
  { name: "درباره من", link: "about" },
  { name: "پروژه ها", link: "projects" },
  { name: "تماس", link: "contact" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 mx-auto w-full max-w-7xl">
      <div className="flex flex-row-reverse items-center justify-between px-7 py-4 md:px-10">
        {/* دکمه منوی موبایل */}
        <button
          type="button"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="cursor-pointer text-white md:hidden"
        >
          {open ? <HiXMark size={28} /> : <HiBars3 size={28} />}
        </button>

        <a
          href="#home"
          className="text-2xl font-bold text-primary transition-colors hover:text-white"
        >
          یاسمن عابدی
        </a>

        {/* ناوبری اصلی */}
        <nav aria-label="ناوبری اصلی">
          <ul
            className={`absolute left-0 top-full w-full bg-slate-900/95 px-7 py-4 backdrop-blur-md transition-all duration-300 md:static md:flex md:w-auto md:items-center md:gap-8 md:bg-transparent md:p-0 ${
              open
                ? "visible opacity-100"
                : "invisible opacity-0 md:visible md:opacity-100"
            }`}
          >
            {NAV_LINKS.map((item) => (
              <li key={item.link} className="py-3 md:py-0">
                <Link
                  to={item.link}
                  smooth={true}
                  spy={true}
                  offset={-70}
                  activeClass="!text-primary font-bold"
                  onClick={() => setOpen(false)}
                  className="cursor-pointer text-white transition-colors duration-300 hover:text-primary"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
