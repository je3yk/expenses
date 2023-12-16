"use client"

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { useAuth } from "~/context/AuthContext";

export default function LoginCard() {
    const {user, signIn} = useAuth();

    if (user) {
        return (
            <>
                <div>Hello  user!</div>
                <div>{user.full_name}</div>
                <img src={user.avatar_url} alt="avatar" width={100} height={100} />
            </>
        );
    }

    return (
        <Card className="p-5 h-full">
            <CardHeader>
                <CardTitle>Welcome in Expenses</CardTitle>
                <CardDescription>Sign in with one of the providers</CardDescription>
            </CardHeader>
            <CardContent>
                <Button variant="outline" onClick={() => signIn()} className="font-bold w-full py-5">GitHub</Button>
            </CardContent>
        </Card>
    )
}