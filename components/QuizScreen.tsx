
import React, { useState } from 'react';
import { QUESTIONS } from '../constants';
import { Star } from 'lucide-react';

interface QuizScreenProps {
  onComplete: (answers: Record<number, string>) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleOptionSelect = (option: string) => {
    const newAnswers = { ...answers, [QUESTIONS[currentIdx].id]: option };
    setAnswers(newAnswers);

    if (currentIdx < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentIdx(currentIdx + 1);
      }, 300);
    } else {
      onComplete(newAnswers);
    }
  };

  const progress = ((currentIdx + 1) / QUESTIONS.length) * 100;

  return (
    <div className="w-full space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center gap-2">
           <Star className="text-yellow-400 fill-yellow-400 animate-pulse" />
           <span className="text-lg font-black text-slate-800 uppercase tracking-widest">Question {currentIdx + 1}/{QUESTIONS.length}</span>
           <Star className="text-yellow-400 fill-yellow-400 animate-pulse" />
        </div>
        <div className="w-full h-6 bg-white border-4 border-slate-800 rounded-full overflow-hidden shadow-[4px_4px_0px_0px_#2d3436]">
          <div 
            className="h-full bg-pink-400 transition-all duration-500 border-r-4 border-slate-800" 
            style={{ width: `${progress}%` }} 
          />
        </div>
      </div>

      <div className="sketch-border bg-white p-8 md:p-16 min-h-[450px] flex flex-col justify-between relative">
        <div className="space-y-10">
          <h2 className="text-4xl md:text-5xl font-black text-slate-800 text-center leading-tight tracking-tight">
            {QUESTIONS[currentIdx].text}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {QUESTIONS[currentIdx].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleOptionSelect(option)}
                className={`w-full p-6 text-left text-xl font-bold sketch-button rounded-2xl transition-all duration-200
                  ${answers[QUESTIONS[currentIdx].id] === option ? 'bg-blue-100 scale-[0.98]' : 'bg-white hover:bg-slate-50'}`}
              >
                <span className="mr-3 text-slate-300">0{i+1}</span> {option}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-12 flex justify-center opacity-40">
            <p className="text-slate-600 italic font-bold text-sm tracking-widest uppercase">Trust your first instinct</p>
        </div>
      </div>
    </div>
  );
};
