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
import TableProjects from "./data/table_projects"

export default function ProjectOverview() {
    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="flex gap-3 ml-auto self-center">
                    <Button variant={"outline"} size={"sm"}><ListFilter size={14} className="mr-2" /> Filter</Button>
                    <Button variant={"outline"} size={"sm"}><File size={14} className="mr-2" /> Export</Button>
                </div>
            </div>
        </>
    )
}