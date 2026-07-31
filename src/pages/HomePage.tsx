import React, { useState } from 'react';
import { ActivePage } from '../types';
import {
  BRAND_INFO,
  FEATURE_CARDS,
  SERVICES_PREVIEW,
  ACCOMMODATION_FEATURES,
  HOW_WE_SUPPORT_STEPS,
  TESTIMONIALS,
} from '../data/content';
import { FaqSection } from '../components/FaqSection';
import {
  UserPlus,
  Phone,
  HeartHandshake,
  ShieldCheck,
  Users,
  Home,
  TrendingUp,
  Compass,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Bed,
  Tv,
  UtensilsCrossed,
  Shirt,
  Trees,
  Wifi,
  ShieldAlert,
  Clock,
  ClipboardCheck,
  PackageCheck,
  Award,
  Star,
  Quote,
  Building2,
  UserCheck,
  Zap,
} from 'lucide-react';

interface HomePageProps {
  setActivePage: (page: ActivePage) => void;
  onOpenReferralModal: () => void;
  onOpenQuizModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActivePage,
  onOpenReferralModal,
  onOpenQuizModal,
}) => {
  const [activeTabAccommodation, setActiveTabAccommodation] = useState<'overview' | 'features'>('overview');

  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#3371A4]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#3371A4]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#3371A4]" />;
      case 'Home': return <Home className="w-6 h-6 text-[#3371A4]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#3371A4]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#3371A4]" />;
      case 'Bed': return <Bed className="w-5 h-5 text-[#3371A4]" />;
      case 'Tv': return <Tv className="w-5 h-5 text-[#3371A4]" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-5 h-5 text-[#3371A4]" />;
      case 'Shirt': return <Shirt className="w-5 h-5 text-[#3371A4]" />;
      case 'Trees': return <Trees className="w-5 h-5 text-[#3371A4]" />;
      case 'Wifi': return <Wifi className="w-5 h-5 text-[#3371A4]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-[#3371A4]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-[#3371A4]" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-6 h-6 text-[#3371A4]" />;
      case 'PackageCheck': return <PackageCheck className="w-6 h-6 text-[#3371A4]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#3371A4]" />;
      default: return <Sparkles className="w-6 h-6 text-[#EFA250]" />;
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-[#F5F8FB] via-white to-[#F5F8FB] overflow-hidden">
        {/* Subtle Decorative Ambient Background Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#3371A4]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#EFA250]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/80 text-[#3371A4] text-xs font-bold font-heading shadow-xs">
                <Sparkles className="w-4 h-4 text-[#EFA250]" />
                <span>UK Supported Living Provider • Young Adults Aged 18–25</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight font-heading leading-[1.12]">
                Empowering Young Adults with Safe, Nurturing Homes and Tailored Life Skills
              </h1>

              <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl">
                At <strong className="text-slate-900">Gentle Steps Support</strong>, we believe every young person leaving care or facing vulnerability deserves more than just a roof over their head. We deliver person-centred supported accommodation, trauma-informed keywork, and sustainable pathways to independent adulthood.
              </p>

              {/* Tagline Callout */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs border-l-4 border-l-[#EFA250] flex items-center gap-3 text-slate-800 text-sm font-semibold">
                <HeartHandshake className="w-5 h-5 text-[#3371A4] shrink-0" />
                <span>Tagline: <em className="text-[#3371A4] font-bold not-italic">"{BRAND_INFO.tagline}"</em></span>
              </div>

              {/* Action CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={onOpenReferralModal}
                  className="px-8 py-4 rounded-2xl bg-[#3371A4] hover:bg-[#275983] text-white font-extrabold text-base shadow-xl shadow-[#3371A4]/25 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5"
                >
                  <UserPlus className="w-5 h-5 text-[#EFA250]" />
                  <span>Refer a Young Person</span>
                </button>

                <button
                  onClick={() => setActivePage('contact')}
                  className="px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 font-extrabold text-base shadow-sm flex items-center justify-center gap-2 transition-all hover:border-[#3371A4]"
                >
                  <Phone className="w-5 h-5 text-[#3371A4]" />
                  <span>Contact Us</span>
                </button>
              </div>

              {/* Quick Proof Badges */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-slate-200/80 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>24/7 Duty Presence</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#3371A4] shrink-0" />
                  <span>Dedicated Keyworkers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#EFA250] shrink-0" />
                  <span>Local Authority Partner</span>
                </div>
              </div>
            </div>

            {/* Hero Image & Floating Visual Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src="/src/assets/images/gentle_hero_home_1785431028121.jpg"
                  alt="Gentle Steps Support living environment with support worker and young adult"
                  className="w-full h-[460px] sm:h-[520px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                {/* Floating Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-[#3371A4]">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Safe Accommodation
                    </span>
                    <span className="text-[#EFA250] bg-slate-900 px-2 py-0.5 rounded-md text-[10px]">
                      Ages 18–25
                    </span>
                  </div>
                  <p className="text-xs text-slate-800 font-semibold leading-snug">
                    Fully furnished homes equipped for warmth, personal security, and skill development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT GENTLE STEPS INTRODUCTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3371A4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block font-heading">
              About Gentle Steps Support
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading leading-tight">
              Reimagining Supported Accommodation with Compassion, Belonging, and Safety
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Transitioning into adulthood can feel daunting, especially for care leavers or young adults who have experienced instability. At <strong className="text-slate-900">Gentle Steps Support</strong>, we bridge the gap between structured care and complete independence. We offer more than just accommodation; we provide a stable foundation where young adults feel valued, heard, and supported at every single milestone.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="soft-card p-8 space-y-3 border-t-4 border-t-[#3371A4]">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#3371A4] flex items-center justify-center font-bold text-xl">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Safety & Emotional Security</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Creating a calm, trauma-informed physical environment where young adults can unwind, feel safe from harm, and develop trusting relationships with dedicated staff.
              </p>
            </div>

            <div className="soft-card p-8 space-y-3 border-t-4 border-t-[#EFA250]">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#EFA250] flex items-center justify-center font-bold text-xl">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Personal Growth & Confidence</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Encouraging young adults to discover their strengths through 1-on-1 key work, educational opportunities, hobbies, and supportive peer interactions.
              </p>
            </div>

            <div className="soft-card p-8 space-y-3 border-t-4 border-t-emerald-600">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading">Sustainable Independence</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Step-by-step practical training in budgeting, cooking, tenancy management, and job applications ensuring long-term self-reliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE GENTLE STEPS (6 PREMIUM FEATURE CARDS) */}
      <section className="py-20 bg-[#F5F8FB] border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EFA250] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 inline-block font-heading">
              Why Choose Gentle Steps
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading leading-tight">
              Six Pillars of Excellence in Young Adult Supported Living
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Designed to meet the stringent expectations of Local Authorities and Commissioners while placing the young person at the heart of everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURE_CARDS.map((card) => (
              <div key={card.id} className="soft-card p-8 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                      {getIcon(card.iconName)}
                    </div>
                    {card.tag && (
                      <span className="text-[11px] font-bold text-[#3371A4] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                        {card.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    {card.headline}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#3371A4] hover:text-[#275983]">
                  <span>Outcome Focused Standard</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#3371A4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block font-heading">
                Comprehensive Support
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading leading-tight">
                Our Services Preview
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Tailored 1-on-1 key work and practical interventions designed to nurture self-confidence and daily living competence.
              </p>
            </div>

            <button
              onClick={() => setActivePage('services')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3371A4] hover:bg-[#275983] text-white font-bold text-sm shadow-md transition-all self-start md:self-auto"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 text-[#EFA250]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_PREVIEW.map((s) => (
              <div
                key={s.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-[#3371A4]/30 transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F8FB] text-[#3371A4] flex items-center justify-center">
                    {getIcon(s.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    {s.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {s.shortParagraph}
                  </p>
                </div>

                <button
                  onClick={() => setActivePage('services')}
                  className="text-xs font-bold text-[#3371A4] hover:underline flex items-center gap-1 pt-2"
                >
                  <span>Read Service Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR ACCOMMODATION SHOWCASE */}
      <section className="py-20 bg-[#F5F8FB] border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
                <img
                  src="/src/assets/images/gentle_bedroom_1785431043251.jpg"
                  alt="Furnished bedroom in Gentle Steps supported accommodation"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-[#EFA250]" />
                  <span>High-Specification UK Living</span>
                </div>
              </div>
            </div>

            {/* Copy & Tabs Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#EFA250] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 inline-block font-heading">
                Our Accommodation
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading leading-tight">
                Fully Furnished, Secure, and Comfortable Homes
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                We take immense pride in maintaining high-quality residential properties across the UK. Every home is fully furnished, tastefully decorated, and equipped with modern amenities to create an inviting, domestic atmosphere rather than an institutional setting.
              </p>

              {/* Grid of 8 Amenities */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {ACCOMMODATION_FEATURES.map((feat) => (
                  <div key={feat.id} className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-2.5 shadow-xs">
                    <div className="p-1.5 rounded-lg bg-blue-50 text-[#3371A4] shrink-0 mt-0.5">
                      {getIcon(feat.iconName)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{feat.title}</h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{feat.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={onOpenReferralModal}
                  className="px-6 py-3 rounded-xl bg-[#3371A4] hover:bg-[#275983] text-white font-bold text-sm shadow-md flex items-center gap-2"
                >
                  <UserPlus className="w-4 h-4 text-[#EFA250]" />
                  <span>Inquire About Vacancies</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR COMMUNITY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#3371A4] to-[#275983] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
            <div className="max-w-3xl space-y-6 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#EFA250] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20 inline-block font-heading">
                Our Community Culture
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading leading-tight">
                A Culture Built on Respect, Equality, and Inclusion
              </h2>

              <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
                At Gentle Steps Support, community is more than a word—it’s our lived reality. We foster mutual respect among housemates, celebrate diverse cultural backgrounds, and encourage peer encouragement. Young adults learn to resolve conflicts constructively, share communal responsibilities, and build lasting friendships.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/20 text-xs font-semibold text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EFA250]" />
                  <span>Peer Encouragement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EFA250]" />
                  <span>Equality & Diversity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EFA250]" />
                  <span>Inclusive Activities</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EFA250]" />
                  <span>Lifelong Confidence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW WE SUPPORT (4-STEP PROCESS) */}
      <section className="py-20 bg-[#F5F8FB] border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3371A4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block font-heading">
              Our Structured Pathway
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading leading-tight">
              How We Support: Step-by-Step Pathway to Independence
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              A transparent, outcome-driven process that guides young adults from their initial move-in to living independently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_WE_SUPPORT_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="soft-card p-6 space-y-4 relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-[#3371A4] text-[#EFA250] font-black text-lg flex items-center justify-center shadow-md">
                      0{step.stepNumber}
                    </span>
                    <span className="text-xs font-bold text-slate-400">Step {step.stepNumber}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {step.detailedExplanation}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Key Milestones:
                  </span>
                  {step.milestones.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EFA250] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 inline-block font-heading">
              Authentic Stories & Feedback
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading leading-tight">
              Trusted by Young Adults, Social Workers, and Families
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Read real-world testimonials reflecting the life-changing impact of our supported living model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="soft-card p-8 space-y-6 flex flex-col justify-between relative">
                <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6 pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#EFA250] text-[#EFA250]" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-sm italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-heading">{t.author}</h4>
                    <span className="text-xs text-[#3371A4] font-semibold block">
                      {t.role} {t.organisation ? `• ${t.organisation}` : ''}
                    </span>
                  </div>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full font-medium">
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQS SECTION */}
      <FaqSection />

      {/* 10. FINAL CTA SECTION */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#3371A4]/15 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#EFA250] bg-white/10 px-4 py-2 rounded-full border border-white/20 inline-block font-heading">
            Make a Placement Referral
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading leading-tight max-w-3xl mx-auto">
            Ready to Support a Young Person’s Next Step Towards Independence?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Our experienced Duty Team is standing by to assist Local Authorities, Social Workers, Commissioners, and families with room availability and assessment inquiries.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenReferralModal}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#EFA250] hover:bg-[#e09038] text-slate-900 font-extrabold text-base shadow-xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5"
            >
              <UserPlus className="w-5 h-5 text-slate-900" />
              <span>Submit Placement Referral</span>
            </button>

            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-extrabold text-base flex items-center justify-center gap-3 transition-all"
            >
              <Phone className="w-5 h-5 text-[#3371A4]" />
              <span>Call Duty Line: {BRAND_INFO.phone}</span>
            </a>
          </div>

          <p className="text-xs text-slate-400">
            24/7 Duty Response • Immediate Assessment Available • GDPR & Safeguarding Compliant
          </p>
        </div>
      </section>
    </div>
  );
};
