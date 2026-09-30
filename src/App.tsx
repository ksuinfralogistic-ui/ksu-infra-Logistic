/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BusinessVerticals } from './components/BusinessVerticals';
import { WhatWeDo } from './components/WhatWeDo';
import { AboutSection } from './components/AboutSection';
import { ProjectCapabilities } from './components/ProjectCapabilities';
import { LogisticsSection } from './components/LogisticsSection';
import { InfraSection } from './components/InfraSection';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyPartnerKsu } from './components/WhyPartnerKsu';
import { PanIndiaMap } from './components/PanIndiaMap';
import { CorporateBrandShowcase } from './components/CorporateBrandShowcase';
import { CorporateMaterials } from './components/CorporateMaterials';
import { ClientVoices } from './components/ClientVoices';
import { IndustriesServed } from './components/IndustriesServed';
import { WorkflowSection } from './components/WorkflowSection';
import { CommitmentSection } from './components/CommitmentSection';
import { LeadChoiceSection } from './components/LeadChoiceSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedServiceForForm, setSelectedServiceForForm] = useState('Logistics & Transportation');

  // Scroll observer to update active section in header
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'business',
        'what-we-do',
        'about',
        'capabilities',
        'logistics',
        'infra',
        'services',
        'network',
        'corporate-materials',
        'testimonials',
        'contact',
      ];
      const scrollY = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectLeadOption = (serviceType: string) => {
    setSelectedServiceForForm(serviceType);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0A1428] font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#0A1428]">
      {/* Sticky Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={(id) => scrollToSection(id)}
      />

      <main className="flex-1">
        {/* 1. New Cinematic Split Hero */}
        <Hero
          onExploreClick={() => scrollToSection('what-we-do')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 2. Business Verticals (Dominant Dual Panels) */}
        <BusinessVerticals
          onSelectVertical={(vertical) => scrollToSection(vertical)}
        />

        {/* 3. What We Do (6 Service Tiles) */}
        <WhatWeDo
          onLearnMore={(sectionId) => scrollToSection(sectionId)}
        />

        {/* 4. About KSU Infra & Logistic */}
        <AboutSection />

        {/* 5. Project Capabilities (6 Visual Sectors) */}
        <ProjectCapabilities
          onEnquire={() => scrollToSection('contact')}
        />

        {/* 6. Dedicated Logistics & Transportation Vertical */}
        <LogisticsSection
          onQuoteRequest={() => scrollToSection('contact')}
        />

        {/* 7. Dedicated Infra Projects & Civil Works Vertical */}
        <InfraSection
          onDiscussProject={() => scrollToSection('contact')}
        />

        {/* 8. Comprehensive Services Matrix */}
        <ServicesGrid />

        {/* 9. Why Partner with KSU (8 Operational Standards) */}
        <WhyPartnerKsu />

        {/* 10. Moving Across India (Pan India Map) */}
        <PanIndiaMap />

        {/* 11. Corporate Brand Showcase */}
        <CorporateBrandShowcase
          onViewMaterials={() => scrollToSection('corporate-materials')}
        />

        {/* 12. Official Corporate Materials & Visiting Card Download Center */}
        <CorporateMaterials />

        {/* 13. Client Voices & Testimonials */}
        <ClientVoices />

        {/* 14. Industries Served */}
        <IndustriesServed />

        {/* 15. 6-Step Workflow */}
        <WorkflowSection />

        {/* 16. Our Commitment Pillars */}
        <CommitmentSection />

        {/* 17. Start Your Next Project (Dual Lead Choice) */}
        <LeadChoiceSection
          onSelectOption={handleSelectLeadOption}
        />

        {/* 18. Executive CTA Banner */}
        <CtaBanner onEnquiryClick={() => scrollToSection('contact')} />

        {/* 19. Advanced Business Enquiry Form & Contact Portal */}
        <ContactSection
          initialService={selectedServiceForForm}
        />
      </main>

      {/* Corporate Dark Navy Footer */}
      <Footer />

      {/* Sticky Mobile Quick Action Bar */}
      <MobileBottomBar
        onEnquireClick={() => scrollToSection('contact')}
      />
    </div>
  );
}
