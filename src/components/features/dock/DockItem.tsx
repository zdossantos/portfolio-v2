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
            href={href}
            target={target}
            tooltip={tooltip}
        >
            <Icon className="size-8" />
        </DockIcon>
    );
});

DockItem.displayName = "DockItem"; 