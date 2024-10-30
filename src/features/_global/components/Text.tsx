import { ReactNode } from "react";

interface IText {
  children?: ReactNode;
  className?: string;
}

const TitleBanner = ({ className, children }: IText) => {
  return (
    <p
      className={`${className} text-3xl text-primary font-semibold leading-[45px]`}
    >
      {children}
    </p>
  );
};

const DescBanner = ({ className, children }: IText) => {
  return (
    <p className={`${className} text-xl text-primary/70 leading-8`}>
      {children}
    </p>
  );
};

const TitleContent = ({ className, children }: IText) => {
  return (
    <p className={`${className} text-2xl text-black/80 font-semibold`}>
      {children}
    </p>
  );
};

const TitleAbout = ({ className, children }: IText) => {
  return (
    <p className={`${className} text-xl font-semibold leading-[30px]`}>
      {children}
    </p>
  );
};

const TitleFooter = ({ className, children }: IText) => {
  return (
    <p className={`${className} text-xl font-medium leading-[29px]`}>
      {children}
    </p>
  );
};

export { TitleBanner, DescBanner, TitleContent, TitleAbout, TitleFooter };
