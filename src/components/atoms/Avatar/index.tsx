import { FC } from "react";
import { AvatarProps } from "./Avatar.types";
import Image from "next/image";

const Avatar: FC<AvatarProps> = () => {
  return (
    <div className="flex items-center gap-3 bg-white p-3 rounded-md">
      <Image
        src="/images/avatar.jpeg"
        alt="avatar"
        width={40}
        height={40}
        objectFit="cover"
        className="rounded-md block"
      />

      <p>Patrick Kabwe</p>
    </div>
  );
};

export default Avatar;
