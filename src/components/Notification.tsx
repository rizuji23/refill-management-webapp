import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button"
import { Bell, Info } from "lucide-react"
import { ScrollArea } from "./ui/scroll-area"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import Link from "next/link"


export default function Notification() {
    return (
        <>
            <Popover>
                <PopoverTrigger asChild>
                    <div className="relative">
                        <div className="absolute right-0">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                        </div>
                        <Button variant="outline" size="icon">
                            <Bell className="h-[1.2rem] w-[1.2rem]" />
                            <span className="sr-only">Notification</span>
                        </Button>
                    </div>
                </PopoverTrigger>
                <PopoverContent className="p-1 min-w-[400px] !shadow-md !bg-background/95 !backdrop-blur !supports-[backdrop-filter]:bg-background/60" collisionPadding={{ right: 10 }} sideOffset={10}>
                    <div className="flex justify-between py-2 px-2">
                        <h5 className="text-sm font-medium">Notification</h5>
                        <small className="text-muted-foreground hover:underline cursor-pointer">Mark all as read</small>
                    </div>
                    <ScrollArea className="h-72 p-2 pb-0">
                        <div className="flex flex-col gap-3">
                            {
                                Array.from({ length: 20 }).map((_, i: number) => {
                                    return (
                                        <Link href={"#"}>
                                            <Alert>
                                                <Info className="h-4 w-4" />
                                                <AlertTitle>Heads up!</AlertTitle>
                                                <AlertDescription className="text-sm text-muted-foreground mt-2">
                                                    You can add components to your app using the cli.
                                                </AlertDescription>
                                                <p className="text-xs text-muted-foreground text-end mt-5">Selasa, 13 Mei 2024</p>
                                            </Alert>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </ScrollArea>
                </PopoverContent>
            </Popover>

        </>
    )
}