"use client";

import Image from "next/image";
import React, { useEffect } from "react";

// components
import HistoryChat from "./History";
import {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogContent,
} from "@/components/ui/dialog";
import Rating from "./modal/Rating";
import ChatBox from "../chatbox/chatbox";
import { RoomType } from "@/interface/room.interface";

const Chat = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  // const [isOpenChat, setIsOpenChat] = React.useState(false);
  const [selectedRoom, setSelectedRoom] = React.useState<RoomType | null>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true); // Open the dialog after 10 seconds
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-x-5 lg:divide-x-4 divide-black/20">
      <div
        className={`${
          selectedRoom ? "hidden lg:flex" : "flex"
        }  relative md:min-w-[497px] w-full h-screen pt-10 md:pt-20 lg:pt-24 flex-col gap-5`}
      >
        <HistoryChat  setSelectedRoom={setSelectedRoom} />
      </div>
      {
        selectedRoom && (
          <div className="pt-20">
          <ChatBox h="h-[calc(100vh-100px)]" room={selectedRoom} role="Dokter"/>
          </div>
        )
      }
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger></DialogTrigger>
        <DialogContent className="p-6 w-96">
          <DialogTitle></DialogTitle>
          <Rating />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Chat;
