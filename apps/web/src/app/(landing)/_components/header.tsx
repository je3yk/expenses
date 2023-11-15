"use client";

import ThemeSwitch from "~/components/theme-switch";
import { Button } from "~/components/ui/button";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between bg-slate-200 p-4 dark:bg-slate-900">
      <h1 className="md:text-2l text-4xl">Expenses</h1>
      <div className="flex items-center justify-end gap-1">
        <Button variant="outline">Login</Button>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Header;
