import React, { useState } from 'react';
import { ActivePage } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { ReferralModal } from './components/ReferralModal';
import { BrandGuideModal } from './components/BrandGuideModal';
import { SeoMetadataModal } from './components/SeoMetadataModal';
import { IndependenceReadinessQuiz } from './components/IndependenceReadinessQuiz';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [referralModalOpen, setReferralModalOpen] = useState(false);
  const [brandGuideOpen, setBrandGuideOpen] = useState(false);
  const [seoInspectorOpen, setSeoInspectorOpen] = useState(false);
  const [quizModalOpen, setQuizModalOpen] = useState(false);

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomePage
            setActivePage={setActivePage}
            onOpenReferralModal={() => setReferralModalOpen(true)}
            onOpenQuizModal={() => setQuizModalOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            setActivePage={setActivePage}
            onOpenReferralModal={() => setReferralModalOpen(true)}
          />
        );
      case 'services':
        return (
          <ServicesPage
            setActivePage={setActivePage}
            onOpenReferralModal={() => setReferralModalOpen(true)}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onOpenReferralModal={() => setReferralModalOpen(true)}
          />
        );
      default:
        return (
          <HomePage
            setActivePage={setActivePage}
            onOpenReferralModal={() => setReferralModalOpen(true)}
            onOpenQuizModal={() => setQuizModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-700 selection:bg-[#3371A4] selection:text-white">
      {/* Navigation Header */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenReferralModal={() => setReferralModalOpen(true)}
        onOpenBrandGuide={() => setBrandGuideOpen(true)}
        onOpenSeoInspector={() => setSeoInspectorOpen(true)}
        onOpenQuizModal={() => setQuizModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="grow">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenReferralModal={() => setReferralModalOpen(true)}
        onOpenBrandGuide={() => setBrandGuideOpen(true)}
        onOpenSeoInspector={() => setSeoInspectorOpen(true)}
        onOpenQuizModal={() => setQuizModalOpen(true)}
      />

      {/* Modals & Overlays */}
      <ReferralModal
        isOpen={referralModalOpen}
        onClose={() => setReferralModalOpen(false)}
      />

      <BrandGuideModal
        isOpen={brandGuideOpen}
        onClose={() => setBrandGuideOpen(false)}
      />

      <SeoMetadataModal
        isOpen={seoInspectorOpen}
        onClose={() => setSeoInspectorOpen(false)}
        activePage={activePage}
      />

      <IndependenceReadinessQuiz
        isOpen={quizModalOpen}
        onClose={() => setQuizModalOpen(false)}
        onOpenReferralModal={() => setReferralModalOpen(true)}
      />
    </div>
  );
}
