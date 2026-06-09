import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ArrowRight, Sparkles, MessageCircle, RefreshCw } from "lucide-react";
import { NICHOS, getWhatsappUrl, whatsappMessage } from "../constants";

export default function Niches() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNiches = NICHOS.filter(
    (nicho) =>
      nicho.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nicho.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCtaClick = () => {
    // Customize message if search term exists
    const message = searchTerm 
      ? `Olá! Quero meu site profissional para a área de ${searchTerm}. O preço de lançamento por 12x de R$ 30 ainda está valendo?`
      : whatsappMessage;
    window.open(getWhatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="nichos" className="py-20 md:py-24 bg-[#0A0A0A] relative border-t border-white/5">
      {/* Background glow overlay */}
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-semibold font-mono"
          >
            <Sparkles size={12} className="text-[#D4AF37]" />
            <span>IDEAL PARA VOCÊ</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Perfeito para vários tipos de negócio
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Nossos sites são criados especialmente para quem precisa divulgar melhor seu trabalho comercial, transmitir credibilidade profissional e transformar visitas das redes sociais em contatos diretos no WhatsApp.
          </p>
        </div>

        {/* Dynamic Interactive Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Digite sua atividade (Ex: manicure, barbeiro...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#151515] text-white placeholder-gray-500 border border-white/5 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] rounded-2xl py-3.5 pl-11 pr-4 text-sm transition-all shadow-lg font-sans"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-white"
              >
                Limpar
              </button>
            )}
          </div>
          <p className="text-center text-[11px] text-gray-500 mt-2">
            Mostrando {filteredNiches.length} de 12 nichos recomendados
          </p>
        </div>

        {/* Niches Grid with animations - Bento box style */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredNiches.map((nicho) => (
              <motion.div
                layout
                key={nicho.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4, borderColor: "rgba(212, 175, 55, 0.3)" }}
                className="bg-[#151515] border border-white/5 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-black flex items-center justify-center text-xl shadow-md border border-white/5">
                    {nicho.emoji}
                  </div>
                  <div>
                    <h3 className="text-white text-base font-bold font-display tracking-tight flex items-center gap-1.5">
                      {nicho.title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1.5 leading-relaxed font-light">
                      {nicho.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 mt-4 flex justify-between items-center text-xs">
                  <span className="text-[#D4AF37] font-mono font-medium">Link ideal</span>
                  <button 
                    onClick={handleCtaClick}
                    className="text-gray-300 hover:text-[#D4AF37] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    Ativar Layout
                    <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredNiches.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-black rounded-3xl border border-white/5"
          >
            <p className="text-gray-400 text-sm">Não encontrou o seu nicho específico?</p>
            <p className="text-[#D4AF37] text-base font-bold mt-1">Nós criamos e personalizamos para qualquer área!</p>
            <button
              onClick={handleCtaClick}
              className="mt-4 bg-[#D4AF37] hover:bg-[#C5A028] text-black font-extrabold text-xs px-6 py-3 rounded-lg flex items-center justify-center gap-1.5 mx-auto active:scale-95 transition-transform cursor-pointer"
            >
              <MessageCircle size={14} />
              SOLICITAR PARA OUTRO NICHO
            </button>
          </motion.div>
        )}

        {/* Strategic CTA Repeated */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#151515] border border-white/5 p-8 rounded-3xl max-w-2xl mx-auto glow-gold-hover transition-shadow"
          >
            <h4 className="text-white text-lg font-bold font-display">Seja uma das referências do seu nicho nacional na internet</h4>
            <p className="text-gray-400 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
              Sua concorrência já está na internet. Chegou a hora de investir na sua image e facilitar o contato para quem quer fechar serviços com você.
            </p>
            <button
              onClick={handleCtaClick}
              className="mt-5 w-full sm:w-auto bg-[#D4AF37] hover:bg-[#C5A028] text-black font-extrabold text-[#D4AF37] text-sm px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 transition-transform cursor-pointer shadow-lg shadow-[#D4AF37]/10"
            >
              GARANTIR MEU SITE COM DESCONTO
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );

}
