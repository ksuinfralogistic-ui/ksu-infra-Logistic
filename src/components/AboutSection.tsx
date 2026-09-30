import React from 'react';
import { Shield, Sparkles, Target, Compass, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const values = [
    {
      name: 'SEVA',
      hindi: 'सेवा',
      english: 'Selfless Service',
      description: 'Dedicated commitment to serving the needs of businesses, contractors, and nation-building initiatives with honesty.',
      icon: Shield,
    },
    {
      name: 'SANSKAR',
      hindi: 'संस्कार',
      english: 'Values & Ethics',
      description: 'Grounded in timeless cultural values, ethical business conduct, and unwavering respect for every partner.',
      icon: Sparkles,
    },
    {
      name: 'SAMARPAN',
      hindi: 'समर्पण',
      english: 'True Dedication',
      description: 'Complete devotion to project timelines, client commitments, and operational safety on road and at site.',
      icon: Target,
    },
    {
      name: 'AVSAR',
      hindi: 'अवसर',
      english: 'Opportunity Creation',
      description: 'Catalyzing economic avenues and mutual growth for industrial partners, communities, and a developing India.',
      icon: Compass,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Composite & Official Brand Identity */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-[#0B192C]">
              <img
                src="/src/assets/images/hero_infra_logistics_1790799085240.jpg"
                alt="KSU Infra & Logistic Civil and Transport Works"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/40 to-transparent" />

              {/* Gold Accented Badge Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/40 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0B192C] text-[#D4AF37]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#0B192C]">
                      Kripa Shanker Upadhyay
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">
                      Director · KSU Infra &amp; Logistic
                    </p>
                    <p className="text-[11px] text-[#B8860B] font-semibold mt-0.5">
                      Raipur, Chhattisgarh · Pan India Operations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative architectural motif */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none rounded-tl-xl" />
          </div>

          {/* Right Column: Company Story & Values */}
          <div className="lg:col-span-7">
            <div className="text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
              Corporate Overview &amp; Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#0B192C] tracking-tight">
              ABOUT KSU INFRA &amp; LOGISTIC
            </h2>

            <div className="w-16 h-1 bg-[#D4AF37] mt-3 mb-6 rounded-full" />

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-[#0B192C] font-semibold">KSU Infra &amp; Logistic</strong> is a Raipur-based enterprise focused on heavy transportation, bulk material logistics, and infrastructure project services across India.
              </p>
              <p>
                The company combines reliable transportation capabilities with infrastructure and civil project execution to support businesses, contractors, and project requirements. From specialized flyash haulage for industrial complexes to highway and civil engineering contracts, KSU delivers end-to-end execution with accountability.
              </p>
            </div>

            {/* Tagline Box */}
            <div className="my-8 p-4 rounded-xl bg-slate-50 border-l-4 border-[#FF7722] text-[#0B192C]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B8860B] block mb-1">
                Our Guiding Motto
              </span>
              <p className="font-serif font-bold text-lg sm:text-xl text-[#0B192C]">
                BETTER PEOPLE, STRONGER INDIA
              </p>
              <p className="text-xs text-slate-600 mt-1 italic">
                &ldquo;Reliable Movement. Strong Infrastructure. Better Tomorrow.&rdquo;
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="mt-8">
              <h3 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4">
                Foundational Brand Pillars
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((val) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={val.name}
                      className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#D4AF37]/50 hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="w-4 h-4 text-[#D4AF37]" />
                        <span className="font-serif font-bold text-sm text-[#0B192C]">
                          {val.name}
                        </span>
                        <span className="text-xs font-medium text-[#FF7722]">
                          ({val.hindi})
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-normal">
                        {val.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
