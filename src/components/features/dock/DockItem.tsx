import React from "react";
import { DockIcon } from "@/components/magicui/dock";
import type { IconProps } from "@/components/icons/social-icons";

interface DockItemProps {
    icon: React.ComponentType<IconProps>;
    href?: string;
    tooltip: string;
    target?: string;
}

export const DockItem = React.memo<DockItemProps>(({ 
    icon: Icon, 
    href, 
    tooltip, 
    target 
}) => {
    return (
        <DockIcon 
            className="bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors duration-200" 
            href={href}
            target={target}
            tooltip={tooltip}
        >
            <Icon className="size-full" />
        </DockIcon>
    );
});

DockItem.displayName = "DockItem"; 