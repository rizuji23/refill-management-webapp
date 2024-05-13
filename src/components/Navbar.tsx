"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import {
    Briefcase,
    CircleUser,
    Menu,
    Package2,
    Search,
} from "lucide-react"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "./ui/badge"
import { useEffect, useState } from "react"
import { CommandSearch } from "./CommandSearch"
import { ModeToggle } from "./ModeToggle"
import TeamSwitcher from "./TeamSwitcher"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import Notification from "./Notification"

interface INavbarLink {
    title: string;
    href: string;
    key: string;
}

const navbar_link: Array<INavbarLink> = [
    {
        title: "Dashboard",
        href: "/dashboard",
        key: "dashboard"
    },
    {
        title: "Projects",
        href: "/dashboard/projects",
        key: "projects"
    },
    {
        title: "Products",
        href: "/dashboard/products",
        key: "products"
    },
    {
        title: "Salary",
        href: "/dashboard/salary",
        key: "salary"
    },
    {
        title: "Team",
        href: "/dashboard/teams",
        key: "teams"
    },
    {
        title: "Editor",
        href: "/dashboard/editor",
        key: "editor"
    },
]

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { setTheme } = useTheme()
    const pathname = usePathname();

    useEffect(() => {
        console.log(pathname)
        const down = (e: KeyboardEvent) => {
            if (e.key === " " && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <>
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b shadow-md bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 z-[9]">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <Briefcase className="h-6 w-6" />
                        <span className="sr-only">RL Studio</span>
                    </Link>
                    <TeamSwitcher />
                    {
                        navbar_link.map((el, i: number) => {
                            return <Link key={i}
                                href={el.href}
                                className={cn("transition-colors hover:text-foreground", pathname === el.href ? "text-foreground" : "text-muted-foreground")}
                            >
                                {el.title}
                            </Link>
                        })
                    }
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                href="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <Package2 className="h-6 w-6" />
                                <span className="sr-only">Acme Inc</span>
                            </Link>
                            {
                                navbar_link.map((el, i: number) => {
                                    return <Link key={i}
                                        href={el.href}
                                        className={cn("transition-colors hover:text-foreground", pathname === el.href ? "text-foreground" : "text-muted-foreground")}
                                    >
                                        {el.title}
                                    </Link>
                                })
                            }
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <div className="ml-auto flex-1 sm:flex-initial">
                        <div className="relative">
                            <Button variant={"outline"} onClick={() => setOpen(true)}>
                                <div className="flex gap-5">
                                    <span className="text-muted-foreground">Search anything...</span>
                                    <Badge variant={"default"}>ctrl + space</Badge>
                                </div>
                            </Button>

                        </div>
                    </div>
                    <Notification />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <Avatar>
                                    <AvatarImage src="https://ui.shadcn.com/avatars/02.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>
                                <div className="flex gap-3">
                                    <Avatar>
                                        <AvatarImage src="https://ui.shadcn.com/avatars/02.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <p>M Rizki Fauzi</p>
                                        <small className="text-muted-foreground font-normal">mypcfauzi2@gmail.com</small>
                                    </div>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem onClick={() => setTheme("light")}>
                                            Light
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                                            Dark
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setTheme("system")}>
                                            System
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <CommandSearch open={open} setOpen={setOpen} />
        </>
    )
}