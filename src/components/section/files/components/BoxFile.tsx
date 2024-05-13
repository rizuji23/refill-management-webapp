"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DotsHorizontalIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import ContextMenus from "./ContextMenus";
import { File } from "lucide-react";

export default function BoxFile({ title }: { title: string }) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <ContextMenus>
                <Card className="bg-muted hover:bg-secondary/60 transition-all duration-300 cursor-pointer">
                    <CardContent className="py-3 px-4">
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between">
                                <div className="flex gap-4 flex-1">
                                    <div className="w-[25px] rounded-md h-[25px] bg-primary grid place-content-center self-center">
                                        <File className="w-4 h-4 text-background" />
                                    </div>
                                    <p className="font-semibold text-sm self-center">{title}.png</p>
                                </div>
                                <Button size={"icon"} variant={"ghost"} className="p-1" onClick={() => setOpen(true)}>
                                    <DotsVerticalIcon />
                                </Button>
                            </div>
                            <div className="w-full h-[200px] rounded-md bg-secondary border border-muted bg-[url('https://tailwindcss.com/_next/static/media/5.e8ff4aa4.jpg')] bg-cover">

                            </div>
                        </div>
                    </CardContent>
                </Card>
            </ContextMenus>

        </>
    )
}