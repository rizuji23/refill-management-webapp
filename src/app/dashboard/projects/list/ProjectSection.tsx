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
import TableProjects from "../data/table_projects"

export default function ProjectsSection() {
    return (
        <>
            <Tabs defaultValue="all">
                <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="on_progress">On Progress</TabsTrigger>
                    <TabsTrigger value="draf">Draf</TabsTrigger>
                    <TabsTrigger value="archived">Archived</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    <TableProjects />
                </TabsContent>
                <TabsContent value="active">Change your password here.</TabsContent>
            </Tabs>
        </>
    )
}