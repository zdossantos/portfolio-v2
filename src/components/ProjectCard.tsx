import { motion } from 'motion/react';

export default function ProjectCard({ title, description, link }: { title: string, description: string, link: string }) {
    return (
        <motion.div
            className="rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800 text-black dark:text-white transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-lg mb-4">{description}</p>
            <a href={link} className="text-blue-500 hover:underline">
                Voir le projet
            </a>
        </motion.div>
    );
}
