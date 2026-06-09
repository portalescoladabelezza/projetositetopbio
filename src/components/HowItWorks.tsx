import { motion } from "motion/react";
import { MessageSquare, FileText, Layout, Share2, Sparkles } from "lucide-react";
import { STEPS } from "../constants";

export default function HowItWorks() {
  const getStepIcon = (id: string) => {
    const iconProps = { className: "w-6 h-6 text-[#D4AF37]" };
    switch (id) {
      case "step-1":
        return <MessageSquare {...iconProps} />;
      case "step-2":
        return <FileText {...iconProps} />;
      case "step-3":
        return <Layout {...iconProps} />;
      case "step-4":
        return <Share2 {...iconProps} />;
      default:
        return <Sparkles {...iconProps} />;
    }
  };

  return (
    <section id="como-funciona" className="py-20 md:py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      {/* Decorative vertical golden line */}
      <div className="absolute top-[30%] left-1/4 w-[250px] h-[250px] bg-gold-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase font-mono"
          >
            Processo ágil e sem complicações
          </motion.p>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Como funciona para ter seu site
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Desenvolvemos tudo em tempo recorde para que você foque apenas no que faz de melhor: atender seus clientes.
          </p>
        </div>

        {/* 4 Steps Progress Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-[2.25rem] left-[10%] right-[10%] h-[1.5px] bg-gradient-to-r from-[#D4AF37]/5 via-[#D4AF37]/25 to-[#D4AF37]/5 z-0" />

          {STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 space-y-4 text-center md:text-left group"
            >
              <div className="flex flex-col items-center md:items-start space-y-4">
                
                {/* Visual Step Number Bubble & Icon container */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#151515] border border-white/5 flex items-center justify-center relative shadow-lg group-hover:border-[#D4AF37]/30 transition-colors">
                    {getStepIcon(step.id)}
                    
                    {/* Floating little step count badge */}
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#D4AF37] text-black font-extrabold text-[9px] flex items-center justify-center font-mono">
                      {step.stepNumber}
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-gray-500 tracking-wider uppercase md:hidden">
                    Passo {step.stepNumber}
                  </span>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-[#D4AF37] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
