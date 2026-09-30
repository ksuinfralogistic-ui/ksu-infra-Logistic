import React from 'react';
import { Phone, MessageSquare, MapPin, ArrowUpRight, ShieldCheck, Download } from 'lucide-react';
import { KsuLogo } from './KsuLogo';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Business', href: '#business' },
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'Project Capabilities', href: '#capabilities' },
    { label: 'Moving Across India', href: '#network' },
    { label: 'Client Voices', href: '#testimonials' },
  ];

  const serviceLinks = [
    { label: 'Logistics & Transportation', href: '#logistics' },
    { label: 'Flyash Dedicated Haulage', href: '#logistics' },
    { label: 'Bulk Material Fleet', href: '#logistics' },
    { label: 'Infra Projects & Civil Works', href: '#infra' },
    { label: 'Road Construction & Highways', href: '#infra' },
    { label: 'Bridge & Structural Works', href: '#infra' },
  ];

  const materialLinks = [
    { label: 'Official Visiting Card (Front)', href: '#corporate-materials' },
    { label: 'Official Visiting Card (Back)', href: '#corporate-materials' },
    { label: 'Corporate Profile & Pamphlet', href: '#corporate-materials' },
    { label: 'Download Visiting Card Package', href: '#corporate-materials' },
    { label: 'Brand Color Identity', href: '#corporate-materials' },
  ];

  return (
    <footer className="bg-[#060D17] text-slate-300 border-t border-[#D4AF37]/30 pt-16 pb-24 md:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#0B192C] inline-block p-2 rounded-xl border border-[#D4AF37]/30">
              <KsuLogo size="md" showSubtitle={false} className="text-white" />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed max-w-sm">
              KSU Infra &amp; Logistic provides dependable pan-India bulk material transportation, dedicated flyash logistics, and civil infrastructure construction contracts from Raipur, Chhattisgarh.
            </p>

            <div className="pt-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#F3C352] block mb-1">
                Official Tagline
              </span>
              <p className="font-serif font-bold text-sm text-white">
                BETTER PEOPLE, STRONGER INDIA
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>PAN INDIA SERVICE AVAILABLE</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center gap-1 text-slate-400 hover:translate-x-0.5 transform duration-150"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {serviceLinks.map((srv) => (
                <li key={srv.label}>
                  <a
                    href={srv.href}
                    className="hover:text-white transition-colors text-slate-400 block"
                  >
                    {srv.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] pt-3">
              Corporate Materials
            </h4>
            <ul className="space-y-1.5 text-xs">
              {materialLinks.map((mat) => (
                <li key={mat.label}>
                  <a
                    href={mat.href}
                    className="hover:text-[#F3C352] transition-colors text-slate-400 flex items-center gap-1"
                  >
                    <Download className="w-3 h-3 text-[#D4AF37]" />
                    <span>{mat.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              Contact &amp; Office
            </h4>

            <div className="text-xs space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF7722] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  Add - 501, New DM Tower, <br />
                  Rawabhata, Raipur, <br />
                  Chhattisgarh
                </address>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href="tel:+919039038221"
                  className="font-bold text-white hover:text-[#D4AF37] transition-colors"
                >
                  +91 90390 38221
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href="https://wa.me/919039038221?text=Hello%20KSU%20Infra%20%26%20Logistic,%20I%20would%20like%20to%20enquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: +91 90390 38221
                </a>
              </div>

              <div className="pt-1 text-[11px] text-slate-500">
                Director: <span className="text-slate-300 font-medium">Kripa Shanker Upadhyay</span>
              </div>

              <div className="pt-1">
                <span className="text-[11px] text-[#F3C352] font-semibold">
                  PAN INDIA SERVICE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="italic font-serif text-slate-400 text-center md:text-left">
            &ldquo;Reliable Movement. Strong Infrastructure. Better Tomorrow.&rdquo;
          </div>

          <div className="text-center md:text-right">
            &copy; 2026 KSU Infra &amp; Logistic. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
