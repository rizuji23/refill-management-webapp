import Sheets from "@/components/Sheets";
import { Dispatch, SetStateAction } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, CloudDownload, Dot, FileText, Fullscreen, Pencil, Plus, Search, Send, SquarePen, ThumbsDown, ThumbsUp, Trash, Upload } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import AvatarGroup from "@/components/AvatarGroup";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import SelectCustom, { data_demo } from "@/components/SelectCustom";
import { CalendarDateRangePicker } from "@/components/DateRangePicker";
import { SheetDescription } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import CommentsBox from "@/components/CommentsBox";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import FileBox from "@/components/FileBox";

export default function SheetTaskDetail({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
    return <Sheets open={open} setOpen={setOpen} title="You can't compress the program without quantifying the open-source" classNameContent="xl:min-w-[800px] w-full sm:w-screen">

        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-5 my-5">
                <div className="grid grid-cols-3">
                    <Label className="text-muted-foreground self-center">Status</Label>
                    <div className="flex self-center">
                        <Badge>In Progress</Badge>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <Label className="text-muted-foreground self-center">Asignee</Label>
                    <div className="flex gap-2">
                        <AvatarGroup />
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button size={"icon"} variant={"outline"} className="rounded-full"><Plus className="w-4 h-4" /></Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div className="grid gap-4">
                                    <div className="space-y-2">
                                        <h4 className="font-medium leading-none">Add Team</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Add new team for your task.
                                        </p>
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="grid items-center gap-4">
                                            <Label htmlFor="width">Width</Label>
                                            <SelectCustom options={data_demo} isMulti={true} closeMenuOnSelect={false} />
                                        </div>
                                    </div>

                                    <Button size={"sm"}>Add</Button>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <Label className="text-muted-foreground self-center">Due Date</Label>
                    <div className="flex gap-2">
                        <p className="text-sm">Jan 20, 2023 - Feb 09, 2023</p>
                        <Popover>
                            <PopoverTrigger asChild>
                                <ChevronRight className="w-5 h-5 cursor-pointer" />
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div className="grid gap-4">
                                    <div className="space-y-2">
                                        <h4 className="font-medium leading-none">Change Due Date</h4>
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="grid items-center gap-4">
                                            <Label htmlFor="width">Range Date</Label>
                                            <CalendarDateRangePicker />
                                        </div>
                                    </div>

                                    <Button size={"sm"}>Change</Button>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <Label className="text-muted-foreground self-center">Label</Label>
                    <div className="flex self-center gap-2">
                        <Badge variant={"outline"}>In Progress</Badge>
                        <Badge variant={"outline"}>In Progress</Badge>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                    <h3 className="text-2xl font-bold">Description</h3>
                    <SquarePen className="w-4 h-4 text-muted-foreground hover:text-primary self-center cursor-pointer" />
                </div>

                <SheetDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam quae fugit quisquam ipsum hic voluptates magni odit suscipit tempora. Aspernatur incidunt, repudiandae mollitia inventore tempora sequi aperiam laboriosam doloremque.
                </SheetDescription>
            </div>
            <div className="mt-10">
                <Tabs defaultValue="progress">
                    <TabsList>
                        <TabsTrigger value="progress">Progress</TabsTrigger>
                        <TabsTrigger value="file">File</TabsTrigger>
                        <TabsTrigger value="comments">Comments</TabsTrigger>
                    </TabsList>
                    <TabsContent value="progress">

                    </TabsContent>
                    <TabsContent value="file">
                        <div className="relative">
                            <div className="flex justify-end">
                                <div className="relative">
                                    <Input placeholder="Search files..." className="pl-9" />
                                    <div className="absolute top-2.5 left-3">
                                        <Search className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            <ScrollArea className="h-96 mt-3 shadow-inner relative">
                                <div className="flex flex-col gap-5 pb-14">
                                    {Array.from({ length: 50 }).map((_, i: number) => <FileBox />)}
                                    <div className="w-full absolute bottom-2">
                                        <Button className="w-full" size={"sm"}><Upload className="w-3 h-3 mr-2" /> Upload new file</Button>
                                    </div>
                                </div>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    <TabsContent value="comments">
                        <div className="flex flex-col gap-3 mt-2">
                            <div className="relative">
                                <ScrollArea className="h-96 mt-3 shadow-inner">
                                    <div className="flex flex-col gap-5 pb-20">
                                        {Array.from({ length: 50 }).map((_, i: number) => <CommentsBox />)}
                                    </div>
                                </ScrollArea>
                                <div className="absolute bottom-3 w-full px-3">
                                    <Card className="p-2 rounded-full  w-full shadow-md bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
                                        <div className="flex justify-between gap-3">
                                            <div className="self-center">
                                                <img src="https://github.com/shadcn.png" alt="@shadcn" className="rounded-full w-8" />
                                            </div>
                                            <div className="flex-1">
                                                <Input placeholder="Comment here..." className="text-xs border-none focus-visible:ring-0" />
                                            </div>
                                            <div>
                                                <Button size={"icon"} className="rounded-full"><Send className="w-4 h-4" /></Button>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </Sheets>
}