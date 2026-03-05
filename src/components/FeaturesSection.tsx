import { motion } from "framer-motion";
import { DollarSign, FlaskConical, FileText, TrendingUp } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Custo Real Descoberto",
    description: "Comissão, frete, sanidade e custo de diária (boi-mês) na ponta do lápis. Saiba exatamente onde seu dinheiro está indo.",
  },
  {
    icon: FlaskConical,
    title: "Assistente de Dieta",
    description: "Formule misturas com milho, soja e ureia. Veja o custo do Kg cair na hora e pare de depender de pacotes comerciais.",
  },
  {
    icon: FileText,
    title: "Relatórios Executivos",
    description: "Gere PDFs profissionais com 1 clique. Perfeito para apresentar a sócios, investidores ou ao gerente do banco.",
  },
  {
    icon: TrendingUp,
    title: "Ponto de Equilíbrio",
    description: "Descubra em quantos dias a operação paga o investimento e qual a margem real antes de fechar qualquer negócio.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Funcionalidades</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-3">
            O raio-X completo da sua operação
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Transformamos dados complexos em decisões fáceis. Tudo o que você precisa em uma única plataforma.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 group border border-border"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
