import React from "react";
import { Input, InputProps } from "./ui/input";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
    content: string,
    position?: "left" | "right",
    padding_left?: string,
    padding_right?: string
}

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupProps>(
    ({ className, type, position = "left", ...props }, ref) => {
        return (
            <>
                <div className="relative">
                    <Input type={type} className={cn(className, position === "left" ? `${props.padding_left || "pl-14"}` : `${props.padding_right || "pr-14"}`)} {...props} />
                    <div className={cn("absolute top-1", position === "left" ? "left-2" : "right-2")}>
                        <Badge>{props.content}</Badge>
                    </div>
                </div>
            </>
        )
    }
)

InputGroup.displayName = "InputGroup"

export { InputGroup }