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
import Link from "next/link";

const ListPsikolog = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <InputSearch placeholder="Cari Psikolog" />
      <div className="max-h-[679px] pb-2 lg:pb-0 overflow-hidden overflow-y-auto grid gap-5 md:grid-cols-2 lg:grid-cols-1">
        {dataPsikolog.map((item, index) => (
          <div
            key={index}
            className="border lg:border-none bg-white shadow lg:shadow-none rounded-xl lg:rounded-3xl overflow-hidden p-2 lg:p-0 lg:h-48"
          >
            <div className="flex items-start gap-2 lg:gap-x-5 h-32 md:h-36 lg:h-full">
              <div className="max-w-32 lg:min-w-[169px] lg:max-w-[169px] h-full overflow-hidden rounded-xl lg:rounded-3xl shadow-md border">
                <Image
                  src={item.img}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
              <div className="flex flex-col gap-3 lg:gap-0 lg:justify-between h-full">
                <div className="flex flex-col gap-y-[6px]">
                  <p className="font-semibold">{item.name}</p>
                  <p>{item.job}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-3 py-1 px-2 bg-primary rounded">
                      <FaJoget className="w-3 h-3 lg:w-5 lg:h-5 text-white" />
                      <p className="text-white text-xs lg:text-sm">
                        {item.experience} Tahun
                      </p>
                    </div>
                    <div className="flex items-center gap-3 py-1 px-2 bg-primary rounded">
                      <BiLike className="w-3 h-3 lg:w-5 lg:h-5 text-white" />
                      <p className="text-white text-xs lg:text-sm">
                        {item.like}%
                      </p>
                    </div>
                  </div>
                </div>
                <p className="font-semibold lg:text-lg">
                  {formatIDR(item.cost)}
                </p>
                <div className="hidden lg:flex items-center gap-4">
                  <Dialog>
                    <DialogTrigger className="text-xs rounded-full font-bold shadow py-2 px-8 border border-black/20">
                      Lihat Profil
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle></DialogTitle>
                      <ProfilePsikolog />
                      <ButtonSmall className="bg-red text-white">
                        <Link href={"/consultation"}>Chat</Link>
                      </ButtonSmall>
                    </DialogContent>
                  </Dialog>
                  <ButtonSmall className="bg-red text-white">
                    <Link href={"/consultation"}>Chat</Link>
                  </ButtonSmall>
                </div>
              </div>
            </div>
            <div className="lg:hidden flex flex-col gap-2 mt-2">
              <Dialog>
                <DialogTrigger className="text-xs rounded-full font-bold shadow py-2 px-8 border border-black/20">
                  Lihat Profil
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle></DialogTitle>
                  <ProfilePsikolog />
                  <ButtonSmall className="bg-red text-white">
                    <Link href={"/consultation"}>Chat</Link>
                  </ButtonSmall>
                </DialogContent>
              </Dialog>
              <ButtonSmall className="bg-red text-white">
                <Link href={"/consultation"}>Chat</Link>
              </ButtonSmall>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPsikolog;
