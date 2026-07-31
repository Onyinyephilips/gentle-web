import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { BRAND_INFO } from '../data/content';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldAlert,
  Send,
  CheckCircle2,
  Building2,
  UserPlus,
  Compass,
  MessageSquare,
  Globe,
  ExternalLink,
} from 'lucide-react';

interface ContactPageProps {
  onOpenReferralModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenReferralModal }) => {
  const [formType, setFormType] = useState<'contact' | 'referral'>('contact');
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Placement Enquiry',
    userType: 'Social Worker',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="space-y-0">
      {/* CONTACT HERO */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-[#F5F8FB] via-white to-[#F5F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3371A4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block font-heading">
            Get in Touch
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-heading leading-tight">
            Contact Gentle Steps Support
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            Whether you are a Social Worker seeking a placement, a Commissioner discussing block contracts, or a family member inquiring about supported living, our team is here to help.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT & MAP SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Emergency Duty Box */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3 border-l-4 border-l-[#EFA250] shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold text-[#EFA250] uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4" />
                  <span>24/7 Duty Placement Line</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-white">Emergency & Immediate Referral</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  For same-day crisis placements or out-of-hours social work emergencies, contact our Duty Manager directly:
                </p>
                <a
                  href={`tel:${BRAND_INFO.emergencyPhone}`}
                  className="block text-xl font-extrabold text-[#EFA250] hover:underline pt-1"
                >
                  {BRAND_INFO.emergencyPhone}
                </a>
              </div>

              {/* Standard Contact Cards */}
              <div className="p-6 rounded-2xl bg-[#F5F8FB] border border-slate-200 space-y-4">
                <h3 className="text-lg font-bold text-slate-900 font-heading">General Enquiries & Office</h3>

                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#3371A4] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-slate-400 font-semibold">Landline Enquiries:</span>
                      <a href={`tel:${BRAND_INFO.phone}`} className="font-bold text-slate-900 hover:text-[#3371A4]">
                        {BRAND_INFO.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#3371A4] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-slate-400 font-semibold">General Email:</span>
                      <a href={`mailto:${BRAND_INFO.email}`} className="font-bold text-slate-900 hover:underline">
                        {BRAND_INFO.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#EFA250] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-slate-400 font-semibold">Secure Referrals Email:</span>
                      <a href={`mailto:${BRAND_INFO.referralEmail}`} className="font-bold text-[#3371A4] hover:underline">
                        {BRAND_INFO.referralEmail}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#3371A4] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-slate-400 font-semibold">Head Office Address:</span>
                      <span className="text-slate-800 leading-relaxed font-medium">
                        {BRAND_INFO.address}
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#3371A4] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-slate-400 font-semibold">Office Hours:</span>
                      <span className="text-slate-800 font-medium">
                        {BRAND_INFO.openingHours}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Quick Referral Banner */}
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 space-y-3">
                <h4 className="font-bold text-[#3371A4] text-sm">Need to submit a full Social Work referral?</h4>
                <p className="text-xs text-slate-600">
                  Use our structured Local Authority Referral Portal to submit complete young person details and receive a summary.
                </p>
                <button
                  onClick={onOpenReferralModal}
                  className="w-full py-3 rounded-xl bg-[#3371A4] hover:bg-[#275983] text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-4 h-4 text-[#EFA250]" />
                  <span>Open Local Authority Referral Portal</span>
                </button>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 font-heading">Send Us a Message</h2>
                    <p className="text-xs text-slate-500">We respond to all online enquiries within 2 business hours.</p>
                  </div>
                  <MessageSquare className="w-8 h-8 text-[#3371A4]" />
                </div>

                {submitted ? (
                  <div className="p-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 font-heading">Message Sent Successfully</h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. A member of our team will reply to <span className="font-semibold text-slate-900">{formData.email}</span> shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-[#3371A4] text-white font-bold rounded-xl text-xs"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. David Richardson"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#3371A4]"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Your Role / Category *</label>
                        <select
                          value={formData.userType}
                          onChange={(e) => setFormData({ ...formData, userType: e.target.value as any })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#3371A4] bg-white"
                        >
                          <option value="Social Worker">Social Worker</option>
                          <option value="Local Authority Commissioner">Local Authority Commissioner</option>
                          <option value="Young Adult">Young Adult (18-25)</option>
                          <option value="Parent / Family Member">Parent / Family Member</option>
                          <option value="Other Partner">Other Partner Agency</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="d.richardson@council.gov.uk"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#3371A4]"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Telephone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="07123 456789"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#3371A4]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Subject</label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Placement Enquiry for 19-year-old care leaver"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#3371A4]"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-semibold mb-1">Message / Details *</label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your query or placement requirements..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#3371A4]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl bg-[#3371A4] hover:bg-[#275983] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#EFA250]" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE UK MAP PLACEHOLDER */}
      <section className="py-16 bg-[#F5F8FB] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3371A4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block font-heading">
              UK Location
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
              Gentle Steps Supported Living Properties
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Situated in safe, accessible UK residential areas with excellent transport links.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 text-white relative overflow-hidden shadow-xl min-h-[300px] flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#EFA250]">
                <MapPin className="w-5 h-5" />
                <span>UK Regional Coverage Map</span>
              </div>
              <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
                London & South East Hubs
              </span>
            </div>

            <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1">
                <span className="font-bold text-white text-sm block">Greater London Hub</span>
                <p className="text-slate-400">Close to FE Colleges, Jobcentres, and Tube networks.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1">
                <span className="font-bold text-white text-sm block">Kent & Surrey Hubs</span>
                <p className="text-slate-400">Quiet residential homes with large gardens and local amenities.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 space-y-1">
                <span className="font-bold text-white text-sm block">South East Coastal Hubs</span>
                <p className="text-slate-400">Community supported living properties with 24/7 staff support.</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
              <span>Full address and viewing details provided upon social work referral confirmation.</span>
              <a href={`tel:${BRAND_INFO.phone}`} className="text-[#EFA250] hover:underline font-semibold">
                Inquire via {BRAND_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
