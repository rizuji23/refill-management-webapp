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
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { CalendarDateRangePicker } from "@/components/DateRangePicker"
import AvatarGroup from "@/components/AvatarGroup"
import SelectCustom, { data_demo } from "@/components/SelectCustom"
import { InputGroup } from "@/components/InputGroup"
import { convertCurrency } from "@/lib/utils"
import BoxProducts from "@/components/BoxProducts"
import ImageGridInput from "@/components/ImageGridInput"

export default function FormProject({ isDetail = false }: { isDetail?: boolean }) {
    return (
        <>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <div className="mx-auto grid max-w-[69rem] flex-1 auto-rows-max gap-4">
                    <div className="flex items-center gap-4">
                        <div className="hidden items-center gap-2 md:ml-auto md:flex">
                            <Button variant="outline" size="sm">
                                Discard
                            </Button>
                            <Button size="sm">Save Project</Button>
                        </div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                            <Card x-chunk="dashboard-07-chunk-0">
                                <CardHeader>
                                    <CardTitle>Project Details</CardTitle>
                                    <CardDescription>
                                        Lipsum dolor sit amet, consectetur adipiscing elit
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-6">
                                        <div className="grid gap-3">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="grid gap-3">
                                                <Label htmlFor="name">Location</Label>
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    className="w-full"

                                                />
                                            </div>
                                            <div className="grid gap-3">
                                                <Label htmlFor="name">Due Date</Label>
                                                <CalendarDateRangePicker className="!w-full" />
                                            </div>
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="name">Contact</Label>
                                            <SelectCustom options={data_demo} closeMenuOnSelect={true} title_add="Contact" onAddNewData={() => console.log("IN")} />
                                        </div>
                                        <div className="grid gap-6 sm:grid-cols-3">
                                            <div className="grid gap-3">
                                                <Label htmlFor="category">Category</Label>
                                                <Select>
                                                    <SelectTrigger
                                                        id="category"
                                                        aria-label="Select category"
                                                    >
                                                        <SelectValue placeholder="Select category" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="clothing">Clothing</SelectItem>
                                                        <SelectItem value="electronics">
                                                            Electronics
                                                        </SelectItem>
                                                        <SelectItem value="accessories">
                                                            Accessories
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="grid gap-3">
                                                <Label htmlFor="subcategory">
                                                    Subcategory (optional)
                                                </Label>
                                                <Select>
                                                    <SelectTrigger
                                                        id="subcategory"
                                                        aria-label="Select subcategory"
                                                    >
                                                        <SelectValue placeholder="Select subcategory" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="t-shirts">T-Shirts</SelectItem>
                                                        <SelectItem value="hoodies">Hoodies</SelectItem>
                                                        <SelectItem value="sweatshirts">
                                                            Sweatshirts
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="description">Description</Label>
                                            <Textarea
                                                id="description"
                                                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                                                className="min-h-32"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card x-chunk="dashboard-07-chunk-2">
                                <CardHeader>
                                    <CardTitle>Additional Infomation</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-6">
                                        <Card className="p-4">
                                            <div className="grid gap-3">
                                                <Label htmlFor="name">Select Team</Label>
                                                <SelectCustom options={data_demo} isMulti={true} closeMenuOnSelect={false} />
                                            </div>
                                            <div className="mt-4 flex gap-3">
                                                <Label className="self-center">Selected Team</Label>
                                                <AvatarGroup />
                                            </div>
                                        </Card>
                                        <div className="grid gap-3">
                                            <Label>Project Pricing</Label>
                                            <InputGroup content="Rp." onChange={(e) => console.log(convertCurrency(e.target.value))} position="left" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            {
                                isDetail === false && (<BoxProducts />)
                            }

                            <Card x-chunk="dashboard-07-chunk-1">
                                <CardHeader>
                                    <CardTitle>Technical Information</CardTitle>
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


                        </div>
                        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                            <Card x-chunk="dashboard-07-chunk-3">
                                <CardHeader>
                                    <CardTitle>Project Status</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-6">
                                        <div className="grid gap-3">
                                            <Label htmlFor="status">Status</Label>
                                            <Select>
                                                <SelectTrigger id="status" aria-label="Select status">
                                                    <SelectValue placeholder="Select status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="draft">Draft</SelectItem>
                                                    <SelectItem value="published">Active</SelectItem>
                                                    <SelectItem value="archived">Archived</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <ImageGridInput title="Project Images" />
                            <ImageGridInput title="Technical drawings" />

                        </div>
                    </div>
                    <Card x-chunk="dashboard-07-chunk-5" className="mt-5">
                        <CardHeader>
                            <CardTitle>Danger Zone</CardTitle>
                            <CardDescription>
                                Lipsum dolor sit amet, consectetur adipiscing elit.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-3">
                                <Button size="sm" variant="secondary">
                                    Archive Project
                                </Button>
                                <Button size="sm" variant="destructive">
                                    Delete Project
                                </Button>
                            </div>

                        </CardContent>
                    </Card>
                    <div className="flex items-center justify-center gap-2 md:hidden">
                        <Button variant="outline" size="sm">
                            Discard
                        </Button>
                        <Button size="sm">Save Project</Button>
                    </div>
                </div>
            </main>
        </>
    )
}
