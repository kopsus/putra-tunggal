import { ReactNode } from "react";

interface IButton {
  className?: string;
  children?: ReactNode;
}

const ButtonSmall = ({ className, children }: IButton) => {
  return (
    <button className={`${className} rounded-xl py-1 px-6`}>{children}</button>
  );
};

export { ButtonSmall };
