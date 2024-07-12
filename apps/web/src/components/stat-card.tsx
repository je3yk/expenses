import { InfoIcon, type LucideIcon } from "lucide-react";
import { Typography } from "./typography";
import { Card, CardContent, CardTitle } from "./ui/card";
import { cn } from "~/lib/utils";

export const StatCard = ({ value, label, Icon = InfoIcon, className }: {value: number | string, label: string, Icon?: LucideIcon, className?: string}) => {
    return (
        <Card className={className}>
            <CardTitle className="px-6 py-4 flex justify-between items-start">
                <div className="flex flex-col">
                    <Typography variant="h4">{label}</Typography>
                    <Typography variant="caption" className="text-gray-500 dark:text-gray-500">Total</Typography>
                </div>
                <Icon className="text-gray-500 dark:text-gray-500"/>
            </CardTitle>
            <CardContent>
                <Typography variant="h1">{value}</Typography>
            </CardContent>
        </Card>
    );
}
