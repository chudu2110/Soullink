
import React from 'react';
import { CheckCircle2, Wand2, UserCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BrandHowToProps {
  onStart: () => void;
}

export const BrandHowTo: React.FC<BrandHowToProps> = ({ onStart }) => {
  const { t } = useLanguage();
  const steps = [
    {
      icon: <CheckCircle2 className="text-green-500" size={32} />,
      title: t('howTo.step1Title'),
      desc: t('howTo.step1Desc'),
      color: "bg-green-100"
    },
    {
      icon: <Wand2 className="text-purple-500" size={32} />,
      title: t('howTo.step2Title'),
      desc: t('howTo.step2Desc'),
      color: "bg-purple-100"
    },
    {
      icon: <UserCheck className="text-orange-500" size={32} />,
      title: t('howTo.step3Title'),
      desc: t('howTo.step3Desc'),
      color: "bg-orange-100"
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black text-slate-800 italic uppercase">{t('howTo.title')}</h2>
        <p className="text-xl text-slate-500 font-medium">{t('howTo.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {steps.map((step, idx) => (
          <div key={idx} className="relative flex flex-col items-center text-center space-y-6 group">
            <div className={`w-24 h-24 ${step.color} rounded-3xl border-2 border-slate-800 sketch-border flex items-center justify-center transform group-hover:-rotate-6 transition-transform z-10`}>
              {step.icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-slate-500 font-medium">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <button
          onClick={onStart}
          className="px-12 py-6 bg-[#f9d2d2] sketch-button rounded-2xl text-2xl font-black text-slate-800 hover:bg-[#f2baba]"
        >
          {t('howTo.cta')}
        </button>
      </div>
    </div>
  );
};
