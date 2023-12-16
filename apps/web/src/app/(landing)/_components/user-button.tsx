"use client";

import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
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
                <Button variant="outline">
                    <img src={user.avatar_url} alt="avatar" width={30} height={30} />
                    <span className="mx-2">{user.full_name}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 p-0">
                <DropdownMenuGroup>
                    <DropdownMenuItem>A</DropdownMenuItem>
                    <DropdownMenuItem>B</DropdownMenuItem>
                    <DropdownMenuItem>C</DropdownMenuItem>

                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}