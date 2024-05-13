"use client"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { File, ListFilter, PlusCircle } from "lucide-react"
import Link from "next/link"
import TaskProject from "./TaskProject"
import { useState } from "react"
import ModalAddTask from "./data/ModalAddTask"
import SheetTaskDetail from "./modal/SheetTaskDetail"

export default function TaskProjectPage() {
    const [open, setOpen] = useState<boolean>(false);


    return (
        <>
            <div className="space-y-6">
                <div className="flex">
                    <div>
                        <h3 className="text-lg font-medium">Task</h3>
                        <p className="text-sm text-muted-foreground">
                            You can see & create the task for your Projects.
                        </p>
                    </div>
                    <div className="flex gap-3 ml-auto self-center">
                        <Button variant={"outline"} size={"sm"}><ListFilter size={14} className="mr-2" /> Filter</Button>
                        <Button variant={"outline"} size={"sm"}><File size={14} className="mr-2" /> Export</Button>
                        <Button size={"sm"} onClick={() => setOpen(true)}><PlusCircle size={14} className="mr-2" /> Add new task</Button>
                    </div>
                </div>
                <Separator />
                <TaskProject />
            </div>
            <ModalAddTask open={open} setOpen={setOpen} />

        </>
    )
}