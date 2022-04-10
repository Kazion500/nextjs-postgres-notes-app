import { FC } from "react";
import { CardProps } from "./Card.types";

const Card: FC<CardProps> = (props) => {
  const { title, description, date, active } = props;

  const truncate = (str: string, n: number) => {
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  return (
    <div
      className={` p-4 rounded-lg ${
        active ? "bg-muteColor-200" : "bg-muteColor-100 text-muteColor-300"
      }`}
    >
      <h5 className="font-medium uppercase text-sm">{date}</h5>
      <h1 className="font-medium my-2 text-md">{title}</h1>
      <p className="text-ellipsis">{truncate(description, 70)}</p>
    </div>
  );
};

export default Card;
