import React, { useState } from 'react';
import { Compass, CheckCircle2, ArrowRight, RotateCcw, UserPlus, Sparkles, X } from 'lucide-react';

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReferralModal: () => void;
}

export const IndependenceReadinessQuiz: React.FC<QuizProps> = ({
  isOpen,
  onClose,
  onOpenReferralModal,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const questions = [
    {
      category: 'Budgeting & Money Skills',
      title: 'How comfortable are you with managing money and paying bills?',
      options: [
        { label: 'I struggle with money and don’t know how to budget or handle bills.', score: 1 },
        { label: 'I can manage basic daily cash, but utility bills and banking confuse me.', score: 2 },
        { label: 'I try to budget, but I often run out of money before the end of the week.', score: 3 },
        { label: 'I can budget well and understand direct debits and savings.', score: 4 },
      ],
    },
    {
      category: 'Cooking & Nutrition',
      title: 'How confident are you with preparing meals for yourself?',
      options: [
        { label: 'I rely mostly on takeaways or instant meals; I rarely cook.', score: 1 },
        { label: 'I can make simple snacks like toast or noodles, but nothing complex.', score: 2 },
        { label: 'I can cook 2 or 3 basic meals if someone helps me with shopping.', score: 3 },
        { label: 'I cook healthy meals independently and plan weekly grocery trips.', score: 4 },
      ],
    },
    {
      category: 'Emotional Wellbeing & Mental Health',
      title: 'When you feel stressed or anxious, how do you handle it?',
      options: [
        { label: 'I get overwhelmed easily and don’t know who to talk to.', score: 1 },
        { label: 'I shut down or isolate myself when things get difficult.', score: 2 },
        { label: 'I try to manage, but I really benefit from a supportive keyworker to chat to.', score: 3 },
        { label: 'I use positive coping strategies and seek help when needed.', score: 4 },
      ],
    },
    {
      category: 'Education, Employment & Routine',
      title: 'What best describes your current study, job, or daily routine?',
      options: [
        { label: 'I don’t have a daily routine and feel unsure about my future goals.', score: 1 },
        { label: 'I want to study or work, but I need help finding courses and drafting a CV.', score: 2 },
        { label: 'I am in college or work part-time, but struggle to keep regular attendance.', score: 3 },
        { label: 'I have a steady routine in college, training, or employment.', score: 4 },
      ],
    },
    {
      category: 'Household & Tenancy Skills',
      title: 'How confident are you with washing clothes, cleaning, and managing a home?',
      options: [
        { label: 'I have never done laundry or cleaned a kitchen/bathroom by myself.', score: 1 },
        { label: 'I can do basic cleaning if reminded, but I need guidance on laundry care.', score: 2 },
        { label: 'I keep my bedroom clean, but need support with shared spaces and safety.', score: 3 },
        { label: 'I maintain a clean environment independently and respect household safety rules.', score: 4 },
      ],
    },
  ];

  const handleSelectOption = (score: number) => {
    const nextAnswers = [...answers, score];
    setAnswers(nextAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setCompleted(false);
  };

  const totalPossible = questions.length * 4;
  const currentTotal = answers.reduce((a, b) => a + b, 0);
  const percentage = Math.round((currentTotal / totalPossible) * 100);

  let recommendationTitle = '';
  let recommendationText = '';
  let recommendedKeyworkLevel = '';

  if (percentage <= 45) {
    recommendationTitle = 'High-Support Pathway Plan Recommended';
    recommendationText = 'A comprehensive 24/7 supported living setting with intensive keywork sessions (16-30 hrs/wk) focused on foundational budgeting, daily meal prep, and emotional stabilization.';
    recommendedKeyworkLevel = 'High (16-30 hrs/wk) & 24/7 On-Call';
  } else if (percentage <= 75) {
    recommendationTitle = 'Structured Pathway Plan Recommended';
    recommendationText = 'Medium-support accommodation with targeted weekly keywork (6-15 hrs/wk) focusing on career development, independent tenancy practice, and advanced money skills.';
    recommendedKeyworkLevel = 'Medium (6-15 hrs/wk)';
  } else {
    recommendationTitle = 'Tenancy Transition & Floating Support Ready';
    recommendationText = 'Low-support or semi-independent setting with light keywork guidance (1-5 hrs/wk) to prepare for bidding on social housing or entering private tenancy.';
    recommendedKeyworkLevel = 'Low / Independent Transition';
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#3371A4] text-white p-6 flex items-start justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EFA250] flex items-center justify-center text-slate-900 font-bold shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#EFA250]">
                Interactive Tool • Gentle Steps Support
              </span>
              <h2 className="text-lg sm:text-xl font-bold font-heading">
                Independence Readiness Assessment
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto grow space-y-6">
          {!completed ? (
            <div className="space-y-6">
              {/* Progress Indicator */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-slate-600">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span className="text-[#3371A4]">{questions[currentQuestion].category}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#3371A4] h-2 transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Box */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {questions[currentQuestion].title}
                </h3>

                <div className="space-y-2.5">
                  {questions[currentQuestion].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt.score)}
                      className="w-full text-left p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-[#3371A4] text-slate-800 text-xs sm:text-sm transition-all font-medium flex items-center justify-between group"
                    >
                      <span className="pr-4">{opt.label}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#3371A4] shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-in zoom-in-95 duration-200 text-center">
              <div className="w-16 h-16 bg-blue-100 text-[#3371A4] rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-[#EFA250]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-[#EFA250] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full">
                  Readiness Score: {percentage}%
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">
                  {recommendationTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {recommendationText}
                </p>
              </div>

              {/* Support Breakdown Card */}
              <div className="bg-[#F5F8FB] p-5 rounded-2xl border border-slate-200 text-left space-y-3 text-xs text-slate-700">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] font-heading">
                  Gentle Steps Recommended Pathway Package
                </h4>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-slate-500">Suggested Key Work Level:</span>
                  <span className="font-bold text-[#3371A4]">{recommendedKeyworkLevel}</span>
                </div>
                <div className="space-y-1.5 pt-1">
                  <span className="text-slate-500 block font-semibold">Priority Keywork Focus:</span>
                  <ul className="space-y-1 text-slate-700">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Weekly 1-on-1 budget planner & bank account setup</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Cooking workshops (preparing 5 simple healthy meals)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Support with college enrolment / CV building</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={resetQuiz}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Quiz</span>
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenReferralModal();
                  }}
                  className="px-6 py-2.5 bg-[#3371A4] hover:bg-[#275983] text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-2"
                >
                  <UserPlus className="w-4 h-4 text-[#EFA250]" />
                  <span>Proceed to Referral</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
