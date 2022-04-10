import React, { FC } from "react";
import { DetailListItemProps } from "./DetailListItem.types";

const DetailListItem: FC<DetailListItemProps> = (props) => {
  const { title, value } = props;
  return (
    <div className="flex my-5 text-sm">
      <span className="w-[170px] text-muteColor-300">{title}</span>
      <span>{value}</span>
    </div>
  );
};

export default DetailListItem;
