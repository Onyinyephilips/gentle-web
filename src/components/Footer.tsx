import React, { useState } from 'react';
import { ActivePage } from '../types';
import { BRAND_INFO } from '../data/content';
import { BrandLogo } from './BrandLogo';
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  UserPlus,
  Compass,
  ArrowRight,
  CheckCircle2,
  Lock,
} from 'lucide-react';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  onOpenReferralModal: () => void;
  onOpenBrandGuide: () => void;
  onOpenSeoInspector: () => void;
  onOpenQuizModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActivePage,
  onOpenReferralModal,
  onOpenBrandGuide,
  onOpenSeoInspector,
  onOpenQuizModal,
}) => {
  const [emailAlert, setEmailAlert] = useState('');
  const [alertSubmitted, setAlertSubmitted] = useState(false);

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailAlert.trim()) {
      setAlertSubmitted(true);
      setTimeout(() => {
        setEmailAlert('');
        setAlertSubmitted(false);
      }, 5000);
    }
  };

  const handlePageClick = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Intro & Tagline Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <BrandLogo className="w-10 h-10 shadow-md" />
              <span className="text-2xl font-black text-white tracking-tight font-heading">
                Gentle Steps <span className="text-[#3371A4]">Support</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Supporting Every Step Towards Independence. Providing nurturing, person-centred supported accommodation and tailored pathway planning for young adults aged 18–25 in the United Kingdom.
            </p>

            {/* Regulatory & Safety Assurance Pill */}
            <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/60 max-w-sm space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#EFA250]">
                <ShieldCheck className="w-4 h-4" />
                <span>Safeguarding & Quality Assured</span>
              </div>
              <p className="text-xs text-slate-400">
                Operating in alignment with Local Authority leaving care frameworks, Quality Standards for Supported Accommodation, and trauma-informed care practice.
              </p>
            </div>

            <button
              onClick={onOpenReferralModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-[#EFA250] hover:bg-[#e09038] transition-all shadow-md"
            >
              <UserPlus className="w-4 h-4" />
              <span>Submit Local Authority Referral</span>
            </button>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider font-heading">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handlePageClick('home')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#3371A4]" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('about')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#3371A4]" />
                  <span>About Gentle Steps</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('services')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#3371A4]" />
                  <span>Services & Support</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('contact')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#3371A4]" />
                  <span>Contact & Referrals</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuizModal}
                  className="text-[#EFA250] hover:underline transition-colors flex items-center gap-1.5 font-semibold"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Independence Tool</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider font-heading">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#3371A4] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400">Landline Enquiries:</span>
                  <a href={`tel:${BRAND_INFO.phone}`} className="font-semibold text-white hover:text-[#EFA250]">
                    {BRAND_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#EFA250] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400">24/7 Duty Emergency Line:</span>
                  <a href={`tel:${BRAND_INFO.emergencyPhone}`} className="font-semibold text-[#EFA250]">
                    {BRAND_INFO.emergencyPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#3371A4] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400">Secure Referrals Email:</span>
                  <a href={`mailto:${BRAND_INFO.referralEmail}`} className="font-medium text-white hover:underline">
                    {BRAND_INFO.referralEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#3371A4] shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  {BRAND_INFO.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Social Worker Placement Alerts */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider font-heading">
              Placement Updates
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Social Workers & Commissioners: Register your email to receive real-time vacancy updates and new accommodation opening announcements.
            </p>

            {alertSubmitted ? (
              <div className="p-3 bg-emerald-950/80 border border-emerald-600/50 rounded-xl text-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you. You will receive placement availability updates.</span>
              </div>
            ) : (
              <form onSubmit={handleAlertSubmit} className="space-y-2">
                <input
                  type="email"
                  value={emailAlert}
                  onChange={(e) => setEmailAlert(e.target.value)}
                  placeholder="socialworker@council.gov.uk"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-hidden focus:border-[#3371A4]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-[#3371A4] hover:bg-[#275983] text-white transition-colors"
                >
                  Subscribe for Placement Alerts
                </button>
              </form>
            )}

            <div className="flex items-center gap-3 pt-2 text-[11px] text-slate-500">
              <button onClick={onOpenBrandGuide} className="hover:text-slate-300 underline">
                Brand Guide
              </button>
              <span>•</span>
              <button onClick={onOpenSeoInspector} className="hover:text-slate-300 underline">
                SEO Inspector
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Gentle Steps Support Ltd. Registered in England & Wales. Supporting Every Step Towards Independence.
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1 text-[11px]">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>GDPR & Data Protection Compliant</span>
            </span>
            <span>•</span>
            <span className="text-[11px]">UK Supported Living Provider</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
