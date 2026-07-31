import React from 'react';
import { ActivePage } from '../types';
import { BRAND_INFO, VALUE_CARDS } from '../data/content';
import {
  Heart,
  UserCheck,
  Globe,
  Key,
  Zap,
  Shield,
  Lock,
  Eye,
  Building2,
  Users,
  CheckCircle2,
  Sparkles,
  UserPlus,
  Compass,
  TrendingUp,
  HeartHandshake,
  Award,
} from 'lucide-react';

interface AboutPageProps {
  setActivePage: (page: ActivePage) => void;
  onOpenReferralModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActivePage, onOpenReferralModal }) => {
  const getValIcon = (name: string) => {
    switch (name) {
      case 'Heart': return <Heart className="w-6 h-6 text-[#3371A4]" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#3371A4]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#3371A4]" />;
      case 'Key': return <Key className="w-6 h-6 text-[#3371A4]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#3371A4]" />;
      case 'Shield': return <Shield className="w-6 h-6 text-[#3371A4]" />;
      case 'Lock': return <Lock className="w-6 h-6 text-[#3371A4]" />;
      case 'Eye': return <Eye className="w-6 h-6 text-[#3371A4]" />;
      default: return <Sparkles className="w-6 h-6 text-[#EFA250]" />;
    }
  };

  return (
    <div className="space-y-0">
      {/* ABOUT HERO */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-[#F5F8FB] via-white to-[#F5F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3371A4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block font-heading">
            About Gentle Steps Support
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-heading leading-tight">
            Our Purpose, Our Promise, and Our Commitment to Every Young Adult
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            Founded on the core belief that every young person leaving care deserves a safe haven and a genuine chance to thrive, Gentle Steps Support provides compassionate, outcome-focused supported accommodation across the UK.
          </p>
        </div>
      </section>

      {/* OUR STORY (~600 WORDS STORYTELLING) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EFA250] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 inline-block font-heading">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
              Why Gentle Steps Support Exists: A Legacy of Belonging, Growth, and Opportunity
            </h2>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 leading-relaxed text-base sm:text-lg">
            <p>
              The journey from youth into independent adulthood is rarely a straight line. For young care leavers, individuals transitioning out of residential placements, or those who have faced family breakdown, turning 18 often brings a sudden cliff-edge of expectation. Overnight, young people are expected to manage budgets, cook meals, deal with utility suppliers, and navigate complex emotional landscapes—frequently without the safety net of family backing.
            </p>

            <p>
              <strong>Gentle Steps Support</strong> was established to eliminate that cliff-edge. Our founders—experienced social care professionals, housing specialists, and youth advocates—observed firsthand how institutional approaches often failed young adults. Traditional placements frequently treated housing as a purely logistical exercise: providing a bed, but missing the human warmth, emotional regulation, and tailored mentorship required to cultivate genuine self-reliance.
            </p>

            <p>
              We set out to create a care organisation shaped around four foundational anchors: <strong>Belonging, Stability, Growth, and Opportunity</strong>. We recognized that true independence cannot be forced or rushed. It must be built gradually, step by step, in an environment where mistakes are treated as learning opportunities rather than failures.
            </p>

            <div className="p-6 rounded-2xl bg-[#F5F8FB] border-l-4 border-l-[#3371A4] border border-slate-200 my-6 space-y-2">
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                "Independence is not about doing everything alone; it is about having the confidence and skills to navigate the world safely."
              </h3>
              <p className="text-xs font-semibold text-[#3371A4]">— Gentle Steps Ethos Statement</p>
            </div>

            <p>
              From our very first property, our approach has been deliberately person-centred. We invest heavily in our physical accommodation, ensuring every resident has a clean, beautifully furnished, private bedroom and access to comfortable communal areas. More importantly, we invest in our people. Our keyworkers are trained in trauma-informed care, emotional first aid, and active listening. They don’t just monitor residents; they walk alongside them—cooking meals together, practicing budget planning over a cup of tea, accompanying them to Jobcentre or college appointments, and celebrating every milestone.
            </p>

            <p>
              Today, Gentle Steps Support works proudly alongside Local Authorities, Social Workers, Commissioners, and NHS health teams across the United Kingdom. We measure our success not merely by bed occupancy, but by the tangible achievements of our residents: care leavers holding down their first steady jobs, young adults graduating from college courses, and residents stepping confidently into their own permanent independent tenancies.
            </p>

            <p>
              As we look to the future, our tagline remains our guiding compass: <strong>Supporting Every Step Towards Independence</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* OUR MISSION & VISION (EXPANDED) */}
      <section className="py-20 bg-[#F5F8FB] border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="soft-card p-8 space-y-4 border-t-4 border-t-[#3371A4]">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#3371A4] flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>

              <h2 className="text-2xl font-black text-slate-900 font-heading">Our Mission</h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                {BRAND_INFO.mission}
              </p>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Trauma-informed key work tailored to each young adult</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Transparent progress reporting for Local Authorities</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="soft-card p-8 space-y-4 border-t-4 border-t-[#EFA250]">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#EFA250] flex items-center justify-center font-bold">
                <TrendingUp className="w-6 h-6" />
              </div>

              <h2 className="text-2xl font-black text-slate-900 font-heading">Our Vision</h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                {BRAND_INFO.vision}
              </p>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EFA250]" />
                  <span>Zero homelessness transitions for care leavers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#EFA250]" />
                  <span>National benchmark for supported living quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES CARDS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EFA250] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 inline-block font-heading">
              Our Core Principles
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading leading-tight">
              Values That Guide Every Decision We Make
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Eight unwavering standards that underpin our daily interactions with young adults, social workers, and local partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_CARDS.map((val) => (
              <div key={val.id} className="soft-card p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  {getValIcon(val.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">{val.headline}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT TO PARTNERS */}
      <section className="py-20 bg-[#F5F8FB] border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3371A4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block font-heading">
              Multi-Agency Partnership
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading leading-tight">
              Our Commitment to Our Professional Partners
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              We collaborate seamlessly across statutory and voluntary sectors to ensure holistic care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <Building2 className="w-8 h-8 text-[#3371A4]" />
              <h3 className="font-bold text-slate-900 text-base font-heading">Local Authorities</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prompt referral processing, transparent pricing, monthly Pathway progress reports, and joint risk assessment reviews.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <Users className="w-8 h-8 text-[#EFA250]" />
              <h3 className="font-bold text-slate-900 text-base font-heading">Families & Advocates</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Open communication lines, respectful inclusion in milestone celebrations, and complete peace of mind regarding safety.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <HeartHandshake className="w-8 h-8 text-emerald-600" />
              <h3 className="font-bold text-slate-900 text-base font-heading">Partner Agencies</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Co-working with youth hubs, colleges, local employers, and Jobcentres to expand real-world opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <Award className="w-8 h-8 text-[#3371A4]" />
              <h3 className="font-bold text-slate-900 text-base font-heading">Healthcare Teams</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active partnership with NHS CAMHS, adult mental health teams, GPs, and addiction recovery specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY OUR APPROACH WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EFA250] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 inline-block font-heading">
              Evidence & Practice
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading leading-tight">
              Why Our Supported Living Approach Works
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-[#F5F8FB] rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-lg font-heading">1. Person-Centred Planning</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No two young adults are the same. We co-design support goals around individual strengths, cultural identities, and personal pace, ensuring high motivation and genuine buy-in.
              </p>
            </div>

            <div className="p-6 bg-[#F5F8FB] rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-lg font-heading">2. Positive & Consistent Relationships</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Consistent keyworker pairing creates a reliable anchor of trust. Staff model positive conflict resolution, emotional regulation, and active encouragement daily.
              </p>
            </div>

            <div className="p-6 bg-[#F5F8FB] rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-lg font-heading">3. Outcome-Focused Milestones</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We break big goals (like getting a job or independent tenancy) into achievable micro-steps, celebrating each win to build self-efficacy and momentum.
              </p>
            </div>
          </div>

          <div className="text-center pt-6">
            <button
              onClick={onOpenReferralModal}
              className="px-8 py-4 rounded-2xl bg-[#3371A4] hover:bg-[#275983] text-white font-extrabold text-base shadow-lg inline-flex items-center gap-2"
            >
              <UserPlus className="w-5 h-5 text-[#EFA250]" />
              <span>Discuss a Referral with Our Team</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
