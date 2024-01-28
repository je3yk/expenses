"use client";

import { useUser } from "@clerk/nextjs";
import { User } from "lucide-react";


const Avatar = () => {
    const {user} = useUser();

    if (!user) {
        return null;
    }

    if (!user.imageUrl) {
        return (
            <div className="flex items-center justify-center rounded-full bg-slate-50 w-24 h-24">
                {user.username ? (
                    <span className="text-3xl text-gray-500">{user.username[0]}</span>
                ) : (
                    <User className="h-[1.2rem] w-[1.2rem]" />
                )}
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center rounded-full overflow-hidden w-24 h-24">
            <img src={user.imageUrl} alt="avatar" className="rounded-full" />
        </div>
    )
}
 
export default Avatar;