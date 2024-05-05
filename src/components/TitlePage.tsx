import { SlashIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function TitlePage({ title, desc = "", children = <></> }: { title: string, desc?: string, children?: React.ReactNode }) {
    return (
        <>
            <div>
                <div className="mb-5">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                        {
                            desc.length !== 0 && <p className="text-sm text-muted-foreground 2xl:w-2/5 xl:w-2/5 w-full">{desc}</p>
                        }
                    </div>
                    <div className="ml-auto">
                        {children}
                    </div>
                </div>
                <Separator className="my-5" />
            </div>
        </>
    )
}