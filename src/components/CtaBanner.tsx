import React from 'react';
import { Phone, MessageSquare, Send, ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  onEnquiryClick?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onEnquiryClick }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0B192C] via-[#081322] to-[#060D17] text-white relative border-y border-[#D4AF37]/30 overflow-hidden">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F3C352] mb-3 inline-block">
          Partnership &amp; Execution
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-white mb-6">
          LET&apos;S BUILD &amp; MOVE TOGETHER
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          Whether you need reliable transportation for bulk materials, dedicated flyash logistics, or turnkey infrastructure project support, connect with <strong className="text-white font-semibold">KSU Infra &amp; Logistic</strong> today.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Call Now Button */}
          <a
            href="tel:+919039038221"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>CALL +91 90390 38221</span>
          </a>

          {/* WhatsApp Now Button */}
          <a
            href="https://wa.me/919039038221?text=Hello%20KSU%20Infra%20%26%20Logistic,%20I%20would%20like%20to%20enquire%20about%20your%20services.%20Please%20provide%20more%20information."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-emerald-900 bg-emerald-400 hover:bg-emerald-300 transition-all duration-200 shadow-md"
          >
            <MessageSquare className="w-4 h-4 text-emerald-950" />
            <span>WHATSAPP NOW</span>
          </a>

          {/* Send Enquiry Button */}
          <a
            href="#contact"
            onClick={(e) => {
              if (onEnquiryClick) {
                e.preventDefault();
                onEnquiryClick();
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-[#0B192C] bg-[#D4AF37] hover:bg-[#F3C352] transition-all duration-200 shadow-md group"
          >
            <Send className="w-4 h-4 text-[#0B192C]" />
            <span>SEND ENQUIRY</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
