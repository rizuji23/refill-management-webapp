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

export default function ProjectsPage() {
    return (
        <>
            <TitlePage title="Projects">
                <div className="flex gap-3">
                    <Button variant={"outline"} size={"sm"}><ListFilter size={14} className="mr-2" /> Filter</Button>
                    <Button variant={"outline"} size={"sm"}><File size={14} className="mr-2" /> Export</Button>
                    <Button size={"sm"}><PlusCircle size={14} className="mr-2" /> Add new project</Button>
                </div>
            </TitlePage>
            <Tabs defaultValue="all" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="on_progress">On Progress</TabsTrigger>
                    <TabsTrigger value="draf">Draf</TabsTrigger>
                    <TabsTrigger value="archived">Archived</TabsTrigger>
                </TabsList>
                <TabsContent value="all">Make changes to your account here.</TabsContent>
                <TabsContent value="active">Change your password here.</TabsContent>
            </Tabs>
        </>
    )
}