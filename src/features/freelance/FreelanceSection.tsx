"use client";

import {motion} from "motion/react";
import {cn} from "@/lib/utils";
import {GridPattern} from "@/components/magicui/grid-pattern";
import {TextAnimate} from "@/components/magicui/text-animate";
import {Briefcase, Calendar, MapPin, Zap, ExternalLink} from "lucide-react";
import {MaltIcon} from "@/components/svg/MaltIcon.tsx";
import {Button} from "@/components/ui/button.tsx";
import {links} from "@/config/links.ts";

const highlights = [
    {
        icon: Zap,
        title: "Disponible maintenant",
        description: "Disponible pour des missions freelance dès maintenant. Démarrage rapide possible sous 48h.",
    },
    {
        icon: MapPin,
        title: "Dijon & Full Remote",
        description: "Basé à Dijon (21000, Bourgogne-Franche-Comté), j'interviens en full remote ou sur site en France.",
    },
    {
        icon: Briefcase,
        title: "Expertise Fullstack",
        description: "Développement web fullstack : Vue.js, React, Next.js, Laravel, TypeScript, Node.js, Symfony, WordPress, Shopify.",
    },
    {
        icon: Calendar,
        title: "Missions courtes & longues",
        description: "Régie, forfait ou TMA : je m'adapte à vos besoins, de la mission courte au projet long terme.",
    },
];

export default function FreelanceSection() {
    return (
        <section
            id="freelance"
            className="relative min-h-screen flex items-center justify-center py-16"
        >
            <GridPattern
                opacity={0.3}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom,transparent,white,white,transparent)] absolute inset-0",
                    "h-[110%] -top-[10%]"
                )}
            />

            <div className="relative z-10 w-full max-w-5xl px-4 sm:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className={"flex flex-col gap-1"}>
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            duration={1}
                            once
                            className="text-3xl sm:text-4xl font-bold mb-4 leading-none"
                        >
                            Disponible en
                        </TextAnimate>
                        <TextAnimate
                            animation="blurInUp"
                            by="word"
                            duration={1}
                            once
                            className="text-3xl sm:text-4xl font-bold mb-4 text-malt"
                        >
                            Freelance
                        </TextAnimate>
                    </div>
                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        delay={1}
                        once
                        className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Développeur freelance fullstack basé à Dijon, expert Vue.js, React, Next.js et Laravel.
                        Missions en remote ou sur site. Contactez-moi pour démarrer votre
                        projet.
                    </TextAnimate>
                </div>

                {/* Highlights grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{delay: index * 0.1}}
                                className="flex items-start gap-4 rounded-xl p-5 bg-background shadow-sm dark:bg-background/10 backdrop-blur-xs dark:border dark:border-neutral-800"
                            >
                                <div className="flex-shrink-0 rounded-lg p-2 bg-primary/10">
                                    <Icon className="h-5 w-5 text-primary"/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay: 0.4}}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button size="lg" className="bg-malt text-white hover:bg-malt/90" asChild>
                        <a
                            href={links.malt}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Voir le profil Malt de Zacharie Dos Santos"
                        >
                            <MaltIcon className="size-6 fill-white"/>
                            Voir mon profil Malt
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <a
                            href={`mailto:${links.email}`}
                            aria-label="Contacter Zacharie Dos Santos par email"
                        >
                            <ExternalLink className="size-6"/>
                            Me contacter
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
