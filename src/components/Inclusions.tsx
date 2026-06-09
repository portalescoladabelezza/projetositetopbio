import { motion } from "motion/react";
import { Globe, Instagram, Phone, Facebook, MessageCircle, Smartphone, Link2, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { INCLUSIONS, getWhatsappUrl, whatsappMessage } from "../constants";

export default function Inclusions() {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" };
    switch (iconName) {
      case "Globe":
        return <Globe {...iconProps} />;
      case "Instagram":
        return <Instagram {...iconProps} />;
      case "Address":
      case "Phone":
        return <Phone {...iconProps} />;
      case "Facebook":
        return <Facebook {...iconProps} />;
      case "MessageCircle":
        return <MessageCircle {...iconProps} />;
      case "Smartphone":
        return <Smartphone {...iconProps} />;
      case "Link2":
        return <Link2 {...iconProps} />;
      case "TrendingUp":
        return <TrendingUp {...iconProps} />;
      default:
        return <Sparkles {...iconProps} />;
    }
  };

  const handleCtaClick = () => {
    window.open(getWhatsappUrl(whatsappMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="o-que-inclui" className="py-20 md:py-24 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="absolute top-10 left-10 w-80 h-80 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-semibold font-mono"
          >
            <Sparkles size={12} />
            <span>PACOTE COMPLETO</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            O que você recebe no pacote <span className="text-gradient-gold">Top Site</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Tudo o que seu negócio precisa para se posicionar de forma profissional na internet e facilitar o contato direto dos clientes com você.
          </p>
        </div>

        {/* Dynamic Card Grid - Bento Boxes style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {INCLUSIONS.map((inc, index) => (
            <motion.div
              key={inc.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.01, borderColor: "rgba(212, 175, 55, 0.3)" }}
              className="bg-[#151515] border border-white/5 rounded-3xl p-6 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-black border border-white/5 flex items-center justify-center shrink-0 group-hover:border-[#D4AF37]/30 transition-colors">
                {getIcon(inc.iconName)}
              </div>
              <div>
                <h3 className="text-white text-sm sm:text-base font-semibold group-hover:text-[#D4AF37] transition-colors font-display tracking-tight">
                  {inc.title}
                </h3>
                <span className="text-[10px] text-[#D4AF37] font-bold uppercase font-mono tracking-wider">incluso</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Immediate CTA Repetition (Section CTA) */}
        <div className="flex justify-center flex-col items-center space-y-4">
          <motion.button
            onClick={handleCtaClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#D4AF37] hover:bg-[#C5A028] text-black font-extrabold text-sm sm:text-base px-10 py-5 rounded-xl shadow-xl shadow-[#D4AF37]/10 hover:shadow-[#D4AF37]/20 transition-all cursor-pointer flex items-center gap-2 tracking-wide uppercase"
          >
            QUERO ESSAS VANTAGENS AGORA
            <ArrowRight size={18} />
          </motion.button>
          <p className="text-[11px] text-gray-500 font-mono tracking-wide">
            ✓ Site entregue pronto e configurado para você divulgar
          </p>
        </div>
      </div>
    </section>
  );
}

