import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { useState } from "react";
import { Download, Folder, Info, Share, SquarePen, Trash } from "lucide-react";

export default function ContextMenus({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ContextMenu>
                <ContextMenuTrigger asChild>
                    {children}
                </ContextMenuTrigger>
                <ContextMenuContent>
                    <ContextMenuItem><Download className="w-4 h-4 text-muted-foreground mr-3" /> Download</ContextMenuItem>
                    <ContextMenuItem><SquarePen className="w-4 h-4 text-muted-foreground mr-3" /> Rename</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem><Share className="w-4 h-4 text-muted-foreground mr-3" /> Share</ContextMenuItem>
                    <ContextMenuItem><Info className="w-4 h-4 text-muted-foreground mr-3" /> Folder Information</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem><Trash className="w-4 h-4 text-muted-foreground mr-3" /> Move to trash</ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
        </>
    )
}