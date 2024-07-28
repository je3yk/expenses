import Link from "next/link";

import { Button } from "~/components/ui/button";

const Footer = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <h3 className="text-xl md:text-2xl">Expenses</h3>
      <div className="flex items-center justify-end gap-1">
        <Button variant="ghost" asChild>
          <Link href="/privacy">Privacy policy</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/terms">Terms and conditions</Link>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
