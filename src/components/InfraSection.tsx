import React from 'react';
import {
  Building2,
  HardHat,
  Waypoints,
  ShieldAlert,
  CalendarCheck,
  FileSignature,
  Truck,
  DraftingCompass,
  Hammer,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare,
} from 'lucide-react';

interface InfraSectionProps {
  onDiscussProject?: () => void;
}

export const InfraSection: React.FC<InfraSectionProps> = ({ onDiscussProject }) => {
  const infraOfferings = [
    {
      title: 'Government Civil Contracts',
      desc: 'Execution of public sector infrastructure contracts, highway packages, and municipal civil works with strict compliance.',
      icon: FileSignature,
      scope: 'State & National Tenders',
    },
    {
      title: 'Private Civil Contracts',
      desc: 'Turnkey civil contracting for private developers, commercial establishments, and heavy industrial facilities.',
      icon: Building2,
      scope: 'Commercial & Industrial',
    },
    {
      title: 'Road Construction & Expressways',
      desc: 'Earthwork, sub-base preparation, bituminous laying, and asphalt paving for urban roadways and connecting highways.',
      icon: Waypoints,
      scope: 'Corridor Development',
    },
    {
      title: 'Bridge & Flyover Projects',
      desc: 'Substructure pier casting, reinforced girder erection, culvert construction, and elevated grade-separated structures.',
      icon: Hammer,
      scope: 'Structural Civil Works',
    },
    {
      title: 'Building Construction Works',
      desc: 'Structural RCC framing, institutional campuses, industrial warehouses, and large-format commercial buildings.',
      icon: Building2,
      scope: 'Turnkey Civil Buildings',
    },
    {
      title: 'Infrastructure Development',
      desc: 'Integrated utilities, drainage layouts, industrial estate leveling, boundary systems, and peripheral infrastructure.',
      icon: DraftingCompass,
      scope: 'Master Site Works',
    },
    {
      title: 'Site Development & Earthworks',
      desc: 'Heavy grading, bulk excavation, land leveling, site preparation, and soil stabilization for mega projects.',
      icon: HardHat,
      scope: 'Civil Earthworks',
    },
    {
      title: 'Material Supply Coordination',
      desc: 'Synchronized on-site supply of cement, stone aggregate, flyash, sand, and structural reinforcement via integrated fleet.',
      icon: Truck,
      scope: 'End-to-End Supply',
    },
    {
      title: 'Project Planning & Execution',
      desc: 'Milestone tracking, equipment deployment scheduling, resource mobilization, and timeline adherence.',
      icon: CalendarCheck,
      scope: 'Project Management',
    },
    {
      title: 'Quality & Safety Coordination',
      desc: 'Stringent on-site QA/QC material testing, safety protocols, worker compliance, and structural integrity audits.',
      icon: ShieldAlert,
      scope: 'Standards Compliance',
    },
  ];

  return (
    <section id="infra" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#E65100] mb-2">
            Civil Contracting &amp; Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0B192C] tracking-tight">
            BUILDING THE INFRASTRUCTURE <br className="hidden sm:inline" />
            <span className="text-[#E65100]">OF TOMORROW</span>
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Executing civil engineering, roadway, bridge, and building construction contracts for government authorities and private developers with uncompromising safety and precision.
          </p>
        </div>

        {/* Marquee Visual Hero Card */}
        <div className="mb-16 relative rounded-2xl overflow-hidden border border-slate-200 bg-[#0B192C] shadow-lg">
          <div className="relative h-80 sm:h-96 w-full">
            <img
              src="/src/assets/images/infra_bridge_construction_1790799116380.jpg"
              alt="Bridge and Highway Construction Engineering"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/50 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F3C352] block mb-1">
                  Civil Engineering Capabilities
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
                  Roadways, Bridges &amp; Institutional Civil Contracts
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-2 line-clamp-2">
                  Combining heavy machinery coordination, qualified engineering oversight, and reliable site material movement for seamless contract execution.
                </p>
              </div>

              <a
                href="#contact"
                onClick={onDiscussProject}
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-[#0B192C] bg-[#D4AF37] hover:bg-[#F3C352] transition-colors shadow-md"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 10 Civil Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {infraOfferings.map((offering, idx) => {
            const Icon = offering.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 p-6 rounded-xl border border-slate-200 hover:border-[#FF7722]/50 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-orange-50 text-[#E65100] group-hover:bg-[#0B192C] group-hover:text-[#D4AF37] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 tracking-wide">
                      {offering.scope}
                    </span>
                  </div>

                  <h4 className="text-base font-serif font-bold text-[#0B192C] mb-2 group-hover:text-[#E65100] transition-colors">
                    {offering.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {offering.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E65100]" />
                    <span>Project Execution</span>
                  </span>
                  <a
                    href="#contact"
                    className="font-semibold text-[#0B192C] group-hover:text-[#E65100] transition-colors flex items-center gap-1"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Discussion Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0B192C] via-[#0E2038] to-[#0B192C] border border-[#D4AF37]/30 p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F3C352] block mb-1">
              Contract Tendering &amp; Civil Execution
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Planning an Infrastructure Project or Road Contract?
            </h3>
            <p className="text-slate-300 text-sm mt-2 font-normal leading-relaxed">
              Connect directly with Director Kripa Shanker Upadhyay for private subcontracting, joint execution, or material logistics coordination.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+919039038221"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>+91 90390 38221</span>
            </a>

            <a
              href="#contact"
              onClick={onDiscussProject}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-[#0B192C] bg-[#D4AF37] hover:bg-[#F3C352] transition-colors shadow-md"
            >
              <HardHat className="w-4 h-4 text-[#0B192C]" />
              <span>Discuss Project Scope</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
