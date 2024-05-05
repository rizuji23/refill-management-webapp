import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Ellipsis } from "lucide-react"

export default function TeamWorkloads() {
    return (
        <>
            <Card x-chunk="dashboard-01-chunk-5">
                <CardHeader>
                    <CardTitle>Team Workloads</CardTitle>
                    <CardDescription>Current sprint</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-8">
                    {
                        Array.from({ length: 4 }).map((_, i: number) => {
                            return <div className="flex gap-4" key={i}>
                                <Avatar className="hidden h-9 w-9 sm:flex">
                                    <AvatarImage src="https://ui.shadcn.com/avatars/01.png" alt="Avatar" />
                                    <AvatarFallback>OM</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium leading-none">
                                        Olivia Martin
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Project: Teu apal
                                    </p>
                                    <div className="flex gap-2">
                                        <div className="text-sm">33%</div>
                                        <Progress value={33} className="self-center" />
                                    </div>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size={"icon"} variant={"outline"} className="ml-auto">
                                            <Ellipsis size={18} />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>See linked project</DropdownMenuItem>
                                        <DropdownMenuItem>Detail</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        })
                    }
                </CardContent>
            </Card>
        </>
    )
}