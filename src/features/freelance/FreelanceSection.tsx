"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Briefcase, Calendar, MapPin, Zap, ExternalLink } from "lucide-react";

const highlights = [
    {
        icon: Zap,
        title: "Disponible",
        description: "Disponible pour des missions freelance dès maintenant.",
    },
    {
        icon: MapPin,
        title: "Dijon & Remote",
        description: "Basé à Dijon (Bourgogne), j'interviens en remote ou sur site.",
    },
    {
        icon: Briefcase,
        title: "Missions",
        description: "Développement web fullstack : Vue.js, React, Next.js, Laravel, TypeScript.",
    },
    {
        icon: Calendar,
        title: "Flexibilité",
        description: "Missions courtes ou longues durées, en régie ou au forfait.",
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
                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        duration={1}
                        once
                        className="text-3xl sm:text-4xl font-bold mb-4"
                    >
                        Disponible en Freelance
                    </TextAnimate>
                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        delay={1}
                        once
                        className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Développeur freelance fullstack basé à Dijon, spécialisé en Vue.js,
                        React, Next.js et Laravel. Prêt pour vos missions.
                    </TextAnimate>
                </div>

                {/* Highlights grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4 rounded-xl p-5 bg-background shadow-sm dark:bg-background/10 backdrop-blur-xs dark:border dark:border-neutral-800"
                            >
                                <div className="flex-shrink-0 rounded-lg p-2 bg-primary/10">
                                    <Icon className="h-5 w-5 text-primary" />
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="https://www.malt.com/profile/zachariedossantos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg px-8 py-3 font-semibold bg-[#FC4B08] text-white hover:bg-[#e04307] transition-colors shadow-md hover:shadow-lg"
                        aria-label="Voir le profil Malt de Zacharie Dos Santos"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M75.7 24.3a8.3 8.3 0 0 0-11.7 0L50 38.3 36 24.3a8.3 8.3 0 0 0-11.7 11.7L38.3 50 24.3 64a8.3 8.3 0 0 0 11.7 11.7L50 61.7l14 14A8.3 8.3 0 0 0 75.7 64L61.7 50l14-14a8.3 8.3 0 0 0 0-11.7z"
                                fill="#fff"
                            />
                        </svg>
                        Voir mon profil Malt
                    </a>
                    <a
                        href="mailto:zacharie21000@gmail.com"
                        className="inline-flex items-center gap-2 rounded-lg px-8 py-3 font-semibold border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                        aria-label="Contacter Zacharie Dos Santos par email"
                    >
                        <ExternalLink className="h-4 w-4" />
                        Me contacter
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
