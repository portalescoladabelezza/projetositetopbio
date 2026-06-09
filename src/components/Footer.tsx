import { getWhatsappUrl, whatsappMessage } from "../constants";
import { MessageCircle, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleCtaClick = () => {
    window.open(getWhatsappUrl(whatsappMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 text-gray-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/5">
          
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <a href="#inicio" className="flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-gold-600 to-gold-400 flex items-center justify-center shadow-lg shadow-gold-500/15 text-black font-bold text-lg font-display">
                T
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">
                Top <span className="text-[#D4AF37]">Site</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-gray-500 font-light max-w-sm leading-relaxed">
              Desenvolvemos sites simples, modernos e extremamente profissionais para pequenos negócios, profissionais liberais e prestadores de serviços por valores acessíveis.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-xs uppercase font-extrabold tracking-widest font-mono">
              Links Rápidos
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-gold-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#nichos" className="hover:text-gold-400 transition-colors">
                  Nichos
                </a>
              </li>
              <li>
                <a href="#o-que-inclui" className="hover:text-gold-400 transition-colors">
                  O que está incluso
                </a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-gold-400 transition-colors">
                  Oferta Especial
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-gold-400 transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <button 
                  onClick={handleCtaClick} 
                  className="hover:text-gold-400 transition-colors text-left font-semibold"
                >
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Contact / Service details */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs uppercase font-extrabold tracking-widest font-mono">
              Contato imediato
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={handleCtaClick}
                className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 px-3.5 py-2 rounded-lg text-xs font-semibold hover:bg-[#25D366]/20 transition-all cursor-pointer"
              >
                <MessageCircle size={14} fill="currentColor" />
                Atendimento via WhatsApp
              </button>
              <p className="text-[10px] text-gray-600 font-mono">
                Segunda a Sábado — Resposta rápida e dedicada.
              </p>
            </div>
          </div>

        </div>

        {/* Outer credit bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-600 font-mono">
          <p>
            &copy; {currentYear} topbiolink.com.br — Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            Desenvolvido com <Heart size={10} className="text-red-500 fill-current" /> para pequenos empresários de sucesso.
          </p>
        </div>
      </div>
    </footer>
  );
}
