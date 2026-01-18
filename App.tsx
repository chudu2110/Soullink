
import React, { useState, useEffect } from 'react';
import { AppStep, UserState, MatchProfile } from './types';
import { BrandHome } from './components/BrandHome';
import { BrandAbout } from './components/BrandAbout';
import { BrandHowTo } from './components/BrandHowTo';
import { BrandAdvice } from './components/BrandAdvice';
import { AuthScreen } from './components/AuthScreen';
import { QuizScreen } from './components/QuizScreen';
import { MatchingLoader } from './components/MatchingLoader';
import { MatchResult } from './components/MatchResult';
import { GoogleGenAI, Type } from "@google/genai";
import { Heart, Menu } from 'lucide-react';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.HOME);
  const [user, setUser] = useState<UserState>({
    name: '',
    hasMatched: false,
    quizAnswers: {}
  });

  useEffect(() => {
    const saved = localStorage.getItem('soulLink_user');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.hasMatched) {
        setUser(parsed);
        setStep(AppStep.MATCHED);
      }
    }
  }, []);

  const handleLogin = (name: string) => {
    setUser(prev => ({ ...prev, name }));
    setStep(AppStep.QUIZ);
  };

  const handleQuizComplete = async (answers: Record<number, string>) => {
    setUser(prev => ({ ...prev, quizAnswers: answers }));
    setStep(AppStep.MATCHING);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Based on these quiz answers: ${JSON.stringify(answers)}, create a whimsical soulmate profile. 
      Return JSON with: name, bio (short, quirky), compatibility (1-100), and socialUrl (fictional). 
      The style should be youthful and warm.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              bio: { type: Type.STRING },
              compatibility: { type: Type.NUMBER },
              socialUrl: { type: Type.STRING }
            },
            required: ["name", "bio", "compatibility", "socialUrl"]
          }
        }
      });

      const matchData = JSON.parse(response.text?.trim() || '{}');
      const profile: MatchProfile = {
        ...matchData,
        avatarUrl: `https://picsum.photos/seed/${Math.random()}/400/400`
      };

      const updatedUser = { ...user, quizAnswers: answers, hasMatched: true, match: profile };
      setUser(updatedUser);
      localStorage.setItem('soulLink_user', JSON.stringify(updatedUser));
      setTimeout(() => setStep(AppStep.MATCHED), 3500);

    } catch (error) {
      console.error("Matchmaking failed:", error);
      const fallback: MatchProfile = {
        name: "Cloudy Joe",
        bio: "A professional dreamer who loves drinking rain tea. You both matched over a shared love for quiet Sunday mornings.",
        compatibility: 98,
        socialUrl: "https://soul.link/cloudyjoe",
        avatarUrl: "https://picsum.photos/seed/fallback/400/400"
      };
      const updatedUser = { ...user, hasMatched: true, match: fallback };
      setUser(updatedUser);
      setStep(AppStep.MATCHED);
    }
  };

  const isLocked = user.hasMatched;

  const NavItem = ({ label, target }: { label: string; target: AppStep }) => (
    <button
      onClick={() => !isLocked && setStep(target)}
      className={`px-4 py-2 font-bold transition-all ${step === target ? 'text-pink-500 underline decoration-4' : 'text-slate-600 hover:text-slate-900'} ${isLocked && step !== AppStep.MATCHED ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-doodles">
      {/* Subtle universal background pattern only */}
      <div className="fixed inset-0 pointer-events-none -z-20 opacity-[0.02]">
        <svg className="absolute top-1/4 left-1/4 w-32 h-32 rotate-12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
      </div>

      <header className="sticky top-0 w-full p-4 md:p-6 flex justify-between items-center z-50 bg-[#fdfaf7]/80 backdrop-blur-md border-b-2 border-slate-800/10">
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => !isLocked && setStep(AppStep.HOME)}
        >
          <div className="w-10 h-10 bg-white border-2 border-slate-800 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-[3px_3px_0px_0px_#2d3436]">
            <Heart className="text-pink-500" fill="#f472b6" size={20} />
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-slate-800 uppercase">SoulLink</h1>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          <NavItem label="Home" target={AppStep.HOME} />
          <NavItem label="About" target={AppStep.ABOUT} />
          <NavItem label="How it works" target={AppStep.HOW_TO} />
          <NavItem label="Advice" target={AppStep.ADVICE} />
          {!isLocked && (
            <button
              onClick={() => setStep(AppStep.AUTH)}
              className="ml-4 px-6 py-2 bg-yellow-300 sketch-button rounded-xl font-bold uppercase text-sm"
            >
              Start Matching
            </button>
          )}
        </nav>

        <div className="md:hidden">
          <Menu className="text-slate-800" />
        </div>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 md:py-16 relative flex items-center justify-center">
        <div className="w-full max-w-4xl relative z-10">
          {step === AppStep.HOME && <BrandHome onStart={() => setStep(AppStep.AUTH)} />}
          {step === AppStep.ABOUT && <BrandAbout onBack={() => setStep(AppStep.HOME)} />}
          {step === AppStep.HOW_TO && <BrandHowTo onStart={() => setStep(AppStep.AUTH)} />}
          {step === AppStep.ADVICE && <BrandAdvice onBack={() => setStep(AppStep.HOME)} />}
          {step === AppStep.AUTH && <AuthScreen onComplete={handleLogin} />}
          {step === AppStep.QUIZ && <QuizScreen onComplete={handleQuizComplete} />}
          {step === AppStep.MATCHING && <MatchingLoader />}
          {step === AppStep.MATCHED && user.match && <MatchResult profile={user.match} />}
        </div>
      </main>

      <footer className="w-full p-8 text-center text-slate-400 text-sm font-medium">
        {step === AppStep.MATCHED ? "You've reached your final destination." : "© 2025 SoulLink - Made with Love & Logic"}
      </footer>
    </div>
  );
};

export default App;
