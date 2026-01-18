import React from 'react';
import { Sparkles, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AuthScreenProps {
  onStart: () => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ onStart }) => {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-lg mx-auto text-center space-y-8 animate-in zoom-in-95 duration-500">
      <div className="space-y-4">
        <div className="inline-block p-6 bg-pink-100 rounded-full mb-4 float shadow-[4px_4px_0px_0px_#2d3436] border-2 border-slate-800">
          <HeartHandshake size={64} className="text-pink-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">{t('auth.hello')}</h2>
        <p className="text-slate-600 text-xl font-medium leading-relaxed px-4">
          {t('auth.subtitle')}
        </p>
      </div>

      <div className="relative z-10 p-8 sketch-border bg-white mt-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
        <p className="text-center text-sm text-slate-500 mb-6 font-medium leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t('auth.disclaimer') }}
        />

        <button
          onClick={onStart}
          className="w-full py-5 bg-[#f9d2d2] hover:bg-[#f2baba] text-slate-800 font-bold text-2xl sketch-button rounded-2xl flex items-center justify-center gap-3 group"
        >
          {t('auth.submit')}
          <Sparkles className="group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </div>
  );
};
