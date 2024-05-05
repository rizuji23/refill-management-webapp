"use client"
import { DataTable } from "@/components/datatables/DataTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { columns_report } from "./data/columns_report";
import { DrawerDialog } from "@/components/DrawerDialog";
import { useState } from "react";
import TitlePage from "@/components/TitlePage";

export default function ReportsSection() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <div className="flex flex-col gap-5 pt-5">
                <div>
                    <div className="flex">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-bold tracking-tight">Report Monthly</h3>
                            <p className="text-muted-foreground text-sm">This section is rutine reports by given your role, You can change the rules of your reports</p>

                        </div>
                        <Button className="ml-auto self-center" onClick={() => setOpen(true)}>Edit report rule</Button>
                    </div>
                    <Separator className="my-8" />
                </div>

                <div>
                    <DataTable data={[]} columns={columns_report} />
                </div>
            </div>
            <DrawerDialog title="Edit report rule" open={open} setOpen={setOpen}>
                <div className="flex flex-col gap-3">

                </div>
            </DrawerDialog>
        </>
    )
}