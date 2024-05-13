import { CalendarDateRangePicker } from "@/components/DateRangePicker";
import { DrawerDialog } from "@/components/DrawerDialog";
import SelectCustom, { data_demo } from "@/components/SelectCustom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DrawerFooter } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";
import { Dispatch, SetStateAction } from "react";

const Editor = dynamic(() => import("../../../../../../../components/Editor"), { ssr: false });

export default function ModalAddTask({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <>
            <DrawerDialog title="Add new task" desc="" open={open} setOpen={setOpen} max_length="max-w-[650px]">
                <div className="grid gap-2">
                    <Label htmlFor="subject">Task Name</Label>
                    <Input id="subject" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="subject">Description</Label>
                    <Textarea />
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label>People</Label>
                        <Separator />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="subject">Assignee</Label>
                        <SelectCustom options={data_demo} isMulti={true} closeMenuOnSelect={false} />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label>Estimates and Progress</Label>
                        <Separator />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="area">Date</Label>
                        <CalendarDateRangePicker />
                    </div>
                </div>

                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label>Details</Label>
                        <Separator />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="area">Priority *</Label>
                            <Select defaultValue="billing">
                                <SelectTrigger id="area">
                                    <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="low">Low</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="high">High</SelectItem>
                                    <SelectItem value="immediate">Immediate</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="security-level">Category</Label>
                            <SelectCustom options={data_demo} isMulti={true} closeMenuOnSelect={false} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="area">Status *</Label>
                            <Select defaultValue="billing">
                                <SelectTrigger id="area">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="backlog">Backlog</SelectItem>
                                    <SelectItem value="todo">Todo</SelectItem>
                                    <SelectItem value="in_progress">In Progress</SelectItem>
                                    <SelectItem value="done">Done</SelectItem>
                                    <SelectItem value="canceled">Canceled</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="area">Tag</Label>
                            <Select defaultValue="billing">
                                <SelectTrigger id="area">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="team">Team</SelectItem>
                                    <SelectItem value="billing">Billing</SelectItem>
                                    <SelectItem value="account">Account</SelectItem>
                                    <SelectItem value="deployments">Deployments</SelectItem>
                                    <SelectItem value="support">Support</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 justify-end mt-3">
                    <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                    <Button>Submit</Button>
                </div>
            </DrawerDialog>
        </>
    )
}