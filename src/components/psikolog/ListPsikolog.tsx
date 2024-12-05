import Image from "next/image";
import { formatIDR } from "@/lib/format";

// data
import { dataPsikolog } from "@/lib/data";

// components
import { InputSearch } from "@/components/Input";
import { ButtonSmall } from "@/components/Button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// icon
import { FaJoget } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import ProfilePsikolog from "./ProfilePsikolog";

const ListPsikolog = () => {
  return (
    <div className="flex flex-col gap-6">
      <InputSearch placeholder="Cari Psikolog" />
      <div className="h-[679px] overflow-hidden overflow-y-auto flex flex-col gap-y-[30px]">
        {dataPsikolog.map((item, index) => (
          <div key={index} className="flex items-start gap-x-5">
            <div className="min-w-[169px] max-w-[169px] h-[200px] rounded-3xl overflow-hidden shadow-md border">
              <Image src={item.img} alt="" width={0} height={0} sizes="100vw" />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-y-[6px]">
                <p className="font-semibold">{item.name}</p>
                <p>{item.job}</p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-3 py-1 px-2 bg-primary rounded">
                    <FaJoget className="w-5 h-5 text-white" />
                    <p className="text-white text-sm">
                      {item.experience} Tahun
                    </p>
                  </div>
                  <div className="flex items-center gap-3 py-1 px-2 bg-primary rounded">
                    <BiLike className="w-5 h-5 text-white" />
                    <p className="text-white text-sm">{item.like}%</p>
                  </div>
                </div>
              </div>
              <p className="font-semibold text-lg">{formatIDR(item.cost)}</p>
              <div className="flex items-center gap-4">
                <Dialog>
                  <DialogTrigger className="text-xs rounded-full font-bold shadow py-2 px-8 border border-black">
                    Lihat Profil
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle></DialogTitle>
                    <ProfilePsikolog />
                    <ButtonSmall className="bg-red text-white">
                      Chat
                    </ButtonSmall>
                  </DialogContent>
                </Dialog>
                <ButtonSmall className="bg-red text-white">Chat</ButtonSmall>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPsikolog;
