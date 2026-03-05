import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5500000000000?text=Olá! Quero saber mais sobre a PSA Pecuária"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] px-5 py-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-display font-bold text-sm">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
