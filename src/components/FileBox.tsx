import { CloudDownload, FileText, Pencil, Trash } from "lucide-react";
import { Card } from "./ui/card";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function FileBox() {
    return (
        <>
            <Card className="p-4">
                <div className="flex justify-between">
                    <div className="flex gap-3">
                        <div className="bg-primary p-2 rounded-md">
                            <FileText className="text-background w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <Link href={"#"} className="text-sm font-medium hover:underline">Attachment.pdf</Link>
                            <p className="text-xs">24 mb <span className="text-muted-foreground">• 20 July, 2023 11:30 AM</span></p>
                        </div>
                    </div>

                    <div className="flex gap-2 self-center">
                        <Tooltip>
                            <TooltipTrigger asChild><CloudDownload className="text-muted-foreground w-4 h-4 hover:text-primary cursor-pointer" /></TooltipTrigger>
                            <TooltipContent>
                                <p>Download</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild><Pencil className="text-muted-foreground w-4 h-4 hover:text-primary cursor-pointer" /></TooltipTrigger>
                            <TooltipContent>
                                <p>Edit</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild><Trash className="text-destructive w-4 h-4 hover:text-destructive-foreground cursor-pointer" /></TooltipTrigger>
                            <TooltipContent>
                                <p>Delete</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </div>
            </Card>
        </>
    )
}