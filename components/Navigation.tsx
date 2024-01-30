"use client";

import Link from "next/link";
import React, { createContext, useContext } from "react";

const NavbarContext = createContext<boolean>(true);

export function NavItem({
  icon,
  path,
  active,
  alert,
}: {
  icon: any;
  path: string;
  active?: boolean;
  alert?: boolean;
}) {
  const expanded = useContext(NavbarContext);
  const webpath = path.toLowerCase() === "home" ? "" : path.toLowerCase();
  return (
    <Link
      prefetch={false}
      href={`/${webpath}`}
      className={`
          relative flex items-center p-2 dark:hover:bg-white rounded-full
           font-light cursor-pointer max-w-max
          transition-colors group
      `}
    >
      <div className=" justify-center">
        <div className=" max-w-max mx-auto text-gray-700 dark:text-gray-200  dark:group-hover:text-black">{icon}</div>
      </div>
      {alert && (
        <div
          className={`absolute right-0 w-2 h-2 rounded bg-[#c0eb00] top-1`}
        />
      )}

      {!expanded && (
        <div
          className="
            absolute z-20 left-full rounded-md px-2 py-1 ml-6
            bg-yellow-100 text-black text-sm
              -translate-x-3 transition-all invisible opacity-0
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0          
        "
        >
          {path}
        </div>
      )}
    </Link>
  );
}

function Navigation({ children }: { children: React.ReactNode }) {
  const expanded = true;
  return (
    <div className="sticky md:fixed z-50 bottom-0 w-full bg-white dark:bg-black  md:max-w-lg md:rounded-full md:left-1/2 md:-translate-x-1/2 md:bottom-3 p-2 px-6 border">
      <NavbarContext.Provider value={expanded}>
        <ul className="flex-1 px-3 flex  space-x-4">{children}</ul>
      </NavbarContext.Provider>
    </div>
  );
}

export default Navigation;
