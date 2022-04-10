import { FC } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { PlusButtonProps } from "./PlusButton.types";

const PlusButton: FC<PlusButtonProps> = (props) => {
  return (
    <button
      {...props}
      className="flex items-center p-4 mt-12 mb-5 text-base bg-muteColor-200 w-full rounded-lg"
    >
      <AiOutlinePlus size={23} className="mr-5" />
      <p>Add new note</p>
    </button>
  );
};

export default PlusButton;
