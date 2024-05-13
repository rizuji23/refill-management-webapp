import Image from "next/image"
import Link from "next/link"
import {
    Archive,
    MoreHorizontal,
    Pencil,
    Trash,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
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
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function TableProjects() {
    return (
        <>
            <Card x-chunk="dashboard-06-chunk-0">
                <CardContent className="p-6">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="hidden w-[100px] sm:table-cell">
                                    <span className="sr-only">Image</span>
                                </TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Location
                                </TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Due Date
                                </TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                Array.from({ length: 5 }).map((_, i: number) => {
                                    return <TableRow>
                                        <TableCell className="hidden sm:table-cell">
                                            <Image
                                                alt="Product image"
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src="https://ui.shadcn.com/placeholder.svg"
                                                width="64"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            <Link href={"/dashboard/editor/projects/detail"} className="hover:underline">
                                                Laser Lemonade Machine
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline">Draft</Badge>
                                        </TableCell>
                                        <TableCell>Garut</TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            25
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            <Badge variant={"outline"}>2023-07-12 - 2023-07-12</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        aria-haspopup="true"
                                                        size="icon"
                                                        variant="ghost"
                                                    >
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">Toggle menu</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem><Pencil className="mr-2 h-3 w-3" /> Edit</DropdownMenuItem>
                                                    <DropdownMenuItem><Trash className="mr-2 h-3 w-3" /> Delete</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem><Archive className="mr-2 h-3 w-3" /> Archive</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                })
                            }

                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <div className="text-xs text-muted-foreground">
                        Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                        products
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}