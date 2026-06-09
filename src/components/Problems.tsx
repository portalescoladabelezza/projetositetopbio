import { motion } from "motion/react";
import { Shield, Zap, LayoutGrid, CheckCircle } from "lucide-react";
import { BENEFITS } from "../constants";

export default function Problems() {
  const getIcon = (id: string) => {
    switch (id) {
      case "benefit-professionalism":
        return <Shield className="text-gold-400 w-6 h-6" />;
      case "benefit-speed":
        return <Zap className="text-gold-400 w-6 h-6" />;
      case "benefit-all-in-one":
        return <LayoutGrid className="text-gold-400 w-6 h-6" />;
      default:
        return <CheckCircle className="text-gold-400 w-6 h-6" />;
    }
  };

  return (
    <section id="problema" className="py-20 md:py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      {/* Visual separators/grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase font-mono"
          >
            Presença Digital Estratégica
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display"
          >
            Seu cliente precisa encontrar você com facilidade.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed font-light"
          >
            Hoje, muitos negócios dependem de várias redes sociais descentralizadas. Mas quando o cliente quer falar, comprar ou conhecer de fato seu serviço, ele precisa encontrar tudo rápido, em um único lugar seguro e profissional.
          </motion.p>
        </div>

        {/* 3 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-[#151515] border border-white/5 hover:border-[#D4AF37]/30 p-8 rounded-3xl transition-all duration-300 relative group glow-gold-hover"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-white/5 flex items-center justify-center mb-6 group-hover:from-[#D4AF37]/20 transition-colors">
                {getIcon(benefit.id)}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 font-display tracking-tight group-hover:text-[#D4AF37] transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

}
