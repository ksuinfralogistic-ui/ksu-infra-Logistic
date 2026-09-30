import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  Mail,
  Send,
  CheckCircle2,
  Building,
  User,
  ShieldCheck,
  ExternalLink,
  Upload,
  Calendar,
  FileCheck,
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'Logistics & Transportation',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    mobileNumber: '',
    whatsappNumber: '',
    email: '',
    city: '',
    state: '',
    businessRequirement: initialService,
    projectLocation: '',
    materialType: '',
    estimatedRequirement: '',
    expectedStartDate: '',
    message: '',
    documentName: '',
    botField: '', // Honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync initialService if prop changes
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, businessRequirement: initialService }));
    }
  }, [initialService]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile Number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = 'Please enter a valid phone number';
    }
    if (!formData.businessRequirement) {
      newErrors.businessRequirement = 'Please select a business requirement';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.botField) return;

    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 700);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, documentName: file.name }));
    }
  };

  const getSmartWhatsAppUrl = (type: 'current' | 'transport' | 'infra' | 'general') => {
    let message = '';
    if (type === 'transport') {
      message = 'Hello KSU Infra & Logistic, I am interested in your transportation services. Please contact me.';
    } else if (type === 'infra') {
      message = 'Hello KSU Infra & Logistic, I have an infrastructure/civil project requirement. Please contact me.';
    } else if (type === 'general') {
      message = 'Hello KSU Infra & Logistic, I would like to discuss a business requirement.';
    } else {
      // From Form
      message = `Hello KSU Infra & Logistic, I am submitting a business enquiry:\n- Name: ${formData.fullName || 'Client'}\n- Company: ${formData.companyName || 'N/A'}\n- Mobile: ${formData.mobileNumber || 'N/A'}\n- Requirement: ${formData.businessRequirement}\n- Location: ${formData.projectLocation || formData.city || 'India'}\n- Material/Type: ${formData.materialType || 'N/A'}\n- Est. Volume: ${formData.estimatedRequirement || 'N/A'}\n- Target Start: ${formData.expectedStartDate || 'Immediate'}\n- Details: ${formData.message || 'Please contact me.'}`;
    }
    return `https://wa.me/919039038221?text=${encodeURIComponent(message)}`;
  };

  const requirementOptions = [
    'Logistics & Transportation',
    'Flyash Transportation',
    'Bulk Material Transportation',
    'Industrial Transportation',
    'Civil Construction',
    'Road Project',
    'Bridge Project',
    'Infrastructure Project',
    'Government Project',
    'Private Project',
    'Other',
  ];

  return (
    <section id="contact" className="py-20 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#B8860B] mb-2">
            Commercial Contracting &amp; Fleet Allocation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#0B192C] tracking-tight uppercase">
            REQUEST A BUSINESS ENQUIRY
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Submit your project specifications or bulk haulage schedule. All formal inquiries are handled directly with executive coordination from our Raipur headquarters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Credentials & Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-[#0B192C] flex items-center justify-center text-[#D4AF37]">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#0B192C]">
                    KSU Infra &amp; Logistic
                  </h3>
                  <p className="text-xs text-slate-500">
                    Better People, Stronger India
                  </p>
                </div>
              </div>

              {/* Director Details */}
              <div className="py-5 border-b border-slate-100 flex items-start gap-3">
                <User className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                    Director
                  </span>
                  <strong className="text-base font-serif font-bold text-[#0B192C] block">
                    Kripa Shanker Upadhyay
                  </strong>
                  <span className="text-xs text-slate-600 font-medium">
                    Executive Leadership &amp; Project Head
                  </span>
                </div>
              </div>

              {/* Mobile / Direct Line */}
              <div className="py-5 border-b border-slate-100 flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                    Mobile Number
                  </span>
                  <a
                    href="tel:+919039038221"
                    className="text-base font-bold text-[#0B192C] hover:text-[#1D4ED8] transition-colors"
                  >
                    +91 90390 38221
                  </a>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Direct phone consultation for contracts
                  </span>
                </div>
              </div>

              {/* WhatsApp Number */}
              <div className="py-5 border-b border-slate-100 flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                    WhatsApp Desk
                  </span>
                  <a
                    href={getSmartWhatsAppUrl('general')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    +91 90390 38221
                  </a>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Fast quotation &amp; vehicle tracking updates
                  </span>
                </div>
              </div>

              {/* Office Address */}
              <div className="py-5 border-b border-slate-100 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF7722] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                    Office Address
                  </span>
                  <address className="not-italic text-sm text-[#0B192C] font-semibold leading-relaxed">
                    Add - 501, New DM Tower, <br />
                    Rawabhata, Raipur, <br />
                    Chhattisgarh
                  </address>
                  <span className="text-xs text-[#B8860B] font-semibold mt-1 inline-block">
                    ★ Pan India Service
                  </span>
                </div>
              </div>

              {/* Action Buttons Cluster */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  href="tel:+919039038221"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-bold text-white bg-[#0B192C] hover:bg-[#1D4ED8] transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={getSmartWhatsAppUrl('general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://maps.google.com/?q=New+DM+Tower+Rawabhata+Raipur+Chhattisgarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#FF7722]" />
                  <span>Map</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Smart Contextual WhatsApp Triggers */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                Quick WhatsApp Direct Messaging
              </span>

              <a
                href={getSmartWhatsAppUrl('transport')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200/80 hover:border-emerald-300 transition-colors group text-xs text-slate-700"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-[#0B192C]">Transportation Enquiry</span>
                </div>
                <span className="text-[11px] text-emerald-700 font-bold group-hover:translate-x-0.5 transition-transform">
                  Chat →
                </span>
              </a>

              <a
                href={getSmartWhatsAppUrl('infra')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200/80 hover:border-emerald-300 transition-colors group text-xs text-slate-700"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold text-[#0B192C]">Infrastructure Tender Enquiry</span>
                </div>
                <span className="text-[11px] text-emerald-700 font-bold group-hover:translate-x-0.5 transition-transform">
                  Chat →
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Advanced Business Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                    Vendor &amp; Contractor Portal
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B192C] mt-1">
                    SUBMIT BUSINESS ENQUIRY
                  </h3>
                </div>
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif font-bold text-2xl text-emerald-900 mb-2">
                    SUCCESS
                  </h4>
                  <p className="text-base font-semibold text-emerald-950 mb-2">
                    Thank you. Your enquiry has been received.
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto mb-6">
                    Our team is reviewing your requirement for <strong className="font-bold">{formData.businessRequirement}</strong>. For urgent coordination, you may also connect immediately via call or WhatsApp.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="tel:+919039038221"
                      className="px-6 py-3 rounded-xl text-xs font-bold bg-[#0B192C] text-white hover:bg-[#1D4ED8] transition-colors flex items-center gap-2 shadow-sm"
                    >
                      <Phone className="w-4 h-4 text-[#D4AF37]" />
                      <span>CALL NOW</span>
                    </a>

                    <a
                      href={getSmartWhatsAppUrl('current')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center gap-2 shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WHATSAPP NOW</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-xl text-xs font-semibold bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-50 transition-colors"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  name="ksu-business-enquiry"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="ksu-business-enquiry" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out:{' '}
                      <input
                        name="bot-field"
                        value={formData.botField}
                        onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                      />
                    </label>
                  </p>

                  {/* Row 1: Full Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rajesh Agrawal"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 border focus:bg-white transition-colors ${
                          errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-[#1D4ED8]'
                        } focus:outline-hidden`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Raipur Cement / EPC Infra"
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 border border-slate-300 focus:bg-white focus:border-[#1D4ED8] focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Mobile & WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        placeholder="e.g. +91 90390 XXXXX"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 border focus:bg-white transition-colors ${
                          errors.mobileNumber ? 'border-red-500 focus:border-red-500' : 'border-slate-300 focus:border-[#1D4ED8]'
                        } focus:outline-hidden`}
                      />
                      {errors.mobileNumber && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.mobileNumber}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        placeholder="Optional if same as mobile"
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 border border-slate-300 focus:bg-white focus:border-[#1D4ED8] focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Email, City, State */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 border border-slate-300 focus:bg-white focus:border-[#1D4ED8] focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Raipur, Bilaspur, Nagpur"
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 border border-slate-300 focus:bg-white focus:border-[#1D4ED8] focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        placeholder="e.g. Chhattisgarh, MP, UP"
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 border border-slate-300 focus:bg-white focus:border-[#1D4ED8] focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 4: Business Requirement Dropdown & Project Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Business Requirement <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="businessRequirement"
                        value={formData.businessRequirement}
                        onChange={(e) => setFormData({ ...formData, businessRequirement: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 border border-slate-300 focus:bg-white focus:border-[#1D4ED8] focus:outline-hidden transition-colors font-medium text-slate-800"
                      >
                        {requirementOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Project Location
                      </label>
                      <input
                        type="text"
                        name="projectLocation"
                        value={formData.projectLocation}
                        onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                        placeholder="e.g. Rawabhata Industrial Area, NH-53"
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 border border-slate-300 focus:bg-white focus:border-[#1D4ED8] focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 5: Material Type, Estimated Requirement & Start Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Material Type
                      </label>
                      <input
                        type="text"
                        name="materialType"
                        value={formData.materialType}
                        onChange={(e) => setFormData({ ...formData, materialType: e.target.value })}
                        placeholder="e.g. Flyash, Cement, Aggregates"
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 border border-slate-300 focus:bg-white focus:border-[#1D4ED8] focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Estimated Requirement
                      </label>
                      <input
                        type="text"
                        name="estimatedRequirement"
                        value={formData.estimatedRequirement}
                        onChange={(e) => setFormData({ ...formData, estimatedRequirement: e.target.value })}
                        placeholder="e.g. 500 MT / 10 Trucks"
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 border border-slate-300 focus:bg-white focus:border-[#1D4ED8] focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Expected Start Date
                      </label>
                      <input
                        type="text"
                        name="expectedStartDate"
                        value={formData.expectedStartDate}
                        onChange={(e) => setFormData({ ...formData, expectedStartDate: e.target.value })}
                        placeholder="e.g. Immediate / Next Month"
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 border border-slate-300 focus:bg-white focus:border-[#1D4ED8] focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 6: Detailed Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Message / Project Details
                    </label>
                    <textarea
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify loading/unloading points, contractor requirements, or tender drawing references..."
                      className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 border border-slate-300 focus:bg-white focus:border-[#1D4ED8] focus:outline-hidden transition-colors"
                    />
                  </div>

                  {/* Row 7: Optional Requirement Document Upload */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Upload Requirement Document (Optional)
                    </label>
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer relative">
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        accept=".pdf,.doc,.docx,.jpg,.png"
                      />
                      <Upload className="w-4 h-4 text-slate-500 shrink-0" />
                      <span className="text-xs text-slate-600 truncate">
                        {formData.documentName ? (
                          <strong className="text-emerald-700 flex items-center gap-1 font-semibold">
                            <FileCheck className="w-3.5 h-3.5 inline" />
                            {formData.documentName}
                          </strong>
                        ) : (
                          'Attach RFQ tender document, BOQ sheet, or route note (PDF, PNG, DOC)'
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Form Submission Actions */}
                  <div className="pt-3 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-bold text-white bg-[#0B192C] hover:bg-[#1D4ED8] active:bg-[#071220] transition-colors shadow-md disabled:opacity-50 uppercase tracking-wider"
                    >
                      <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{isSubmitting ? 'Submitting...' : 'SUBMIT BUSINESS ENQUIRY'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        window.open(getSmartWhatsAppUrl('current'), '_blank', 'noopener,noreferrer');
                      }}
                      className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-bold text-emerald-900 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm uppercase tracking-wider"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-950" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
