import { GridPattern } from "@/components/magicui/grid-pattern.tsx";
import { TextAnimate } from "@/components/magicui/text-animate.tsx";
import { cn } from "@/lib/utils.ts";
import { motion } from 'motion/react';
import { categories, skills } from "@/config/skills";
import { SkillCloud } from "@/components/SkillCloud";

const SkillBar = ({ skill }: { skill: typeof skills[0] }) => {
    const { icon: Icon, name, level, color } = skill;
    return (
        <div className="flex items-center gap-3">
            <Icon className="h-5 w-5" style={{ color: color || 'currentColor' }} />
            <span className="font-medium text-neutral-900 dark:text-neutral-100">{name}</span>
        </div>
    );
};

const CategoryCard = ({ category, index }: { category: typeof categories[keyof typeof categories], index: number }) => {
    const { name, icon: Icon, skills } = category;
    const hasManySkills = skills.length > 4;
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
                "flex flex-col overflow-hidden rounded-xl bg-background shadow-sm dark:bg-background/10 backdrop-blur-xs dark:border dark:border-neutral-800",
                hasManySkills && "sm:col-span-2"
            )}>
            <div className="flex-none p-4">
                <div className="flex items-center gap-3">
                    <Icon className="h-8 w-8 text-neutral-700 dark:text-neutral-300" />
                    <div>
                        <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                            {name}
                        </h3>
                        <p className="text-xs text-neutral-400">Compétences en {name.toLowerCase()}</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto">
                <div className="px-3 pb-3">
                    <div className={cn(
                        "flex flex-col gap-3",
                        hasManySkills && "sm:grid sm:grid-cols-2 sm:gap-4"
                    )}>
                        {skills.map((skill) => (
                            <SkillBar key={skill.id} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function StackSection() {
    return (
        <section id="stack" className="relative min-h-screen flex items-center justify-center">
            <GridPattern opacity={0.3} className={cn(
                "[mask-image:linear-gradient(to_bottom,transparent,white,white,transparent)] absolute inset-0",
                "h-[110%] -top-[10%]"
            )}/>
            
            <div className="relative z-10 w-full max-w-7xl px-4 sm:px-8 py-8 sm:py-12">
                <TextAnimate animation="blurInUp" by="word" duration={1} once className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                    Ma Stack Technique
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="word" delay={1} once className="text-lg sm:text-xl mb-8 sm:mb-12 text-center text-muted-foreground">
                    Les technologies que j'utilise au quotidien
                </TextAnimate>
                
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center justify-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-12rem)]">
                    {/* Nuage d'icônes à gauche */}
                    <div className="w-full md:w-1/3 h-full flex items-center justify-center">
                        <div className="w-full h-full flex items-center justify-center">
                            <SkillCloud />
                        </div>
                    </div>
                    
                    {/* Grille à droite */}
                    <div className="w-full md:w-2/3 h-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 h-full">
                            {Object.values(categories).map((category,index) => (
                                <CategoryCard index={index} key={category.name} category={category} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 