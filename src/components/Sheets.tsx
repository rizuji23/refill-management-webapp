import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Check, Fullscreen, Heart, Maximize2, Star } from "lucide-react"
import { Dispatch, SetStateAction } from "react"

export default function Sheets({ title, desc = "", open, setOpen, children, classNameContent = "" }: { title: string, desc?: string, open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, children: React.ReactNode, classNameContent?: string }) {
    return (
        <>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent className={cn(classNameContent, "h-auto mt-4 mb-4 mr-4 border rounded-xl p-8 !overflow-y-auto")}>
                    <Maximize2 className="absolute right-12 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary h-4 w-4 cursor-pointer" />
                    <Star className="absolute right-[80px] top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary h-4 w-4 cursor-pointer" />
                    <SheetHeader>
                        <SheetTitle className="text-3xl">{title}</SheetTitle>
                        {
                            desc.length !== 0 && <SheetDescription>
                                {desc}
                            </SheetDescription>
                        }
                    </SheetHeader>
                    <div className="mt-5 h-full">
                        {children}
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}
