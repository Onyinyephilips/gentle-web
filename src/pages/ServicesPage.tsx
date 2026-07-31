import React from 'react';
import { ActivePage } from '../types';
import { WELCOME_PACK_ITEMS, LOCAL_AMENITIES } from '../data/content';
import {
  UserCheck,
  Sparkles,
  Wallet,
  Utensils,
  Briefcase,
  GraduationCap,
  FileText,
  Key,
  Home,
  CheckCircle2,
  Package,
  MapPin,
  HeartHandshake,
  UserPlus,
  ShieldCheck,
  BedDouble,
  Bath,
  BookOpen,
  Coffee,
  ShoppingBag,
  HeartPulse,
  Activity,
  Bus,
  Building2,
  Clock,
  Shirt,
  Compass,
} from 'lucide-react';

interface ServicesPageProps {
  setActivePage: (page: ActivePage) => void;
  onOpenReferralModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ setActivePage, onOpenReferralModal }) => {
  const getWpIcon = (name: string) => {
    switch (name) {
      case 'BedDouble': return <BedDouble className="w-6 h-6 text-[#3371A4]" />;
      case 'Bath': return <Bath className="w-6 h-6 text-[#3371A4]" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-[#3371A4]" />;
      case 'Coffee': return <Coffee className="w-6 h-6 text-[#3371A4]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[#3371A4]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#3371A4]" />;
      default: return <Sparkles className="w-6 h-6 text-[#EFA250]" />;
    }
  };

  const getAmenityIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#3371A4]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-[#3371A4]" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-[#3371A4]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#3371A4]" />;
      case 'Bus': return <Bus className="w-5 h-5 text-[#3371A4]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#3371A4]" />;
      default: return <MapPin className="w-5 h-5 text-[#EFA250]" />;
    }
  };

  return (
    <div className="space-y-0">
      {/* SERVICES HERO */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-[#F5F8FB] via-white to-[#F5F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3371A4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block font-heading">
            Our Supported Living Services
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-heading leading-tight">
            Comprehensive Care, Key Work, and Life Skills Pathways
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            Every service at Gentle Steps Support is designed to empower young adults aged 18–25 with practical capability, emotional resilience, and independent tenancy readiness.
          </p>
        </div>
      </section>

      {/* CORE SERVICES BREAKDOWN */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 1. Supported Accommodation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 p-8 rounded-3xl bg-[#F5F8FB] border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#3371A4] text-white flex items-center justify-center font-bold">
                <Home className="w-6 h-6 text-[#EFA250]" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 font-heading">Supported Accommodation</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Safe, modern, high-specification residential properties across the UK. Fully furnished private bedrooms with double/single beds, wardrobes, desks, lockable doors, high-speed Wi-Fi, communal lounges with Smart TVs, equipped kitchens, and private gardens.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#3371A4]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>24/7 Staff Coverage & Duty Support</span>
              </div>
            </div>

            {/* 2. Key Work Sessions & Support Planning */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
                <div className="flex items-center gap-3">
                  <UserCheck className="w-6 h-6 text-[#3371A4]" />
                  <h3 className="text-xl font-bold text-slate-900 font-heading">Key Work Sessions & Support Planning</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Weekly structured 1-on-1 key work sessions co-designed with the young adult and social worker. Together, we track Pathway Plan targets, review budgeting, discuss emotional health, and break big goals into manageable weekly micro-milestones.
                </p>
              </div>

              {/* 3. Mental Health & Emotional Wellbeing */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-3">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-[#EFA250]" />
                  <h3 className="text-xl font-bold text-slate-900 font-heading">Mental Health & Emotional Wellbeing</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Trauma-informed care practices that recognize anxiety, trauma responses, and emotional fatigue. We offer daily informal check-ins, mindfulness routines, and active co-working with NHS secondary mental health services, CAMHS transition teams, and local therapeutic networks.
                </p>
              </div>
            </div>
          </div>

          {/* LIFE SKILLS DEVELOPMENT GRID */}
          <div className="space-y-8 pt-8 border-t border-slate-200">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#EFA250] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 inline-block font-heading">
                Practical Autonomy
              </span>
              <h2 className="text-3xl font-black text-slate-900 font-heading">
                Life Skills Development Modules
              </h2>
              <p className="text-slate-600 text-sm">
                Hands-on training provided in real-life settings to master essential daily independence routines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="soft-card p-6 space-y-3">
                <Utensils className="w-8 h-8 text-[#3371A4]" />
                <h3 className="font-bold text-slate-900 text-lg font-heading">1. Cooking & Nutrition</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Preparing healthy meals on a budget, meal planning, batch cooking, food storage hygiene, and mastering 5 core weekly recipes.
                </p>
              </div>

              <div className="soft-card p-6 space-y-3">
                <Home className="w-8 h-8 text-[#3371A4]" />
                <h3 className="font-bold text-slate-900 text-lg font-heading">2. Household Cleaning</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Maintaining hygiene in kitchens and bathrooms, safe chemical usage, recycling rules, and daily bedroom upkeep routines.
                </p>
              </div>

              <div className="soft-card p-6 space-y-3">
                <Shirt className="w-8 h-8 text-[#3371A4]" />
                <h3 className="font-bold text-slate-900 text-lg font-heading">3. Laundry & Clothing Care</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Operating washing machines, drying options, garment care symbols, ironing, and keeping personal wardrobes organized.
                </p>
              </div>

              <div className="soft-card p-6 space-y-3">
                <Wallet className="w-8 h-8 text-[#EFA250]" />
                <h3 className="font-bold text-slate-900 text-lg font-heading">4. Budgeting & Banking</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Setting up bank accounts, direct debit management, avoiding predatory loans, dividing income into needs vs wants, and savings.
                </p>
              </div>

              <div className="soft-card p-6 space-y-3">
                <ShoppingBag className="w-8 h-8 text-[#EFA250]" />
                <h3 className="font-bold text-slate-900 text-lg font-heading">5. Grocery Shopping</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Navigating local supermarkets, price comparison shopping, meal ingredient lists, and avoiding impulse food wastage.
                </p>
              </div>

              <div className="soft-card p-6 space-y-3">
                <Clock className="w-8 h-8 text-[#EFA250]" />
                <h3 className="font-bold text-slate-900 text-lg font-heading">6. Time Management & Routine</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Building consistent sleep schedules, setting alarms, keeping appointment calendars, and managing daily routines smoothly.
                </p>
              </div>
            </div>
          </div>

          {/* EDUCATION, EMPLOYMENT & BENEFITS GUIDANCE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
            <div className="p-6 rounded-2xl bg-[#F5F8FB] border border-slate-200 space-y-3">
              <GraduationCap className="w-8 h-8 text-[#3371A4]" />
              <h3 className="font-bold text-slate-900 text-lg font-heading">Education Support</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                College application assistance, GCSE retake enrollment, functional skills training, quiet study spaces with broadband, and coursework encouragement.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8FB] border border-slate-200 space-y-3">
              <Briefcase className="w-8 h-8 text-[#3371A4]" />
              <h3 className="font-bold text-slate-900 text-lg font-heading">Employment Support</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                CV tailoring, interview prep workshops, work experience placements, connecting with local youth employment hubs, and Kickstart apprenticeships.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8FB] border border-slate-200 space-y-3">
              <FileText className="w-8 h-8 text-[#3371A4]" />
              <h3 className="font-bold text-slate-900 text-lg font-heading">Benefits Guidance</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Step-by-step guidance navigating Universal Credit, housing element applications, PIP claims, and attending Jobcentre appointments without sanction risk.
              </p>
            </div>
          </div>

          {/* PREPARING FOR INDEPENDENT LIVING (GRADUAL TRANSITION) */}
          <div className="bg-gradient-to-r from-[#3371A4] to-[#275983] text-white p-8 sm:p-12 rounded-3xl space-y-6 shadow-lg">
            <div className="flex items-center gap-3">
              <Key className="w-8 h-8 text-[#EFA250]" />
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
                Preparing for Independent Living: Gradual Tenancy Transition
              </h2>
            </div>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              When a young adult achieves stability in life skills, we begin our deliberate Independent Living Transition plan. We guide residents through bidding on local authority social housing, inspecting private rented properties, reviewing tenancy contracts, setting up utility accounts in their name, and graduating with floating support to ensure long-term tenancy sustainment.
            </p>
          </div>
        </div>
      </section>

      {/* WELCOME PACK SECTION */}
      <section className="py-20 bg-[#F5F8FB] border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EFA250] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 inline-block font-heading">
              Move-In Dignity
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading leading-tight">
              The Gentle Steps Welcome Pack
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Moving into a new home can feel overwhelming. On move-in day, every young person is handed their personal Welcome Pack to make them feel instantly valued and comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WELCOME_PACK_ITEMS.map((item) => (
              <div key={item.id} className="soft-card p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    {getWpIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] font-bold text-[#3371A4] bg-blue-50 px-2 py-0.5 rounded-md">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base font-heading">{item.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL AMENITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3371A4] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block font-heading">
              Community Connectivity
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading leading-tight">
              Access to Convenient Local Amenities
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Our properties are strategically chosen in safe UK residential neighbourhoods with immediate access to vital public infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL_AMENITIES.map((la) => (
              <div key={la.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-blue-50 rounded-xl text-[#3371A4]">
                    {getAmenityIcon(la.iconName)}
                  </div>
                  <span className="text-xs font-bold text-[#3371A4] bg-blue-50 px-2.5 py-1 rounded-full">
                    {la.distance}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                    {la.category}
                  </span>
                  <h3 className="font-bold text-slate-900 text-lg font-heading">{la.title}</h3>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">{la.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FAMILIES & LOCAL AUTHORITIES CHOOSE US (6 PREMIUM CARDS) */}
      <section className="py-20 bg-[#F5F8FB] border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#EFA250] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 inline-block font-heading">
              Trusted Partner Standards
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading leading-tight">
              Why Families & Local Authorities Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="soft-card p-6 space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#3371A4]" />
              <h3 className="font-bold text-slate-900 text-lg font-heading">1. Robust Safeguarding</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Enhanced DBS cleared staff, Designated Safeguarding Lead oversight, and strict multi-agency reporting protocols.
              </p>
            </div>

            <div className="soft-card p-6 space-y-3">
              <FileText className="w-8 h-8 text-[#3371A4]" />
              <h3 className="font-bold text-slate-900 text-lg font-heading">2. Clear Milestone Reporting</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Detailed monthly Pathway progress reports delivered punctually to social workers and commissioning teams.
              </p>
            </div>

            <div className="soft-card p-6 space-y-3">
              <Clock className="w-8 h-8 text-[#3371A4]" />
              <h3 className="font-bold text-slate-900 text-lg font-heading">3. 24/7 Rapid Response</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Round-the-clock staffing and duty management ensuring immediate crisis resolution and young person safety.
              </p>
            </div>

            <div className="soft-card p-6 space-y-3">
              <HeartHandshake className="w-8 h-8 text-[#EFA250]" />
              <h3 className="font-bold text-slate-900 text-lg font-heading">4. Genuine Trauma-Informed Ethos</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Empathetic, non-punitative care that supports young adults through emotional setbacks and anxiety.
              </p>
            </div>

            <div className="soft-card p-6 space-y-3">
              <Home className="w-8 h-8 text-[#EFA250]" />
              <h3 className="font-bold text-slate-900 text-lg font-heading">5. High Quality Housing</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Modern, immaculate, fully furnished properties with personal privacy and warm communal spaces.
              </p>
            </div>

            <div className="soft-card p-6 space-y-3">
              <CheckCircle2 className="w-8 h-8 text-[#EFA250]" />
              <h3 className="font-bold text-slate-900 text-lg font-heading">6. High Tenancy Success Rates</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Proven track record of care leavers transitioning smoothly into long-term independent tenancies.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={onOpenReferralModal}
              className="px-8 py-4 rounded-2xl bg-[#3371A4] hover:bg-[#275983] text-white font-extrabold text-base shadow-lg inline-flex items-center gap-2"
            >
              <UserPlus className="w-5 h-5 text-[#EFA250]" />
              <span>Submit Placement Referral</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
