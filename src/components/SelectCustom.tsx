"use client"
import { ChevronDownIcon, PlusCircle } from 'lucide-react';
import React from 'react';

import Select, { GroupBase, Options, Props, components } from 'react-select';
import makeAnimated from 'react-select/animated';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const animatedComponents = makeAnimated();

type ISelectReact = {
    label: string,
    value: string
}

export const data_demo: Array<ISelectReact> = [
    {
        label: "Team 1",
        value: "team 1"
    },
    {
        label: "Team 2",
        value: "team 2"
    },
    {
        label: "Team 3",
        value: "team 3"
    },
    {
        label: "Team 4",
        value: "team 4"
    }
]

export interface IHandleAddNewSelect {
    title_add?: string,
    onAddNewData?: () => void;
}

export default function SelectCustom<Option, isMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: Props<Option, isMulti, Group> & IHandleAddNewSelect) {
    const { onAddNewData, title_add, ...otherProps } = props;

    return (
        <>
            <Select
                {...props}
                components={{
                    ...animatedComponents, Menu: (state) => (
                        <components.Menu {...state}>
                            {state.children}

                            {
                                onAddNewData !== undefined && <div>
                                    <Separator />
                                    <Button className='w-full mt-1' size={"sm"} variant={"ghost"} onClick={onAddNewData}><PlusCircle className='w-4 h-4 mr-2' /> Add new {title_add || "Data"}</Button>
                                </div>
                            }
                        </components.Menu>
                    )
                }}
                classNames={{
                    control: (state) => `!flex !border !border-input !bg-transparent !text-sm shadow-sm !ring-offset-background !placeholder:text-muted-foreground !h-9 !rounded-md`,
                    menu: (state) => `!bg-popover !text-popover-foreground !shadow-md !border !border-input !text-sm !rounded-md !p-1`,
                    option: (state) => `!text-popover-foreground text-sm !my-0 !py-1.5 !pl-2 !pr-8 ${state.isFocused || state.isSelected ? "!bg-accent !text-accent-foreground !rounded-md" : ""}`,
                    multiValue: (state) => `!bg-secondary !rounded-sm`,
                    multiValueLabel: (state) => `!text-secondary-foreground`,
                    input: (state) => `!text-primary`,
                    singleValue: (state) => `!text-primary`
                }}

            />
        </>
    )
}