import React from 'react';
import { Users, Handshake, Sprout, Landmark } from 'lucide-react';

export const CommitmentSection: React.FC = () => {
  const commitments = [
    {
      title: 'BETTER PEOPLE',
      desc: 'Investing in our workforce, certified drivers, and site engineers who conduct business with integrity, safety, and respect.',
      icon: Users,
      color: '#1D4ED8',
    },
    {
      title: 'TRUSTED PARTNER',
      desc: 'Upholding promises across schedules, contracts, and communication. We believe enduring trust is earned through performance.',
      icon: Handshake,
      color: '#D4AF37',
    },
    {
      title: 'SUSTAINABLE GROWTH',
      desc: 'Active facilitation of flyash utilization, reduced empty-mile fleet transit, and resilient civil construction that stands the test of time.',
      icon: Sprout,
      color: '#10B981',
    },
    {
      title: 'STRONGER INDIA',
      desc: 'Dedicated to national progress by building durable roadways and bridging vital industrial routes from central India to the nation.',
      icon: Landmark,
      color: '#FF7722',
    },
  ];

  return (
    <section className="py-20 bg-[#0B192C] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#F3C352] mb-2">
            Core Values &amp; Vision
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-white">
            OUR COMMITMENT
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            The four foundational pillars guiding every logistical kilometer and every structural foundation we pour.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#D4AF37] hover:bg-white/8 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-white/10 border border-white/15"
                    style={{ color: item.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif font-bold text-lg text-white mb-2 tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-semibold text-[#F3C352]">
                  KSU Pillar {idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Block */}
        <div className="mt-16 text-center">
          <blockquote className="italic font-serif text-xl sm:text-2xl text-[#F5E6BE] max-w-2xl mx-auto">
            &ldquo;Reliable Movement. Strong Infrastructure. Better Tomorrow.&rdquo;
          </blockquote>
          <p className="text-xs uppercase tracking-widest text-slate-400 mt-2 font-semibold">
            KSU Infra &amp; Logistic · Raipur, Chhattisgarh
          </p>
        </div>
      </div>
    </section>
  );
};
