import { motion } from 'motion/react';
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
    return (
        <MagicCard
            className={cn(
                "relative h-full w-72 rounded-lg cursor-pointer overflow-hidden p-4",
                "hover:shadow-lg transition-all duration-300"
            )}
        >
            <div className="relative h-32 w-full mb-3 overflow-hidden rounded-lg">
                <img 
                    src={image} 
                    alt={title}
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
            <p className="text-sm text-gray-300 mb-4 line-clamp-2">{description}</p>
            
            <div className="flex gap-2">
                <a 
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors duration-300 text-sm"
                >
                    <Github size={14} />
                    <span>Code</span>
                </a>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a 
                                href={siteUrl || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors duration-300 text-sm",
                                    siteUrl 
                                        ? "bg-white/10 hover:bg-white/20 text-white"
                                        : "bg-white/5 text-white/50 cursor-not-allowed"
                                )}
                                onClick={(e) => !siteUrl && e.preventDefault()}
                            >
                                <ExternalLink size={14} />
                                <span>Site</span>
                            </a>
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
