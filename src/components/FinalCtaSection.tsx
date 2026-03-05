import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

const FinalCtaSection = () => {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(145_63%_32%/0.3),transparent_70%)]" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-gradient-hero mb-6">
            Pare de perder dinheiro no escuro
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-10 leading-relaxed">
            Junte-se aos pecuaristas que tratam a fazenda como empresa. Sua primeira simulação é{" "}
            <strong className="text-primary-foreground">100% gratuita</strong> e sai em 15 segundos.
          </p>

          <a
            href="https://www.psapecuaria.com.br/simulador"
            className="inline-flex items-center justify-center gap-2 bg-cta-button px-10 py-5 rounded-lg text-foreground font-display font-bold text-xl shadow-glow-cta animate-pulse-glow transition-all hover:scale-105"
          >
            SIMULAR MEU LOTE AGORA
            <ArrowRight className="w-6 h-6" />
          </a>

          <div className="flex items-center justify-center gap-6 mt-6 text-primary-foreground/50 text-sm">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Sem cartão de crédito
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Cancele quando quiser
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
