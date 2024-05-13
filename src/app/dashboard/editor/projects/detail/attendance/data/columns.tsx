"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { labels, statuses } from "../data/data"
import { DataTableColumnHeader } from "@/components/datatables/data-table-column-header"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { DataTableRowActions } from "./data-table-row-actions"
import { AttedanceSchema } from "./schema"
import Link from "next/link"

export const columns_attedance = (): ColumnDef<AttedanceSchema>[] => [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value: any) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="ID" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "staff_name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Staff Name" />
        ),
        cell: ({ row }) => {
            return (
                <Link href={"/dashboard/editor/projects/detail/attendance/detail"} className="hover:underline">
                    <div className="flex space-x-3">
                        <div>
                            <img src={row.original.avatar} className="w-[30px] rounded-full" />
                        </div>
                        <span className="max-w-[500px] truncate font-medium self-center">
                            {row.getValue("staff_name")}
                        </span>
                    </div>
                </Link>
            )
        },
    },
    {
        accessorKey: "label",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Label" />
        ),
        cell: ({ row }) => {
            const label = labels.find((label) => label.value === row.original.label)

            return (
                <div className="flex space-x-2">
                    {label && <Badge variant="outline">{label.label}</Badge>}
                </div>
            )
        },
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
            const status = statuses.find(
                (status) => status.value === row.getValue("status")
            )

            if (!status) {
                return null
            }

            return (
                <div className="flex w-[100px] items-center">
                    {status.icon && (
                        <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{status.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "created_at",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Created At" />
        ),
        cell: ({ row }) => row.getValue("created_at"),

    },
    {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
]