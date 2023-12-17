"use client";

import { useAuth } from "~/context/AuthContext";

const Avatar = () => {
    const {user} = useAuth();

    if (!user) {
        return null;
    }

    if (!user.avatar_url) {
        return (
            <div className="flex items-center justify-center rounded-full bg-slate-50 w-24 h-24">
                <span className="text-3xl text-gray-500">{user.user_name[0]}</span>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center rounded-full overflow-hidden w-24 h-24">
            <img src={user.avatar_url} alt="avatar" className="rounded-full" />
        </div>
    )
}
 
export default Avatar;