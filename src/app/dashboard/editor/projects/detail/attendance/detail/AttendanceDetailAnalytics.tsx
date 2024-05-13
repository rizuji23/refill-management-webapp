import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BriefcaseBusiness, Clock, Hourglass, TimerReset } from "lucide-react";

export default function AttendanceDetailAnalytics() {
    return (
        <>
            <Card>
                <CardContent className="p-6">
                    <div className="flex flex-col gap-7">
                        <div className="flex gap-5">
                            <div>
                                <img src="https://ui.shadcn.com/avatars/02.png" className="w-[100px] rounded-full" />
                            </div>
                            <div className="grid grid-cols-2 flex-1 gap-3">
                                <div>
                                    <h1 className="text-xl font-bold">M Rizki Fauzi</h1>
                                    <p className="text-sm text-muted-foreground">Team 01</p>
                                    <div className="flex gap-3 mt-3">
                                        <Card>
                                            <CardContent className="p-3">
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-xs">Clock In</p>
                                                    <p className="font-medium">09:00 AM</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardContent className="p-3">
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-xs">Clock Out</p>
                                                    <p className="font-medium">--:--</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardContent className="p-3">
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-xs">Working Hrs</p>
                                                    <p className="font-medium">09:00 AM</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                                <div className="border-l-2 pl-5">
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
                        <div className="grid grid-cols-4 gap-4">
                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex gap-3">
                                        <div className="w-12 h-12 bg-secondary grid place-content-center rounded-full">
                                            <BriefcaseBusiness className="w-5 h-5 text-primary" />
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <p className="text-sm text-muted-foreground">Total Attendance</p>
                                            <h3 className="text-lg font-medium">305</h3>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex gap-3">
                                        <div className="w-12 h-12 bg-secondary grid place-content-center rounded-full">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <p className="text-sm text-muted-foreground">Avg. Check In Time</p>
                                            <h3 className="text-lg font-medium">08:43</h3>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex gap-3">
                                        <div className="w-12 h-12 bg-secondary grid place-content-center rounded-full">
                                            <TimerReset className="w-5 h-5 text-primary" />
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <p className="text-sm text-muted-foreground">Avg. Check Out Time</p>
                                            <h3 className="text-lg font-medium">17:05</h3>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex gap-3">
                                        <div className="w-12 h-12 bg-secondary grid place-content-center rounded-full">
                                            <Hourglass className="w-5 h-5 text-primary" />
                                        </div>
                                        <div className="flex-1 flex flex-col">
                                            <p className="text-sm text-muted-foreground">Avg. Working Hours</p>
                                            <h3 className="text-lg font-medium">305</h3>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}