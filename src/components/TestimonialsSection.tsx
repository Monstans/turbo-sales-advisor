import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo",
    location: "Uberaba, MG",
    text: "Economizei R$ 18 mil no primeiro lote depois de usar o simulador. Nunca mais compro gado no achismo.",
    savings: "R$ 18.000",
    initials: "CE",
  },
  {
    name: "Marcos Vinícius",
    location: "Presidente Prudente, SP",
    text: "O relatório em PDF me ajudou a aprovar o crédito rural no banco em uma semana. Profissionalismo que faz diferença.",
    savings: "R$ 32.500",
    initials: "MV",
  },
  {
    name: "Ana Paula Ferreira",
    location: "Araguaína, TO",
    text: "A dieta que formulei pela plataforma reduziu meu custo do Kg em 22%. Meu zootecnista ficou impressionado.",
    savings: "R$ 12.700",
    initials: "AF",
  },
  {
    name: "José Antônio",
    location: "Campo Grande, MS",
    text: "Uso com meu gerente de fazenda toda semana. Virou nossa ferramenta principal de gestão financeira do confinamento.",
    savings: "R$ 45.000",
    initials: "JA",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-3">
            Pecuaristas que saíram do achismo
          </h2>
          <p className="text-muted-foreground mt-4">+500 fazendas já usam a PSA para tomar decisões melhores</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 text-lg">"{t.text}"</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold font-display text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold font-display text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Economia</p>
                  <p className="font-bold text-primary font-display">{t.savings}</p>
                </div>
              </div>

              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
