import Sidebar from "components/molecules/Sidebar";
import { FC } from "react";
import { ILayoutProps } from "./Layout.types";

const Layout: FC<ILayoutProps> = (props) => {
  return (
    <main className="flex">
      <Sidebar />
      {props.children}
    </main>
  );
};

export default Layout;
