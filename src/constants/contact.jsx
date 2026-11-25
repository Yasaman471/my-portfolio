import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
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

export { contactInfo };
