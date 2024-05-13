import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { FileDown, FileText, PanelRight, Trash } from "lucide-react"
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function EditorProject() {
    return (
        <>
            <div className="grid grid-cols-4 gap-6">
                {
                    Array.from({ length: 5 }).map((_, i: number) => {
                        return <Card className="p-4">
                            <div className="flex justify-between">
                                <div className="flex gap-3 flex-1">
                                    <div>
                                        <div className="bg-primary p-2 rounded-md">
                                            <FileText className="text-background w-5 h-5" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-1 gap-1">
                                        <Link href={"#"} className="text-sm font-medium hover:underline">Pages {i}</Link>
                                        <p className="text-xs">Invoice <span className="text-muted-foreground">• 20 pages</span></p>

                                    </div>

                                    <div>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button size={"sm"} variant={"ghost"} className="p-1 -ml-1">
                                                    <DotsHorizontalIcon className="w-4 h-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem><PanelRight className="w-4 h-4 mr-2 text-muted-foreground" /> See detail</DropdownMenuItem>
                                                <DropdownMenuItem><FileDown className="w-4 h-4 mr-2 text-muted-foreground" /> Download page</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem><Trash className="w-4 h-4 mr-2 text-muted-foreground" /> Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2 justify-end">
                                <p className="text-muted-foreground text-xs font-medium mt-4 text-right">11-05-2024</p>
                            </div>
                        </Card>
                    })
                }
            </div>
        </>
    )
}