import Image from "next/image";
import { InputSearch } from "@/components/Input";
import { dataHistoryChat } from "@/lib/data";
import { GoDotFill } from "react-icons/go";

const HistoryChat = () => {
  return (
    <>
      <div className="flex flex-col gap-y-5 sticky top-0 bg-white">
        <p className="titleContent">Chat</p>
        <InputSearch placeholder="Cari percakapan konsultasi" />
      </div>

      {/* online */}
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-2">
          <GoDotFill className="w-5 h-5 text-[#3EA057]" />
          <p className="text-black font-semibold">Online</p>
        </div>
        {dataHistoryChat.slice(0, 2).map((item, index) => (
          <div key={index} className="flex items-start gap-5">
            <div className="bg-white border min-w-20 w-20 h-20 overflow-hidden shadow-md rounded-full">
              <Image src={item.img} alt="" width={0} height={0} sizes="100vw" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">{item.name}</p>
              <p className="line-clamp-3 text-sm">{item.chat}</p>
            </div>
          </div>
        ))}
      </div>
      {/* end online */}

      {/* expired */}
      <div className="flex flex-col gap-10">
        <p className="text-black/50 font-semibold">Expired</p>
        {dataHistoryChat.map((item, index) => (
          <div key={index} className="flex items-start gap-5">
            <div className="bg-white border min-w-20 w-20 h-20 overflow-hidden shadow-md rounded-full">
              <Image src={item.img} alt="" width={0} height={0} sizes="100vw" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">{item.name}</p>
              <p className="line-clamp-3 text-sm">{item.chat}</p>
            </div>
          </div>
        ))}
      </div>
      {/* end expired */}
    </>
  );
};

export default HistoryChat;
