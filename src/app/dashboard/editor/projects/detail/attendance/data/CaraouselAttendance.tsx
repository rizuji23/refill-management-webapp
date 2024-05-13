import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export function CaraouselAttendance() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
        >
            <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                        <Link href={"#"}>
                            <Card>
                                <CardContent className="p-5">
                                    <div className="flex flex-col justify-center">
                                        <div className="flex gap-3">
                                            <Avatar className="hidden h-9 w-9 sm:flex">
                                                <AvatarImage src="https://ui.shadcn.com/avatars/01.png" alt="Avatar" />
                                                <AvatarFallback>OM</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col flex-1">
                                                <h4 className="text-sm">M Rizki Fauzi</h4>
                                                <small className="text-xs text-muted-foreground">Team {index}</small>

                                                <div className="flex flex-col gap-1 mt-3">
                                                    <div>
                                                        <small className="text-muted-foreground text-xs">Avg. Monthly</small>
                                                        <div className="flex gap-3 mt-1">
                                                            <div className="flex-1 self-center">
                                                                <Progress value={65} />
                                                            </div>
                                                            <small className="text-xs text-muted-foreground">65%</small>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <small className="text-muted-foreground text-xs">Avg. Year</small>
                                                        <div className="flex gap-3 mt-1">
                                                            <div className="flex-1 self-center">
                                                                <Progress value={50} />
                                                            </div>
                                                            <small className="text-xs text-muted-foreground">50%</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex justify-end gap-3 mt-3">
                <CarouselPrevious className="!right-0 !transform-none !static !left-0 !top-0" />
                <CarouselNext className="!right-0 !transform-none !static" />
            </div>
        </Carousel>
    )
}
