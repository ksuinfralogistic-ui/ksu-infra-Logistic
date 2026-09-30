import React, { useState } from 'react';
import {
  FileText,
  CreditCard,
  Download,
  Eye,
  Printer,
  Sparkles,
  ExternalLink,
  Layers,
} from 'lucide-react';
import { VisitingCardLightbox, LightboxItem } from './VisitingCardLightbox';

export const CorporateMaterials: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeAssetIndex, setActiveAssetIndex] = useState(0);

  const corporateAssets: LightboxItem[] = [
    {
      id: 'card-front',
      title: 'Official Visiting Card — Front',
      subtitle: 'Kripa Shanker Upadhyay (Director) & Head Office Details',
      imageSrc: '/src/assets/images/ksu_card_front_1790800395359.jpg',
      downloadFilename: 'KSU-Visiting-Card-Front.jpg',
    },
    {
      id: 'card-back',
      title: 'Official Visiting Card — Reverse',
      subtitle: 'Services Portfolio & Commitment Pillars',
      imageSrc: '/src/assets/images/ksu_card_back_1790800404876.jpg',
      downloadFilename: 'KSU-Visiting-Card-Back.jpg',
    },
    {
      id: 'pamphlet',
      title: 'Corporate Profile & Pamphlet',
      subtitle: 'Full Overview — Transport Logistics & Civil Infra Execution',
      imageSrc: '/src/assets/images/ksu_corporate_pamphlet_1790800414822.jpg',
      downloadFilename: 'KSU-Corporate-Brochure.jpg',
    },
  ];

  const handleOpenLightbox = (index: number) => {
    setActiveAssetIndex(index);
    setLightboxOpen(true);
  };

  const handleDownloadSingle = (index: number) => {
    const item = corporateAssets[index];
    const link = document.createElement('a');
    link.href = item.imageSrc;
    link.download = item.downloadFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadCompleteVisitingCard = () => {
    // Sequentially download front and back
    handleDownloadSingle(0);
    setTimeout(() => {
      handleDownloadSingle(1);
    }, 600);
  };

  const handlePrintItem = (index: number) => {
    const item = corporateAssets[index];
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>KSU Infra & Logistic - ${item.title}</title>
            <style>
              body { margin: 0; padding: 24px; text-align: center; font-family: sans-serif; background: #fff; }
              h1 { color: #0B192C; font-size: 20px; margin-bottom: 4px; }
              p { color: #64748B; font-size: 13px; margin-top: 0; }
              img { max-width: 95%; max-height: 85vh; border: 1px solid #D4AF37; box-shadow: 0 4px 14px rgba(0,0,0,0.1); }
            </style>
          </head>
          <body>
            <h1>KSU INFRA & LOGISTIC</h1>
            <p>${item.title} · ${item.subtitle}</p>
            <img src="${item.imageSrc}" onload="window.print();window.close();" />
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <section id="corporate-materials" className="py-20 bg-[#0B192C] text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F3C352] mb-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Official Corporate Materials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-white">
            CORPORATE BRAND &amp; VISITING CARD
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Access, view in high resolution, print, or download official corporate credentials, executive visiting cards, and company profiles for your vendor qualification files.
          </p>
        </div>

        {/* Global Action Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-white/5 border border-[#D4AF37]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shrink-0">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white">
                Download Official Visiting Card Package
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Front and back high-resolution corporate card with verified Director contact details.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleDownloadCompleteVisitingCard}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-[#0B192C] bg-[#D4AF37] hover:bg-[#F3C352] transition-colors shadow-lg shrink-0"
          >
            <Download className="w-4 h-4 text-[#0B192C]" />
            <span>DOWNLOAD COMPLETE VISITING CARD</span>
          </button>
        </div>

        {/* Visiting Card Front & Back Previews */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white uppercase tracking-wider">
                Official Visiting Card
              </h3>
            </div>
            <span className="text-xs text-slate-400">High-Resolution Mockup</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Front Side */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between group shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F3C352]">
                    [ FRONT SIDE ]
                  </span>
                  <span className="text-[11px] text-slate-400">Executive Identity</span>
                </div>

                {/* Mockup Frame */}
                <div
                  onClick={() => handleOpenLightbox(0)}
                  className="relative aspect-16/9 rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-black cursor-pointer group/img mb-6 shadow-md"
                >
                  <img
                    src={corporateAssets[0].imageSrc}
                    alt="KSU Visiting Card Front"
                    className="w-full h-full object-cover group-hover/img:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="px-4 py-2 rounded-lg bg-black/70 text-xs font-bold text-[#D4AF37] flex items-center gap-1.5 border border-[#D4AF37]">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Full Size</span>
                    </span>
                  </div>
                </div>

                <h4 className="text-base font-serif font-bold text-white mb-1">
                  KSU Corporate Visiting Card — Front
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Featuring Director Kripa Shanker Upadhyay, direct phone line +91 90390 38221, Raipur office location, and KSU official emblem.
                </p>
              </div>

              {/* Action Buttons Row */}
              <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => handleOpenLightbox(0)}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>View</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleDownloadSingle(0)}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PNG</span>
                </button>

                <button
                  type="button"
                  onClick={() => handlePrintItem(0)}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                >
                  <Printer className="w-3.5 h-3.5 text-[#F3C352]" />
                  <span>Print</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleDownloadSingle(0)}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#D4AF37] hover:bg-[#F3C352] text-[#0B192C] text-xs font-bold transition-colors shadow-xs"
                >
                  <span>Download</span>
                </button>
              </div>
            </div>

            {/* Card 2: Back Side */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between group shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F3C352]">
                    [ BACK SIDE ]
                  </span>
                  <span className="text-[11px] text-slate-400">Services &amp; Commitments</span>
                </div>

                {/* Mockup Frame */}
                <div
                  onClick={() => handleOpenLightbox(1)}
                  className="relative aspect-16/9 rounded-xl overflow-hidden border border-[#D4AF37]/30 bg-black cursor-pointer group/img mb-6 shadow-md"
                >
                  <img
                    src={corporateAssets[1].imageSrc}
                    alt="KSU Visiting Card Back"
                    className="w-full h-full object-cover group-hover/img:scale-102 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="px-4 py-2 rounded-lg bg-black/70 text-xs font-bold text-[#D4AF37] flex items-center gap-1.5 border border-[#D4AF37]">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Full Size</span>
                    </span>
                  </div>
                </div>

                <h4 className="text-base font-serif font-bold text-white mb-1">
                  KSU Corporate Visiting Card — Reverse
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Showcases &ldquo;Seva se Samriddhi ki Ore...&rdquo;, dual transport and civil contracting services checklist, and our four commitment pillars.
                </p>
              </div>

              {/* Action Buttons Row */}
              <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => handleOpenLightbox(1)}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>View</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleDownloadSingle(1)}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PNG</span>
                </button>

                <button
                  type="button"
                  onClick={() => handlePrintItem(1)}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                >
                  <Printer className="w-3.5 h-3.5 text-[#F3C352]" />
                  <span>Print</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleDownloadSingle(1)}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#D4AF37] hover:bg-[#F3C352] text-[#0B192C] text-xs font-bold transition-colors shadow-xs"
                >
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Company Profile / Pamphlet Showcase */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0E2038] via-[#0B192C] to-[#0E2038] p-6 sm:p-10 border border-[#D4AF37]/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Pamphlet High-Res Image Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => handleOpenLightbox(2)}
                className="relative max-w-sm rounded-xl overflow-hidden border border-[#D4AF37]/50 bg-black cursor-pointer group shadow-2xl"
              >
                <img
                  src={corporateAssets[2].imageSrc}
                  alt="Official KSU Corporate Brochure"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-5 py-2.5 rounded-lg bg-black/80 text-xs font-bold text-[#D4AF37] flex items-center gap-2 border border-[#D4AF37]">
                    <Eye className="w-4 h-4" />
                    <span>View Brochure Full Screen</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Brochure Description & Controls */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#F3C352]">
                Comprehensive Company Profile
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">
                OFFICIAL KSU INFRA &amp; LOGISTIC PAMPHLET
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Review the official single-sheet company profile detailing both core verticals—Logistics &amp; Transport Services alongside Infra Projects &amp; Construction—complete with primary service offerings, foundational values, and director contact credentials.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Includes full transport breakdown: Flyash, Bulk Material, Pan India Fleet</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Includes civil infrastructure capabilities: Roads, Bridges, Government contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Official address: 501, New DM Tower, Rawabhata, Raipur, Chhattisgarh</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleOpenLightbox(2)}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#F3C352] text-[#0B192C] font-bold text-xs uppercase tracking-wide transition-colors shadow-md"
                >
                  <Eye className="w-4 h-4 text-[#0B192C]" />
                  <span>VIEW BROCHURE</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleDownloadSingle(2)}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wide transition-colors border border-white/20"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>DOWNLOAD BROCHURE</span>
                </button>

                <button
                  type="button"
                  onClick={() => handlePrintItem(2)}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wide transition-colors border border-white/20"
                >
                  <Printer className="w-4 h-4 text-[#F3C352]" />
                  <span>PRINT BROCHURE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <VisitingCardLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={corporateAssets}
        initialIndex={activeAssetIndex}
      />
    </section>
  );
};
