import { MouseEvent, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, CheckCircle2, Phone, Instagram, Facebook, ShieldCheck, Star, ShoppingBag, Search, Heart, MessageSquare, Tag } from "lucide-react";
import { getWhatsappUrl, whatsappMessage, PRICE_INSTALLMENT } from "../constants";

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState<"todos" | "tenis" | "roupas">("todos");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const MOCK_PRODUCTS = [
    {
      id: "prod-1",
      name: "Air Max 90 Extreme",
      price: "R$ 699,90",
      category: "tenis" as const,
      tag: "Destaque",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-2",
      name: "Moletom Essentials Oversized",
      price: "R$ 349,00",
      category: "roupas" as const,
      tag: "Novo",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-3",
      name: "Dunk Low Retro",
      price: "R$ 799,90",
      category: "tenis" as const,
      tag: "Últimas unidades",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: "prod-4",
      name: "Heavyweight Boxy Tee",
      price: "R$ 139,90",
      category: "roupas" as const,
      tag: "100% Algodão",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&auto=format&fit=crop&q=80"
    }
  ];

  const filteredProducts = activeCategory === "todos" 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === activeCategory);

  const handleProductClick = (productName: string, productPrice: string) => {
    setSelectedProduct(`Pedido do WhatsApp: "Olá, tenho interesse no ${productName} por ${productPrice}. Está disponível?"`);
    setTimeout(() => {
      setSelectedProduct(null);
    }, 4500);
  };

  const handleCtaClick = () => {
    window.open(getWhatsappUrl(whatsappMessage), "_blank", "noopener,noreferrer");
  };

  const scrollToInclusions = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("o-que-inclui");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Decorative premium radial circles for atmosphere background */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Hero Left: Text Content Area */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide"
            >
              <Sparkles size={14} className="animate-pulse shrink-0" />
              <span>OFERTA DE LANÇAMENTO — SÓ ESTA SEMANA</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1]"
            >
              Seu site profissional <span className="text-[#D4AF37]">pronto</span> para vender muito mais.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
            >
              Converta visitantes em clientes pagantes com uma página inteiramente otimizada para o celular, com botões diretos para WhatsApp, Instagram e Facebook.
            </motion.p>

            {/* Quick selling proof argument checklist */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 pt-1"
            >
              <div className="flex items-center gap-2 text-left">
                <span className="text-[#D4AF37] text-xs font-bold">✓</span>
                <span className="text-xs sm:text-sm text-gray-300">Design 100% Responsivo</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <span className="text-[#D4AF37] text-xs font-bold">✓</span>
                <span className="text-xs sm:text-sm text-gray-300">Botão de WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <span className="text-[#D4AF37] text-xs font-bold">✓</span>
                <span className="text-xs sm:text-sm text-gray-300">Layout Premium Comercial</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <span className="text-[#D4AF37] text-xs font-bold">✓</span>
                <span className="text-xs sm:text-sm text-gray-300">Pronto para Divulgar</span>
              </div>
            </motion.div>

            {/* Core Action Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2"
            >
              <button
                onClick={handleCtaClick}
                className="bg-[#D4AF37] hover:bg-[#C5A028] text-black font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#D4AF37]/10 hover:shadow-[#D4AF37]/20 hover:-translate-y-0.5 active:translate-y-0 tracking-wide cursor-pointer flex items-center justify-center gap-2 group"
              >
                QUERO MEU SITE AGORA
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToInclusions}
                className="bg-[#151515] hover:bg-[#1C1C1C] text-white border border-white/5 font-semibold text-sm sm:text-base px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                VER O QUE ESTÁ INCLUSO
              </button>
            </motion.div>

            {/* Social Assurance Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-3 text-xs text-gray-500 pt-4"
            >
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
              <span>Agência de Conversão Premium</span>
              <span className="w-1 h-1 rounded-full bg-gray-800" />
              <span className="truncate">Sites Prontos e Otimizados</span>
            </motion.div>
          </div>

          {/* Hero Right: Modern Bento Grid Showcase Section */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 w-full h-full relative">
            
            {/* 1. Inclusions Bento Card (col-span-6) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#151515] rounded-3xl p-6 border border-white/5 flex flex-col justify-between sm:col-span-1 lg:col-span-6 group"
            >
              <div>
                <h3 className="text-[#D4AF37] text-xs uppercase tracking-widest font-black mb-4">O que inclui</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-xs text-gray-300 border-b border-white/5 pb-2.5">
                    <span className="text-[#D4AF37] mr-2 font-bold">•</span> Site profissional
                  </li>
                  <li className="flex items-center text-xs text-gray-300 border-b border-white/5 pb-2.5">
                    <span className="text-[#D4AF37] mr-2 font-bold">•</span> Botões para WhatsApp & Redes
                  </li>
                  <li className="flex items-center text-xs text-gray-300 border-b border-white/5 pb-2.5">
                    <span className="text-[#D4AF37] mr-2 font-bold">•</span> Domínio profissional próprio
                  </li>
                  <li className="flex items-center text-xs text-gray-300 border-b border-white/5 pb-2.5">
                    <span className="text-[#D4AF37] mr-2 font-bold">•</span> Adaptação celular & tablet
                  </li>
                  <li className="flex items-center text-xs text-gray-300">
                    <span className="text-[#D4AF37] mr-2 font-bold">•</span> Botão flutuante WhatsApp
                  </li>
                </ul>
              </div>
              <div className="mt-6 text-[10px] text-gray-500 font-mono">
                Sem custos ocultos ou taxas mensais
              </div>
            </motion.div>

            {/* 2. Premium Offer Bento Card (col-span-6) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#D4AF37] rounded-3xl p-6 flex flex-col justify-between text-black sm:col-span-1 lg:col-span-6 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-[10px] uppercase tracking-wider font-extrabold bg-black/10 px-2 py-0.5 rounded">Oferta de lançamento</h3>
                  <Sparkles size={16} className="text-black/70" />
                </div>
                <p className="text-xs font-semibold mt-2 opacity-80">Apenas os 10 primeiros clientes</p>
              </div>

              <div className="mt-8">
                <div className="text-xs uppercase font-extrabold tracking-wide text-black/60">Apenas</div>
                <div className="text-4xl sm:text-5xl font-black tracking-tight leading-none my-1">{PRICE_INSTALLMENT}</div>
                <div className="text-[10px] font-bold bg-black text-[#D4AF37] inline-block px-2 py-1 rounded mt-2 uppercase tracking-wide">
                  RESTAM APENAS 3 VAGAS
                </div>
              </div>
            </motion.div>

            {/* 3. Interactive Preview Bento Enclosure (col-span-12) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#1C1C1C] rounded-3xl p-6 border border-white/5 sm:col-span-2 lg:col-span-12 flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="w-full flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[11px] text-gray-500 font-mono tracking-wide truncate max-w-[180px]">site-no-celular-ao-vivo.html</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-mono font-bold">ATIVADO</span>
              </div>

              {/* Wrapped Interactive Mobile Viewport */}
              <div className="w-full max-w-[270px] sm:max-w-[310px] rounded-[30px] border-[6px] border-[#0A0A0A] bg-[#0A0A0A] overflow-hidden aspect-[9/19] flex flex-col glow-[#D4AF37]/20 relative">
                
                {/* Speaker Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-24 bg-black rounded-b-xl z-30 flex items-center justify-center">
                  <div className="w-8 h-0.5 bg-gray-800 rounded-full" />
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar pt-6 px-3 pb-3 space-y-3 text-white flex flex-col relative bg-[#0D0D0D]">
                  
                  {/* Simulated URL Bar */}
                  <div className="w-full bg-[#151515] rounded-full px-2.5 py-1 text-[9px] text-gray-500 font-mono flex items-center justify-between border border-white/5 mt-1.5 shrink-0">
                    <span className="truncate">hypeconcept.com.br</span>
                    <span className="text-emerald-500 shrink-0 font-bold text-[8px]">✓ Secured</span>
                  </div>

                  {/* Brand Header */}
                  <div className="flex items-center justify-between px-1 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#D4AF37] to-white flex items-center justify-center text-[10px] text-black font-black">
                        H
                      </div>
                      <div className="text-left">
                        <h4 className="text-[10px] font-bold flex items-center gap-0.5 text-white">
                          Hype Concept
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 flex items-center justify-center text-[5px] text-white">✓</span>
                        </h4>
                        <p className="text-[7px] text-gray-500">As melhores marcas de roupas e tênis</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Search size={10} />
                      <ShoppingBag size={10} className="text-[#D4AF37]" />
                    </div>
                  </div>

                  {/* Promo Banner inside simulator */}
                  <div className="bg-gradient-to-r from-red-600 to-[#D4AF37] rounded-xl p-2.5 text-left relative overflow-hidden shrink-0">
                    <div className="absolute -right-3 -bottom-3 w-12 h-12 bg-white/10 rounded-full blur-md" />
                    <span className="text-[6px] font-black uppercase bg-black text-white px-1 py-0.5 rounded tracking-wider">Dropset Limitado</span>
                    <h5 className="text-[10px] font-black uppercase text-white mt-1 leading-tight tracking-tight">Tênis & Roupas de Grife</h5>
                    <p className="text-[7px] text-white/95 font-light leading-none mt-1">Clique para simular pedido via WhatsApp.</p>
                  </div>

                  {/* Dynamic Category Tabs */}
                  <div className="flex items-center gap-1 px-0.5 overflow-x-auto no-scrollbar shrink-0">
                    {(["todos", "tenis", "roupas"] as const).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-[8px] font-bold px-2 py-0.5 rounded-full transition-colors cursor-pointer border ${
                          activeCategory === cat
                            ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                            : "bg-[#151515] text-gray-400 border-white/5 hover:text-white"
                        }`}
                      >
                        {cat === "todos" ? "🔥 Todos" : cat === "tenis" ? "👟 Tênis" : "👕 Roupas"}
                      </button>
                    ))}
                  </div>

                  {/* Product Grid Mock */}
                  <div className="grid grid-cols-2 gap-2 flex-1 overflow-y-auto no-scrollbar select-none">
                    {filteredProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => handleProductClick(p.name, p.price)}
                        className="bg-[#151515] border border-white/5 rounded-xl overflow-hidden p-1.5 flex flex-col justify-between hover:border-[#D4AF37]/30 transition-colors cursor-pointer active:scale-95 duration-200"
                      >
                        {/* Image inside mockup */}
                        <div className="w-full aspect-square bg-neutral-900 rounded-lg overflow-hidden relative border border-white/5">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-1 left-1 bg-black/70 backdrop-blur-sm text-[5px] text-white font-mono font-bold px-1 py-0.5 rounded uppercase">
                            {p.tag}
                          </div>
                        </div>

                        {/* Title and price inside mockup */}
                        <div className="mt-1.5 text-left space-y-0.5">
                          <p className="text-[8px] text-gray-400 font-medium truncate leading-normal">{p.name}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] text-[#D4AF37] font-bold leading-none">{p.price}</span>
                            <div className="bg-[#25D366]/20 p-0.5 rounded-md">
                              <Phone size={7} className="text-[#25D366]" fill="currentColor" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Floating Notification/Toast simulator */}
                  <AnimatePresence>
                    {selectedProduct && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute bottom-2 left-2 right-2 bg-emerald-950/95 border border-emerald-500/30 text-emerald-300 p-2 rounded-xl text-[7px] font-mono leading-relaxed shadow-lg flex items-start gap-1 z-40"
                      >
                        <span className="shrink-0 bg-emerald-500 text-black px-1 rounded-sm text-[6px] font-black uppercase">WA</span>
                        <div className="text-left flex-1">
                          <span className="font-bold text-white block">WhatsApp Chamar! (Simulação)</span>
                          {selectedProduct}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

                <div className="h-4 w-full bg-black flex items-center justify-center shrink-0 border-t border-white/5">
                  <div className="w-16 h-0.5 bg-gray-800 rounded-full" />
                </div>
              </div>
            </motion.div>
            
          </div>

        </div>
      </div>
    </section>
  );
}

