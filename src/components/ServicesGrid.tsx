import React, { useState } from 'react';
import {
  Truck,
  Building,
  HardHat,
  Boxes,
  MapPin,
  Clock,
  Radio,
  FileText,
  ShieldCheck,
  Scale,
  Compass,
  Layers,
  ArrowRight,
} from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'transport' | 'infra' | 'support' | 'material'>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'transport', label: 'Transport & Logistics' },
    { id: 'infra', label: 'Infrastructure' },
    { id: 'support', label: 'Project Support' },
    { id: 'material', label: 'Material Movement' },
  ];

  const services = [
    // Category 1: Transport & Logistics
    {
      category: 'transport',
      title: 'Flyash Dedicated Transport',
      desc: 'Bulk haulage of thermal station flyash using covered trailers to prevent dispersion and satisfy environmental norms.',
      icon: Truck,
      highlight: 'Flyash Logistics',
    },
    {
      category: 'transport',
      title: 'Pan India Commercial Haulage',
      desc: 'Long-haul inter-state transportation of commercial cargo and industrial feedstocks across national corridors.',
      icon: MapPin,
      highlight: 'National Reach',
    },
    {
      category: 'transport',
      title: 'Dedicated Fleet Deployment',
      desc: 'Contract-specific fleet placement with guaranteed turnaround windows and real-time GPS telemetry.',
      icon: Radio,
      highlight: 'Dedicated Fleet',
    },

    // Category 2: Infrastructure
    {
      category: 'infra',
      title: 'Government Civil Works',
      desc: 'Execution of state PWD and central municipal infrastructure civil contracts with turnkey accountability.',
      icon: Building,
      highlight: 'Civil Contracts',
    },
    {
      category: 'infra',
      title: 'Road & Highway Construction',
      desc: 'Earthworks, granular sub-base, asphalt laying, and peripheral road infrastructure execution.',
      icon: Compass,
      highlight: 'Highway Paving',
    },
    {
      category: 'infra',
      title: 'Bridge & Culvert Works',
      desc: 'Bridge substructure, pier cap concrete casting, girder launching, and stormwater drainage culverts.',
      icon: HardHat,
      highlight: 'Structural Works',
    },

    // Category 3: Project Support
    {
      category: 'support',
      title: 'Site Material Coordination',
      desc: 'Synchronized delivery schedules ensuring civil construction machinery and workforce never face material stockouts.',
      icon: Layers,
      highlight: 'Site Coordination',
    },
    {
      category: 'support',
      title: 'Project Timeline Planning',
      desc: 'Comprehensive stage-gate scheduling, vehicular routing plans, and budget-disciplined resource allocation.',
      icon: Clock,
      highlight: 'Planning',
    },
    {
      category: 'support',
      title: 'Quality & Safety Audits',
      desc: 'Field inspection of materials, vehicle safety checks, driver compliance, and environmental safety protocols.',
      icon: ShieldCheck,
      highlight: 'Quality & Safety',
    },

    // Category 4: Material Movement
    {
      category: 'material',
      title: 'Cement & Clinker Supply Transit',
      desc: 'High-tonnage supply transit connecting integrated cement manufacturing units with regional distribution silos.',
      icon: Boxes,
      highlight: 'Cement Transit',
    },
    {
      category: 'material',
      title: 'Sand, Gravel & Aggregate',
      desc: 'Direct movement of quarry aggregates, crushed stone, and construction sand straight to batching plants.',
      icon: Scale,
      highlight: 'Aggregates',
    },
    {
      category: 'material',
      title: 'Industrial Slag & Secondary Raw Materials',
      desc: 'Specialized handling and movement of blast furnace slag and industrial mineral by-products.',
      icon: FileText,
      highlight: 'Industrial Bulk',
    },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
            Integrated Solutions Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0B192C] tracking-tight">
            COMPREHENSIVE SERVICES
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Organized across four specialized operational pillars to serve industrial clients, government authorities, and infrastructure builders.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#0B192C] text-[#F3C352] shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-slate-200/80 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-slate-50 text-[#0B192C] group-hover:bg-[#0B192C] group-hover:text-[#D4AF37] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-400">
                      {srv.highlight}
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#0B192C] mb-2 group-hover:text-[#1D4ED8] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-[#B8860B] font-semibold">
                    KSU Execution
                  </span>
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-[#0B192C] group-hover:text-[#1D4ED8] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
