import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useEffect } from "react";
import { FC, useState } from "react";
import type { NavListItemProps } from "./NavListItem.types";

const NavListItem: FC<NavListItemProps> = (props) => {
  const [active, setActive] = useState(false);
  const router = useRouter();

  const handleActive = useCallback(() => {
    if (router.pathname === props.href || props.active) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [router.pathname, props.href, props.active]);

  useEffect(() => {
    handleActive();
  }, [handleActive, router.pathname]);

  return (
    <Link href={props.href}>
      <a
        className={`flex items-center px-2 py-4 rounded-md ${
          active ? "bg-white text-black" : "text-muteColor-300 bg-transparent"
        }`}
      >
        {props.icon}
        <span>{props.label}</span>
      </a>
    </Link>
  );
};

export default NavListItem;
