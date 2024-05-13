import { ThumbsDown, ThumbsUp } from "lucide-react";
import { Card } from "./ui/card";

export default function CommentsBox() {
    return (
        <>
            <Card className="p-4">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                        <div className="self-center">
                            <img src="https://github.com/shadcn.png" alt="@shadcn" className="rounded-full w-5" />
                        </div>
                        <p className="text-xs font-bold self-center">M Rizki Fauzi</p>
                        <span className="text-muted-foreground text-sm">•</span>
                        <small className="text-xs text-muted-foreground self-center">03 Jun, 2023 11:40 AM</small>
                    </div>

                    <p className="text-sm">Hi <span className="text-blue-500 hover:underline cursor-pointer">@Liz</span> ! I checked the results, there are some comments in figma, can you check it now, thanks.</p>

                    <div className="flex mt-3 justify-between">
                        <div className="flex gap-3">
                            <div className="flex gap-1 self-center">
                                <ThumbsUp className="text-muted-foreground hover:text-primary w-4 h-4 cursor-pointer" />
                                <span className="text-xs text-muted-foreground self-center">3</span>
                            </div>
                            <div className="flex gap-1 self-center">
                                <ThumbsDown className="text-muted-foreground hover:text-destructive w-4 h-4 cursor-pointer" />
                                <span className="text-xs text-muted-foreground self-center">3</span>
                            </div>
                        </div>

                        <div className="self-end">
                            <p className="text-muted-foreground hover:text-primary hover:underline cursor-pointer text-xs">4 Reply</p>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}