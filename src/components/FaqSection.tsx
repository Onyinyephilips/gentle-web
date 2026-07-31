import React, { useState } from 'react';
import { FAQS } from '../data/content';
import {
  ChevronDown,
  Search,
  HelpCircle,
  FileQuestion,
  ShieldCheck,
  Building,
  Heart,
} from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Referrals', 'Accommodation', 'Daily Support', 'Funding & Local Authorities', 'Safety & Wellbeing'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-[#F5F8FB] border-t border-b border-slate-200/60" id="faqs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EFA250] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 inline-flex items-center gap-1.5 font-heading">
            <HelpCircle className="w-3.5 h-3.5 text-[#EFA250]" />
            <span>Frequently Asked Questions</span>
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading leading-tight">
            Clear Answers for Social Workers, Families & Young Adults
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Everything you need to know about placement referrals, accommodation standards, key work support, and funding pathways.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search FAQs (e.g. funding, 24/7 staff, visitors, age)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-xs text-sm text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-[#3371A4] focus:ring-2 focus:ring-[#3371A4]/20 transition-all"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#3371A4] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 space-y-2">
              <FileQuestion className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="font-bold text-slate-800">No matching questions found</h3>
              <p className="text-xs text-slate-500">
                Try searching for a different keyword or select another category above.
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-hidden hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-50 text-[#3371A4] border border-blue-100 shrink-0 mt-0.5">
                        {faq.category}
                      </span>
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg font-heading leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#3371A4] text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100/80 bg-slate-50/40 animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
