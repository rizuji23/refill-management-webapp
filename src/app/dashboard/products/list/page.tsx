import { Separator } from "@/components/ui/separator"
import ProductsSection from "./ProductsSection"
import { Button } from "@/components/ui/button"
import { File, ListFilter, PlusCircle } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
    return (
        <>
            <div className="space-y-6">
                <div className="flex">
                    <div>
                        <h3 className="text-lg font-medium">List Products</h3>
                        <p className="text-sm text-muted-foreground">
                            You can see the list & details about your latest products.
                        </p>
                    </div>
                    <div className="flex gap-3 ml-auto self-center">
                        <Button variant={"outline"} size={"sm"}><ListFilter size={14} className="mr-2" /> Filter</Button>
                        <Button variant={"outline"} size={"sm"}><File size={14} className="mr-2" /> Export</Button>
                        <Link href={"/dashboard/products/list/add"}>
                            <Button size={"sm"}><PlusCircle size={14} className="mr-2" /> Add new product</Button>
                        </Link>
                    </div>
                </div>
                <Separator />
                <ProductsSection />
            </div>
        </>
    )
}