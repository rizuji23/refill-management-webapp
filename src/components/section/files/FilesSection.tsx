import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FilePlus, FolderPlus } from "lucide-react";
import FilesBox from "./Files";

export default function FilesSection({ title, desc = "" }: { title: string, desc?: string }) {
    return (
        <>
            <div className="space-y-6">
                <div className="flex">
                    <div>
                        <h3 className="text-lg font-medium">{title}</h3>
                        {
                            desc.length !== 0 && (
                                <p className="text-sm text-muted-foreground">
                                    {desc}
                                </p>
                            )
                        }
                    </div>
                    <div className="flex gap-3 ml-auto self-center">
                        <Button variant={"default"} size={"sm"}><FilePlus size={14} className="mr-2" /> Upload Files</Button>
                        <Button variant={"default"} size={"sm"}><FolderPlus size={14} className="mr-2" /> Create New Folder</Button>
                    </div>
                </div>
                <Separator />
                <FilesBox />
            </div>
        </>
    )
}