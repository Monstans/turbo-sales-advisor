import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Grátis",
    price: "R$ 0",
    period: "para sempre",
    description: "Teste o poder do simulador",
    features: [
      "2 simulações por mês",
      "Custo de diária básico",
      "Ponto de equilíbrio",
    ],
    cta: "COMEÇAR GRÁTIS",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "R$ 49",
    period: "/mês",
    description: "Para o pecuarista que leva a sério",
    features: [
      "Simulações ilimitadas",
      "Assistente de dieta completo",
      "Relatórios PDF profissionais",
      "Histórico de simulações",
      "Suporte prioritário via WhatsApp",
    ],
    cta: "ASSINAR AGORA",
    highlighted: true,
  },
  {
    name: "Fazenda",
    price: "R$ 149",
    period: "/mês",
    description: "Gestão completa para grandes operações",
    features: [
      "Tudo do Pro",
      "Múltiplos usuários (gerente, zootecnista)",
      "Dashboard de desempenho por lote",
      "Integração com planilhas",
      "Consultoria mensal de 30min",
    ],
    cta: "FALAR COM CONSULTOR",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Planos</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-3">
            Invista menos de uma arroba por mês
          </h2>
          <p className="text-muted-foreground mt-4">Escolha o plano ideal para sua operação</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 border transition-all ${
                plan.highlighted
                  ? "bg-card border-primary shadow-glow-primary scale-105 relative"
                  : "bg-card border-border shadow-card"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-xs font-bold font-display">
                  MAIS POPULAR
                </span>
              )}

              <h3 className="text-xl font-bold font-display text-foreground">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>

              <div className="mt-6 mb-8">
                <span className="text-4xl font-extrabold font-display text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://www.psapecuaria.com.br/simulador"
                className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-display font-bold text-sm transition-all ${
                  plan.highlighted
                    ? "bg-cta-button text-foreground shadow-glow-cta hover:scale-105"
                    : "bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
