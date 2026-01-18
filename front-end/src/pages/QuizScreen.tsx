import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { QUESTIONS } from '../../constants';
import { Star, ChevronRight, Check } from 'lucide-react';

interface QuizScreenProps {
  onComplete: (answers: Record<number, string | string[]>) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ onComplete }) => {
  const { t, language } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [inputValue, setInputValue] = useState(''); // For text/number inputs
  const [otherValue, setOtherValue] = useState(''); // For 'Other' specification

  const currentQuestion = QUESTIONS[currentIdx];

  // Reset input value when question changes
  useEffect(() => {
    setOtherValue('');
    if (currentQuestion.type === 'text' || currentQuestion.type === 'number') {
      const existingAns = answers[currentQuestion.id];
      setInputValue(typeof existingAns === 'string' ? existingAns : '');
    }
  }, [currentIdx, currentQuestion, answers]);

  const advanceQuestion = (finalAnswers: Record<number, string | string[]>) => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setInputValue('');
    } else {
      onComplete(finalAnswers);
    }
  };

  const handleNext = () => {
    // Save text/number input if applicable
    const finalAnswers = { ...answers };

    if (currentQuestion.type === 'text' || currentQuestion.type === 'number') {
      if (currentQuestion.required && !inputValue.trim()) return;
      finalAnswers[currentQuestion.id] = inputValue;
      setAnswers(finalAnswers);
    }
    advanceQuestion(finalAnswers);
  };

  const handleNextWithOther = () => {
    const finalAnswers = { ...answers };
    let currentAns = finalAnswers[currentQuestion.id];

    // Format logic: if 'other' is selected, append the description
    if (currentQuestion.type === 'single') {
      if (currentAns === 'other') {
        if (!otherValue.trim()) return; // Require specification
        finalAnswers[currentQuestion.id] = `Other: ${otherValue}`;
      }
    } else if (currentQuestion.type === 'multiple') {
      const ansArray = (currentAns as string[]) || [];
      if (ansArray.includes('other')) {
        // Replace 'other' with the user's input string
        const newArray = ansArray.map(a => a === 'other' ? `Other: ${otherValue}` : a);
        finalAnswers[currentQuestion.id] = newArray;
      }
    }
    setAnswers(finalAnswers);
    advanceQuestion(finalAnswers);
  };

  const handleSingleSelect = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    // Auto advance ONLY if NOT 'other'
    if (value !== 'other') {
      setTimeout(() => {
        if (currentIdx < QUESTIONS.length - 1) {
          setCurrentIdx(currentIdx + 1);
        } else {
          onComplete(newAnswers);
        }
      }, 250);
    }
  };

  const handleMultiSelect = (value: string) => {
    const currentAns = (answers[currentQuestion.id] as string[]) || [];
    let newAns: string[];

    if (currentAns.includes(value)) {
      newAns = currentAns.filter(v => v !== value);
    } else {
      /* Limit check */
      if (currentQuestion.maxOptions && currentAns.length >= currentQuestion.maxOptions) {
        return;
      }
      newAns = [...currentAns, value];
    }
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: newAns }));
  };

  const progress = ((currentIdx + 1) / QUESTIONS.length) * 100;

  return (
    <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

      {/* Header & Progress */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center gap-2">
          <Star className="text-yellow-400 fill-yellow-400 animate-pulse" />
          <span className="text-lg font-black text-slate-800 uppercase tracking-widest">
            {t('quiz.question')} {currentIdx + 1}/{QUESTIONS.length}
          </span>
          <Star className="text-yellow-400 fill-yellow-400 animate-pulse" />
        </div>
        <div className="w-full h-6 bg-white border-4 border-slate-800 rounded-full overflow-hidden shadow-[4px_4px_0px_0px_#2d3436]">
          <div
            className="h-full bg-pink-400 transition-all duration-500 border-r-4 border-slate-800"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Main Card */}
      <div className="sketch-border bg-white p-8 md:p-12 min-h-[450px] flex flex-col relative transition-all">

        {/* Section Label */}
        <div className="absolute top-0 left-0 bg-yellow-300 px-6 py-2 rounded-br-2xl border-b-4 border-r-4 border-slate-800">
          <span className="font-bold uppercase text-xs tracking-widest text-slate-900">
            {currentQuestion.section}
          </span>
        </div>

        <div className="mt-8 space-y-8 flex-1 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
            {currentQuestion.text[language]}
          </h2>

          {/* Subtitle / Context if any (max options) */}
          {currentQuestion.type === 'multiple' && currentQuestion.maxOptions && (
            <p className="text-slate-500 font-bold text-sm italic">
              (Select up to {currentQuestion.maxOptions})
            </p>
          )}

          <div className="flex-1 content-center">
            {/* Input: TEXT or NUMBER */}
            {(currentQuestion.type === 'text' || currentQuestion.type === 'number') && (
              <div className="space-y-4">
                <input
                  type={currentQuestion.type}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={currentQuestion.placeholder?.[language] || ''}
                  className="w-full p-6 text-2xl font-bold border-b-4 border-slate-300 focus:border-slate-800 outline-none bg-transparent placeholder:text-slate-300 transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  autoFocus
                  onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                />
                <button
                  onClick={handleNext}
                  disabled={currentQuestion.required && !inputValue.trim()}
                  className="w-full py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm <ChevronRight size={20} />
                </button>
              </div>
            )}

            {/* Input: SINGLE SELECT */}
            {currentQuestion.type === 'single' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  {currentQuestion.options?.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSingleSelect(opt.value)}
                      className={`w-full p-5 text-left text-lg font-bold sketch-button rounded-xl transition-all
                        ${answers[currentQuestion.id] === opt.value
                          ? 'bg-slate-800 text-white border-slate-800'
                          : 'bg-white hover:bg-slate-50 text-slate-700'}`}
                    >
                      {opt.label[language]}
                    </button>
                  ))}
                </div>

                {/* Other Input for Single Select */}
                {answers[currentQuestion.id] === 'other' && (
                  <div className="animate-in fade-in slide-in-from-top-2">
                    <input
                      type="text"
                      value={otherValue}
                      onChange={(e) => setOtherValue(e.target.value)}
                      placeholder={language === 'en' ? "Please specify..." : "Vui lòng ghi rõ..."}
                      className="w-full p-4 border-2 border-slate-300 rounded-xl focus:border-slate-800 outline-none font-medium mt-2"
                      autoFocus
                      onKeyDown={(e) => e.key === 'Enter' && handleNextWithOther()}
                    />
                    <button
                      onClick={handleNextWithOther}
                      disabled={!otherValue.trim()}
                      className="mt-2 w-full py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      Confirm <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Input: MULTI SELECT */}
            {currentQuestion.type === 'multiple' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-3">
                  {currentQuestion.options?.map((opt) => {
                    const isSelected = (answers[currentQuestion.id] as string[] || []).includes(opt.value);
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleMultiSelect(opt.value)}
                        className={`w-full p-4 text-left font-bold border-2 rounded-xl transition-all flex items-center justify-between group
                          ${isSelected
                            ? 'bg-pink-100 border-slate-800 text-slate-800 shadow-[4px_4px_0px_0px_#2d3436]'
                            : 'bg-white border-slate-200 text-slate-500 hover:border-slate-400'}`}
                      >
                        <span>{opt.label[language]}</span>
                        {isSelected && <Check size={20} className="text-pink-500" />}
                      </button>
                    );
                  })}
                </div>

                {/* Other Input for Multi Select */}
                {(answers[currentQuestion.id] as string[] || []).includes('other') && (
                  <div className="animate-in fade-in slide-in-from-top-2">
                    <input
                      type="text"
                      value={otherValue}
                      onChange={(e) => setOtherValue(e.target.value)}
                      placeholder={language === 'en' ? "Please specify..." : "Vui lòng ghi rõ..."}
                      className="w-full p-4 border-2 border-slate-300 rounded-xl focus:border-slate-800 outline-none font-medium mb-2"
                    />
                  </div>
                )}

                <button
                  onClick={handleNextWithOther}
                  className="w-full py-4 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  Confirm Selection <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
