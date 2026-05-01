    import {useTheme} from "@/components/ThemeProvider.tsx";
import { cn } from '@/lib/utils';
import { Github, ExternalLink } from 'lucide-react';
import { MagicCard } from '@/components/magicui/magic-card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    githubUrl: string;
    siteUrl: string | null;
}

export default function ProjectCard({ title, description, image, githubUrl, siteUrl }: ProjectCardProps) {
    const {theme} = useTheme();
    return (
        <MagicCard
            className={cn(
                "relative h-full w-72 rounded-lg cursor-pointer overflow-hidden p-4",
                "hover:shadow-lg transition-all duration-300"
            )}
            gradientFrom="#ff9048"
            gradientTo={theme === "light" ? "white" : "black"}
            gradientColor={theme === "light" ? "black" : "white"}
        >
            <div className="relative h-32 w-full mb-3 overflow-hidden rounded-lg">
                <img 
                    src={image} 
                    alt={`Aperçu du projet ${title} – ${description.slice(0, 60)}`}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-sm mb-4 line-clamp-2">{description}</p>
            
            <div className="flex gap-2">
                <a 
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir le code source de ${title} sur GitHub`}
                    className="flex items-center gap-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300 text-sm"
                >
                    <Github size={14} aria-hidden="true" />
                    <span>Code</span>
                </a>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            {siteUrl ? (
                                <a
                                    href={siteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visiter le site de ${title}`}
                                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors duration-300 text-sm bg-white/10 hover:bg-white/20"
                                >
                                    <ExternalLink size={14} aria-hidden="true" />
                                    <span>Site</span>
                                </a>
                            ) : (
                                <button
                                    disabled
                                    aria-disabled="true"
                                    aria-label={`Site de ${title} non disponible`}
                                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors duration-300 text-sm bg-white/5 cursor-not-allowed"
                                >
                                    <ExternalLink size={14} aria-hidden="true" />
                                    <span>Site</span>
                                </button>
                            )}
                        </TooltipTrigger>
                        {!siteUrl && (
                            <TooltipContent>
                                <p>Projet non disponible</p>
                            </TooltipContent>
                        )}
                    </Tooltip>
                </TooltipProvider>
            </div>
        </MagicCard>
    );
}
