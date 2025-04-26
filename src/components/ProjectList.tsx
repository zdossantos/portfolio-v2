import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
    return (
        <section id="projects" className="py-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </section>
    );
}
