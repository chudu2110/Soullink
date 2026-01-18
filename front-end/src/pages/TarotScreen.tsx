import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TAROT_DECK, TarotCard } from '../data/tarotData';
import { Sparkles, Repeat, ArrowLeft } from 'lucide-react';

interface TarotScreenProps {
    onBack: () => void;
}

export const TarotScreen: React.FC<TarotScreenProps> = ({ onBack }) => {
    const { t, language } = useLanguage();
    const [isShuffling, setIsShuffling] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);

    const startReading = () => {
        if (isShuffling) return;
        setIsShuffling(true);
        setShowResult(false);
        setSelectedCard(null);

        // Simulate shuffling time
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * TAROT_DECK.length);
            setSelectedCard(TAROT_DECK[randomIndex]);
            setIsShuffling(false);
            setShowResult(true);
        }, 3000);
    };

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[600px] relative animate-in fade-in duration-700">

            {/* Header Removed as per user request */}

            <div className="text-center space-y-4 mb-12 mt-8">
                <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
                    {language === 'en' ? 'Tarot Reading' : 'Bói Bài Tarot'}
                </h2>
                <p className="text-slate-600 text-lg max-w-lg mx-auto">
                    {language === 'en'
                        ? 'Focus on your question. Let the universe guide you.'
                        : 'Hãy tập trung vào câu hỏi của bạn. Để vũ trụ dẫn lối.'}
                </p>
            </div>

            {/* Card Display Area */}
            <div className="relative w-80 h-[500px] perspective-1000 cursor-pointer group" onClick={startReading}>

                {/* Deck / Card Placeholder */}
                {!showResult && (
                    <div className={`relative w-full h-full transition-all duration-500 transform style-3d
            ${isShuffling ? 'animate-[wiggle_0.5s_ease-in-out_infinite]' : 'hover:scale-105'}
          `}>
                        {/* Stack effect */}
                        <div className="absolute top-2 left-2 w-full h-full bg-slate-700 rounded-xl border-2 border-white shadow-md -z-10"></div>
                        <div className="absolute top-1 left-1 w-full h-full bg-slate-800 rounded-xl border-2 border-white shadow-md -z-10"></div>

                        {/* Top Card Back */}
                        <div className="w-full h-full bg-slate-900 rounded-2xl border-[3px] border-white shadow-2xl flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-200 via-transparent to-transparent"></div>
                            <Sparkles className="text-yellow-200 animate-pulse" size={64} />
                            <div className="absolute bottom-8 text-yellow-100 font-bold tracking-widest text-sm uppercase">
                                {isShuffling
                                    ? (language === 'en' ? 'SHUFFLING...' : 'ĐANG XÀO BÀI...')
                                    : (language === 'en' ? 'TAP TO SHUFFLE' : 'CHẠM ĐỂ XÀO BÀI')}
                            </div>
                        </div>
                    </div>
                )}

                {/* Result Card */}
                {showResult && selectedCard && (
                    <div className="w-full h-full animate-in zoom-in-90 duration-500">
                        <div className="w-full h-full bg-slate-900 rounded-2xl border-[3px] border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] overflow-hidden relative group-hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] transition-shadow">

                            {/* Full Height Image */}
                            <img src={selectedCard.image} alt={selectedCard.name} className="w-full h-full object-cover" />

                            {/* Minimal Name Tag */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-center">
                                <h3 className="font-['Patrick_Hand'] font-bold text-slate-900 text-lg uppercase tracking-widest line-clamp-1">
                                    {language === 'en' ? selectedCard.name : selectedCard.nameVi}
                                </h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Explanation Text */}
            {showResult && selectedCard && (
                <div className="mt-12 max-w-2xl text-center space-y-6 animate-in slide-in-from-bottom-8 duration-700 delay-200">
                    <div className="sketch-border p-8 bg-white relative">
                        <Sparkles className="absolute -top-6 -right-6 text-yellow-400 text-5xl animate-bounce" />
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">
                            {language === 'en' ? 'The Meaning' : 'Ý Nghĩa'}
                        </h3>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed">
                            "{language === 'en' ? selectedCard.meanUpEn : selectedCard.meanUp}"
                        </p>
                    </div>

                    <button
                        onClick={startReading}
                        className="px-8 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors flex items-center gap-2 mx-auto"
                    >
                        <Repeat size={18} /> {language === 'en' ? 'Read Again' : 'Xem lại'}
                    </button>
                </div>
            )}

        </div>
    );
};
