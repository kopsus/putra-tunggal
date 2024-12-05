"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import iconIMG from "@/assets/chat_icon.png";

const ButtonChatTrigger = () => {
  return (
    <Link
      href={"/service"}
      className="fixed bottom-10 right-0 lg:right-10 z-50 h-28"
    >
      <Image src={iconIMG} alt="" width={0} height={0} sizes="100vw" />
    </Link>
  );
};

export default ButtonChatTrigger;
