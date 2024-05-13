import { Metadata } from "next"
import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/components/SidebarNav"
import TitlePage from "@/components/TitlePage"

export const metadata: Metadata = {
    title: "Forms",
    description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
    {
        title: "Overview",
        href: "/dashboard/editor/projects/detail/overview",
    },
    {
        title: "Detail Project",
        href: "/dashboard/editor/projects/detail",
    },
    {
        title: "Task",
        href: "/dashboard/editor/projects/detail/task",
    },
    {
        title: "Attendance",
        href: "/dashboard/editor/projects/detail/attendance",
    },
    {
        title: "Payrol",
        href: "/dashboard/editor/projects/detail/payrol",
    },
    {
        title: "Products",
        href: "/dashboard/editor/projects/detail/products",
    },
    {
        title: "Files",
        href: "/dashboard/editor/projects/detail/files",
    },
    {
        title: "Editor",
        href: "/dashboard/editor/projects/detail/editor",
    },
    {
        title: "Settings",
        href: "/dashboard/editor/projects/detail/settings",
    },
]

interface ProjectsLayoutProps {
    children: React.ReactNode
}

export default function DetailProjectLayout({ children }: ProjectsLayoutProps) {
    return (
        <>
            <div className="">
                <TitlePage title="Projects Names 1" />
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className="-mx-4 lg:w-1/5">
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className="flex-1">{children}</div>
                </div>
            </div>
        </>
    )
}