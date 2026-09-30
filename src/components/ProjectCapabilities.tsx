import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProjectCapabilitiesProps {
  onEnquire?: () => void;
}

export const ProjectCapabilities: React.FC<ProjectCapabilitiesProps> = ({ onEnquire }) => {
  const capabilities = [
    {
      title: 'ROAD PROJECTS',
      category: 'Civil Infrastructure',
      desc: 'Bituminous asphalt highway paving, granular sub-base preparation, road widening, and community corridor connectivity.',
      image: '/src/assets/images/road_expressway_paving_1790800432041.jpg',
      points: ['Highway & Expressway Paving', 'Earthwork & Compaction', 'Drainage & Peripheral Works'],
    },
    {
      title: 'BRIDGE PROJECTS',
      category: 'Structural Engineering',
      desc: 'Reinforced concrete pier casting, girder launching, culverts, and grade-separated elevated flyover structures.',
      image: '/src/assets/images/infra_bridge_construction_1790799116380.jpg',
      points: ['Substructure & Superstructure', 'Pier Cap & Girder Erection', 'Major & Minor Bridges'],
    },
    {
      title: 'CIVIL CONSTRUCTION',
      category: 'Commercial & Institutional',
      desc: 'Turnkey structural RCC construction for commercial complexes, industrial plants, warehouses, and institutional buildings.',
      image: '/src/assets/images/civil_building_structure_1790800443222.jpg',
      points: ['Industrial Plants & Sheds', 'RCC Structural Framing', 'Government Contract Execution'],
    },
    {
      title: 'INFRASTRUCTURE DEVELOPMENT',
      category: 'Site Engineering',
      desc: 'Master site grading, integrated utility networks, industrial estate boundary works, and municipal civic developments.',
      image: '/src/assets/images/hero_infra_logistics_1790799085240.jpg',
      points: ['Industrial Estate Works', 'Land Leveling & Earthmoving', 'Civic Utility Infrastructure'],
    },
    {
      title: 'BULK TRANSPORTATION',
      category: 'Specialized Haulage',
      desc: 'Dedicated pneumatic tanker haulage for thermal power plant flyash, cement clinker, aggregates, and dry mineral powders.',
      image: '/src/assets/images/flyash_bulk_transport_1790799129419.jpg',
      points: ['Flyash Enclosed Tankers', 'Zero-Spillage Transport', 'Continuous 24/7 Supply'],
    },
    {
      title: 'INDUSTRIAL LOGISTICS',
      category: 'Pan India Fleet',
      desc: 'Long-haul interstate multi-axle freight movement connecting industrial clusters with full satellite GPS telemetry.',
      image: '/src/assets/images/logistics_fleet_highway_1790799098665.jpg',
      points: ['Dedicated Commercial Fleet', 'Real-Time Dispatch GPS', 'On-Time Scheduled Delivery'],
    },
  ];

  return (
    <section id="capabilities" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
            Execution Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0B192C] tracking-tight">
            OUR PROJECT CAPABILITIES
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Proven operational capacity across highway networks, structural civil works, and continuous industrial freight corridors.
          </p>
        </div>

        {/* 6 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/30 to-transparent" />

                  <span className="absolute top-4 left-4 bg-[#0B192C]/85 backdrop-blur-xs text-[11px] font-semibold text-[#F3C352] px-3 py-1 rounded-md border border-[#D4AF37]/40 uppercase tracking-wider">
                    {cap.category}
                  </span>

                  <h3 className="absolute bottom-3 left-4 right-4 text-lg font-serif font-bold text-white tracking-wide">
                    {cap.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                    {cap.desc}
                  </p>

                  <ul className="space-y-2 mb-2">
                    {cap.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-[#B8860B] font-semibold">
                  Pan India Execution
                </span>
                <a
                  href="#contact"
                  onClick={onEnquire}
                  className="text-xs font-bold text-[#0B192C] group-hover:text-[#1D4ED8] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
