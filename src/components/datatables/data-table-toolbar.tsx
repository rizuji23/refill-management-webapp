"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { priorities, statuses } from "@/app/dashboard/editor/projects/detail/task/data/data"
import { DataTableViewOptions } from "./data-table-view-options"
import { IFilterToolbar } from "./DataTable"

interface DataTableToolbarProps<TData> {
    table: Table<TData>,
    filter_data?: Array<IFilterToolbar> | undefined,
    search_placeholder?: string,
    search_columns?: string
}

export function DataTableToolbar<TData>({
    table,
    filter_data = undefined,
    search_placeholder = "",
    search_columns = ""
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                {
                    search_columns.length !== 0 && (
                        <Input
                            placeholder={`Search ${search_placeholder}...`}
                            value={(table.getColumn(search_columns)?.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                                table.getColumn(search_columns)?.setFilterValue(event.target.value)
                            }
                            className="h-8 w-[150px] lg:w-[250px]"
                        />
                    )
                }
                {
                    filter_data !== undefined && (
                        filter_data.map((el, i: number) => {
                            return <DataTableFacetedFilter
                                column={table.getColumn(el.column)}
                                title={el.title}
                                options={el.options}
                            />
                        })
                    )
                }
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <Cross2Icon className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
            <DataTableViewOptions table={table} />
        </div>
    )
}