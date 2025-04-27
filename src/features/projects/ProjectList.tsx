import { projects } from './projects.data';
import ProjectCard from './ProjectCard';
import { Marquee } from '@/components/magicui/marquee';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { cn } from '@/lib/utils';

export default function ProjectList() {
    const firstRow = projects.slice(0, Math.ceil(projects.length / 2));
    const secondRow = projects.slice(Math.ceil(projects.length / 2));

    return (
            <section id="projects" className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
                <DotPattern opacity={0.3} className={cn(
                "[mask-image:linear-gradient(to_bottom,transparent,white,white,transparent)] absolute inset-0",
                "h-[110%] -top-[10%]"
            )}/>
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
            </section>
    );
}