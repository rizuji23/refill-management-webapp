"use client"
import Image from "next/image"
import Link from "next/link"
import {
    ChevronLeft,
    FilePlus,
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    Plus,
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
import TitlePage from "@/components/TitlePage"
import { CalendarDateRangePicker } from "@/components/DateRangePicker"
import AvatarGroup from "@/components/AvatarGroup"
import SelectCustom, { data_demo } from "@/components/SelectCustom"
import { InputGroup } from "@/components/InputGroup"
import { convertCurrency } from "@/lib/utils"
import FormProject from "../FormProjects"

export default function AddProjectsPage() {
    return (
        <div className="flex flex-col sm:gap-4 ">
            <TitlePage title="Add new project" back={true} />
            <FormProject />
        </div>
    )
}
