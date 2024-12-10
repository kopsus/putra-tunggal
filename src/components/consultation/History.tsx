import Image from "next/image";
import { InputSearch } from "@/components/Input";
import { dataHistoryChat } from "@/lib/data";
import { GoDotFill } from "react-icons/go";
import React from "react";

const HistoryChat = () => {
  return (
    <>
      <div className="flex flex-col gap-y-5 bg-white">
        <p className="titleContent">Chat</p>
        <InputSearch placeholder="Cari percakapan konsultasi" />
      </div>

      {/* online */}
      <div className="flex flex-col gap-5 border-b-2 border-black/30 pb-5">
        <div className="flex items-center gap-2">
          <GoDotFill className="w-5 h-5 text-[#3EA057]" />
          <p className="text-black font-semibold">Online</p>
        </div>
        {dataHistoryChat.slice(0, 1).map((item, index) => (
          <div key={index} className="flex items-start gap-2 md:gap-5">
            <div className="bg-white border min-w-16 w-16 h-16 md:min-w-20 md:w-20 md:h-20 overflow-hidden shadow-md rounded-full">
              <Image src={item.img} alt="" width={0} height={0} sizes="100vw" />
            </div>
            <div className="flex flex-col gap-1 md:gap-2">
              <p className="font-semibold">{item.name}</p>
              <p className="line-clamp-2 md:line-clamp-3 text-xs">
                {item.chat}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* end online */}

      {/* expired */}
      <div className="flex flex-col gap-5 overflow-hidden overflow-y-scroll h-full">
        <p className="text-black/50 bg-white font-semibold sticky top-0">
          Expired
        </p>
        {dataHistoryChat.slice(0, 5).map((item, index) => (
          <div key={index} className="flex items-start gap-2 md:gap-5">
            <div className="bg-white border min-w-16 w-16 h-16 md:min-w-20 md:w-20 md:h-20 overflow-hidden shadow-md rounded-full">
              <Image src={item.img} alt="" width={0} height={0} sizes="100vw" />
            </div>
            <div className="flex flex-col  gap-1 md:gap-2 text-black/60">
              <p className="font-semibold">{item.name}</p>
              <p className="line-clamp-2 md:line-clamp-3 text-xs">
                {item.chat}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* end expired */}
    </>
  );
};

export default HistoryChat;
