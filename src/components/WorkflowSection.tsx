import React from 'react';
import {
  FileText,
  CalendarCheck2,
  Cpu,
  PlayCircle,
  Radio,
  CheckCircle,
} from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Requirement',
      desc: 'Initial consultation to capture cargo volume, route specs, project drawings, and milestones.',
      icon: FileText,
    },
    {
      num: '02',
      title: 'Planning',
      desc: 'Route hazard analysis, vehicle sizing, procurement scheduling, and compliance alignment.',
      icon: CalendarCheck2,
    },
    {
      num: '03',
      title: 'Resource Allocation',
      desc: 'Dedicated fleet mobilization, machinery dispatch, and assignment of site engineering supervisors.',
      icon: Cpu,
    },
    {
      num: '04',
      title: 'Execution',
      desc: 'Safe loading at terminal or on-site civil works commencement under strict safety guidelines.',
      icon: PlayCircle,
    },
    {
      num: '05',
      title: 'Tracking & Coordination',
      desc: 'Real-time GPS transit monitoring, weighbridge check-ins, and proactive client status reporting.',
      icon: Radio,
    },
    {
      num: '06',
      title: 'Delivery / Completion',
      desc: 'Safe offloading, joint inspection, QA verification, and proof-of-delivery sign-off.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
            Execution Standard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0B192C] tracking-tight">
            OUR 6-STEP WORKFLOW
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            A structured, transparent operational roadmap governing every bulk transport dispatch and civil construction contract.
          </p>
        </div>

        {/* Desktop Horizontal Timeline & Mobile Vertical Timeline */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-slate-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-slate-50/80 p-5 rounded-xl border border-slate-200 hover:border-[#D4AF37] hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-serif font-black text-[#0B192C] bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
                        {step.num}
                      </span>
                      <div className="p-2 rounded-lg bg-blue-50 text-[#1D4ED8]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-sm font-serif font-bold text-[#0B192C] mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Phase {idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
