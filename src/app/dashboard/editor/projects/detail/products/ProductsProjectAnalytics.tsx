import { Card, CardContent } from "@/components/ui/card";
import { Box, BriefcaseBusiness, Package2 } from "lucide-react";

export default function ProductsDetailAnalytics() {
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                <Card>
                    <CardContent className="p-4">
                        <div className="flex gap-3">
                            <div className="w-12 h-12 bg-secondary grid place-content-center rounded-full">
                                <Package2 className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <p className="text-sm text-muted-foreground">Total Products</p>
                                <h3 className="text-lg font-medium">305</h3>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex gap-3">
                            <div className="w-12 h-12 bg-secondary grid place-content-center rounded-full">
                                <BriefcaseBusiness className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <p className="text-sm text-muted-foreground">Total Sales</p>
                                <h3 className="text-lg font-medium">Rp. 20.000.000</h3>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex gap-3">
                            <div className="w-12 h-12 bg-secondary grid place-content-center rounded-full">
                                <BriefcaseBusiness className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <p className="text-sm text-muted-foreground">Total Cost Of Goods Sold</p>
                                <h3 className="text-lg font-medium">Rp. 15.000.000</h3>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="flex gap-3">
                            <div className="w-12 h-12 bg-secondary grid place-content-center rounded-full">
                                <BriefcaseBusiness className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <p className="text-sm text-muted-foreground">Total Profit</p>
                                <h3 className="text-lg font-medium">Rp. 5.000.000</h3>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}