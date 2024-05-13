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

import { labels } from "../data/data"
import { taskSchema } from "../data/schema"
import { Dispatch, SetStateAction, useState } from "react"
import Sheets from "@/components/Sheets"
import SheetTaskDetail from "../modal/SheetTaskDetail"
import { Copy, PanelRight, Pencil, Star, Tag, Trash } from "lucide-react"

interface DataTableRowActionsProps<TData> {
    row: Row<TData>,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
}

export function DataTableRowActions<TData>({
    row,
    open,
    setOpen
}: DataTableRowActionsProps<TData>) {
    const task = taskSchema.parse(row.original)

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
                    <DropdownMenuItem onClick={() => setOpen(true)}><PanelRight className="w-4 h-4 mr-2 text-muted-foreground" /> Open details view</DropdownMenuItem>
                    <DropdownMenuItem><Pencil className="w-4 h-4 mr-2 text-muted-foreground" /> Edit</DropdownMenuItem>
                    <DropdownMenuItem><Copy className="w-4 h-4 mr-2 text-muted-foreground" /> Make a copy</DropdownMenuItem>
                    <DropdownMenuItem><Star className="w-4 h-4 mr-2 text-muted-foreground" /> Favorite</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger><Tag className="w-4 h-4 mr-2 text-muted-foreground" /> Labels</DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                            <DropdownMenuRadioGroup value={task.label}>
                                {labels.map((label) => (
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