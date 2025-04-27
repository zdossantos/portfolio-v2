import { skills } from "@/config/skills";
import { IconCloud } from "@/components/magicui/icon-cloud";

export function SkillCloud() {

  // Générer les icônes avec la couleur récupérée
  const icons = skills.map(skill => {
    const { icon: Icon, name, level, color } = skill;

    return (
        <Icon
        key={skill.id}
        size={90}
        style={{ color: 'white' }}
      />
    );
  });

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud icons={icons} />
    </div>
  );
}
