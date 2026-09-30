import React from 'react';
import { Phone, MessageSquare, Send } from 'lucide-react';

interface MobileBottomBarProps {
  onEnquireClick?: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onEnquireClick }) => {
  const handleEnquire = (e: React.MouseEvent) => {
    if (onEnquireClick) {
      e.preventDefault();
      onEnquireClick();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <aside 
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B192C] border-t border-[#D4AF37]/40 shadow-2xl px-2 py-2 safe-area-pb"
    >
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:+919039038221"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-white/5 hover:bg-white/10 active:bg-white/20 text-white transition-colors"
          style={{ minHeight: '44px' }}
        >
          <Phone className="w-4 h-4 text-[#D4AF37] mb-1" />
          <span className="text-[11px] font-bold tracking-wide uppercase text-slate-100">
            Call
          </span>
        </a>

        <a
          href="https://wa.me/919039038221?text=Hello%20KSU%20Infra%20%26%20Logistic,%20I%20would%20like%20to%20enquire%20about%20your%20services.%20Please%20provide%20more%20information."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 active:bg-emerald-700 text-white transition-colors shadow-sm"
          style={{ minHeight: '44px' }}
        >
          <MessageSquare className="w-4 h-4 text-white mb-1" />
          <span className="text-[11px] font-bold tracking-wide uppercase text-white">
            WhatsApp
          </span>
        </a>

        <a
          href="#contact"
          onClick={handleEnquire}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#D4AF37] hover:bg-[#C5A059] active:bg-[#B8860B] text-[#0B192C] font-bold transition-colors shadow-sm"
          style={{ minHeight: '44px' }}
        >
          <Send className="w-4 h-4 text-[#0B192C] mb-1" />
          <span className="text-[11px] font-bold tracking-wide uppercase text-[#0B192C]">
            Enquire
          </span>
        </a>
      </div>
    </aside>
  );
};
