import React from "react";

interface IButton {
  children: React.ReactNode;
  className?: string;
}

const ButtonLarge = ({ children, className }: IButton) => {
  return (
    <button
      className={`${className} rounded-full font-bold shadow py-[18px] px-16`}
    >
      {children}
    </button>
  );
};

const ButtonMedium = ({ children, className }: IButton) => {
  return (
    <button
      className={`${className} text-sm rounded-full font-bold shadow py-3 px-12`}
    >
      {children}
    </button>
  );
};

const ButtonSmall = ({ children, className }: IButton) => {
  return (
    <button
      className={`${className} text-xs rounded-full font-bold shadow py-2 px-8`}
    >
      {children}
    </button>
  );
};

export { ButtonLarge, ButtonMedium, ButtonSmall };
