import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TAROT_DECK, TarotCard } from '../data/tarotData';
import { Sparkles, Repeat, Layers, X, ArrowUp } from 'lucide-react';

interface TarotScreenProps {
    onBack: () => void;
}

type SpreadType = 'single' | 'three' | 'five' | 'celtic';

interface SpreadConfig {
    id: SpreadType;
    nameEn: string;
    nameVi: string;
    count: number;
    labelsEn: string[];
    labelsVi: string[];
}

const SPREADS: Record<SpreadType, SpreadConfig> = {
    single: {
        id: 'single',
        nameEn: 'Daily Card',
        nameVi: 'Lá Bài Ngày',
        count: 1,
        labelsEn: ['Guidance'],
        labelsVi: ['Lời Khuyên']
    },
    three: {
        id: 'three',
        nameEn: 'Three-Card Spread',
        nameVi: 'Trải Bài 3 Lá',
        count: 3,
        labelsEn: ['Past', 'Present', 'Future'],
        labelsVi: ['Quá Khứ', 'Hiện Tại', 'Tương Lai']
    },
    five: {
        id: 'five',
        nameEn: 'In-Depth Spread',
        nameVi: 'Trải Bài Chuyên Sâu',
        count: 5,
        labelsEn: ['Situation', 'Challenge', 'Advice', 'Outcome', 'Theme'],
        labelsVi: ['Hoàn Cảnh', 'Thử Thách', 'Lời Khuyên', 'Kết Quả', 'Chủ Đề']
    },
    celtic: {
        id: 'celtic',
        nameEn: 'Celtic Cross',
        nameVi: 'Trải Bài Celtic Cross',
        count: 10,
        labelsEn: ['Present', 'Challenge', 'Past', 'Future', 'Conscious', 'Subconscious', 'Advice', 'External', 'Hopes/Fears', 'Outcome'],
        labelsVi: ['Hiện Tại', 'Thử Thách', 'Quá Khứ', 'Tương Lai', 'Ý Thức', 'Tiềm Thức', 'Lời Khuyên', 'Tác Động', 'Hy Vọng/Sợ Hãi', 'Kết Quả']
    }
};

export const TarotScreen: React.FC<TarotScreenProps> = ({ onBack }) => {
    const { t, language } = useLanguage();

    // States
    const [mode, setMode] = useState<SpreadType>('single');
    const [isShuffling, setIsShuffling] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [drawnCards, setDrawnCards] = useState<TarotCard[]>([]);
    const [showModal, setShowModal] = useState(false);

    const startReading = (selectedMode: SpreadType) => {
        if (isShuffling) return;

        setMode(selectedMode);
        setIsShuffling(true);
        setShowResult(false);
        setDrawnCards([]);
        setShowModal(false);

        const count = SPREADS[selectedMode].count;

        // Simulate shuffling time
        setTimeout(() => {
            const newCards: TarotCard[] = [];
            const usedIndices = new Set<number>();

            while (newCards.length < count) {
                const idx = Math.floor(Math.random() * TAROT_DECK.length);
                if (!usedIndices.has(idx)) {
                    usedIndices.add(idx);
                    newCards.push(TAROT_DECK[idx]);
                }
            }

            setDrawnCards(newCards);
            setIsShuffling(false);
            setShowResult(true);
        }, 3000);
    };

    // Helper to render a card in the GRID layout (Image + Meaning Below)
    const renderGridCard = (card: TarotCard, index: number, label: string) => {
        return (
            <div
                key={card.id + "-" + index}
                className="flex flex-col items-center gap-6 animate-in slide-in-from-bottom-12 fade-in duration-1000 fill-mode-backwards w-full"
                style={{ animationDelay: `${index * 200}ms` }}
            >
                {/* Header / Label */}
                <div className="bg-slate-800 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest shadow-md">
                    <span className="text-yellow-400 mr-2">#{index + 1}</span>
                    {label}
                </div>

                {/* Card Image */}
                <div className="w-64 h-96 bg-slate-900 rounded-xl border-[3px] border-white shadow-lg overflow-hidden relative group hover:scale-[1.02] transition-transform duration-300">
                    <img src={card.image} alt={card.name} className="w-full h-full object-cover" />

                    {/* Name Tag overlay */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-200 shadow-sm text-center">
                        <h3 className="font-['Patrick_Hand'] font-bold text-slate-900 text-base uppercase tracking-widest line-clamp-1">
                            {language === 'en' ? card.name : card.nameVi}
                        </h3>
                    </div>
                </div>

                {/* Meaning Box */}
                <div className="w-full max-w-sm sketch-border p-6 bg-white relative flex items-center justify-center text-center min-h-[160px]">
                    <p className="text-slate-700 font-medium font-['Patrick_Hand'] leading-relaxed text-lg">
                        {language === 'en' ? card.meanUpEn : card.meanUp}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[600px] relative animate-in fade-in duration-700 pb-20 px-4">

            {/* Header / Instructions */}
            <div className="text-center space-y-4 mb-8 mt-8">
                <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight">
                    {mode === 'single' && (language === 'en' ? 'Tarot Reading' : 'Bói Bài Tarot')}
                    {mode === 'three' && (language === 'en' ? 'Three-Card Spread' : 'Trải Bài 3 Lá')}
                    {mode === 'five' && (language === 'en' ? 'In-Depth Spread' : 'Trải Bài Chuyên Sâu')}
                    {mode === 'celtic' && (language === 'en' ? 'Celtic Cross' : 'Celtic Cross')}
                </h2>
                {!showResult && (
                    <p className="text-slate-600 text-lg max-w-lg mx-auto">
                        {language === 'en'
                            ? 'Focus on your question. Let the universe guide you.'
                            : 'Hãy tập trung vào câu hỏi của bạn. Để vũ trụ dẫn lối.'}
                    </p>
                )}
            </div>

            {/* MAIN DISPLAY AREA */}
            <div className={`relative w-full min-h-[500px] flex flex-col items-center justify-center transition-all duration-500`}>

                {/* 1. DECK (Initial State) for Shuffling */}
                {!showResult && (
                    <div
                        className="relative w-80 h-[500px] perspective-1000 cursor-pointer group"
                        onClick={() => startReading(mode)}
                    >
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
                    </div>
                )}

                {/* 2. RESULTS Display */}
                {showResult && (
                    <div className="w-full flex flex-col items-center">

                        {/* A. SINGLE CARD LAYOUT (Original Style) */}
                        {mode === 'single' && drawnCards[0] && (
                            <>
                                {/* Large Card Display */}
                                <div className="w-80 h-[500px] animate-in zoom-in-90 duration-500 mb-12">
                                    <div className="w-full h-full bg-slate-900 rounded-2xl border-[3px] border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] overflow-hidden relative group-hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] transition-shadow">
                                        <img src={drawnCards[0].image} alt={drawnCards[0].name} className="w-full h-full object-cover" />

                                        {/* Minimal Name Tag */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-200 shadow-sm text-center">
                                            <h3 className="font-['Patrick_Hand'] font-bold text-slate-900 text-lg uppercase tracking-widest line-clamp-1">
                                                {language === 'en' ? drawnCards[0].name : drawnCards[0].nameVi}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Meaning Section (Below) */}
                                <div className="max-w-2xl text-center space-y-6 animate-in slide-in-from-bottom-8 duration-700 delay-200">
                                    <div className="sketch-border p-8 bg-white relative">
                                        <Sparkles className="absolute -top-6 -right-6 text-yellow-400 text-5xl animate-bounce" />
                                        <h3 className="text-2xl font-bold text-slate-800 mb-2">
                                            {language === 'en' ? 'The Meaning' : 'Ý Nghĩa'}
                                        </h3>
                                        <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                            "{language === 'en' ? drawnCards[0].meanUpEn : drawnCards[0].meanUp}"
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => startReading('single')}
                                        className="px-8 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors flex items-center gap-2 mx-auto"
                                    >
                                        <Repeat size={18} /> {language === 'en' ? 'Read Again' : 'Xem lại'}
                                    </button>
                                </div>
                            </>
                        )}

                        {/* B. EXTENDED GRID LAYOUTS (3, 5, 10 Cards) */}
                        {mode !== 'single' && (
                            <div className={`w-full grid gap-8 gap-y-16 justify-items-center
                                ${mode === 'three' ? 'grid-cols-1 md:grid-cols-3' : ''}
                                ${mode === 'five' ? 'grid-cols-1 md:grid-cols-3' : ''}
                                ${mode === 'celtic' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : ''}
                            `}>
                                {drawnCards.map((card, idx) => {
                                    const labels = language === 'en' ? SPREADS[mode].labelsEn : SPREADS[mode].labelsVi;
                                    return renderGridCard(card, idx, labels[idx]);
                                })}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* EXTENDED READING BUTTON & MODAL */}
            {!isShuffling && (
                <div className="w-full flex justify-center mt-12 pb-12">
                    {!showResult ? (
                        <button
                            onClick={() => setShowModal(true)}
                            className="px-10 py-4 bg-yellow-400 text-slate-900 text-xl font-black rounded-2xl sketch-button uppercase tracking-widest hover:bg-yellow-300 flex items-center gap-3 transition-transform active:scale-95"
                        >
                            <Layers size={24} />
                            {language === 'en' ? 'Extended Reading' : 'Trải Bài Nâng Cao'}
                        </button>
                    ) : (
                        mode !== 'single' && (
                            <div className="flex flex-col items-center gap-4">
                                <button
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-500 animate-bounce"
                                >
                                    <ArrowUp size={20} />
                                </button>
                                <button
                                    onClick={() => {
                                        setShowResult(false);
                                        setMode('single'); // Reset to default state
                                    }}
                                    className="px-8 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors flex items-center gap-2"
                                >
                                    <Repeat size={18} /> {language === 'en' ? 'New Reading' : 'Trải Bài Mới'}
                                </button>
                            </div>
                        )
                    )}
                </div>
            )}

            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white w-full max-w-2xl rounded-3xl p-8 relative sketch-border shadow-2xl">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors"
                        >
                            <X size={32} />
                        </button>

                        <h3 className="text-3xl font-black text-slate-800 mb-8 text-center uppercase tracking-tight">
                            {language === 'en' ? 'Choose Spread' : 'Chọn Kiểu Trải Bài'}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* 3 Cards */}
                            <button
                                onClick={() => startReading('three')}
                                className="group p-6 rounded-2xl border-4 border-slate-100 hover:border-yellow-400 hover:bg-yellow-50 transition-all text-left"
                            >
                                <div className="flex gap-1 mb-4 opacity-50 group-hover:opacity-100">
                                    <div className="w-6 h-8 bg-slate-800 rounded-sm"></div>
                                    <div className="w-6 h-8 bg-slate-800 rounded-sm"></div>
                                    <div className="w-6 h-8 bg-slate-800 rounded-sm"></div>
                                </div>
                                <h4 className="text-xl font-bold text-slate-800 mb-2">{SPREADS.three[language === 'en' ? 'nameEn' : 'nameVi']}</h4>
                                <p className="text-sm text-slate-500 font-medium">Past, Present, Future.</p>
                            </button>

                            {/* 5 Cards */}
                            <button
                                onClick={() => startReading('five')}
                                className="group p-6 rounded-2xl border-4 border-slate-100 hover:border-yellow-400 hover:bg-yellow-50 transition-all text-left"
                            >
                                <div className="flex gap-1 mb-4 opacity-50 group-hover:opacity-100 relative h-8 w-24">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-8 bg-slate-800 rounded-sm"></div>
                                    <div className="absolute top-0 left-0 w-6 h-8 bg-slate-800 rounded-sm rotate-12 origin-bottom-right"></div>
                                    <div className="absolute top-0 right-0 w-6 h-8 bg-slate-800 rounded-sm -rotate-12 origin-bottom-left"></div>
                                </div>
                                <h4 className="text-xl font-bold text-slate-800 mb-2">{SPREADS.five[language === 'en' ? 'nameEn' : 'nameVi']}</h4>
                                <p className="text-sm text-slate-500 font-medium">In-depth analysis of a situation.</p>
                            </button>

                            {/* Celtic Cross */}
                            <button
                                onClick={() => startReading('celtic')}
                                className="group p-6 rounded-2xl border-4 border-slate-100 hover:border-yellow-400 hover:bg-yellow-50 transition-all text-left md:col-span-2"
                            >
                                <div className="flex gap-1 mb-4 opacity-50 group-hover:opacity-100">
                                    <div className="w-6 h-8 bg-slate-800 rounded-sm"></div>
                                    <div className="w-6 h-8 bg-slate-800 rounded-sm rotate-90 ml-[-10px] mt-2"></div>
                                </div>
                                <h4 className="text-xl font-bold text-slate-800 mb-2">{SPREADS.celtic[language === 'en' ? 'nameEn' : 'nameVi']}</h4>
                                <p className="text-sm text-slate-500 font-medium">The most traditional and detailed spread.</p>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
