"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { promises as fs } from "fs"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"
import { taskSchema } from "./data/schema"
import { DataTable } from "@/components/datatables/DataTable"
import { columns_task } from "./data/columns"
import { data_task } from "./data/tasks"
import SheetTaskDetail from "./modal/SheetTaskDetail"
import { useState } from "react"
import { KanbanBoard } from "@/components/kanban/KanbanBoard"
import { priorities, statuses } from "./data/data"


export default function TaskProject() {
    const [open_detail, setOpenDetail] = useState<boolean>(false);

    return (
        <>
            <Tabs defaultValue="table">
                <TabsList>
                    <TabsTrigger value="table">Table</TabsTrigger>
                    <TabsTrigger value="kanban">Kanban</TabsTrigger>
                </TabsList>
                <TabsContent value="table" className="mt-5">
                    <DataTable data={data_task} search_columns="title" search_placeholder="Title" columns={columns_task({ open: open_detail, setOpen: setOpenDetail })} filter_data={[
                        {
                            title: "Status",
                            column: "status",
                            options: statuses
                        },
                        {
                            title: "Priority",
                            column: "priority",
                            options: priorities
                        },
                    ]} />
                </TabsContent>
                <TabsContent value="kanban" className="mt-5">
                    <KanbanBoard />
                </TabsContent>
            </Tabs>
            <SheetTaskDetail open={open_detail} setOpen={setOpenDetail} />
        </>
    )
}