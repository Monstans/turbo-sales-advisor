import { motion } from "framer-motion";
import { ClipboardList, BarChart3, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Insira os dados do lote",
    description: "Peso de entrada, preço da arroba, frete, comissão e insumos. Simples assim.",
  },
  {
    icon: BarChart3,
    step: "02",
    title: "Receba o raio-X financeiro",
    description: "Custo de diária, ponto de equilíbrio, margem de lucro e dieta otimizada — tudo em 15 segundos.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Tome a decisão certa",
    description: "Saiba se o negócio vale a pena antes de fechar. Gere o PDF e apresente ao banco ou sócio.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Como Funciona</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-3">
            3 passos para sair do achismo
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center group"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-border" />
              )}
              <div className="relative z-10 inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-accent mb-6 group-hover:shadow-glow-primary transition-shadow">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <span className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">
                Passo {step.step}
              </span>
              <h3 className="text-xl font-bold font-display text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
