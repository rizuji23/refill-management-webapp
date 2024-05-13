import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
} from "@radix-ui/react-icons"

export const labels = [
    {
        value: "on_time",
        label: "On Time",
    },
    {
        value: "late",
        label: "Late",
    },
    {
        value: "absent",
        label: "Absent",
    },
    {
        value: "other",
        label: "Other",
    },
]

export const statuses = [
    {
        value: "approved",
        label: "Approved",
        icon: CheckCircledIcon,
    },
    {
        value: "denied",
        label: "Denied",
        icon: CrossCircledIcon,
    },
]