import { Menu, RotateCcw, SlidersHorizontal } from "lucide-react";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className=" flex justify-between sticky top-0 bg-white dark:bg-black items-center p-4 border-b">
      {/* left container */}
      <div className="flex items-center space-x-2">
        <Menu />
        <RotateCcw />
      </div>
      {/* Right Container */}
      <div>
        <SlidersHorizontal />
      </div>
    </div>
  );
}

export default Header;
