import React, { useState } from 'react';
import { ReferralFormData } from '../types';
import { BRAND_INFO } from '../data/content';
import {
  X,
  UserPlus,
  CheckCircle2,
  AlertCircle,
  Building2,
  Mail,
  Phone,
  UserCheck,
  Calendar,
  FileText,
  Printer,
  Download,
  ShieldCheck,
} from 'lucide-react';

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferralModal: React.FC<ReferralModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReferralFormData>({
    referrerName: '',
    referrerRole: 'Social Worker',
    localAuthority: '',
    referrerEmail: '',
    referrerPhone: '',
    youngPersonAge: '18',
    genderIdentity: 'Prefer not to say',
    currentLivingSituation: 'Foster Care / Leaving Care',
    supportLevelRequired: 'Medium (6-15 hrs/wk)',
    targetMoveInDate: new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0],
    primarySupportNeeds: ['Budgeting & Financial Management', 'Cooking & Nutrition', 'Key Work Sessions'],
    additionalNotes: '',
    consentConfirmed: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const supportNeedOptions = [
    'Budgeting & Financial Management',
    'Cooking & Household Management',
    'Key Work & Emotional Support',
    'Mental Health & Wellbeing',
    'Education & College Enrolment',
    'Employment & Apprenticeships',
    'Benefits & Universal Credit',
    'Independent Tenancy Readiness',
    'Substance Misuse Recovery Support',
  ];

  const handleCheckboxChange = (need: string) => {
    setFormData((prev) => {
      const exists = prev.primarySupportNeeds.includes(need);
      if (exists) {
        return {
          ...prev,
          primarySupportNeeds: prev.primarySupportNeeds.filter((item) => item !== need),
        };
      } else {
        return {
          ...prev,
          primarySupportNeeds: [...prev.primarySupportNeeds, need],
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 my-auto relative max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#3371A4] text-white p-6 flex items-start justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#EFA250] shrink-0">
              <UserPlus className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#EFA250] block">
                Local Authority & Commissioner Portal
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-heading leading-tight">
                Refer a Young Person (18–25)
              </h2>
              <p className="text-xs text-blue-100 mt-1">
                Gentle Steps Support • Supporting Every Step Towards Independence
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors focus:outline-hidden"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 overflow-y-auto space-y-6 grow">
          {submitted ? (
            <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  Referral Received Successfully
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.referrerName}</strong>. Your referral for a young person aged <strong className="text-slate-900">{formData.youngPersonAge}</strong> has been assigned to our Duty Placements Manager.
                </p>
              </div>

              {/* Summary Ticket Box */}
              <div className="bg-[#F5F8FB] p-5 rounded-2xl border border-slate-200 text-left space-y-3 text-xs text-slate-700 max-w-lg mx-auto">
                <div className="flex justify-between border-b pb-2 text-slate-500 font-medium">
                  <span>Referral Reference: <strong className="text-[#3371A4]">GSS-REF-{Math.floor(100000 + Math.random() * 900000)}</strong></span>
                  <span>Status: <strong className="text-amber-600">Pending Duty Assessment</strong></span>
                </div>
                <div>
                  <span className="text-slate-500 block">Local Authority / Agency:</span>
                  <span className="font-semibold text-slate-900">{formData.localAuthority || 'Not Specified'}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Required Support Level:</span>
                  <span className="font-semibold text-slate-900">{formData.supportLevelRequired}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Target Move-In Date:</span>
                  <span className="font-semibold text-slate-900">{formData.targetMoveInDate}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Selected Focus Areas:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {formData.primarySupportNeeds.map((need, idx) => (
                      <span key={idx} className="bg-blue-100 text-[#3371A4] px-2 py-0.5 rounded-md font-medium">
                        {need}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                Our team will reach out to <span className="font-semibold text-slate-800">{formData.referrerEmail}</span> within 2 hours during duty hours to discuss assessment and room availability.
              </p>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-xs flex items-center gap-2"
                >
                  <Printer className="w-4 h-4 text-[#3371A4]" />
                  <span>Print Summary</span>
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2 bg-[#3371A4] hover:bg-[#275983] text-white font-bold rounded-xl text-xs shadow-md"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Emergency Banner */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start gap-3 text-xs text-amber-900">
                <AlertCircle className="w-5 h-5 text-[#EFA250] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Urgent 24-Hour Placement?</strong> For immediate same-day placements or crisis referrals, please call our direct Duty Line on <a href={`tel:${BRAND_INFO.phone}`} className="font-bold underline">{BRAND_INFO.phone}</a> in addition to completing this form.
                </p>
              </div>

              {/* Section 1: Referrer Information */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 font-heading">
                  <Building2 className="w-4 h-4 text-[#3371A4]" />
                  <span>1. Referrer Information (Social Worker / Commissioner)</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <UserCheck className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={formData.referrerName}
                        onChange={(e) => setFormData({ ...formData, referrerName: e.target.value })}
                        placeholder="e.g., Sarah Jenkins"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#3371A4]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Job Role / Professional Position *
                    </label>
                    <select
                      value={formData.referrerRole}
                      onChange={(e) => setFormData({ ...formData, referrerRole: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#3371A4] bg-white"
                    >
                      <option value="Social Worker">Social Worker</option>
                      <option value="Personal Adviser (PA)">Personal Adviser (PA)</option>
                      <option value="Commissioning Manager">Commissioning Manager</option>
                      <option value="Housing Officer">Housing Officer</option>
                      <option value="Youth Offending Worker">Youth Offending Worker</option>
                      <option value="Parent / Family Advocate">Parent / Family Advocate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Local Authority / Agency Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.localAuthority}
                      onChange={(e) => setFormData({ ...formData, localAuthority: e.target.value })}
                      placeholder="e.g., Kent County Council"
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#3371A4]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Work Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        value={formData.referrerEmail}
                        onChange={(e) => setFormData({ ...formData, referrerEmail: e.target.value })}
                        placeholder="s.jenkins@council.gov.uk"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#3371A4]"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-700 font-semibold mb-1">
                      Direct Telephone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        value={formData.referrerPhone}
                        onChange={(e) => setFormData({ ...formData, referrerPhone: e.target.value })}
                        placeholder="07123 456789 or 020 8123 4567"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#3371A4]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Young Person Details */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 font-heading">
                  <UserPlus className="w-4 h-4 text-[#3371A4]" />
                  <span>2. Young Person Overview</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Young Person Age (18–25) *
                    </label>
                    <select
                      value={formData.youngPersonAge}
                      onChange={(e) => setFormData({ ...formData, youngPersonAge: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#3371A4] bg-white font-semibold"
                    >
                      <option value="18">18 years old</option>
                      <option value="19">19 years old</option>
                      <option value="20">20 years old</option>
                      <option value="21">21 years old</option>
                      <option value="22">22 years old</option>
                      <option value="23">23 years old</option>
                      <option value="24">24 years old</option>
                      <option value="25">25 years old</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Gender Identity
                    </label>
                    <select
                      value={formData.genderIdentity}
                      onChange={(e) => setFormData({ ...formData, genderIdentity: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#3371A4] bg-white"
                    >
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Non-binary">Non-binary</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Target Move-In Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="date"
                        required
                        value={formData.targetMoveInDate}
                        onChange={(e) => setFormData({ ...formData, targetMoveInDate: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#3371A4]"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-700 font-semibold mb-1">
                      Current Living Situation *
                    </label>
                    <select
                      value={formData.currentLivingSituation}
                      onChange={(e) => setFormData({ ...formData, currentLivingSituation: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#3371A4] bg-white"
                    >
                      <option value="Foster Care / Leaving Care">Foster Care / Care Leaver</option>
                      <option value="Residential Children's Home">Residential Children's Home</option>
                      <option value="Family Breakdown / Sofa Surfing">Family Breakdown / Sofa Surfing</option>
                      <option value="Hospital / Assessment Unit">Hospital / Assessment Unit</option>
                      <option value="Temporary Accommodation">Temporary Accommodation</option>
                      <option value="Other Placement Breakdown">Other Placement Breakdown</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Level of Key Work Required *
                    </label>
                    <select
                      value={formData.supportLevelRequired}
                      onChange={(e) => setFormData({ ...formData, supportLevelRequired: e.target.value as any })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#3371A4] bg-white font-semibold"
                    >
                      <option value="Low (1-5 hrs/wk)">Low (1-5 hrs/wk key work)</option>
                      <option value="Medium (6-15 hrs/wk)">Medium (6-15 hrs/wk key work)</option>
                      <option value="High (16-30 hrs/wk)">High (16-30 hrs/wk key work)</option>
                      <option value="24/7 On-call / Intensive">24/7 On-Call / Intensive Support</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 3: Primary Support Needs Checkboxes */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider font-heading">
                  3. Key Support Focus Areas (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {supportNeedOptions.map((need) => {
                    const checked = formData.primarySupportNeeds.includes(need);
                    return (
                      <label
                        key={need}
                        className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                          checked
                            ? 'bg-blue-50 border-[#3371A4] text-[#3371A4] font-semibold'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => handleCheckboxChange(need)}
                          className="rounded text-[#3371A4] focus:ring-[#3371A4] h-4 w-4"
                        />
                        <span>{need}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <label className="block font-semibold text-slate-700">
                  Additional Background / Risk Assessment Brief (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="Mention any specific trigger considerations, physical accessibility needs, or preferred geographical areas..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#3371A4]"
                />
              </div>

              {/* Consent and Submit Button */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Information transmitted securely in accordance with UK GDPR.</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl bg-[#3371A4] hover:bg-[#275983] text-white text-xs font-bold shadow-md shadow-[#3371A4]/20 flex items-center justify-center gap-2 transition-all"
                  >
                    {isSubmitting ? (
                      <span>Processing Referral...</span>
                    ) : (
                      <>
                        <UserPlus className="w-4 h-4 text-[#EFA250]" />
                        <span>Submit Placement Referral</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
