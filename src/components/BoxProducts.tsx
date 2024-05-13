"use client"
import {
    FilePlus,
    PlusCircle,
} from "lucide-react"
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

export default function BoxProducts() {
    return (
        <>
            <Card x-chunk="dashboard-07-chunk-1">
                <CardHeader>
                    <CardTitle>Products</CardTitle>
                    <CardDescription>
                        Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">SKU</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Unit Price</TableHead>
                                <TableHead className="w-[100px]">Total</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-semibold">
                                    GGPC-001
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
                                    <Label htmlFor="price-1" className="sr-only">
                                        Price
                                    </Label>
                                    <Input
                                        id="price-1"
                                        type="number"
                                        defaultValue="99.99"
                                    />
                                </TableCell>
                                <TableCell>
                                    <ToggleGroup
                                        type="single"
                                        defaultValue="s"
                                        variant="outline"
                                    >
                                        <ToggleGroupItem value="s">S</ToggleGroupItem>
                                        <ToggleGroupItem value="m">M</ToggleGroupItem>
                                        <ToggleGroupItem value="l">L</ToggleGroupItem>
                                    </ToggleGroup>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-semibold">
                                    GGPC-002
                                </TableCell>
                                <TableCell>
                                    <Label htmlFor="stock-2" className="sr-only">
                                        Stock
                                    </Label>
                                    <Input
                                        id="stock-2"
                                        type="number"
                                        defaultValue="143"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Label htmlFor="price-2" className="sr-only">
                                        Price
                                    </Label>
                                    <Input
                                        id="price-2"
                                        type="number"
                                        defaultValue="99.99"
                                    />
                                </TableCell>
                                <TableCell>
                                    <ToggleGroup
                                        type="single"
                                        defaultValue="m"
                                        variant="outline"
                                    >
                                        <ToggleGroupItem value="s">S</ToggleGroupItem>
                                        <ToggleGroupItem value="m">M</ToggleGroupItem>
                                        <ToggleGroupItem value="l">L</ToggleGroupItem>
                                    </ToggleGroup>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-semibold">
                                    GGPC-003
                                </TableCell>
                                <TableCell>
                                    <Label htmlFor="stock-3" className="sr-only">
                                        Stock
                                    </Label>
                                    <Input
                                        id="stock-3"
                                        type="number"
                                        defaultValue="32"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Label htmlFor="price-3" className="sr-only">
                                        Stock
                                    </Label>
                                    <Input
                                        id="price-3"
                                        type="number"
                                        defaultValue="99.99"
                                    />
                                </TableCell>
                                <TableCell>
                                    <ToggleGroup
                                        type="single"
                                        defaultValue="s"
                                        variant="outline"
                                    >
                                        <ToggleGroupItem value="s">S</ToggleGroupItem>
                                        <ToggleGroupItem value="m">M</ToggleGroupItem>
                                        <ToggleGroupItem value="l">L</ToggleGroupItem>
                                    </ToggleGroup>
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
                                Add Variant
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem><PlusCircle className="w-4 h-4 mr-3" /> Add new product</DropdownMenuItem>
                            <DropdownMenuItem><FilePlus className="w-4 h-4 mr-3" /> Add existing product</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardFooter>
            </Card>
        </>
    )
}