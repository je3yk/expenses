"use client";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function LoginCard() {
  const user = {
    full_name: "Andrew Example",
    avatar_url: "https://avatars.githubusercontent.com/u/263385",
  };

  if (user) {
    return (
      <>
        <div>Hello user!</div>
        <div>{user.full_name}</div>
        <img src={user.avatar_url} alt="avatar" width={100} height={100} />
      </>
    );
  }

  return (
    <Card className="h-full p-5">
      <CardHeader>
        <CardTitle>Welcome in Expenses</CardTitle>
        <CardDescription>Sign in with one of the providers</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="outline"
          onClick={() => console.log("signIn with google")}
          className="w-full py-5 font-bold"
        >
          GitHub
        </Button>
      </CardContent>
    </Card>
  );
}
