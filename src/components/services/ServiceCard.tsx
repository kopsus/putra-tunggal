import Image from "next/image";

interface IServiceCard {
  img: string;
  title: string;
  desc: string;
}

const ServicesCard = ({ img, title, desc }: IServiceCard) => {
  return (
    <div className="min-w-[327px] w-[327px] h-auto rounded-[20px] shadow-md shadow-black/25 bg-white overflow-hidden">
      <div className="w-full h-[244px] overflow-hidden border">
        <Image
          src={img || "/"}
          alt="services"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col gap-2 p-5">
        <p className="text-xl font-semibold leading-6 text-black">{title}</p>
        <p className="leading-[17.44px]">{desc}</p>
      </div>
    </div>
  );
};

export default ServicesCard;