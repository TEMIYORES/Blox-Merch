import Image from "next/image";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
type avatarType = {
  src?: string | null | undefined;
};
const Avatar: React.FC<avatarType> = ({ src }) => {
  return src ? (
    <Image
      sizes="w-full"
      alt="Avatar"
      src={src}
      className="rounded-full"
      width={30}
      height={30}
    />
  ) : (
    <FaUserCircle size={24} />
  );
};

export default Avatar;
