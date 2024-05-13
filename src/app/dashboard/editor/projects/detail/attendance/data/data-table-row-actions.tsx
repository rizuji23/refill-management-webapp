"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Dispatch, SetStateAction, useState } from "react"
import Sheets from "@/components/Sheets"
import { Copy, FileOutput, PanelRight, Pencil, Star, Tag, Trash } from "lucide-react"
import { attendance_schema } from "./schema"
import { labels, statuses } from "./data"
import Link from "next/link"

interface DataTableRowActionsProps<TData> {
    row: Row<TData>,
}

export function DataTableRowActions<TData>({
    row,
}: DataTableRowActionsProps<TData>) {
    const attedance = attendance_schema.parse(row.original)

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                    >
                        <DotsHorizontalIcon className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[180px]">
                    <DropdownMenuItem>
                        <Link href={"/dashboard/editor/projects/detail/attendance/detail"} className="flex">
                            <PanelRight className="w-4 h-4 mr-2 text-muted-foreground self-center" /> Open details view
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger><FileOutput className="w-4 h-4 mr-2 text-muted-foreground" /> Statuses</DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                            <DropdownMenuRadioGroup value={attedance.status}>
                                {statuses.map((label) => (
                                    <DropdownMenuRadioItem key={label.value} value={label.value}>
                                        {label.label}
                                    </DropdownMenuRadioItem>
                                ))}
                            </DropdownMenuRadioGroup>
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Trash className="w-4 h-4 mr-2 text-muted-foreground" /> Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}