import React, { useState } from 'react';
import { ActivePage } from '../types';
import { SEO_METADATA } from '../data/content';
import {
  X,
  Code2,
  Copy,
  Check,
  Globe,
  Share2,
  Search,
  ExternalLink,
} from 'lucide-react';

interface SeoMetadataModalProps {
  isOpen: boolean;
  onClose: () => void;
  activePage: ActivePage;
}

export const SeoMetadataModal: React.FC<SeoMetadataModalProps> = ({
  isOpen,
  onClose,
  activePage: currentAppPage,
}) => {
  const [selectedPage, setSelectedPage] = useState<ActivePage>(currentAppPage);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const metadata = SEO_METADATA[selectedPage] || SEO_METADATA.home;

  const pages: { id: ActivePage; label: string }[] = [
    { id: 'home', label: 'Home Page' },
    { id: 'about', label: 'About Page' },
    { id: 'services', label: 'Services Page' },
    { id: 'contact', label: 'Contact Page' },
  ];

  const htmlHeadSnippet = `<!-- ${metadata.pageName} SEO Metadata -->
<title>${metadata.title}</title>
<meta name="description" content="${metadata.metaDescription}" />
<meta name="keywords" content="${metadata.keywords.join(', ')}" />
<link rel="canonical" href="${metadata.canonicalUrl}" />

<!-- Open Graph / Social Media -->
<meta property="og:type" content="website" />
<meta property="og:title" content="${metadata.openGraphTitle}" />
<meta property="og:description" content="${metadata.openGraphDescription}" />
<meta property="og:url" content="${metadata.canonicalUrl}" />
<meta property="og:site_name" content="Gentle Steps Support" />`;

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlHeadSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-start justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3371A4] flex items-center justify-center text-white shrink-0">
              <Code2 className="w-5 h-5 text-[#EFA250]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#EFA250]">
                SEO Strategy & Search Optimization
              </span>
              <h2 className="text-xl font-bold font-heading">
                Gentle Steps Metadata Inspector
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Page Switcher Tabs */}
        <div className="bg-slate-100 p-2 border-b border-slate-200 flex items-center gap-2 overflow-x-auto shrink-0">
          {pages.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPage(p.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedPage === p.id
                  ? 'bg-[#3371A4] text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 grow">
          {/* Google Search Result Mockup */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2 font-heading">
              <Search className="w-4 h-4 text-[#3371A4]" />
              <span>Google Search Result Snippet Preview</span>
            </h3>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1 font-sans">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <span className="truncate">{metadata.canonicalUrl}</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-blue-700 hover:underline cursor-pointer">
                {metadata.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {metadata.metaDescription}
              </p>
            </div>
          </div>

          {/* Open Graph Social Card Mockup */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2 font-heading">
              <Share2 className="w-4 h-4 text-[#EFA250]" />
              <span>Social Media Open Graph Card Preview</span>
            </h3>

            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 max-w-md">
              <div className="h-32 bg-gradient-to-r from-[#3371A4] to-[#275983] p-4 text-white flex flex-col justify-end">
                <span className="text-[10px] font-bold text-[#EFA250] uppercase tracking-wider">
                  Gentle Steps Support • UK Supported Living
                </span>
                <span className="text-sm font-bold font-heading">
                  Supporting Every Step Towards Independence
                </span>
              </div>
              <div className="p-3.5 space-y-1 bg-white">
                <span className="text-[10px] uppercase text-slate-400 font-semibold">
                  gentlestepssupport.co.uk
                </span>
                <h4 className="text-xs font-bold text-slate-900">
                  {metadata.openGraphTitle}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  {metadata.openGraphDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Keywords Badges */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Target SEO Keywords
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {metadata.keywords.map((kw, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg text-xs bg-blue-50 text-[#3371A4] font-medium border border-blue-100"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* HTML Code Block */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
                HTML Metadata Head Tag Snippet
              </h3>
              <button
                onClick={handleCopy}
                className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Head Tags'}</span>
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-slate-950 text-emerald-400 font-mono text-xs overflow-x-auto leading-relaxed">
              <code>{htmlHeadSnippet}</code>
            </pre>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500 shrink-0">
          <span>Targeting UK Local Authorities & Care Leavers</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#3371A4] hover:bg-[#275983] text-white font-bold rounded-xl"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
