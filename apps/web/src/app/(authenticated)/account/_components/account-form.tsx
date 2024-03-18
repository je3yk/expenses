"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { RouterOutputs } from "@expenses/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { trpc } from "~/trpc/client";

const accountSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2).max(20),
  email: z.string().email(),
  avatarUrl: z.string().url().optional(),
});

type AccountSchema = z.infer<typeof accountSchema>;

type UserDetails = RouterOutputs["users"]["getMe"];

const ProfileForm = ({ initData }: { initData: UserDetails }) => {
  const { user } = useUser();
  const { signOut } = useAuth();

  const {
    data: userData,
    isLoading: fetchingUserData,
    refetch,
  } = trpc.users.getMe.useQuery(undefined, {
    initialData: initData,
  });

  const { mutate: deleteUser } = trpc.users.deleteAccount.useMutation();
  const { mutate: upsertUser, isLoading: saving } =
    trpc.users.updateUser.useMutation();

  const isLoading = fetchingUserData || saving;

  const initValues = {
    firstName: user?.firstName ?? undefined,
    lastName: user?.lastName ?? undefined,
    email: user?.primaryEmailAddress?.emailAddress ?? undefined,
    avatarUrl: user?.imageUrl ?? undefined,
  };

  const form = useForm<AccountSchema>({
    resolver: zodResolver(accountSchema),
    defaultValues: initValues,
  });

  const onSubmit = async (values: any) => {
    await upsertUser(values);

    console.log("updated");
    refetch();
  };

  const handleDelete = async () => {
    if (confirm("Are you sure?")) {
      await deleteUser();
      signOut();
    }
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="flex w-full flex-col items-center justify-center py-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="AnExample" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Andrew Example" {...field} />
                </FormControl>
                <FormDescription>
                  Help other users to find if this is you.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="andrew@example.com" {...field} />
                </FormControl>
                <FormDescription>
                  It will be easier to identify you, with your email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full justify-between">
            <Button variant="destructive" onClick={handleDelete}>
              Delete account
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-1/4 self-end"
            >
              {isLoading ? (
                <>
                  <ReloadIcon className="h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
