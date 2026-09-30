import React, { useState } from 'react';
import { MapPin, Navigation, ArrowRight, ShieldCheck, Compass } from 'lucide-react';

export const PanIndiaMap: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<string>('Raipur, Chhattisgarh');

  const highlightedStates = [
    { name: 'Chhattisgarh', role: 'Headquarters & Central Dispatch Hub (Raipur)', color: '#D4AF37' },
    { name: 'Madhya Pradesh (MP)', role: 'Major Industrial & Mineral Transit Corridor', color: '#1D4ED8' },
    { name: 'Uttar Pradesh (UP)', role: 'Expressway & Highway Infrastructure Works', color: '#1D4ED8' },
    { name: 'Bihar', role: 'High-Volume Bulk Material & Flyash Haulage', color: '#1D4ED8' },
    { name: 'Jharkhand', role: 'Mining, Coal & Industrial Bulk Transport', color: '#1D4ED8' },
    { name: 'Maharashtra', role: 'Western Industrial Hubs & Heavy Freight Links', color: '#1D4ED8' },
    { name: 'Andhra Pradesh', role: 'Southern Coastal & Industrial Corridors', color: '#1D4ED8' },
  ];

  return (
    <section id="network" className="py-20 bg-[#0B192C] text-white relative overflow-hidden">
      {/* Decorative Grid Backdrop */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F3C352] mb-2">
            <Compass className="w-4 h-4 text-[#D4AF37]" />
            <span>National Logistics &amp; Infra Footprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-white uppercase">
            MOVING ACROSS INDIA
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Pan India transportation and infrastructure support from Raipur, Chhattisgarh. Connecting industrial clusters, thermal power stations, and civil project corridors nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Visual Vector Route Map */}
          <div className="lg:col-span-7 bg-[#060D17]/80 rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  National Transit Corridors
                </span>
              </div>
              <div className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Pan India Service Active</span>
              </div>
            </div>

            {/* Custom SVG Representation of India Network */}
            <div className="relative w-full aspect-4/3 max-h-[420px] flex items-center justify-center">
              <svg
                viewBox="0 0 600 500"
                className="w-full h-full drop-shadow-lg"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified India Silhouette Outline */}
                <path
                  d="M260 40 L300 70 L340 90 L380 130 L430 150 L480 160 L440 210 L400 240 L360 270 L380 340 L350 400 L300 470 L280 470 L230 380 L200 320 L160 270 L140 220 L170 180 L210 160 L240 100 Z"
                  fill="#0D223A"
                  stroke="#1E3A5F"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />

                {/* Regional Radial Waves from Raipur Hub */}
                <circle cx="310" cy="270" r="60" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.3" />
                <circle cx="310" cy="270" r="110" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.2" />
                <circle cx="310" cy="270" r="160" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.1" />

                {/* Corridor Highway Transit Lines */}
                <line x1="310" y1="270" x2="260" y2="220" stroke="#FF7722" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="310" y1="270" x2="310" y2="170" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="310" y1="270" x2="380" y2="190" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
                <line x1="310" y1="270" x2="370" y2="240" stroke="#FF7722" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="310" y1="270" x2="220" y2="280" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="310" y1="270" x2="310" y2="360" stroke="#FF7722" strokeWidth="2.5" strokeLinecap="round" />
                {/* Pan India links */}
                <line x1="260" y1="220" x2="210" y2="160" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                <line x1="310" y1="170" x2="280" y2="100" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                <line x1="310" y1="360" x2="300" y2="440" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />

                {/* Nodes */}
                <g className="cursor-pointer" onClick={() => setSelectedHub('Uttar Pradesh')}>
                  <circle cx="310" cy="170" r="7" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="322" y="174" fill="#E2E8F0" fontSize="11" fontWeight="700">UP</text>
                </g>

                <g className="cursor-pointer" onClick={() => setSelectedHub('Bihar')}>
                  <circle cx="380" cy="190" r="6" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="392" y="194" fill="#E2E8F0" fontSize="11" fontWeight="700">BIHAR</text>
                </g>

                <g className="cursor-pointer" onClick={() => setSelectedHub('Jharkhand')}>
                  <circle cx="370" cy="240" r="6" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="382" y="244" fill="#E2E8F0" fontSize="11" fontWeight="700">JHARKHAND</text>
                </g>

                <g className="cursor-pointer" onClick={() => setSelectedHub('Madhya Pradesh')}>
                  <circle cx="260" cy="220" r="7" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="210" y="224" fill="#E2E8F0" fontSize="11" fontWeight="700">MP</text>
                </g>

                <g className="cursor-pointer" onClick={() => setSelectedHub('Maharashtra')}>
                  <circle cx="220" cy="280" r="7" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="120" y="284" fill="#E2E8F0" fontSize="11" fontWeight="700">MAHARASHTRA</text>
                </g>

                <g className="cursor-pointer" onClick={() => setSelectedHub('Andhra Pradesh')}>
                  <circle cx="310" cy="360" r="7" fill="#1D4ED8" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="322" y="364" fill="#E2E8F0" fontSize="11" fontWeight="700">ANDHRA PRADESH</text>
                </g>

                {/* Central Headquarters: Raipur */}
                <g className="cursor-pointer" onClick={() => setSelectedHub('Raipur, Chhattisgarh')}>
                  <circle cx="310" cy="270" r="11" fill="#FF7722" stroke="#F3C352" strokeWidth="3" />
                  <circle cx="310" cy="270" r="4" fill="#FFFFFF" />
                  <text x="326" y="275" fill="#F3C352" fontSize="13" fontWeight="900">RAIPUR (HQ)</text>
                </g>
              </svg>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>★ Raipur Central Operations Dispatch</span>
              <span className="text-[#F3C352] font-semibold">Selected: {selectedHub}</span>
            </div>
          </div>

          {/* Right Column: Key Corridor Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-3 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
                Key Industrial Corridors
              </div>

              {highlightedStates.map((st) => (
                <div
                  key={st.name}
                  onClick={() => setSelectedHub(st.name)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    selectedHub.includes(st.name) || (st.name.includes('Chhattisgarh') && selectedHub.includes('Raipur'))
                      ? 'bg-white/10 border-[#D4AF37] text-white shadow-sm'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/8'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className={`w-4 h-4 ${st.name.includes('Chhattisgarh') ? 'text-[#FF7722]' : 'text-[#D4AF37]'}`} />
                    <div>
                      <h4 className="text-sm font-semibold">{st.name}</h4>
                      <p className="text-[11px] text-slate-400">{st.role}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
              ))}
            </div>

            {/* Clear Pan India Availability Clause */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/70 to-slate-900 border border-blue-500/40">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#F3C352] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    PAN INDIA SERVICE AVAILABLE
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-normal font-normal">
                    While MP, UP, Bihar, Jharkhand, Andhra Pradesh, Maharashtra, and Chhattisgarh represent high-volume recurring corridors, KSU Infra &amp; Logistic deploys fleet operations and civil project capabilities across all states and union territories in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
