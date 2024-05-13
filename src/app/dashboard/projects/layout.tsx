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
        href: "/dashboard/projects",
    },
    {
        title: "List Projects",
        href: "/dashboard/projects/list",
    },
    {
        title: "Contact",
        href: "/dashboard/projects/contacts",
    },
]

interface ProjectsLayoutProps {
    children: React.ReactNode
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
    return (
        <>
            <div className="">
                <TitlePage title="Projects" />
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