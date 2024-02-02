import { Menu, RotateCcw, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";
import UserDropdown from "./UserDropdown";

type Props = {};

function Header({}: Props) {
  return (
    <div className=" w-full sticky top-0 z-50 bg-white dark:bg-inherit">
      <div className=" max-w-7xl mx-auto flex justify-between items-center p-6">
        {/* Log0 */}
        <div>
          MYLOGO GOES HERE
        </div>
        <div className="hidden md:flex  items-center space-x-6 text-sm">
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>Jobs</Link>
          <Link href={'/'}>Pricing</Link>
          <Link href={'/'}>About Us</Link>
          <Link href={'/'}>Services</Link>
          <Link href={'/'}>Contact</Link>
          <UserDropdown />

        </div>

      </div>
    </div>
  );
}

export default Header;
