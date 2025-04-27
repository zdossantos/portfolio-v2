"use client";

import React from "react";
import { Dock as MagicDock } from "@/components/magicui/dock";
import { Separator } from "@/components/ui/separator";
import { DockItem } from "./DockItem";
import { dockItems } from "./config";

export function Dock() {
    return (
        <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50">
            <MagicDock iconMagnification={60} iconDistance={100}>
                {dockItems.map((item, index) => {
                    if (item.isSeparator) {
                        return <Separator key={index} orientation="vertical" />;
                    }
                    return (
                        <DockItem 
                            key={index}
                            icon={item.icon!}
                            href={item.href}
                            target={item.target}
                            tooltip={item.tooltip!}
                        />
                    );
                })}
            </MagicDock>
        </div>
    );
} 