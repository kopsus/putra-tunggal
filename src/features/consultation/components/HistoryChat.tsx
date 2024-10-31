import { InputSearch } from "../../_global/components/Input";
import { TitleAbout, TitleContent } from "../../_global/components/Text";
import { historyChat } from "../libs/data";

const HistoryChat = () => {
  return (
    <>
      <div className="flex flex-col gap-y-5 sticky top-0 bg-white">
        <TitleContent>Chat</TitleContent>
        <InputSearch placeholder="Cari percakapan konsultasi" />
      </div>
      {historyChat.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="bg-white border min-w-20 w-20 h-20 overflow-hidden shadow-md rounded-full">
            <img src={item.img} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <TitleAbout>{item.name}</TitleAbout>
            <p className="line-clamp-3">{item.chat}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default HistoryChat;
