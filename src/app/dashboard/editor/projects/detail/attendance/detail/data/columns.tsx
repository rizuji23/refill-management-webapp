"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { DataTableColumnHeader } from "@/components/datatables/data-table-column-header"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { DataTableRowActions } from "./data-table-row-actions"
import { labels, statuses } from "../../data/data"
import { AttedanceHistorySchema } from "./schema"

export const columns_attedance_history = (): ColumnDef<AttedanceHistorySchema>[] => [
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
        accessorKey: "clock_in",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Clock In" />
        ),
        cell: ({ row }) => {
            const label = labels.find((label) => label.value === row.original.label)

            return (
                <div className="flex space-x-2">
                    <span className="max-w-[500px] truncate font-medium">
                        {row.getValue("clock_in")}
                    </span>
                </div>
            )
        },
    },
    {
        accessorKey: "clock_out",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Clock Out" />
        ),
        cell: ({ row }) => row.getValue("clock_out"),

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