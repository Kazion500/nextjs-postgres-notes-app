import Avatar from "components/atoms/Avatar";
import NavListItem from "components/atoms/NavListItem";
import SearchInput from "components/atoms/SearchInput";
import { FC } from "react";
import { CgNotes } from "react-icons/cg";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import type { SidebarProps } from "./Sidebar.types";

const Sidebar: FC<SidebarProps> = (props) => {
  return (
    <aside className="bg-muteColor-100 border w-[300px] p-5 min-h-screen hidden lg:block">
      <Avatar />
      <SearchInput placeholder="Search notes..." />
      <div className="flex flex-col h-[calc(100%-220px)]">
        <div className="space-y-4 mb-auto">
          <NavListItem
            href="/"
            label="My Notes"
            icon={<CgNotes size={23} className="mr-4" />}
          />
          <NavListItem
            href="/to-do"
            label="To-do list"
            icon={<AiOutlineCheck size={23} className="mr-4" />}
          />
        </div>

        <div className="space-y-4">
          <NavListItem
            href="/new-folder"
            label="Add Folder"
            active={true}
            icon={<AiOutlinePlus size={23} className="mr-4" />}
          />
          <NavListItem
            href="/setting"
            label="Setting"
            active={true}
            icon={<BsGear size={23} className="mr-4" />}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
