import Link from "next/link"
import {
    Activity,
    ArrowUpRight,
    Briefcase,
    CalendarClock,
    CircleUser,
    Clock,
    CreditCard,
    DollarSign,
    Ellipsis,
    Menu,
    Package2,
    Search,
    Users,
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import AvatarGroup from "@/components/AvatarGroup"
import { Progress } from "@/components/ui/progress"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ListView } from "@/components/ListView"
import { ListActivity } from "./components/ListActivity"
import TeamWorkloads from "./components/TeamWorkloads"

export default function ActivitySection() {
    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <div className="">
                        <Card x-chunk="dashboard-01-chunk-1">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Avg. Attendance
                                </CardTitle>
                                <Briefcase className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">20.5 / minutes</div>
                                <p className="text-xs text-muted-foreground">
                                    +180.1% from last month
                                </p>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>See detail</AccordionTrigger>
                                        <AccordionContent>
                                            <ListActivity title={"Attendance"} />
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <Card x-chunk="dashboard-01-chunk-2">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Avg. Late</CardTitle>
                                <CalendarClock className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">50.5 / minutes</div>
                                <p className="text-xs text-muted-foreground">
                                    +19% from last month
                                </p>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>See detail</AccordionTrigger>
                                        <AccordionContent>
                                            <ListActivity title={"Late"} />
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <Card x-chunk="dashboard-01-chunk-3">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Duration Activity</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">2.5 / month</div>
                                <p className="text-xs text-muted-foreground">
                                    +1.5 since last month
                                </p>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>See detail</AccordionTrigger>
                                        <AccordionContent>
                                            <ListActivity title={"Duration Activity"} />
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <Card x-chunk="dashboard-01-chunk-0">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Day Off
                                </CardTitle>
                                <DollarSign className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">10 Staff</div>
                                <p className="text-xs text-muted-foreground">
                                    per this day
                                </p>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>See detail</AccordionTrigger>
                                        <AccordionContent>
                                            <ListActivity title={"Day Off"} />
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Top most diligent</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-5">
                                    <div className="w-10 h-10 bg-primary grid place-content-center justify-center rounded-full">
                                        <span className="text-background font-bold text-lg">1</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Link href={"#"} className="text-sm hover:underline">Team 1</Link>
                                        <p className="text-xs text-muted-foreground">Avg. Attendance: 2.5 minutes</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-10 h-10 bg-muted-foreground grid place-content-center justify-center rounded-full">
                                        <span className="text-dark font-bold text-lg">2</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Link href={"#"} className="text-sm hover:underline">Team 2</Link>
                                        <p className="text-xs text-muted-foreground">Avg. Attendance: 2.5 minutes</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-10 h-10 bg-secondary grid place-content-center justify-center rounded-full">
                                        <span className="text-dark font-bold text-lg">3</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Link href={"#"} className="text-sm hover:underline">Team 3</Link>
                                        <p className="text-xs text-muted-foreground">Avg. Attendance: 2.5 minutes</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-10 h-10 grid place-content-center justify-center rounded-full">
                                        <span className="font-bold text-lg">4</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Link href={"#"} className="text-sm hover:underline">Team 4</Link>
                                        <p className="text-xs text-muted-foreground">Avg. Attendance: 2.5 minutes</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Top most late</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-5">
                                    <div className="w-10 h-10 bg-primary grid place-content-center justify-center rounded-full">
                                        <span className="text-background font-bold text-lg">1</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Link href={"#"} className="text-sm hover:underline">Team 1</Link>
                                        <p className="text-xs text-muted-foreground">Avg. Attendance: 2.5 minutes</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-10 h-10 bg-muted-foreground grid place-content-center justify-center rounded-full">
                                        <span className="text-dark font-bold text-lg">2</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Link href={"#"} className="text-sm hover:underline">Team 2</Link>
                                        <p className="text-xs text-muted-foreground">Avg. Attendance: 2.5 minutes</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-10 h-10 bg-secondary grid place-content-center justify-center rounded-full">
                                        <span className="text-dark font-bold text-lg">3</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Link href={"#"} className="text-sm hover:underline">Team 3</Link>
                                        <p className="text-xs text-muted-foreground">Avg. Attendance: 2.5 minutes</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-10 h-10 grid place-content-center justify-center rounded-full">
                                        <span className="font-bold text-lg">4</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Link href={"#"} className="text-sm hover:underline">Team 4</Link>
                                        <p className="text-xs text-muted-foreground">Avg. Attendance: 2.5 minutes</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Top most duration activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-5">
                                    <div className="w-10 h-10 bg-primary grid place-content-center justify-center rounded-full">
                                        <span className="text-background font-bold text-lg">1</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Link href={"#"} className="text-sm hover:underline">Team 1</Link>
                                        <p className="text-xs text-muted-foreground">Avg. Attendance: 2.5 minutes</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-10 h-10 bg-muted-foreground grid place-content-center justify-center rounded-full">
                                        <span className="text-dark font-bold text-lg">2</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Link href={"#"} className="text-sm hover:underline">Team 2</Link>
                                        <p className="text-xs text-muted-foreground">Avg. Attendance: 2.5 minutes</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-10 h-10 bg-secondary grid place-content-center justify-center rounded-full">
                                        <span className="text-dark font-bold text-lg">3</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Link href={"#"} className="text-sm hover:underline">Team 3</Link>
                                        <p className="text-xs text-muted-foreground">Avg. Attendance: 2.5 minutes</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-10 h-10 grid place-content-center justify-center rounded-full">
                                        <span className="font-bold text-lg">4</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Link href={"#"} className="text-sm hover:underline">Team 4</Link>
                                        <p className="text-xs text-muted-foreground">Avg. Attendance: 2.5 minutes</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
                        <CardHeader>
                            <CardTitle>Team Activity</CardTitle>
                            <CardDescription>
                                This is chart for your team activity by a project.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Card>

                            </Card>
                        </CardContent>
                    </Card>
                    <TeamWorkloads />
                </div>
                <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
                    <CardHeader>
                        <CardTitle>Attandance Chart</CardTitle>
                        <CardDescription>
                            This is chart for your attandance activity by a staff & date.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Card>

                        </Card>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}