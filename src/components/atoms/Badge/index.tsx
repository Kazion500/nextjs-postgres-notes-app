import React, { FC } from "react";
import { BadgeProps } from "./Badge.types";

const Badge: FC<BadgeProps> = (props) => {
  const { title } = props;
  return (
    <span className="bg-muteColor-200 text-black/60 font-medium tracking-wider px-3 py-2 text-xs rounded-md block">
      {title}
    </span>
  );
};

export default Badge;
