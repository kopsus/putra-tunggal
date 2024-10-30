import { DescBanner } from "../../_global/components/Text";

interface ICard {
  review?: string;
  profile?: string;
  name?: string;
}

const Card = ({ name, profile, review }: ICard) => {
  return (
    <div className="bg-primary h-[162px] rounded-xl p-4 flex flex-col gap-4">
      <p className="text-white">{review}</p>
      <div className="flex items-center gap-2">
        <div className="overflow-hidden rounded-full w-10 h-10 bg-white">
          <img src={profile} alt="" />
        </div>
        <DescBanner className="text-white">{name}</DescBanner>
      </div>
    </div>
  );
};

export default Card;
