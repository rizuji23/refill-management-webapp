"use client"
import Image from "next/image"
import Link from "next/link"
import {
    ChevronLeft,
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Upload,
    Users2,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
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
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import SelectCustom from "@/components/SelectCustom"
import BoxMaterial from "./data/BoxMaterial"
import BoxTechnicalSpec from "@/components/BoxTechnicalSpec"
import BoxImageGroups from "@/components/BoxImageGroups"
import { Separator } from "@/components/ui/separator"
import { InputGroup } from "@/components/InputGroup"
import BackButton from "@/components/BackButton"

export default function FormProducts() {
    return (
        <>
            <div className="mx-auto grid flex-1 auto-rows-max gap-4">
                <div className="flex items-center gap-2">
                    <BackButton />
                    <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                        Add new Product
                    </h1>
                    {/* <Badge variant="outline" className="ml-auto sm:ml-0">
                        In stock
                    </Badge> */}
                    <div className="hidden items-center gap-2 md:ml-auto md:flex">
                        <Button variant="outline" size="sm">
                            Discard
                        </Button>
                        <Button size="sm">Save Product</Button>
                    </div>
                </div>
                <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                    <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                        <Card x-chunk="dashboard-07-chunk-0">
                            <CardHeader>
                                <CardTitle>Product Details</CardTitle>
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
                                            defaultValue="Gamer Gear Pro Controller"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="grid gap-3">
                                            <Label htmlFor="name">Product Code / SKU</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                className="w-full"
                                                defaultValue="3DPRINT-22321"
                                            />
                                        </div>
                                        <div className="grid gap-3">
                                            <Label htmlFor="name">Basic Unit</Label>
                                            <SelectCustom options={[
                                                {
                                                    label: "Pcs",
                                                    value: "pcs"
                                                },
                                                {
                                                    label: "Buah",
                                                    value: "buah"
                                                }
                                            ]} title_add="Basic Unit" onAddNewData={() => console.log("IN")} />
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
                                <CardTitle>Product Category</CardTitle>
                            </CardHeader>
                            <CardContent>
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
                            </CardContent>
                        </Card>

                        <BoxMaterial />
                        <BoxTechnicalSpec />


                        <div className="flex flex-col gap-5">
                            <div>
                                <h3 className="font-semibold text-xl">Images</h3>
                                <Separator className="mt-3" />
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                                <BoxImageGroups title="Product Images" desc="Lipsum dolor sit amet, consectetur adipiscing elit" />
                                <BoxImageGroups title="Technical Drawings" desc="Lipsum dolor sit amet, consectetur adipiscing elit" />
                            </div>
                        </div>
                    </div>
                    <div className="grid auto-rows-max items-start gap-4 lg:gap-8">

                        <Card x-chunk="dashboard-07-chunk-5">
                            <CardHeader>
                                <CardTitle>Pricing</CardTitle>
                                <CardDescription>
                                    Lipsum dolor sit amet, consectetur adipiscing elit.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label>Product Price</Label>
                                        <InputGroup content="Rp. " />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label className="text-muted-foreground text-xs">Total Cost Of Goods Sold</Label>
                                        <h3 className="text-xl font-semibold">Rp. 20.000.000</h3>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label className="text-muted-foreground text-xs">Total Profit</Label>
                                        <h3 className="text-xl font-semibold">Rp. 20.000.000</h3>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label className="text-muted-foreground text-xs">Total Loss</Label>
                                        <h3 className="text-xl font-semibold">Rp. 20.000.000</h3>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card x-chunk="dashboard-07-chunk-3">
                            <CardHeader>
                                <CardTitle>Product Status</CardTitle>
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

                        <Card x-chunk="dashboard-07-chunk-5">
                            <CardHeader>
                                <CardTitle>Archive Product</CardTitle>
                                <CardDescription>
                                    Lipsum dolor sit amet, consectetur adipiscing elit.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div></div>
                                <Button size="sm" variant="secondary">
                                    Archive Product
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 md:hidden">
                    <Button variant="outline" size="sm">
                        Discard
                    </Button>
                    <Button size="sm">Save Product</Button>
                </div>
            </div>
        </>
    )
}