import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ListView } from "./ListView"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { DataAvatarGroup } from "./types";

const data_teams: Array<DataAvatarGroup> = [
    {
        name: "Team 1",
        src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
        name: "Team 2",
        src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
        name: "Team 3",
        src: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
    },
    {
        name: "Team 4",
        src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    }
]

export default function AvatarGroup() {
    return (
        <>
            <div className="flex -space-x-2">
                {
                    data_teams.map((el: DataAvatarGroup, i: number) => {
                        return <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href={"#"}>
                                    <img className="inline-block size-[36px] rounded-full ring-2 ring-white dark:ring-neutral-900" src={el.src} alt={el.name} />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{el.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    })
                }


                <div className="relative inline-flex">
                    <Popover>
                        <PopoverTrigger asChild>
                            <button id="hs-avatar-group-dropdown" className="hs-dropdown-toggle inline-flex items-center justify-center size-[36px] rounded-full bg-white border-2 border-white font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-300 focus:outline-none focus:bg-blue-100 focus:text-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-white dark:focus:bg-blue-100 dark:focus:text-blue-600 dark:focus:ring-offset-gray-800">
                                <span className="font-medium leading-none">9+</span>
                            </button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0">
                            <ListView className="h-72" title="Teams" />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </>
    )
}