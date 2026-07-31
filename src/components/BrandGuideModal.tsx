import React, { useState } from 'react';
import { BRAND_INFO, BRAND_VOICE_GUIDE } from '../data/content';
import {
  X,
  Palette,
  Type,
  CheckCircle,
  XCircle,
  Sparkles,
  Heart,
  Layout,
  Copy,
  Check,
} from 'lucide-react';

interface BrandGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandGuideModal: React.FC<BrandGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#3371A4] text-white p-6 flex items-start justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#EFA250] flex items-center justify-center text-slate-900 font-black shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#EFA250]">
                Design System & Tone of Voice Guide
              </span>
              <h2 className="text-xl sm:text-2xl font-black font-heading leading-tight">
                Gentle Steps Brand Identity Specifications
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content Area */}
        <div className="p-6 overflow-y-auto space-y-8 grow text-slate-700 text-sm">
          {/* Section 1: Brand Palette */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 font-heading">
              <Palette className="w-4 h-4 text-[#3371A4]" />
              <span>1. Official Brand Colour Palette</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {BRAND_VOICE_GUIDE.colorPalette.map((col) => (
                <div
                  key={col.hex}
                  onClick={() => copyHex(col.hex)}
                  className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center gap-3 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg shadow-inner shrink-0 border border-slate-200"
                    style={{ backgroundColor: col.hex }}
                  />
                  <div className="grow min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-slate-900 truncate">
                        {col.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 group-hover:text-[#3371A4]">
                        {copiedHex === col.hex ? (
                          <Check className="w-3 h-3 text-emerald-600 inline" />
                        ) : (
                          <Copy className="w-3 h-3 inline" />
                        )}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#3371A4] block">
                      {col.hex}
                    </span>
                    <span className="text-[11px] text-slate-500 line-clamp-1">
                      {col.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Typography System */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 font-heading">
              <Type className="w-4 h-4 text-[#3371A4]" />
              <span>2. Typographic Pairings & Hierarchy</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F5F8FB] border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-[#3371A4] uppercase tracking-wider block">
                  Headings Font: Manrope / DM Sans
                </span>
                <p className="text-xl font-extrabold text-slate-900 font-heading">
                  Supporting Every Step Towards Independence
                </p>
                <p className="text-xs text-slate-500">
                  Used for H1, H2, H3 headers. High legibility, modern, warm curves, authoritative yet reassuring.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F5F8FB] border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-[#3371A4] uppercase tracking-wider block">
                  Body Font: Inter / Open Sans
                </span>
                <p className="text-sm text-slate-700 leading-relaxed font-sans">
                  Provide safe, nurturing, person-centred supported accommodation that empowers young adults aged 18–25 to develop confidence, life skills, and independence.
                </p>
                <p className="text-xs text-slate-500">
                  Clean sans-serif optimized for long-form reading, WCAG AA contrast compliance, and mobile responsive displays.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Tone of Voice Do's and Don'ts */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 font-heading">
              <Heart className="w-4 h-4 text-[#EFA250]" />
              <span>3. Compassionate Copywriting Guidelines</span>
            </h3>

            <div className="space-y-2">
              {BRAND_VOICE_GUIDE.doAndDont.map((rule, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-2.5 text-emerald-900">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-emerald-950 font-bold mb-0.5">DO:</strong>
                      <span>{rule.do}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-rose-900">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-rose-950 font-bold mb-0.5">AVOID:</strong>
                      <span>{rule.dont}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: UI Component Specs */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 font-heading">
              <Layout className="w-4 h-4 text-[#3371A4]" />
              <span>4. Interactive Button & Card Examples</span>
            </h3>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <button className="px-6 py-3 rounded-xl bg-[#3371A4] text-white font-bold text-sm shadow-md hover:bg-[#275983] transition-colors">
                  Primary Button (#3371A4)
                </button>
                <button className="px-6 py-3 rounded-xl bg-[#EFA250] text-slate-900 font-bold text-sm shadow-sm hover:bg-[#e09038] transition-colors">
                  Secondary Highlight (#EFA250)
                </button>
                <button className="px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors">
                  Outline / Glass Button
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="soft-card p-4 space-y-2">
                  <span className="text-[10px] font-bold text-[#EFA250] uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded-full">
                    20px Border Radius Card
                  </span>
                  <h4 className="font-bold text-slate-900">Soft Shadows & High Contrast</h4>
                  <p className="text-slate-500">
                    Calculated padding math (24px+), soft ambient drop shadow, and clean subtle hover elevation.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                  <span className="text-[10px] font-bold text-[#3371A4] uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-full">
                    WCAG AA Compliant
                  </span>
                  <h4 className="font-bold text-slate-900">Accessibility Standard</h4>
                  <p className="text-slate-500">
                    Contrast ratio exceeding 4.5:1 for body copy and clear focus outline indicators on interactive controls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500 shrink-0">
          <span>Gentle Steps Support Brand System v2.0</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#3371A4] hover:bg-[#275983] text-white font-bold rounded-xl"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
