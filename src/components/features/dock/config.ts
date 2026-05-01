import {Icons} from "@/components/icons/social-icons";
import {Mail} from "lucide-react";
import {links} from "@/config/links.ts";

export interface DockItemConfig {
    icon?: React.ComponentType<any>;
    href?: string;
    tooltip?: string;
    target?: string;
    isSeparator?: boolean;
}

export const dockItems: DockItemConfig[] = [
    {
        icon: Icons.gitHub,
        href: "https://github.com/zdossantos",
        target: "_blank",
        tooltip: "GitHub"
    },
    {
        icon: Icons.linkedin,
        tooltip: "LinkedIn",
        href: "https://www.linkedin.com/in/zacharie-dos-santos-6106441aa/",
        target: "_blank"
    },
    {
        icon: Icons.malt,
        tooltip: "Profil Malt",
        href: "https://www.malt.com/profile/zachariedossantos",
        target: "_blank"
    },
    {
        icon: Mail,
        tooltip: "Contactez-moi",
        href: `mailto:${links.email}`,
        target: "_blank"
    }
]; 