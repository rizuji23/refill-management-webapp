import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SlashIcon } from "@radix-ui/react-icons"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import TitlePage from "@/components/TitlePage"
import { Button } from "@/components/ui/button"
import { File, ListFilter, PlusCircle } from "lucide-react"

export default function ContactSection() {
    return (
        <>
            <Tabs defaultValue="all" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="customer">Customer</TabsTrigger>
                    <TabsTrigger value="supplier">Supplier</TabsTrigger>
                    <TabsTrigger value="archived">Other</TabsTrigger>
                </TabsList>
                <TabsContent value="all">Make changes to your account here.</TabsContent>
                <TabsContent value="customer">Change your password here.</TabsContent>
            </Tabs>
        </>
    )
}