"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { useAuth } from "~/context/AuthContext";

export const UserButton = () => {
    const {user, signOut} = useAuth();

    if (!user) {
        return (
            <Button variant="outline" asChild >
                <Link href="/auth/login">Sign in</Link>
            </Button>
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-[35px] pl-0 pr-1">
                    <img src={user.avatar_url} alt="avatar" width={34} height={34} />
                    <span className="mx-2">{user.full_name}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 p-0">
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link href="/account">Account</Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="my-0"/>
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={signOut}>Sign out</DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}