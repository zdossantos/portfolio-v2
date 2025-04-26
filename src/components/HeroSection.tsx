import { motion } from 'motion/react';
import {Button} from "@/components/ui/button.tsx";

export default function HeroSection() {
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <motion.div
                className="text-center  p-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <motion.h1
                    className="text-5xl font-bold mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Bienvenue sur mon portfolio !
                </motion.h1>
                <motion.p
                    className="text-xl mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                >
                    Découvrez mes projets et compétences.
                </motion.p>
                <Button variant="outline" size="lg" >
                    Voir mes projets
                </Button>
            </motion.div>
        </div>
    );
}
