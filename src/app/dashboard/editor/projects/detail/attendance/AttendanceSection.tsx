"use client"
import { DataTable } from "@/components/datatables/DataTable";
import { CaraouselAttendance } from "./data/CaraouselAttendance";
import { useEffect, useState } from "react";
import { columns_attedance } from "./data/columns";
import { AttedanceSchema } from "./data/schema";
import { generateFakeAttedance } from "./data/seed";
import { labels, statuses } from "./data/data";

export default function AttendanceSection() {
    const [open_detail, setOpenDetail] = useState<boolean>(false);

    const [data, setData] = useState<Array<AttedanceSchema>>([]);

    useEffect(() => {
        const data_attedance = generateFakeAttedance(20);
        setData(data_attedance);
    }, []);

    return (
        <>
            <div className="flex flex-col gap-7">
                <div>
                    <CaraouselAttendance />
                </div>

                <div>
                    <DataTable data={data} columns={columns_attedance()} search_columns="staff_name" search_placeholder="Staff Name" filter_data={[
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
                </div>
            </div>
        </>
    )
}