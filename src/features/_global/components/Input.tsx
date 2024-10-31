import { FiSearch } from "react-icons/fi";

interface IInputSearch {
  placeholder: string;
}

const InputSearch = ({ placeholder }: IInputSearch) => {
  return (
    <div className="relative h-[57px] rounded-[20px] border border-black flex items-center overflow-hidden px-4 shadow-md">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full outline-none"
      />
      <FiSearch className="w-6 h-6" />
    </div>
  );
};

export { InputSearch };
