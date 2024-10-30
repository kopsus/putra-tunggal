import { TitleBanner } from "../../_global/components/Text";
import Card from "./Card";

const Testimoni = () => {
  return (
    <div className="bg-primary/10 h-[450px] overflow-hidden lg:mb-16">
      <div className="grid grid-cols-2 gap-x-10 h-full px-5 md:px-10 lg:px-16">
        <div className="flex flex-col justify-center items-center gap-5">
          <TitleBanner>Lorem ipsum dolor sit amet, consectetur</TitleBanner>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div className="overflow-y-auto grid grid-cols-2 gap-x-5">
          <div className="flex flex-col gap-5 overflow-y-auto">
            <Card
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              profile=""
              name="Kopsus"
            />
            <Card
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              profile=""
              name="Kopsus"
            />
            <Card
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              profile=""
              name="Kopsus"
            />
          </div>
          <div className="flex flex-col gap-5 overflow-y-auto">
            <Card
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              profile=""
              name="Kopsus"
            />
            <Card
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              profile=""
              name="Kopsus"
            />
            <Card
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
              profile=""
              name="Kopsus"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
