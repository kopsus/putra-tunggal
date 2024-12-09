import { FiSearch } from "react-icons/fi";

interface IInput {
  placeholder: string;
  type?: "text" | "password" | "number";
}

const Input = ({ placeholder, type }: IInput) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="outline-none rounded-lg border-2 border-primary/50 p-2 text-sm"
    />
  );
};

const TextArea = ({ placeholder }: IInput) => {
  return (
    <input
      placeholder={placeholder}
      className="text-sm outline-none rounded-lg border-2 border-primary/50 p-2 min-h-14"
    />
  );
};

const InputSearch = ({ placeholder }: IInput) => {
  return (
    <div className="relative h-[57px] rounded-[20px] border border-black/20 flex items-center overflow-hidden px-4 shadow-md">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full outline-none"
      />
      <FiSearch className="w-6 h-6" />
    </div>
  );
};

export { InputSearch, Input, TextArea };
