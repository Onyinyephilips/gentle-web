export type ActivePage = 'home' | 'about' | 'services' | 'contact';

export interface FeatureCard {
  id: string;
  headline: string;
  description: string;
  iconName: string;
  tag?: string;
}

export interface ServicePreview {
  id: string;
  title: string;
  shortParagraph: string;
  fullDescription?: string;
  iconName: string;
  category: 'daily' | 'wellbeing' | 'skills' | 'future';
}

export interface AccommodationFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: boolean;
}

export interface StepProcess {
  stepNumber: number;
  title: string;
  shortTitle: string;
  summary: string;
  detailedExplanation: string;
  milestones: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: 'Young Adult' | 'Social Worker' | 'Parent' | 'Commissioner';
  organisation?: string;
  quote: string;
  location: string;
  avatarSeed: string;
  rating: number;
  highlightTag: string;
}

export interface ValueCard {
  id: string;
  headline: string;
  description: string;
  iconName: string;
}

export interface WelcomePackItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface LocalAmenity {
  id: string;
  category: string;
  title: string;
  distance: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Referrals' | 'Accommodation' | 'Daily Support' | 'Funding & Local Authorities' | 'Safety & Wellbeing';
}

export interface SeoPageMetadata {
  pageId: ActivePage;
  pageName: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  openGraphTitle: string;
  openGraphDescription: string;
  canonicalUrl: string;
}

export interface ReferralFormData {
  referrerName: string;
  referrerRole: string;
  localAuthority: string;
  referrerEmail: string;
  referrerPhone: string;
  youngPersonAge: string;
  genderIdentity: string;
  currentLivingSituation: string;
  supportLevelRequired: 'Low (1-5 hrs/wk)' | 'Medium (6-15 hrs/wk)' | 'High (16-30 hrs/wk)' | '24/7 On-call / Intensive';
  targetMoveInDate: string;
  primarySupportNeeds: string[];
  additionalNotes: string;
  consentConfirmed: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  userType: 'Social Worker' | 'Local Authority Commissioner' | 'Young Adult' | 'Parent / Family Member' | 'Other Partner';
  message: string;
}

export interface IndependenceQuizAnswer {
  category: string;
  score: number; // 1 to 5
}
