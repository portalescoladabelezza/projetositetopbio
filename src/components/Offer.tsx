import { motion } from "motion/react";
import { Check, Flame, MessageCircle, Timer, ShieldCheck, CreditCard } from "lucide-react";
import { getWhatsappUrl, whatsappMessage, PRICE_INSTALLMENT, INITIAL_VACANCIES, REMAINING_VACANCIES } from "../constants";

export default function Offer() {
  const handleCtaClick = () => {
    window.open(getWhatsappUrl(whatsappMessage), "_blank", "noopener,noreferrer");
  };

  const offerFeatures = [
    "Site profissional e personalizado",
    "Botão para Instagram integrado",
    "Botão para WhatsApp de alta conversão",
    "Botão para Facebook",
    "Botão flutuante do WhatsApp ativado",
    "Página 100% responsiva (celular/tablet/PC)",
    "Link exclusivo com seu domínio próprio",
    "Atendimento & atualizações via WhatsApp",
  ];

  return (
    <section id="oferta" className="py-20 md:py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      {/* Absolute graphic glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-xs font-bold font-mono border border-red-500/10 animate-pulse"
          >
            <Flame size={12} />
            <span>ÚLTIMAS VAGAS COM DESCONTO</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Oferta de lançamento
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Não gaste rios de dinheiro com agências tradicionais ou sistemas complexos. Tenha um site premium de forma rápida, simples e barata.
          </p>
        </div>

        {/* Core Pricing Card Container - Bento Grid styling */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#151515] border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative glow-gold"
          >
            {/* Top decorative gradient bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#D4AF37] via-[#C5A028] to-[#D4AF37]" />

            {/* Popular/Urgency Badge Ribbon */}
            <div className="absolute top-4 right-4 bg-red-600 text-white font-mono font-bold text-[10px] sm:text-xs tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
              <Timer size={14} className="animate-spin" />
              <span>APENAS {REMAINING_VACANCIES} DE {INITIAL_VACANCIES} VAGAS RESTANTES!</span>
            </div>

            <div className="p-6 sm:p-10 md:p-14">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left Side: Package details and features column */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <span className="text-[#D4AF37] uppercase tracking-widest text-[#D4AF37] text-xs font-bold font-mono">
                      Pacote Completo
                    </span>
                    <h3 className="text-white text-2xl sm:text-3xl font-extrabold font-display tracking-tight mt-1">
                      Site Essencial Top Site
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm mt-2">
                      Para os 10 primeiros clientes garantirem presença digital profissional e impulsionarem suas vendas.
                    </p>
                  </div>

                  {/* Bullet Listing */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                    {offerFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <span className="w-5 h-5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} className="text-[#D4AF37]" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-black/40 border border-white/5 rounded-2xl p-3 flex items-center gap-2.5">
                    <ShieldCheck size={20} className="text-[#D4AF37] shrink-0" />
                    <p className="text-[11px] text-gray-400 font-light leading-snug">
                      Nós fazemos todo o trabalho de desenvolvimento e configuração técnica. Você só publica o link e recebe os contatos.
                    </p>
                  </div>
                </div>

                {/* Right Side: High contrast pricing callout box */}
                <div className="md:col-span-5 bg-black border border-white/5 rounded-2xl p-6 sm:p-8 text-center space-y-6 relative flex flex-col justify-between">
                  <div>
                    <span className="text-gray-500 text-xs uppercase font-bold tracking-wider block">
                      DE <span className="line-through">R$ 597</span> POR APENAS
                    </span>
                    
                    {/* Primary Highlighted Price */}
                    <div className="mt-3">
                      <p className="text-gray-400 text-xs font-medium">Investimento de Lançamento</p>
                      <h4 className="text-[#D4AF37] text-4xl sm:text-5xl font-black font-display tracking-tight mt-1 leading-none">
                        {PRICE_INSTALLMENT}
                      </h4>
                      <p className="text-gray-500 text-xs mt-1.5 font-light">ou R$ 297 à vista no PIX</p>
                    </div>

                    <p className="text-[11px] text-red-400 font-medium mt-4 bg-red-500/5 py-1.5 px-3 rounded-lg border border-red-500/10">
                      ⚠️ Depois das {INITIAL_VACANCIES} vagas iniciais, o valor reajustará para R$ 597.
                    </p>
                  </div>

                  {/* Conviction Conversion Action Button */}
                  <div className="space-y-3">
                    <button
                      onClick={handleCtaClick}
                      className="w-full bg-[#D4AF37] hover:bg-[#C5A028] hover:scale-[1.01] active:scale-98 text-black text-sm font-black py-4 px-6 rounded-xl transition-all shadow-xl shadow-[#D4AF37]/10 inline-flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider font-sans"
                    >
                      <MessageCircle size={18} />
                      GARANTIR MINHA VAGA
                    </button>
                    
                    <div className="flex justify-center items-center gap-4 text-[10px] text-gray-500 font-mono">
                      <span className="flex items-center gap-1">
                        <CreditCard size={12} />
                        Até 12x no cartão
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-800" />
                      <span>Sem mensalidades</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
