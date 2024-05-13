import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cva } from "class-variance-authority";
import { GripVertical, MessageCircleMore, Paperclip, Copy, PanelRight, Pencil, Star, Tag, Trash } from "lucide-react";
import { Badge } from "../ui/badge";
import { ColumnId } from "./KanbanBoard";
import AvatarGroup from "../AvatarGroup";
import { Progress } from "../ui/progress";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { labels } from "@/app/dashboard/editor/projects/detail/task/data/data";

export interface Task {
    id: UniqueIdentifier;
    columnId: ColumnId;
    content: string;
}

interface TaskCardProps {
    task: Task;
    isOverlay?: boolean;
}

export type TaskType = "Task";

export interface TaskDragData {
    type: TaskType;
    task: Task;
}

export function TaskCard({ task, isOverlay }: TaskCardProps) {
    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: task.id,
        data: {
            type: "Task",
            task,
        } satisfies TaskDragData,
        attributes: {
            roleDescription: "Task",
        },
    });

    const style = {
        transition,
        transform: CSS.Translate.toString(transform),
    };

    const variants = cva("", {
        variants: {
            dragging: {
                over: "ring-2 opacity-30",
                overlay: "ring-2 ring-primary",
            },
        },
    });

    return (
        <Card
            ref={setNodeRef}
            style={style}
            className={variants({
                dragging: isOverlay ? "overlay" : isDragging ? "over" : undefined,
            })}
        >
            <CardContent className="px-3 pt-3 pb-6 text-left whitespace-pre-wrap">
                <div className="flex gap-3">
                    <Button
                        variant={"ghost"}
                        {...attributes}
                        {...listeners}
                        size={"sm"}
                        className="p-1 text-secondary-foreground/50 -ml-2 h-full cursor-grab self-center"
                    >
                        <span className="sr-only">Move task</span>
                        <GripVertical className="w-4 h-4" />
                    </Button>
                    <div className="flex flex-col gap-3 flex-1">
                        <div className="flex gap-2">
                            <div>
                                <Badge variant={"outline"} className="font-semibold text-xs">
                                    TASK-8782
                                </Badge>
                            </div>
                            <div>
                                <Badge variant={"outline"} className="font-semibold text-xs">
                                    Task
                                </Badge>
                            </div>

                            <div className="ml-auto">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button className="p-1 text-secondary-foreground -ml-2 h-full self-center" variant={"ghost"}>
                                            <DotsHorizontalIcon className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-[180px]">
                                        <DropdownMenuItem><PanelRight className="w-4 h-4 mr-2 text-muted-foreground" /> Open details view</DropdownMenuItem>
                                        <DropdownMenuItem><Pencil className="w-4 h-4 mr-2 text-muted-foreground" /> Edit</DropdownMenuItem>
                                        <DropdownMenuItem><Copy className="w-4 h-4 mr-2 text-muted-foreground" /> Make a copy</DropdownMenuItem>
                                        <DropdownMenuItem><Star className="w-4 h-4 mr-2 text-muted-foreground" /> Favorite</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <Trash className="w-4 h-4 mr-2 text-muted-foreground" /> Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </div>
                        </div>
                        <div>
                            <p className="text-sm">{task.content}</p>
                        </div>
                        <div className="flex flex-col gap-4 mt-3">
                            <div className="flex flex-col gap-1">
                                <div className="ml-auto">
                                    <span className="text-xs text-muted-foreground">33%</span>
                                </div>
                                <Progress value={33} />
                            </div>
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <AvatarGroup size="sm" />
                                </div>
                                <div className="flex gap-3 self-end">
                                    <div className="flex gap-1">
                                        <Paperclip className="w-4 h-4 text-muted-foreground" />
                                        <p className="text-xs text-muted-foreground">6</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <MessageCircleMore className="w-4 h-4 text-muted-foreground" />
                                        <p className="text-xs text-muted-foreground">10</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}