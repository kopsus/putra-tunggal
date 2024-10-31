import { GoDotFill, GoPlusCircle } from "react-icons/go";
import { InputSearch } from "../../_global/components/Input";
import {
  DescSmall,
  TitleAbout,
  TitleContent,
} from "../../_global/components/Text";
import { SlEmotsmile } from "react-icons/sl";
import { IoIosSend } from "react-icons/io";

const Chat = () => {
  return (
    <div className="Container">
      <div className="flex items-start gap-x-10 divide-x-4 divide-black/20">
        <div className="min-w-[497px] max-w-[497px] flex flex-col gap-5">
          <TitleContent>Chat</TitleContent>
          <InputSearch placeholder="Cari percakapan konsultasi" />
          <div className="flex items-start gap-4">
            <div className="bg-white border min-w-20 w-20 h-20 overflow-hidden shadow-md rounded-full">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <TitleAbout>Dr. John Cena</TitleAbout>
              <p className="line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip
              </p>
            </div>
          </div>
        </div>
        <div className="pl-10 w-full relative h-[662px]">
          <div className="flex items-center gap-x-4 border-b-2 border-black/50 w-full pb-5">
            <div className="min-w-20 w-20 h-20 rounded-full overflow-hidden border shadow">
              <img src="" alt="" />
            </div>
            <div className="">
              <TitleAbout>Dr. John Cena</TitleAbout>
              <div className="flex items-center">
                <GoDotFill className="w-8 h-8 text-[#3EA057]" />
                <DescSmall className="text-black">Online</DescSmall>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 mt-5">
            <div className="min-w-[30%] max-w-[85%] border border-black/80 p-2 rounded-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </div>
            <div className="flex justify-end">
              <p className="min-w-[30%] max-w-[85%] border border-black/80 p-2 rounded-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-10 w-full h-12 border bg-white flex items-center justify-between px-5">
            <input
              type="text"
              placeholder="Type something..."
              className="w-full h-full outline-none"
            />
            <div className="flex items-center gap-x-2 text-black h-5">
              <div className="w-5 h-5 rounded-full flex justify-center items-center">
                <GoPlusCircle className="h-full w-full" />
              </div>
              <div className="w-5 h-5 rounded-full flex justify-center items-center">
                <SlEmotsmile className="h-full w-full" />
              </div>
              <div className="w-5 h-5 rounded-full flex justify-center items-center">
                <IoIosSend className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
