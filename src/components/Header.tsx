"use client";

import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";
import { PiChatCircleText } from "react-icons/pi";
import { ButtonSmall } from "./Button";
import { usePathname } from "next/navigation";

export const Header = () => {
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
    <div className="grid grid-cols-4 items-center h-20 bg-primary text-white fixed w-full z-50">
      <div className="col-span-1 mx-auto">
        <Logo />
      </div>
      <div className="col-span-2 flex items-center justify-around">
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
      </div>
      <div className="col-span-1 mx-auto flex items-center gap-5">
        <PiChatCircleText size={32} />
        <ButtonSmall className="bg-red">Login</ButtonSmall>
      </div>
    </div>
  );
};
