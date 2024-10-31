import { InputSearch } from "../../_global/components/Input";
import { FaJoget } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { ButtonSmall } from "../../_global/components/Button";
import { DescSmall, TitleAbout } from "../../_global/components/Text";
import { dataPsikolog } from "../libs/data";
import { formatIDR } from "../../../lib/format";

const ListPsikolog = () => {
  return (
    <>
      <InputSearch placeholder="Cari Psikolog" />
      <div className="h-[679px] overflow-hidden overflow-y-auto flex flex-col gap-y-[30px]">
        {dataPsikolog.map((item, index) => (
          <div key={index} className="flex items-start gap-x-5">
            <div className="min-w-[169px] max-w-[169px] h-[200px] rounded-3xl overflow-hidden bg-white shadow-md border">
              <img src={item.img} alt="" />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-y-[6px]">
                <TitleAbout>{item.name}</TitleAbout>
                <p>{item.job}</p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-3 py-1 px-3 bg-primary rounded">
                    <FaJoget className="w-5 h-5 text-white" />
                    <DescSmall>{item.experience} Tahun</DescSmall>
                  </div>
                  <div className="flex items-center gap-3 py-1 px-3 bg-primary rounded">
                    <BiLike className="w-5 h-5 text-white" />
                    <DescSmall>{item.like}%</DescSmall>
                  </div>
                </div>
              </div>
              <TitleAbout>{formatIDR(item.cost)}</TitleAbout>
              <div className="flex items-center gap-x-7">
                <ButtonSmall className="border border-black">
                  Reservasi
                </ButtonSmall>
                <ButtonSmall className="bg-red text-white">Chat</ButtonSmall>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListPsikolog;
