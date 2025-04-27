import { DotPattern } from "@/components/magicui/dot-pattern.tsx";
import { TextAnimate } from "@/components/magicui/text-animate.tsx";
import { cn } from "@/lib/utils.ts";
import { motion } from 'motion/react';

export default function HeroSection() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen relative overflow-hidden">
            <DotPattern opacity={0.3} className={cn(
                "[mask-image:linear-gradient(to_bottom,white,white,transparent)] absolute inset-0",
                "h-[110%] -bottom-[10%]"
            )}/>
            {/* Main content */}
            <div className="container mx-auto px-4">
                <motion.div
                    className="flex flex-col items-center gap-8 z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    {/* Photo */}
                    <motion.div
                        className="w-48 h-48 backdrop-blur-xs relative rounded-full overflow-hidden border-4 border-primary/20"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <img
                            src="/images/profile.png"
                            alt="Photo de profil"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Text content */}
                    <div className="text-center max-w-2xl">
                        <TextAnimate 
                            animation="blurInUp" 
                            by="word" 
                            duration={1} 
                            once 
                            className="text-4xl md:text-5xl font-bold mb-4"
                        >
                            Développeur Full Stack
                        </TextAnimate>
                        <TextAnimate 
                            animation="blurInUp" 
                            by="word" 
                            delay={1} 
                            once 
                            className="text-xl mb-6 text-muted-foreground"
                        >
                            Créateur d'applications web modernes et performantes, 
                            passionné par l'innovation et les nouvelles technologies
                        </TextAnimate>
                    </div>
                </motion.div>
            </div>

            {/* Scroll down animation */}
            <motion.div
                className="absolute bottom-24"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <svg
                    className="w-6 h-6 text-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </motion.div>
        </div>
    );
}
