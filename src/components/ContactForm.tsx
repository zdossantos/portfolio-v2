import {MagicCard} from "@/components/magicui/magic-card.tsx";

export default function ContactForm() {
    return (
        <MagicCard className={"size-fit max-w-xl mx-auto p-10 w-1/2 rounded-xl"}>
        <section id="contact">
            <h2 className="text-3xl font-bold text-center mb-8">Contacte-moi</h2>
            <form className="flex flex-col gap-4">
                <input type="text" placeholder="Ton nom" className="p-3 rounded-md bg-muted" />
                <input type="email" placeholder="Ton email" className="p-3 rounded-md bg-muted" />
                <textarea placeholder="Ton message" className="p-3 rounded-md bg-muted min-h-[150px]" />
                <button type="submit" className="bg-primary text-primary-foreground p-3 rounded-md hover:opacity-80">
                    Envoyer
                </button>
            </form>
        </section>
        </MagicCard>
    );
}
