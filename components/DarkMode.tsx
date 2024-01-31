"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import Header from "./Header";
import Navigation, { NavItem } from "./Navigation";
import { Home } from "lucide-react";
import DarkModeSwitch from "./DarkModeSwitch";

function DarkMode({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <div className="flex flex-col h-screen max-w-6xl border-x mx-auto">
        <Header />
        {children}
        <Navigation>
          <NavItem icon={<Home size={20} />} path="Home" />
          <NavItem icon={<Home size={20} />} path="Home" alert />
          <NavItem icon={<Home size={20} />} path="Home" />
          <DarkModeSwitch />
        </Navigation>
      </div>
    </NextThemesProvider>
  );
}

export default DarkMode;
