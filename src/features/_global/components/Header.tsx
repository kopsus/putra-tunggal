import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import { PiChatCircleText } from "react-icons/pi";

const Header = () => {
  const ItemHeader = [
    {
      name: "Beranda",
      link: "/",
    },
    {
      name: "Artikel",
      link: "/article",
    },
    {
      name: "Layanan",
      link: "/layanan",
    },
    {
      name: "Tentang Kami",
      link: "/tentang-kami",
    },
  ];

  return (
    <div className="flex items-center justify-between py-6 px-5 md:px-10 lg:px-16 bg-primary text-white">
      <div className="flex items-center gap-1">
        <img src={Logo} alt="logo" className="w-12 h-12" />
        <p className="text-2xl font-medium leading-[37.5px]">Putra Tunggal</p>
      </div>
      <div className="flex items-center gap-6">
        {ItemHeader.map((item, index) => (
          <NavLink
            to={item.link}
            key={index}
            className={({ isActive }) =>
              isActive ? "font-semibold text-white" : "text-slate-300"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <PiChatCircleText className="w-10 h-10" />
        <button className="bg-red rounded-[10px] py-[5px] px-5">Login</button>
      </div>
    </div>
  );
};

export default Header;
