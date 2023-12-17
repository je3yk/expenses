"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { UserMetadata } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useAuth } from "~/context/AuthContext";

const accountSchema = z.object({
    full_name: z.string().optional(),
    user_name: z.string().min(2).max(20),
    email: z.string().email(),
})

type AccountSchema = z.infer<typeof accountSchema>;

const ProfileForm = ({user}: {user: UserMetadata}) => {
    const form = useForm<AccountSchema>({
        resolver: zodResolver(accountSchema),
        defaultValues: {
            user_name: user?.user_name ?? '',
            full_name: user?.full_name ?? '',
            email: user?.email ?? '',
        }
    })

    const onSubmit = (values: AccountSchema) => {
        console.log('values', values)
    }

    return (
        <div className="flex flex-col items-center justify-center w-full py-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
                    <FormField
                        control={form.control}
                        name="user_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
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
                        name="full_name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Full name</FormLabel>
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
                        render={({field}) => (
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
                    <Button type="submit" className="w-1/4 self-end">Save</Button>
                </form>
            </Form>
        </div>
    );
}

const UserProfile = () => {
    const {user} = useAuth();

    if (!user) {
        return null;
    }

    return <ProfileForm user={user} />
}

export default UserProfile;