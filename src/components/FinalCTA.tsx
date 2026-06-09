import { motion } from "motion/react";
import { ArrowRight, MessageSquare, CheckCircle } from "lucide-react";
import { getWhatsappUrl, whatsappMessage } from "../constants";

export default function FinalCTA() {
  const handleCtaClick = () => {
    window.open(getWhatsappUrl(whatsappMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      {/* Visual background atmospheric enhancements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto space-y-8">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mx-auto mb-4"
          >
            <CheckCircle className="text-[#D4AF37] w-6 h-6" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.15]"
          >
            Seu negócio merece uma presença digital muito mais profissional.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Com o seu site profissional, você tem uma página altamente moderna e eficiente para receber novos contatos, divulgar seus principais serviços e alavancar suas vendas no WhatsApp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-4 flex flex-col items-center justify-center space-y-4"
          >
            <button
              onClick={handleCtaClick}
              className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#C5A028] hover:scale-[1.01] active:scale-98 text-black font-extrabold text-base px-10 py-4 rounded-xl transition-all shadow-xl shadow-[#D4AF37]/20 flex items-center justify-center gap-2 group cursor-pointer"
            >
              QUERO MEU SITE
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-xs text-gray-500 font-mono flex items-center gap-1.5 justify-center">
              <span>⚡ Configuração em poucos dias</span>
              <span className="w-1 h-1 rounded-full bg-gray-800" />
              <span>💬 Atendimento dedicado exclusivo</span>
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
