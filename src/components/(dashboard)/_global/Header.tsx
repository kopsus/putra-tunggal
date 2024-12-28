import React from "react";
import Card from "./Card";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Header = ({}: SidebarProps) => {
  return (
    <Card className="bg-primary sticky top-0 z-50 w-3/4 p-5 rounded-full m-5">
      <div className="text-white flex items-center justify-between">
        <p className="text-lg">DASHBOARD</p>
        <div className="flex items-center gap-2">
          <div className="bg-white shadow border w-10 h-10 rounded-full overflow-hidden"></div>
          <div className="flex flex-col">
            <p>DR. Agus Salim</p>
            <p className="text-xs">Psikolog</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Header;
