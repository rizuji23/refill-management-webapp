import Link from "next/link"
import {
    Activity,
    ArrowUpRight,
    Banknote,
    Briefcase,
    CalendarClock,
    CircleUser,
    Clock,
    CreditCard,
    DollarSign,
    Ellipsis,
    HandCoins,
    Menu,
    Package2,
    PercentCircle,
    Search,
    Users,
    Wallet,
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
import TeamWorkloads from "./components/TeamWorkloads"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ListPayrol } from "./components/ListPayrol"

export default function Payrol() {
    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <div>
                        <Card x-chunk="dashboard-01-chunk-1">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Salary
                                </CardTitle>
                                <Banknote className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">Rp. 100.000.000</div>
                                <p className="text-xs text-muted-foreground">
                                    +180.1% from last month
                                </p>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>See detail</AccordionTrigger>
                                        <AccordionContent>
                                            <ListPayrol title="Salary" />
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <Card x-chunk="dashboard-01-chunk-2">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Cash Receipt</CardTitle>
                                <HandCoins className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">Rp. 10.000.000</div>
                                <p className="text-xs text-muted-foreground">
                                    +19% from last month
                                </p>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>See detail</AccordionTrigger>
                                        <AccordionContent>
                                            <ListPayrol title="Cash Receipt" />
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <Card x-chunk="dashboard-01-chunk-3">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Bonus</CardTitle>
                                <PercentCircle className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">Rp. 6.000.000</div>
                                <p className="text-xs text-muted-foreground">
                                    +201 since last hour
                                </p>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>See detail</AccordionTrigger>
                                        <AccordionContent>
                                            <ListPayrol title="Bonus" />
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
                                    Avg. Salary Expenditure
                                </CardTitle>
                                <Wallet className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">Rp. 20.000.000</div>
                                <p className="text-xs text-muted-foreground">
                                    +20.1% from last month
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    <div>
                        <Card x-chunk="dashboard-01-chunk-5">
                            <CardHeader>
                                <CardTitle>Top Biggest Salary</CardTitle>
                                <CardDescription>Current biggest salary</CardDescription>
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
                                                    Rp. 1.000.000
                                                </p>
                                            </div>
                                        </div>
                                    })
                                }
                            </CardContent>
                        </Card>
                    </div>
                    <Card
                        className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
                    >
                        <CardHeader className="flex flex-row items-center">
                            <div className="grid gap-2">
                                <CardTitle>Recent Payrol</CardTitle>
                                <CardDescription>
                                    Recent salary from your payrol.
                                </CardDescription>
                            </div>
                            <Button asChild size="sm" className="ml-auto gap-1">
                                <Link href="#">
                                    View All
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableCaption>This is recent of your latest payrol.</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>
                                            Projects
                                        </TableHead>
                                        <TableHead>
                                            Status
                                        </TableHead>
                                        <TableHead>
                                            Date
                                        </TableHead>
                                        <TableHead className="text-right">Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <Link href={'#'} className="font-medium hover:underline"><p>Liam Johnson</p></Link>
                                            <p className="text-sm text-muted-foreground md:inline">
                                                liam@example.com
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <Link href={'#'} className="hover:underline">Projects A</Link>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className="text-xs" variant="outline">
                                                Salary
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="md:table-cell">
                                            2023-06-23
                                        </TableCell>
                                        <TableCell className="text-right">
                                            Rp. 20.000.000
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Link href={'#'} className="font-medium hover:underline"><p>Liam Johnson</p></Link>
                                            <p className="text-sm text-muted-foreground md:inline">
                                                liam@example.com
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <Link href={'#'} className="hover:underline">Projects A</Link>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className="text-xs" variant="outline">
                                                Cash Receipt
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="md:table-cell">
                                            2023-06-23
                                        </TableCell>
                                        <TableCell className="text-right">
                                            Rp. 20.000.000
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>
                                            <Link href={'#'} className="font-medium hover:underline"><p>Liam Johnson</p></Link>
                                            <p className="text-sm text-muted-foreground md:inline">
                                                liam@example.com
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <Link href={'#'} className="hover:underline">Projects A</Link>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className="text-xs" variant="outline">
                                                Salary
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="md:table-cell">
                                            2023-06-23
                                        </TableCell>
                                        <TableCell className="text-right">
                                            Rp. 20.000.000
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}