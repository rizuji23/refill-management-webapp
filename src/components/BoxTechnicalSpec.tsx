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

export default function BoxTechnicalSpec() {
    return (
        <>
            <Card x-chunk="dashboard-07-chunk-1">
                <CardHeader>
                    <CardTitle>Technical Specification</CardTitle>
                    <CardDescription>
                        You can add Technical Specification for your product.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Content</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-semibold">
                                    <span>Dimension</span>
                                </TableCell>
                                <TableCell>
                                    <span>30 x 30 cm</span>
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="justify-center border-t p-4">
                    <Button size="sm" variant="ghost" className="gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        Add Specification
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}