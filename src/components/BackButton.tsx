import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function BackButton({ href = "", className = "", title = "" }: { href?: string, className?: string, title?: string }) {
    const router = useRouter();

    return (
        <>
            <div className="flex gap-3">
                <Button variant="outline" onClick={() => href.length !== 0 ? router.push(href) : router.back()} size="icon" className={cn("h-7 w-7", className)}>
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                </Button>
                <p className="text-sm text-muted-foreground self-center">{title}</p>
            </div>
        </>
    )
}