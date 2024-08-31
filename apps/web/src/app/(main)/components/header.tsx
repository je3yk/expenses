import Link from "next/link";

import ThemeSwitch from "~/components/theme-switch";
import { UserButton } from "../../../components/user-button";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 flex h-[84px] w-full items-center justify-between border-b-2 border-b-card bg-background p-4">
      <Link href="/" className="md:text-2l text-4xl">
        Expenses
      </Link>
      <div className="flex items-center justify-end gap-1">
        <UserButton />
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Header;
