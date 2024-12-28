"use client";

import React from "react";
import Card from "./Card";
import { CiGrid42 } from "react-icons/ci";
import { PiChatCircleText } from "react-icons/pi";
import {
  MdArticle,
  MdFeedback,
  MdMedicalServices,
  MdOutlineHistoryToggleOff,
} from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Users } from "lucide-react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    menuItems: [
      {
        icon: <CiGrid42 size={24} />,
        label: "Dashboard",
        route: "/dashboard",
      },
      {
        icon: <PiChatCircleText size={24} />,
        label: "Konsultasi",
        route: "/konsultasi",
      },
      {
        icon: <MdMedicalServices size={24} />,
        label: "Layanan",
        route: "/layanan",
      },
      {
        icon: <MdArticle size={24} />,
        label: "Artikel",
        route: "/artikel",
      },
      {
        icon: <MdFeedback size={24} />,
        label: "Testimoni",
        route: "/testimoni",
      },
      {
        icon: <MdOutlineHistoryToggleOff size={24} />,
        label: "Riwayat",
        route: "/riwayat",
      },
      {
        icon: <Users size={24} />,
        label: "Pengguna",
        route: "/pengguna",
      },
    ],
  },
];

const Sidebar = ({}: SidebarProps) => {
  const pathname = usePathname();
  const isActiveLink = (href: string) => pathname === href;

  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-1/5 py-5">
      <Card className="flex-col overflow-y-hidden w-full h-full rounded-r-3xl px-5 py-10">
        <div className="mx-auto flex justify-center border-b-2 pb-2 border-primary mb-10">
          Logo
        </div>
        {menuGroups.map((group, groupIndex) => (
          <ul key={groupIndex} className="mb-6 flex flex-col gap-2">
            {group.menuItems.map((menuItem, menuIndex) => (
              <li key={menuIndex} className="rounded-full overflow-hidden">
                <Link
                  href={menuItem.route}
                  className={`${
                    isActiveLink(menuItem.route) ? "bg-primary text-white" : ""
                  } group relative flex items-center gap-2.5 rounded-sm p-4 font-medium`}
                >
                  {menuItem.icon}
                  {menuItem.label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </Card>
    </div>
  );
};

export default Sidebar;
