import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SlashIcon } from "@radix-ui/react-icons"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import TitlePage from "@/components/TitlePage"
import { Button } from "@/components/ui/button"
import { File, ListFilter, PlusCircle } from "lucide-react"
import StockInSection from "./stock_in/StockInSection"
import StockOutSection from "./stock_out/StockOutSection"
import StockModifiedSection from "./modified/StockModifiedSection"

export default function StockSection() {
    return (
        <>
            <Tabs defaultValue="stock_in" className="">
                <TabsList>
                    <TabsTrigger value="stock_in">Stock In</TabsTrigger>
                    <TabsTrigger value="stock_out">Stock Out</TabsTrigger>
                    <TabsTrigger value="modified_stock">Modified Stock</TabsTrigger>
                </TabsList>
                <TabsContent value="stock_in">
                    <StockInSection />
                </TabsContent>
                <TabsContent value="stock_out">
                    <StockOutSection />
                </TabsContent>
                <TabsContent value="modified_stock">
                    <StockModifiedSection />
                </TabsContent>
            </Tabs>
        </>
    )
}