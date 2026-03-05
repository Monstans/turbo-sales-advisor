import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import heroImg from "@/assets/hero-ranch.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero overflow-hidden flex items-center">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Fazenda de gado no Brasil" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-hero opacity-80" />
      </div>

      <div className="container relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground/90 text-sm font-medium mb-6 border border-primary/30">
              <TrendingUp className="w-4 h-4" />
              Inteligência Financeira para Pecuaristas
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-tight text-gradient-hero mb-6">
              O achismo está devorando o lucro da sua fazenda.
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 font-body mb-8 max-w-lg leading-relaxed">
              Descubra o custo exato da diária, formule dietas inteligentes e saiba o seu ponto de equilíbrio{" "}
              <strong className="text-primary-foreground/90">antes de comprar o lote.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="https://www.psapecuaria.com.br/simulador"
                className="inline-flex items-center justify-center gap-2 bg-cta-button px-8 py-4 rounded-lg text-foreground font-display font-bold text-lg shadow-glow-cta animate-pulse-glow transition-all hover:scale-105"
              >
                SIMULAR MEU LOTE AGORA
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center gap-6 text-primary-foreground/60 text-sm">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                2 Simulações Grátis
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-secondary" />
                Resultado em 15 segundos
              </span>
            </div>
          </motion.div>

          {/* Right — Stats card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-card/10 backdrop-blur-xl border border-primary-foreground/10 rounded-2xl p-8 shadow-card animate-float">
              <div className="text-center mb-6">
                <p className="text-primary-foreground/60 text-sm mb-1">Prejuízo Evitado</p>
                <p className="text-5xl font-extrabold font-display text-secondary">R$ 45.230</p>
                <p className="text-primary-foreground/50 text-sm mt-2">Análise gerada em 15 segundos</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { label: "Custo/Dia", value: "R$ 8,42" },
                  { label: "Break-even", value: "127 dias" },
                  { label: "Margem", value: "+18,3%" },
                ].map((item) => (
                  <div key={item.label} className="text-center p-3 rounded-lg bg-primary-foreground/5">
                    <p className="text-xl font-bold font-display text-primary-foreground">{item.value}</p>
                    <p className="text-xs text-primary-foreground/50 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
