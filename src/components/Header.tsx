"use client";

import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";
import { PiChatCircleText } from "react-icons/pi";
import { ButtonSmall } from "./Button";
import { usePathname } from "next/navigation";
import { Fade as Hamburger } from "hamburger-react";

export const Header = () => {
  const login = false;
  const [isOpen, setOpen] = React.useState(false);

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
      link: "/service",
    },
    {
      name: "Tentang Kami",
      link: "/about",
    },
  ];

  const pathname = usePathname();
  const isActiveLink = (href: string) => pathname === href;

  return (
    <div className="flex items-center justify-between h-20 bg-primary text-white fixed w-full z-50 px-7 md:px-20">
      <div className="lg:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="">
        <Logo />
      </div>
      <div
        className={`flex flex-col lg:flex-row lg:items-center lg:justify-center gap-5 md:gap-10 lg:gap-16 lg:static w-full lg:w-auto absolute left-0 bg-primary rounded-b-3xl lg:bg-none p-5 md:px-20 md:py-10 lg:p-0 transition-all ${
          isOpen ? "top-full" : "-top-[900px]"
        }`}
      >
        {ItemHeader.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={`${
              isActiveLink(item.link) ? "font-bold" : "font-light"
            }`}
          >
            {item.name}
          </Link>
        ))}
        <p className="md:hidden text-center text-base mt-5">
          Menuju hidup yang lebih sehat dan seimbang
        </p>
        <Link href="login" className="w-full flex justify-center md:hidden">
          <ButtonSmall className="bg-red">Login</ButtonSmall>
        </Link>
      </div>
      <div className=" md:flex items-center gap-5 hidden">
        <Link href={"consultation"}>
          <PiChatCircleText size={32} />
        </Link>
        {login ? (
          <div className="h-7 w-7 rounded-full bg-white"></div>
        ) : (
          <Link href="login">
            <ButtonSmall className="bg-red">Login</ButtonSmall>
          </Link>
        )}
      </div>
    </div>
  );
};
