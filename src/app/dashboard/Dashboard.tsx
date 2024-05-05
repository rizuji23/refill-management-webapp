"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Overview from "./section/Overview"
import ActivitySection from "./section/Activity"
import { CalendarDateRangePicker } from "@/components/DateRangePicker"
import { Button } from "@/components/ui/button"
import Payrol from "./section/Payrol"
import ReportsSection from "./section/Reports"
import { useState } from "react"
import { cn } from "@/lib/utils"


export function Dashboard() {
    const [tabs, setTabs] = useState<string>("overview");

    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>
            <Tabs defaultValue="overview" onValueChange={setTabs}>
                <div className="flex mb-5">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="activity">
                            Activity
                        </TabsTrigger>
                        <TabsTrigger value="payrol">
                            Payrol
                        </TabsTrigger>
                        <TabsTrigger value="reports">
                            Reports
                        </TabsTrigger>
                    </TabsList>
                    <div className={cn("ml-auto gap-3", tabs !== "reports" ? "flex" : "hidden")}>
                        <CalendarDateRangePicker />
                        <Button>Filter</Button>
                    </div>
                </div>
                <TabsContent value="overview" className="space-y-4">
                    <Overview />
                </TabsContent>
                <TabsContent value="activity" className="space-y-4">
                    <ActivitySection />
                </TabsContent>
                <TabsContent value="payrol" className="space-y-4">
                    <Payrol />
                </TabsContent>
                <TabsContent value="reports" className="space-y-4">
                    <ReportsSection />
                </TabsContent>
            </Tabs>

        </>
    )
}
