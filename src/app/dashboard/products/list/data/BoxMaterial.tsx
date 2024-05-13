"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import SelectCustom from "@/components/SelectCustom"
import { FilePlus, PlusCircle } from "lucide-react"

export default function BoxMaterial() {
    return (
        <>
            <Card x-chunk="dashboard-07-chunk-1">
                <CardHeader>
                    <CardTitle>Materials</CardTitle>
                    <CardDescription>
                        You can add materials for your product to count the cost of goods sold.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead className="w-[100px]">Quantity</TableHead>
                                <TableHead>Sub Total</TableHead>
                                <TableHead className="text-right">Total</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-semibold">
                                    <span>e-Sun Filament White</span>
                                </TableCell>
                                <TableCell>
                                    <Label htmlFor="stock-1" className="sr-only">
                                        Stock
                                    </Label>
                                    <Input
                                        id="stock-1"
                                        type="number"
                                        defaultValue="100"
                                    />
                                </TableCell>
                                <TableCell>
                                    <span>Rp. 20.000.000</span>
                                </TableCell>
                                <TableCell className="text-right">
                                    <span>Rp. 40.000.000</span>
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="justify-center border-t p-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button size="sm" variant="ghost" className="gap-1">
                                <PlusCircle className="h-3.5 w-3.5" />
                                Add Materials
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem><PlusCircle className="w-4 h-4 mr-3" /> Add new material</DropdownMenuItem>
                            <DropdownMenuItem><FilePlus className="w-4 h-4 mr-3" /> Add existing material</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardFooter>
            </Card>
        </>
    )
}