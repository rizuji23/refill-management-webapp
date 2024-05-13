import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { File, ListFilter, PlusCircle } from "lucide-react";
import ProductsDetailProject from "./ProductsDetailProject";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function ProductsProjectDetailPage() {
    return (
        <>
            <div className="space-y-6">
                <div className="flex">
                    <div>
                        <h3 className="text-lg font-medium">Products Project</h3>
                        <p className="text-sm text-muted-foreground">
                            You can see & create the products for your Projects.
                        </p>
                    </div>
                    <div className="flex gap-3 ml-auto self-center">
                        <Button variant={"outline"} size={"sm"}><ListFilter size={14} className="mr-2" /> Filter</Button>
                        <Button variant={"outline"} size={"sm"}><File size={14} className="mr-2" /> Export</Button>
                        <Button size={"sm"}><PlusCircle size={14} className="mr-2" /> Add products</Button>
                    </div>
                </div>
                <Separator />
                <ProductsDetailProject />
            </div>
        </>
    )
}