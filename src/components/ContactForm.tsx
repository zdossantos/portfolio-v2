export default function ContactForm() {
    return (
        <section id="contact" className="py-20 max-w-xl mx-auto">
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
    );
}
