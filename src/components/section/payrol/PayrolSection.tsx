"use client"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Banknote, File, HandCoins, ListFilter, PlusCircle } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import BoxPayrolAnalytics from "./components/BoxPayrolAnalytics";


export default function PayrolSection({ title, desc = "", from = "" }: { title: string, desc?: string, from?: string }) {
    const [tabs, setTabs] = useState<string>("payrol")

    return (
        <>
            <div className="space-y-6">
                <div className="flex">
                    <div>
                        <h3 className="text-lg font-medium">{title}</h3>
                        {
                            desc.length !== 0 && (
                                <p className="text-sm text-muted-foreground">
                                    {desc}
                                </p>
                            )
                        }
                    </div>
                    <div className="flex gap-3 ml-auto self-center">
                        <Button variant={"outline"} size={"sm"}><ListFilter size={14} className="mr-2" /> Filter</Button>
                        <Button variant={"outline"} size={"sm"}><File size={14} className="mr-2" /> Export</Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant={"default"} size={"sm"}><PlusCircle size={14} className="mr-2" /> Create New</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="max-w-[300px]">
                                <DropdownMenuItem>
                                    <div className="flex gap-3">
                                        <div>
                                            <Banknote className="w-4 h-4 text-muted-foreground" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3>Payrol</h3>
                                            <p className="text-muted-foreground text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <div className="flex gap-3">
                                        <div>
                                            <HandCoins className="w-4 h-4 text-muted-foreground" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3>Cash Recept</h3>
                                            <p className="text-muted-foreground text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <Separator />

                <div className="mb-3">
                    {
                        tabs === "payrol" ? <BoxPayrolAnalytics /> : <></>
                    }
                </div>

                <Tabs defaultValue="payrol" value={tabs} onValueChange={setTabs} className="w-full">
                    <TabsList>
                        <TabsTrigger value="payrol">Payrol</TabsTrigger>
                        <TabsTrigger value="cash_receipt">Cash Recept</TabsTrigger>
                    </TabsList>
                    <TabsContent value="payrol">Make changes to your account here.</TabsContent>
                    <TabsContent value="cash_receipt">Change your password here.</TabsContent>
                </Tabs>

            </div>
        </>
    )
}