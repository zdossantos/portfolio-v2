import { cn } from "@/lib/utils";

export default function Header() {
    return (
        <header className="p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Zach 🚀</h1>
            <nav className="flex gap-4">
                <a href="/" className={cn("hover:underline")}>Home</a>
                <a href="/projects" className={cn("hover:underline")}>Projects</a>
                <a href="/about" className={cn("hover:underline")}>About</a>
                <a href="/contact" className={cn("hover:underline")}>Contact</a>
            </nav>
        </header>
    );
}
