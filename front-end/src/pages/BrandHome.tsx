import React from 'react';
import { ArrowRight, Sparkles, Wand2, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BrandHomeProps {
  onStart: () => void;
}

export const BrandHome: React.FC<BrandHomeProps> = ({ onStart }) => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 animate-in fade-in zoom-in-95 duration-700">
      <div className="flex-1 space-y-8 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-pink-100 rounded-full border-2 border-slate-800 text-sm font-bold text-pink-600 animate-bounce">
          <Sparkles size={16} /> {t('home.beta')}
        </div>

        <div className="relative inline-block">
          <h1 className="text-6xl md:text-8xl font-black text-slate-800 leading-[0.9] relative z-10">
            {t('home.heroTitle.dream')}<br />
            {t('home.heroTitle.connect')}<br />
            <span className="text-pink-500">{t('home.heroTitle.delight')}</span>
          </h1>
          <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-200 -z-10 rounded-full opacity-60"></div>
        </div>

        <p className="text-xl text-slate-600 max-w-md font-medium leading-relaxed">
          {t('home.heroSubtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={onStart}
            className="px-10 py-5 bg-yellow-300 sketch-button rounded-2xl text-2xl font-black text-slate-800 flex items-center justify-center gap-3 group"
          >
            {t('home.cta')}
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      <div className="flex-1 relative">
        <div className="sketch-border p-2 bg-white transform rotate-2 relative z-10">
          <img
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800"
            alt="SoulLink Art"
            className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -top-10 -right-10">
            <div className="bg-blue-300 p-4 border-2 border-slate-800 rounded-2xl rotate-12 float">
              <Wand2 size={40} className="text-white" />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6">
            <div className="bg-pink-300 p-4 border-2 border-slate-800 rounded-full float-delayed">
              <Heart size={32} className="text-white" fill="white" />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-slate-800 rounded-[28px] transform -rotate-1 translate-x-4 translate-y-4 -z-10"></div>
      </div>
    </div>
  );
};
