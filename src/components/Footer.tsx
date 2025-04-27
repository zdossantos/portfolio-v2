import { motion } from 'motion/react';

export default function Footer() {
    return (
        <motion.footer
            className="pb-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
        >
        </motion.footer>
    );
}
