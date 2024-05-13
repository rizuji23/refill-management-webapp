"use client"
import { ChevronLeft, SlashIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function TitlePage({ title, desc = "", children = <></>, back = false }: { title: string, desc?: string, children?: React.ReactNode, back?: boolean }) {
    const router = useRouter();

    return (
        <>
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
            <div className="flex gap-4">
                {
                    back === true && <Button variant="outline" onClick={() => router.back()} size="icon" className="h-7 w-7 self-center">
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Back</span>
                    </Button>
                }
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
        </>
    )
}