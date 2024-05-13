import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusCircle } from "lucide-react";
import EditorProject from "./EditorProject";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function EditorProjectPage() {
    return (
        <>
            <div className="space-y-6">
                <div className="flex">
                    <div>
                        <h3 className="text-lg font-medium">Editor Project</h3>
                        <p className="text-sm text-muted-foreground">
                            You can see & create the attendance by your Projects.
                        </p>
                    </div>
                    <div className="flex gap-3 ml-auto self-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size={"sm"}><PlusCircle size={14} className="mr-2" /> Add new pages</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="max-w-[350px]">
                                <DropdownMenuItem className="p-3">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-md font-medium">Invoice</h3>
                                        <p className="text-xs text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima quam, laudantium.</p>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="p-3">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-md font-medium">Unit</h3>
                                        <p className="text-xs text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima quam, laudantium.</p>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="p-3">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-md font-medium">Salary Slip</h3>
                                        <p className="text-xs text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima quam, laudantium.</p>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="p-3">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-md font-medium">Invoice</h3>
                                        <p className="text-xs text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima quam, laudantium.</p>
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <Separator />
                <EditorProject />
            </div>
        </>
    )
}