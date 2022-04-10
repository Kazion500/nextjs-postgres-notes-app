import { FC } from "react";
import { SearchInputProps } from "./SearchInput.types";
import { FiSearch } from "react-icons/fi";

const SearchInput: FC<SearchInputProps> = (props) => {
  return (
    <div className="bg-white flex items-center p-3 rounded-md mt-5 mb-16">
      <FiSearch className="mr-3 text-muteColor-300" size={23} />
      <input
        type="text"
        {...props}
        className="outline-none border-none bg-transparent placeholder:text-muteColor-300"
      />
    </div>
  );
};

export default SearchInput;
