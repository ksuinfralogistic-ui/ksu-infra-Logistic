import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { KsuLogo } from './KsuLogo';

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'home', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home', href: '#home' },
    { label: 'About', id: 'about', href: '#about' },
    { label: 'Our Business', id: 'business', href: '#business' },
    { label: 'What We Do', id: 'what-we-do', href: '#what-we-do' },
    { label: 'Capabilities', id: 'capabilities', href: '#capabilities' },
    { label: 'Logistics', id: 'logistics', href: '#logistics' },
    { label: 'Infra Projects', id: 'infra', href: '#infra' },
    { label: 'Visiting Card', id: 'corporate-materials', href: '#corporate-materials' },
    { label: 'Client Voices', id: 'testimonials', href: '#testimonials' },
    { label: 'Contact', id: 'contact', href: '#contact' },
  ];

  const handleLinkClick = (id: string, href: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#D4AF37]/30'
            : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark & Emblem */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home', '#home');
              }}
              className="flex items-center group transition-transform duration-200 hover:scale-[1.01]"
              aria-label="KSU Infra & Logistic Home"
            >
              <KsuLogo size={isScrolled ? 'sm' : 'md'} showSubtitle={!isScrolled} />
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold text-[#0B192C]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.id, link.href);
                    }}
                    className={`transition-colors py-1 relative whitespace-nowrap hover:text-[#1D4ED8] ${
                      isActive ? 'text-[#1D4ED8] font-bold' : 'text-[#334155]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Direct CTAs */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href="#corporate-materials"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('corporate-materials', '#corporate-materials');
                }}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#0B192C] bg-[#F5E6BE] hover:bg-[#D4AF37] rounded-lg transition-colors whitespace-nowrap shadow-2xs"
                title="Download Visiting Card"
              >
                <Download className="w-3.5 h-3.5 text-[#0B192C]" />
                <span>Card</span>
              </a>

              <a
                href="https://wa.me/919039038221?text=Hello%20KSU%20Infra%20%26%20Logistic,%20I%20would%20like%20to%20discuss%20a%20business%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors whitespace-nowrap shadow-xs"
                title="WhatsApp Direct Consultation"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+919039038221"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#0B192C] hover:bg-[#1D4ED8] border border-[#D4AF37]/40 rounded-lg transition-all shadow-sm hover:shadow-md whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>+91 90390 38221</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center gap-2">
              <a
                href="tel:+919039038221"
                className="p-2 text-[#0B192C] hover:text-[#1D4ED8] transition-colors"
                aria-label="Call KSU Director"
              >
                <Phone className="w-5 h-5 text-[#B8860B]" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-1 py-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id, link.href);
                  }}
                  className="px-3 py-2 rounded-md text-sm font-semibold text-slate-800 hover:text-[#1D4ED8] hover:bg-slate-50 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#corporate-materials"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('corporate-materials', '#corporate-materials');
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold text-[#0B192C] bg-[#F5E6BE] border border-[#D4AF37]/50 shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-[#0B192C]" />
                <span>Download Official Visiting Card</span>
              </a>

              <a
                href="tel:+919039038221"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold text-white bg-[#0B192C] border border-[#D4AF37]/50 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call +91 90390 38221</span>
              </a>

              <a
                href="https://wa.me/919039038221?text=Hello%20KSU%20Infra%20%26%20Logistic,%20I%20would%20like%20to%20discuss%20a%20business%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-300"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
