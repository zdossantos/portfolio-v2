import { StackCloud } from './StackCloud';
import {DotPattern} from "@/components/magicui/dot-pattern.tsx";
import {TextAnimate} from "@/components/magicui/text-animate.tsx";
import {ShinyButton} from "@/components/magicui/shiny-button.tsx";
import {cn} from "@/lib/utils.ts";
import { motion } from 'motion/react';

export default function HeroSection() {
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <DotPattern opacity={0.3} className={cn(
                "[mask-image:linear-gradient(to_bottom,white,white,transparent)] ",
            )}/>
            <motion.div
                className="text-center z-10  p-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <TextAnimate animation="blurInUp" by="word" duration={1} once className="text-5xl font-bold mb-4">
                    Bienvenue sur mon portfolio !
                </TextAnimate>
                <TextAnimate animation="blurInUp" by="word" delay={1} once className="text-xl mb-6">
                    Découvrez mes projets et compétences.
                </TextAnimate>
                <StackCloud />
                <ShinyButton className={"border border-foreground"} >
                    Voir mes projets
                </ShinyButton>
            </motion.div>
        </div>
    );
}
