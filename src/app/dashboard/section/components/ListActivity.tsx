import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const tags = Array.from({ length: 10 }).map(
    (_, i, a) => `Team ${a.length - i}`
)

export function ListActivity({ title = "" }: { title?: string }) {
    return (
        <ScrollArea className="h-72 rounded-md border">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">{title}</h4>
                {tags.map((tag) => (
                    <>
                        <div className="flex gap-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div key={tag}>
                                <Link href={"#"} className="hover:underline">
                                    <p>{tag}</p>
                                </Link>
                                <small>Project: <Link href={"#"} className="hover:underline">A</Link></small>
                            </div>
                            <div className="ml-auto flex flex-col gap-1">
                                <div className="text-end">
                                    <Badge variant={"outline"}>1.5 hours</Badge>
                                </div>
                                <small className="text-muted-foreground text-end">Selasa - 11:30 AM</small>
                            </div>
                        </div>
                        <Separator className="my-2" />
                    </>
                ))}
            </div>
        </ScrollArea>
    )
}
