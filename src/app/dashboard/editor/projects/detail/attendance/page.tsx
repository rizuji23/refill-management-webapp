import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { File, ListFilter, PlusCircle } from "lucide-react";
import AttendanceSection from "./AttendanceSection";

export default function AttendancePage() {
    return (
        <>
            <div className="space-y-6">
                <div className="flex">
                    <div>
                        <h3 className="text-lg font-medium">Attendance</h3>
                        <p className="text-sm text-muted-foreground">
                            You can see & create the attendance by your Projects.
                        </p>
                    </div>
                    <div className="flex gap-3 ml-auto self-center">
                        <Button variant={"outline"} size={"sm"}><ListFilter size={14} className="mr-2" /> Filter</Button>
                        <Button variant={"outline"} size={"sm"}><File size={14} className="mr-2" /> Export</Button>
                        <Button size={"sm"}><PlusCircle size={14} className="mr-2" /> Add new attendance</Button>
                    </div>
                </div>
                <Separator />
                <AttendanceSection />
            </div>
        </>
    )
}