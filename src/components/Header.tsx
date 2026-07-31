import React, { useState } from 'react';
import { ActivePage } from '../types';
import { BRAND_INFO } from '../data/content';
import { BrandLogo } from './BrandLogo';
import {
  Phone,
  ShieldAlert,
  Menu,
  X,
  UserPlus,
  Compass,
  Code2,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onOpenReferralModal: () => void;
  onOpenBrandGuide: () => void;
  onOpenSeoInspector: () => void;
  onOpenQuizModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  onOpenReferralModal,
  onOpenBrandGuide,
  onOpenSeoInspector,
  onOpenQuizModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { page: ActivePage; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About Us' },
    { page: 'services', label: 'Services & Support' },
    { page: 'contact', label: 'Contact & Referrals' },
  ];

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      {/* Top Urgent & Social Worker Announcement Bar */}
      <div className="bg-[#3371A4] text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#EFA250] text-slate-900 font-bold px-2 py-0.5 rounded-full text-[11px] uppercase tracking-wider flex items-center gap-1">
              <ShieldAlert className="w-3 h-3 text-slate-950" /> 24/7 UK Duty Line
            </span>
            <span className="hidden md:inline text-blue-100">
              Immediate Placement Enquiries for Local Authorities & Social Workers:
            </span>
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="font-semibold underline hover:text-[#EFA250] transition-colors"
            >
              {BRAND_INFO.phone}
            </a>
          </div>

          {/* Top Bar Right Column - Empty or Removed as requested */}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-hidden"
          >
            <BrandLogo className="w-11 h-11 shadow-md group-hover:scale-105 transition-transform" />
            <div>
              <span className="block text-xl font-extrabold text-slate-900 tracking-tight font-heading group-hover:text-[#3371A4] transition-colors">
                Gentle Steps <span className="text-[#3371A4]">Support</span>
              </span>
              <span className="block text-xs font-medium text-slate-500 tracking-wide">
                Supporting Every Step Towards Independence
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activePage === item.page
                    ? 'bg-[#F5F8FB] text-[#3371A4] shadow-xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-[#3371A4] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#3371A4]" />
              <span>{BRAND_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenReferralModal}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#3371A4] hover:bg-[#275983] shadow-md shadow-[#3371A4]/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <UserPlus className="w-4 h-4 text-[#EFA250]" />
              <span>Refer a Young Person</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenReferralModal}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#3371A4] flex items-center gap-1"
            >
              <UserPlus className="w-3.5 h-3.5 text-[#EFA250]" />
              <span>Refer</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                  activePage === item.page
                    ? 'bg-[#3371A4] text-white font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-60" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReferralModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-base font-bold text-white bg-[#3371A4] hover:bg-[#275983]"
            >
              <UserPlus className="w-5 h-5 text-[#EFA250]" />
              <span>Refer a Young Person</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuizModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-[#F5F8FB] border border-slate-200"
            >
              <Compass className="w-4 h-4 text-[#3371A4]" />
              <span>Interactive Independence Assessment</span>
            </button>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrandGuide();
                }}
                className="flex-1 text-center py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg"
              >
                Brand System
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSeoInspector();
                }}
                className="flex-1 text-center py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg"
              >
                SEO Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
