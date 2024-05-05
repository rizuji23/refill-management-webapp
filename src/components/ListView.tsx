import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function ListView({ className = "", title = "" }: { className?: string, title?: string }) {
    return (
        <ScrollArea className={cn("rounded-md border", className)}>
            <div className="p-4">
                {
                    title.length !== 0 && <h4 className="mb-4 text-sm font-medium leading-none">{title}</h4>
                }
                {tags.map((tag) => (
                    <>
                        <div key={tag} className="text-sm">
                            {tag}
                        </div>
                        <Separator className="my-2" />
                    </>
                ))}
            </div>
        </ScrollArea>
    )
}
