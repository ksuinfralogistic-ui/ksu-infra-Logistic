import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Download, Printer, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxItem {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  downloadFilename: string;
}

interface VisitingCardLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: LightboxItem[];
  initialIndex?: number;
}

export const VisitingCardLightbox: React.FC<VisitingCardLightboxProps> = ({
  isOpen,
  onClose,
  items,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Sync index when initialIndex changes
  React.useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoomLevel(1);
  }, [initialIndex, isOpen]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
    setZoomLevel(1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
    setZoomLevel(1);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentItem.imageSrc;
    link.download = currentItem.downloadFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>KSU Infra & Logistic - ${currentItem.title}</title>
            <style>
              body {
                margin: 0;
                padding: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: sans-serif;
                background-color: #ffffff;
              }
              h2 { color: #0B192C; margin-bottom: 8px; }
              p { color: #64748B; font-size: 14px; margin-top: 0; }
              img {
                max-width: 90%;
                max-height: 80vh;
                border: 1px solid #D4AF37;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
              }
            </style>
          </head>
          <body>
            <h2>KSU INFRA & LOGISTIC</h2>
            <p>${currentItem.title} · ${currentItem.subtitle}</p>
            <img src="${currentItem.imageSrc}" onload="window.print();window.close();" />
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md text-white animate-in fade-in duration-200"
    >
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-black/40">
        <div>
          <h3 className="font-serif font-bold text-sm sm:text-base text-white">
            {currentItem.title}
          </h3>
          <p className="text-xs text-[#D4AF37]">
            {currentItem.subtitle} ({currentIndex + 1} of {items.length})
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.2))}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Zoom Out"
            aria-label="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <span className="text-xs font-mono text-slate-300 w-12 text-center">
            {Math.round(zoomLevel * 100)}%
          </span>

          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.2))}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Zoom In"
            aria-label="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#D4AF37] transition-colors"
            title="Print"
            aria-label="Print Document"
          >
            <Printer className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#F3C352] text-[#0B192C] font-bold text-xs transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-[#0B192C]" />
            <span className="hidden sm:inline">Download</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-red-500/80 text-white transition-colors ml-2"
            title="Close Lightbox"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Display Area */}
      <div className="flex-1 relative flex items-center justify-center p-4 sm:p-8 overflow-hidden select-none">
        {/* Previous Button */}
        {items.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors shadow-lg"
            aria-label="Previous Asset"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Scaled Image */}
        <div
          className="transition-transform duration-200 max-w-full max-h-full flex items-center justify-center"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <img
            src={currentItem.imageSrc}
            alt={currentItem.title}
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl border border-[#D4AF37]/50 shadow-2xl"
          />
        </div>

        {/* Next Button */}
        {items.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors shadow-lg"
            aria-label="Next Asset"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Information Bar */}
      <div className="px-6 py-3 border-t border-white/10 bg-black/40 text-center text-xs text-slate-400 flex flex-wrap items-center justify-between">
        <span>Director: Kripa Shanker Upadhyay · Mob: +91 90390 38221</span>
        <span className="text-[#D4AF37] font-serif">KSU Infra &amp; Logistic · Official Corporate Asset</span>
        <span>Raipur, Chhattisgarh · Pan India</span>
      </div>
    </div>
  );
};
