import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Yasaman471",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yasaman-abedi",
    icon: <FaLinkedin />,
  },
  {
    name: "Telegram",
    href: "https://t.me/Yasaman471",
    icon: <FaTelegram />,
  },
  {
    name: "Email",
    href: "mailto:yasaman471@gmail.com",
    icon: <FaEnvelope />,
  },
];

function SocialLinks({ className = "" }) {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          aria-label={item.name}
          title={item.name}
          target={item.name === "Email" ? undefined : "_blank"}
          rel={item.name === "Email" ? undefined : "noreferrer"}
          className={`${className}`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
