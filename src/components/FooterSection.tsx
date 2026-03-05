import { TrendingUp } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-background font-display font-bold text-lg">
            <TrendingUp className="w-5 h-5" />
            PSA Pecuária
          </div>
          <p className="text-background/50 text-sm">
            © 2025 PSA Pecuária. Inteligência financeira para quem vive do campo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
