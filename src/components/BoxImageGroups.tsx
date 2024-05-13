"use client"
import Image from "next/image"
import {
    Upload,
} from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function BoxImageGroups({ title, desc = "" }: { title: string, desc?: string }) {
    return (
        <Card
            className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
        >
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {
                    desc.length !== 0 && (
                        <CardDescription>
                            {desc}
                        </CardDescription>
                    )
                }
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    <Image
                        alt={title}
                        className="aspect-square w-full rounded-md object-cover"
                        height="300"
                        src="https://ui.shadcn.com/placeholder.svg"
                        width="300"
                    />
                    <div className="grid grid-cols-3 gap-2">
                        <button>
                            <Image
                                alt={title}
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src="https://ui.shadcn.com/placeholder.svg"
                                width="84"
                            />
                        </button>
                        <button>
                            <Image
                                alt={title}
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src="https://ui.shadcn.com/placeholder.svg"
                                width="84"
                            />
                        </button>
                        <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                            <Upload className="h-4 w-4 text-muted-foreground" />
                            <span className="sr-only">Upload</span>
                        </button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}