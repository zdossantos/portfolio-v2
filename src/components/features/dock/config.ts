import { Icons } from "@/components/icons/social-icons";
import { Code, Home, Layers } from "lucide-react";

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
        isSeparator: true
    },
    {
        icon: Home,
        href: "#",
        tooltip: "Accueil"
    },
    {
        icon: Layers,
        href: "#stack",
        tooltip: "Stack Technique"
    },
    {
        icon: Code,
        href: "#projects",
        tooltip: "Projets"
    }
]; 