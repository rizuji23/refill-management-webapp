"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AttendanceDetailAnalytics from "./AttendanceDetailAnalytics";
import { useEffect, useState } from "react";
import { AttedanceHistorySchema } from "./data/schema";
import { generateFakeAttedanceHistory } from "./data/seed";
import { columns_attedance_history } from "./data/columns";
import { DataTable } from "@/components/datatables/DataTable";
import { labels, statuses } from "../data/data";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { File, ListFilter } from "lucide-react";

export default function DetailAttedancePage() {
    const [data, setData] = useState<Array<AttedanceHistorySchema>>([]);

    useEffect(() => {
        const data_attedance = generateFakeAttedanceHistory(20);
        setData(data_attedance);
    }, []);

    return (
        <>
            <div className="flex flex-col gap-5">
                <BackButton title="Back" />
                <AttendanceDetailAnalytics />

                <Card>
                    <CardHeader>
                        <div className="flex justify-between">
                            <CardTitle>Attendance History</CardTitle>
                            <div className="flex gap-3 self-center">
                                <Button variant={"outline"} size={"sm"}><ListFilter size={14} className="mr-2" /> Filter</Button>
                                <Button variant={"outline"} size={"sm"}><File size={14} className="mr-2" /> Export</Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <DataTable data={data} columns={columns_attedance_history()} search_columns="id" search_placeholder="ID Attendance" filter_data={[
                            {
                                title: "Status",
                                column: "status",
                                options: statuses
                            },
                            {
                                title: "Labels",
                                column: "label",
                                options: labels
                            },
                        ]} />
                    </CardContent>
                </Card>
            </div>
        </>
    )
}