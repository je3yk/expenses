import { Suspense } from "react";

import { serverTrpc } from "~/trpc/server-trpc-client";
import AccountForm from "../_components/account-form";
import Avatar from "../_components/avatar";

const AccountPage = async () => {
  const data = await serverTrpc().users.getMe();

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex-col items-center justify-center gap-4 p-5 md:w-1/2 xl:w-1/3">
        <div className="flex w-full items-center justify-center">
          <Suspense fallback={<div>Loading...</div>}>
            <Avatar />
          </Suspense>
        </div>
        <AccountForm initData={data} />
      </div>
    </div>
  );
};

export default AccountPage;
