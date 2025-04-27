import { skills } from "@/config/skills";
import { cn } from "@/lib/utils";
import { IconCloud } from "@/components/magicui/icon-cloud";

export function SkillCloud() {
    const icons = skills.map(skill => {
        const Icon = skill.icon;
        return <Icon key={skill.id} size={90} style={{ color: skill.color }} />;
    });

    return (
        <div className="relative flex size-full items-center justify-center overflow-hidden">
                <IconCloud icons={icons}  />
        </div>
    );
} 