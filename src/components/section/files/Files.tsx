import { Card, CardContent } from "@/components/ui/card";
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { FilePlus, FolderPlus } from "lucide-react";
import BoxFolder from "./components/BoxFolder";
import BoxFile from "./components/BoxFile";


export default function FilesBox() {
    return (
        <>
            <ContextMenu>
                <ContextMenuTrigger asChild>
                    <Card>
                        <CardContent className="w-full p-6 overflow-y-auto">
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col gap-4">
                                    <p className="text-muted-foreground text-sm">Folders</p>
                                    <div className="grid grid-cols-4 gap-6">
                                        {
                                            Array.from({ length: 7 }).map((_, i: number) => {
                                                return <BoxFolder title={`Folder ${i}`} />
                                            })
                                        }
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <p className="text-muted-foreground text-sm">Files</p>
                                    <div className="grid grid-cols-4 gap-6">
                                        {
                                            Array.from({ length: 10 }).map((_, i: number) => {
                                                return <BoxFile title={`File ${i}`} />
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </ContextMenuTrigger>
                <ContextMenuContent>
                    <ContextMenuItem><FolderPlus className="w-4 h-4 text-muted-foreground mr-2" /> Create new folder</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem><FilePlus className="w-4 h-4 text-muted-foreground mr-2" /> Upload file</ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
        </>
    )
}