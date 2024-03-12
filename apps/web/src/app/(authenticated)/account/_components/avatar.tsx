"use client";

import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { User } from "lucide-react";

import { Skeleton } from "~/components/ui/skeleton";

const Avatar = () => {
  const { user, isLoaded } = useUser();

  if (!user) {
    return <Skeleton className="h-24 w-24 rounded-full" />;
  }

  if (!user.imageUrl) {
    return (
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-50">
        {user.username ? (
          <span className="text-3xl text-gray-500">{user.username[0]}</span>
        ) : (
          <User className="h-[1.2rem] w-[1.2rem]" />
        )}
      </div>
    );
  }

  const imageParams = new URLSearchParams();

  imageParams.set("w", "25");
  imageParams.set("h", "25");
  imageParams.set("quality", "50");

  const avatarUrl = `${user.imageUrl}?${imageParams.toString()}`;

  return (
    <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full">
      <Image
        src={avatarUrl}
        alt="avatar"
        className="rounded-full"
        width={25}
        height={25}
      />
    </div>
  );
};

export default Avatar;
