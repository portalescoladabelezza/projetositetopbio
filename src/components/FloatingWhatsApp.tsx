import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { getWhatsappUrl, whatsappMessage } from "../constants";

export default function FloatingWhatsApp() {
  const handleClick = () => {
    window.open(getWhatsappUrl(whatsappMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Sleek Tooltip Speech Bubble */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={handleClick}
        className="hidden sm:flex bg-[#0c0d12]/95 border border-gray-800 text-white px-3.5 py-2 rounded-xl text-xs font-semibold shadow-2xl items-center gap-1.5 cursor-pointer glow-gold"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
        Falar com Consultor
      </motion.div>

      {/* Floating Animated WhatsApp Key Core Trigger */}
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-colors relative group cursor-pointer flex items-center justify-center border border-white/10"
        aria-label="Contatar no WhatsApp"
      >
        {/* Animated outer glowing ripple */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10 group-hover:block" />
        
        <MessageCircle size={26} fill="currentColor" />
      </motion.button>
    </div>
  );
}
