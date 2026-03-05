import { TrendingUp } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/90 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 text-primary-foreground font-display font-bold text-xl">
          <TrendingUp className="w-6 h-6 text-primary" />
          PSA
        </a>

        <div className="flex items-center gap-3">
          <a
            href="https://www.psapecuaria.com.br"
            className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-medium transition-colors"
          >
            Entrar
          </a>
          <a
            href="https://www.psapecuaria.com.br/simulador"
            className="bg-cta-button px-5 py-2 rounded-lg text-foreground font-display font-bold text-sm hover:scale-105 transition-transform"
          >
            Criar Conta Grátis
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
