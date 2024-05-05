import { Button } from "@/components/ui/button";
import { File, ListFilter, PlusCircle } from "lucide-react";

export default function StockInSection() {
    return (
        <>
            <div className="flex justify-end">
                <div className="flex gap-3">
                    <Button variant={"outline"} size={"sm"}><ListFilter size={14} className="mr-2" /> Filter</Button>
                    <Button variant={"outline"} size={"sm"}><File size={14} className="mr-2" /> Export</Button>
                    <Button size={"sm"}><PlusCircle size={14} className="mr-2" /> Add new stock in</Button>
                </div>
            </div>

        </>
    )
}