import { projects } from '../../config/projects';
import ProjectCard from './ProjectCard';
import { Marquee } from '@/components/magicui/marquee';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function ProjectList() {
    const firstRow = projects.slice(0, Math.ceil(projects.length / 2));
    const secondRow = projects.slice(Math.ceil(projects.length / 2));

    // Détection de la taille de l'écran côté client
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Vérifie si l'écran est mobile au chargement
        checkIfMobile();

        // Ajoute un listener pour ajuster à la taille de l'écran
        window.addEventListener('resize', checkIfMobile);

        // Nettoyage de l'écouteur lors du démontage
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return (
        <motion.section
            id="projects"
            className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <DotPattern opacity={0.3} className={cn(
                "[mask-image:linear-gradient(to_bottom,transparent,white,white,transparent)] absolute inset-0",
                "h-[110%] -top-[10%]"
            )}/>

            {/* Affichage sur mobile : scroll horizontal infini */}
            {isMobile ? (
                <div className="flex w-full overflow-x-auto space-x-4 px-8 py-4 no-scrollbar">
                    {[...firstRow, ...secondRow].map((project) => (
                        <div key={project.title} className="flex-shrink-0">
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            ) : (
                // Affichage sur grand écran : marquee
                <>
                    <Marquee className="mb-8 [--duration:40s]" pauseOnHover>
                        {firstRow.map((project) => (
                            <div key={project.title} className="mx-4">
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </Marquee>
                    <Marquee reverse className="[--duration:40s]" pauseOnHover>
                        {secondRow.map((project) => (
                            <div key={project.title} className="mx-4">
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </Marquee>
                </>
            )}
        </motion.section>
    );
}
