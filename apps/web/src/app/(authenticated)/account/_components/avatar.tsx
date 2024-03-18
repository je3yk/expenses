"use client";

import Image from "next/image";
import { useUser } from "@clerk/nextjs";

import { Skeleton } from "~/components/ui/skeleton";

const Avatar = () => {
  const { user } = useUser();

  if (!(user && user.imageUrl)) {
    return (
      <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full">
        <Skeleton className="h-full w-full rounded-full" />
      </div>
    );
  }

  const imageParams = new URLSearchParams();

  imageParams.set("w", "80");
  imageParams.set("h", "80");
  imageParams.set("fit", "scale-down");
  imageParams.set("quality", "50");

  const avatarUrl = `${user.imageUrl}?${imageParams.toString()}`;

  return (
    <div className="flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full">
      <Image
        src={avatarUrl}
        alt="avatar"
        className="rounded-full"
        placeholder="blur"
        blurDataURL={avatarUrl}
        priority
        width={80}
        height={80}
      />
    </div>
  );
};

export default Avatar;
