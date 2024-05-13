"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DotsHorizontalIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import ContextMenus from "./ContextMenus";
import { Folder } from "lucide-react";

export default function BoxFolder({ title }: { title: string }) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <ContextMenus>
                <Card className="bg-muted hover:bg-secondary/60 transition-all duration-300 cursor-pointer">
                    <CardContent className="py-3 px-4">
                        <div className="flex justify-between">
                            <div className="flex gap-4 flex-1">
                                <div className="w-[35px] rounded-md h-[35px] bg-primary grid place-content-center">
                                    <Folder className="w-5 h-5 text-background" />
                                </div>
                                <p className="font-semibold text-sm self-center">{title}</p>
                            </div>
                            <Button size={"icon"} variant={"ghost"} className="p-1" onClick={() => setOpen(true)}>
                                <DotsVerticalIcon />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </ContextMenus>


        </>
    )
}