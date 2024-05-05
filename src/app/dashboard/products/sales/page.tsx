import { Separator } from "@/components/ui/separator"
import SalesSection from "./SalesSection"
import { Button } from "@/components/ui/button"
import { File, ListFilter, PlusCircle } from "lucide-react"

export default function SalesPage() {
    return (
        <>
            <div className="space-y-6">
                <div className="flex">
                    <div>
                        <h3 className="text-lg font-medium">Sales</h3>
                        <p className="text-sm text-muted-foreground">
                            You can see the list of your sales from products.
                        </p>
                    </div>
                    <div className="flex gap-3 ml-auto self-center">
                        <Button variant={"outline"} size={"sm"}><ListFilter size={14} className="mr-2" /> Filter</Button>
                        <Button variant={"outline"} size={"sm"}><File size={14} className="mr-2" /> Export</Button>
                    </div>
                </div>
                <Separator />
                <SalesSection />
            </div>
        </>
    )
}