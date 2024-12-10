"use client";

import Image from "next/image";
import React from "react";

// assets
import { GoDotFill } from "react-icons/go";
import { IoMdSend } from "react-icons/io";
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
import { ArrowLeft } from "lucide-react";

const Chat = () => {
  const isPayment = false;
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenChat, setIsOpenChat] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true); // Open the dialog after 10 seconds
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-x-5 lg:divide-x-4 divide-black/20">
      <div
        onClick={() => setIsOpenChat(true)}
        className={`${
          isOpenChat ? "hidden lg:flex" : "flex"
        } cursor-pointer relative md:min-w-[497px] w-full h-screen pt-10 md:pt-20 lg:pt-24 flex-col gap-5`}
      >
        <HistoryChat />
      </div>
      <div
        className={`relative w-full h-screen lg:pl-5 pt-20 lg:pt-24 ${
          isOpenChat ? "flex" : "hidden"
        } flex-col gap-5`}
      >
        <div className="flex items-center gap-x-4 border-b-2 border-black/20 w-full pb-5">
          <div className="flex items-center gap-2">
            <ArrowLeft
              className="lg:hidden"
              onClick={() => setIsOpenChat(false)}
            />
            <div className="w-14 h-14 lg:min-w-20 lg:w-20 lg:h-20 rounded-full overflow-hidden border shadow">
              <Image src={person} alt="" width={0} height={0} sizes="100vw" />
            </div>
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
          <div className="min-w-[30%] max-w-[85%] border border-black/20 p-2 rounded-[20px] text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </div>
          <div className="flex justify-end">
            <p className="min-w-[30%] max-w-[85%] border border-black/20 p-2 rounded-[20px] text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
          </div>
          <div className="min-w-[30%] max-w-[85%] border border-black/20 p-2 rounded-[20px] text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </div>
          <div className="flex justify-end">
            <p className="min-w-[30%] max-w-[85%] border border-black/20 p-2 rounded-[20px] text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
          </div>
          <div className="flex justify-end">
            <p className="min-w-[30%] max-w-[85%] border border-black/20 p-2 rounded-[20px] text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
          </div>
        </div>
        <div className="fixed left-0 lg:left-5 lg:absolute w-full bottom-0 border bg-white flex items-center justify-between py-2 px-5">
          <input
            type="text"
            placeholder="Type something..."
            className="w-full h-full outline-none text-xs"
          />
          <div className="flex items-center gap-x-2 text-black h-5">
            <div className="w-5 h-5 rounded-full flex justify-center items-center">
              {isPayment ? (
                <IoMdSend className="h-full w-full" />
              ) : (
                <Dialog>
                  <DialogTrigger>
                    <IoMdSend className="h-full w-full" />
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
