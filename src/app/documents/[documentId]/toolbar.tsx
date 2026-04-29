"use client";

import { LucideIcon, Undo2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import {useEditorStore} from "@/store/use-editor-store";

interface ToolbarButtonProps {
    onClick?: () => void;
    isActive?: boolean;
    icon: LucideIcon;
}

const ToolbarButton = ({
    onClick,
    isActive,
    icon: Icon,
}: ToolbarButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "p-2 rounded-md hover:bg-gray-200 transition",
                isActive && "bg-gray-300"
            )}
        >
            <Icon className="w-4 h-4" />
        </button>
    );
};

export const Toolbar = () => {
    const {setEditor} = useEditorStore();
    const sections: {
        label: string;
        icon: LucideIcon;
        onClick: () => void;
        isActive?: boolean;
    }[][] = [
        [
            {
                label: "Undo",
                icon: Undo2Icon,
                onClick: () => console.log("undo clicked"),
            },
        ],
    ];

    return (
        <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
            {sections[0].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}
        </div>
    );
};