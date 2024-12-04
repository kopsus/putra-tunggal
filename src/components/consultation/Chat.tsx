"use client";

import Image from "next/image";
import React from "react";

// assets
import { GoDotFill, GoPlusCircle } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { SlEmotsmile } from "react-icons/sl";
import person from "@/assets/psikolog.jpg";

// components
import HistoryChat from "./History";
import {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogContent,
} from "@/components/ui/dialog";
import ContinuePayment from "./modal/ContinuePayment";
import Rating from "./modal/Rating";

const Chat = () => {
  const isPayment = false;
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true); // Open the dialog after 10 seconds
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <div className="grid grid-cols-2 gap-x-5 divide-x-4 divide-black/20">
      <HistoryChat />
      <div className="relative w-full h-screen pl-5 pt-10 md:pt-16 lg:pt-24 flex flex-col gap-5">
        <div className="flex items-center gap-x-4 border-b-2 border-black/50 w-full pb-5">
          <div className="min-w-20 w-20 h-20 rounded-full overflow-hidden border shadow">
            <Image src={person} alt="" width={0} height={0} sizes="100vw" />
          </div>
          <div className="">
            <p className="font-semibold">Dr. John Cena</p>
            <div className="flex items-center">
              <GoDotFill className="w-5 h-5 text-[#3EA057]" />
              <p className="text-black text-xs">Online</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 overflow-hidden overflow-y-scroll h-full pb-10">
          <div className="min-w-[30%] max-w-[85%] border border-black/80 p-2 rounded-[20px] text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </div>
          <div className="flex justify-end">
            <p className="min-w-[30%] max-w-[85%] border border-black/80 p-2 rounded-[20px] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
          </div>
          <div className="min-w-[30%] max-w-[85%] border border-black/80 p-2 rounded-[20px] text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </div>
          <div className="flex justify-end">
            <p className="min-w-[30%] max-w-[85%] border border-black/80 p-2 rounded-[20px] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
          </div>
          <div className="flex justify-end">
            <p className="min-w-[30%] max-w-[85%] border border-black/80 p-2 rounded-[20px] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
          </div>
        </div>
        <div className="absolute w-full bottom-0 border bg-white flex items-center justify-between py-2 px-5">
          <input
            type="text"
            placeholder="Type something..."
            className="w-full h-full outline-none text-sm"
          />
          <div className="flex items-center gap-x-2 text-black h-5">
            <div className="w-5 h-5 rounded-full flex justify-center items-center">
              <GoPlusCircle className="h-full w-full" />
            </div>
            <div className="w-5 h-5 rounded-full flex justify-center items-center">
              <SlEmotsmile className="h-full w-full" />
            </div>
            <div className="w-5 h-5 rounded-full flex justify-center items-center">
              {isPayment ? (
                <IoIosSend className="h-full w-full" />
              ) : (
                <Dialog>
                  <DialogTrigger>
                    <IoIosSend className="h-full w-full" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle></DialogTitle>
                    <ContinuePayment />
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </div>
      </div>
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
