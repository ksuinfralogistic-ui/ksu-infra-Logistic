import React, { useState } from 'react';
import {
  Truck,
  MapPin,
  Clock,
  ShieldCheck,
  Radio,
  FileCheck2,
  Phone,
  MessageSquare,
  ArrowRight,
  Boxes,
  Factory,
  Layers,
  Calculator,
  RotateCw,
} from 'lucide-react';

interface LogisticsSectionProps {
  onQuoteRequest?: (material: string, tonnage: string) => void;
}

export const LogisticsSection: React.FC<LogisticsSectionProps> = ({ onQuoteRequest }) => {
  // Estimator State
  const [selectedMaterial, setSelectedMaterial] = useState('Flyash Industry Bulk');
  const [tonnage, setTonnage] = useState('100');
  const [origin, setOrigin] = useState('Chhattisgarh (Raipur)');
  const [destination, setDestination] = useState('Maharashtra');

  const logisticsServices = [
    {
      id: '01',
      title: 'Flyash Industry Transportation',
      desc: 'Specialized pneumatic and covered transport for thermal power plant flyash movement to cement factories and construction projects.',
      icon: Factory,
    },
    {
      id: '02',
      title: 'Bulk Material Transportation',
      desc: 'End-to-end transport of cement, clinker, sand, aggregate gravel, slag, and industrial dry bulk materials.',
      icon: Boxes,
    },
    {
      id: '03',
      title: 'Pan India Transportation',
      desc: 'Seamless inter-state long-haul movement connecting major industrial zones, power clusters, and construction corridors nationwide.',
      icon: MapPin,
    },
    {
      id: '04',
      title: 'Dedicated Fleet Solutions',
      desc: 'Committed commercial trailers, multi-axle trucks, and specialized carriers allocated specifically for high-volume client projects.',
      icon: Truck,
    },
    {
      id: '05',
      title: 'Real-Time GPS Tracking',
      desc: '24/7 visibility into in-transit vehicle movement, route monitoring, and estimated arrival updates for dispatch coordinators.',
      icon: Radio,
    },
    {
      id: '06',
      title: 'Safe & On-Time Delivery',
      desc: 'Strict safety protocols, trained transport crew, secure tarping, and scheduled turnaround management on every corridor.',
      icon: Clock,
    },
    {
      id: '07',
      title: 'Customized Logistics Solutions',
      desc: 'Tailored transportation blueprints engineered around unique project schedules, discharge requirements, and material sensitivities.',
      icon: Layers,
    },
    {
      id: '08',
      title: 'Project-Based Transportation',
      desc: 'Dedicated logistics management for mega EPC projects, highway development, and turnkey industrial installations.',
      icon: FileCheck2,
    },
    {
      id: '09',
      title: 'Industrial Transportation',
      desc: 'High-volume raw material feed for manufacturing plants, smelters, rolling mills, and processing centers.',
      icon: ShieldCheck,
    },
    {
      id: '10',
      title: 'Contractor Transportation Support',
      desc: 'Reliable vehicular support, fleet augmentation, and site delivery backup for primary EPC and civil contractors.',
      icon: Truck,
    },
  ];

  const processSteps = [
    { step: '01', title: 'Requirement', desc: 'Detailed material tonnage and route briefing' },
    { step: '02', title: 'Vehicle Planning', desc: 'Fleet type and capacity assignment' },
    { step: '03', title: 'Dispatch', desc: 'Inspection, loading, and gate checkout' },
    { step: '04', title: 'Tracking', desc: 'Live GPS monitoring and corridor coordination' },
    { step: '05', title: 'Delivery', desc: 'Safe site arrival and systematic unloading' },
    { step: '06', title: 'Confirmation', desc: 'Weighment slip and POD sign-off' },
  ];

  const handleEstimatorWhatsApp = () => {
    const text = `Hello KSU Infra & Logistic, I want to enquire about Logistics & Transportation:\n- Material: ${selectedMaterial}\n- Est. Volume: ${tonnage} Metric Tons\n- Origin: ${origin}\n- Destination: ${destination}\nPlease provide transport availability and rate estimate.`;
    const url = `https://wa.me/919039038221?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="logistics" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
            Transportation &amp; Fleet Management
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0B192C] tracking-tight">
            MOVING MATERIALS. <br className="hidden sm:inline" />
            <span className="text-[#1D4ED8]">CONNECTING INDIA.</span>
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Pan-India bulk material transportation, dedicated industrial fleet management, and specialized flyash solutions engineered for reliability and precision.
          </p>
        </div>

        {/* Feature Spotlight Banner */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[300px]">
            <img
              src="/src/assets/images/flyash_bulk_transport_1790799129419.jpg"
              alt="Industrial Flyash Bulk Handling and Heavy Freight"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F3C352] block mb-1">
                Specialized Industrial Haulage
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Flyash &amp; Bulk Material Handling Across Power &amp; Cement Hubs
              </h3>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-2">
                Operational Discipline
              </div>
              <h4 className="text-lg font-serif font-bold text-[#0B192C] mb-3">
                Zero Spill, GPS Monitored Bulk Freight
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                With deep logistics expertise anchored in Chhattisgarh and central India, KSU coordinates steady, high-capacity material transit for industrial plants, infrastructure corridors, and civil project supply chains.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>High capacity multi-axle trailers &amp; tipping trucks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Prompt weighbridge coordination &amp; e-way bill compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Pan India coverage connecting key manufacturing states</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
              <a
                href="tel:+919039038221"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-[#0B192C] hover:bg-[#1D4ED8] transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call Fleet Desk</span>
              </a>
              <a
                href="https://wa.me/919039038221?text=Hello%20KSU%20Infra%20%26%20Logistic,%20I%20need%20transportation%20and%20fleet%20support."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Fleet Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* 10 Services Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B192C]">
                Comprehensive Transportation Services
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Engineered for uninterrupted industrial logistics and construction site supply.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#1D4ED8]">
              10 Specialized Offerings
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {logisticsServices.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="bg-white p-6 rounded-xl border border-slate-200/90 hover:border-[#1D4ED8]/60 hover:shadow-lg transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-blue-50 text-[#1D4ED8] group-hover:bg-[#0B192C] group-hover:text-[#D4AF37] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-serif font-bold text-xs text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                        {srv.id}
                      </span>
                    </div>

                    <h4 className="text-base font-serif font-bold text-[#0B192C] mb-2 group-hover:text-[#1D4ED8] transition-colors">
                      {srv.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                    <span className="text-[11px] text-slate-400">Pan India Available</span>
                    <a
                      href="#contact"
                      className="text-[#1D4ED8] hover:text-[#0B192C] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6-Stage Process Workflow */}
        <div className="mb-20 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
              Standard Operating Procedure
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0B192C] mt-1">
              Our 6-Stage Logistics Process
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              From requirement intake to verifiable weighbridge sign-off.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className="relative bg-slate-50 rounded-xl p-4 border border-slate-200/80 hover:border-[#D4AF37] transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-xs font-serif font-black text-[#1D4ED8] mb-1">
                    {step.step}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-[#0B192C] mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    {step.desc}
                  </p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-400 pointer-events-none">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Logistics Quick Estimator Widget */}
        <div className="bg-[#0B192C] rounded-2xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F3C352] mb-2">
                <Calculator className="w-4 h-4 text-[#D4AF37]" />
                <span>Quick Logistics Route &amp; Volume Estimator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                Calculate &amp; Dispatch Your Material Fleet
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                Select your required bulk material commodity, estimated tonnage, and transit corridor to immediately generate a transport schedule and request a dedicated quotation directly on WhatsApp.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Primary Operating Hub:</span>
                  <strong className="text-[#F3C352]">Raipur, Chhattisgarh</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Fleet Availability:</span>
                  <span className="text-emerald-400 font-semibold">Ready for Deployment</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tracking:</span>
                  <span className="text-slate-200">24/7 Satellite GPS</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/15">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-slate-200 mb-1.5">
                    Material Type
                  </label>
                  <select
                    value={selectedMaterial}
                    onChange={(e) => setSelectedMaterial(e.target.value)}
                    className="w-full bg-[#060D17] border border-slate-600 rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#D4AF37]"
                  >
                    <option value="Flyash Industry Bulk">Flyash (Thermal Power)</option>
                    <option value="Cement & Clinker">Cement &amp; Clinker</option>
                    <option value="Sand & Aggregates">Sand &amp; Aggregate Gravel</option>
                    <option value="Industrial Slag">Industrial Slag</option>
                    <option value="Steel & Heavy Cargo">Steel &amp; Structural Cargo</option>
                    <option value="General Industrial Bulk">General Industrial Bulk</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-200 mb-1.5">
                    Est. Requirement (MT)
                  </label>
                  <select
                    value={tonnage}
                    onChange={(e) => setTonnage(e.target.value)}
                    className="w-full bg-[#060D17] border border-slate-600 rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#D4AF37]"
                  >
                    <option value="50">50 - 100 Metric Tons</option>
                    <option value="250">250 - 500 Metric Tons</option>
                    <option value="1000">1,000+ Metric Tons (Monthly)</option>
                    <option value="5000">5,000+ Metric Tons (Project Fleet)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-200 mb-1.5">
                    Origin Corridor
                  </label>
                  <input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full bg-[#060D17] border border-slate-600 rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#D4AF37]"
                    placeholder="e.g. Raipur, CG"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-200 mb-1.5">
                    Destination Corridor
                  </label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-[#060D17] border border-slate-600 rounded-lg px-3 py-2 text-xs text-white focus:outline-hidden focus:border-[#D4AF37]"
                    placeholder="e.g. Maharashtra, UP, MP"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleEstimatorWhatsApp}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-[#0B192C] font-bold text-xs uppercase tracking-wide transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#0B192C]" />
                  <span>Get Quote On WhatsApp</span>
                </button>

                <a
                  href="#contact"
                  className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-lg bg-[#D4AF37] hover:bg-[#F3C352] text-[#0B192C] font-bold text-xs uppercase tracking-wide transition-colors"
                >
                  <span>Submit Tender RFQ</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation Support CTA Callout */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="text-left">
            <h4 className="font-serif font-bold text-lg text-[#0B192C]">
              Need Immediate Transportation Support or Dedicated Fleet?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Speak directly with our transport dispatch coordinators for urgent bulk haulage across India.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919039038221"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-[#0B192C] hover:bg-[#1D4ED8] transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>CALL NOW</span>
            </a>

            <a
              href="https://wa.me/919039038221?text=Hello%20KSU%20Infra%20%26%20Logistic,%20I%20would%20like%20to%20enquire%20about%20transportation%20support."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WHATSAPP NOW</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
