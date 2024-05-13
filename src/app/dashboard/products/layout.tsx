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
        href: "/dashboard/products",
    },
    {
        title: "List Products",
        href: "/dashboard/products/list",
    },
    {
        title: "Sales",
        href: "/dashboard/products/sales",
    },
    {
        title: "Stock Opname",
        href: "/dashboard/products/stock",
    },
    {
        title: "Materials",
        href: "/dashboard/products/materials",
    },
    {
        title: "Tools",
        href: "/dashboard/products/tools",
    },
    {
        title: "Settings",
        href: "/dashboard/products/settings",
    },
]

interface ProductsLayoutProps {
    children: React.ReactNode
}

export default function ProductsLayout({ children }: ProductsLayoutProps) {
    return (
        <>
            <div className="">
                <TitlePage title="Products" />
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