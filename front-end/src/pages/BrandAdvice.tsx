import React, { useState, useEffect } from 'react';
import { Sparkles, Briefcase, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BrandAdviceProps {
    onBack: () => void;
    onTarotSelect: () => void;
}

interface FlipCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    suit: 'hearts' | 'spades' | 'diamonds' | 'clubs';
    color: 'red' | 'black';
    value: string;
    glowColor?: 'yellow' | 'green' | 'purple' | 'blue';
    bgColor?: 'white' | 'black';
    onEnter: () => void;
}

const FlipCard: React.FC<FlipCardProps> = ({ title, description, icon, suit, color, value, glowColor = 'yellow', bgColor = 'white', onEnter }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const getGlowStyles = () => {
        switch (glowColor) {
            case 'green':
                return {
                    border: 'border-green-400',
                    shadow: 'shadow-[0_0_30px_rgba(74,222,128,0.4)]',
                    iconBg: 'bg-green-100',
                    iconColor: 'text-green-600'
                };
            case 'purple':
                return {
                    border: 'border-purple-400',
                    shadow: 'shadow-[0_0_30px_rgba(192,132,252,0.4)]',
                    iconBg: 'bg-purple-100',
                    iconColor: 'text-purple-600'
                };
            case 'blue':
                return {
                    border: 'border-blue-300',
                    shadow: 'shadow-[0_0_30px_rgba(147,197,253,0.4)]',
                    iconBg: 'bg-blue-100',
                    iconColor: 'text-blue-500'
                };
            default: // yellow
                return {
                    border: 'border-yellow-400',
                    shadow: 'shadow-[0_0_30px_rgba(250,204,21,0.2)]',
                    iconBg: 'bg-yellow-100',
                    iconColor: 'text-yellow-600'
                };
        }
    };

    const glow = getGlowStyles();

    return (
        <div
            className="group perspective w-full h-96 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`relative preserve-3d w-full h-full transition-all duration-700 ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front of Card */}
                <div className={`absolute backface-hidden w-full h-full ${bgColor === 'black' ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'} rounded-2xl border-2 shadow-xl flex flex-col justify-between p-6`}>
                    <div className={`text-4xl font-serif ${color === 'red' ? 'text-red-500' : (bgColor === 'black' ? 'text-white' : 'text-slate-900')}`}>
                        {value}
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <div className={`text-6xl ${color === 'red' ? 'text-red-500' : (bgColor === 'black' ? 'text-white' : 'text-slate-900')}`}>
                            {suit === 'hearts' && '♥'}
                            {suit === 'spades' && '♠'}
                            {suit === 'diamonds' && '♦'}
                            {suit === 'clubs' && '♣'}
                        </div>
                    </div>

                    <div className={`text-4xl font-serif transform rotate-180 ${color === 'red' ? 'text-red-500' : (bgColor === 'black' ? 'text-white' : 'text-slate-900')}`}>
                        {value}
                    </div>

                    {/* Decorative pattern overlay */}
                    <div className={`absolute inset-4 border-2 border-dashed ${bgColor === 'black' ? 'border-slate-800' : 'border-slate-100'} rounded-xl pointer-events-none`} />
                </div>

                {/* Back of Card */}
                <div className={`absolute backface-hidden rotate-y-180 w-full h-full bg-white rounded-2xl border-2 ${glow.border} ${glow.shadow} p-8 flex flex-col items-center justify-center text-center`}>
                    <div className={`w-16 h-16 ${glow.iconBg} rounded-full flex items-center justify-center mb-6 ${glow.iconColor}`}>
                        {icon}
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
                    <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                        {description}
                    </p>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onEnter();
                        }}
                        className="flex items-center gap-2 text-pink-500 font-bold uppercase text-sm tracking-wider hover:gap-4 transition-all"
                    >
                        Enter <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

type Suit = 'hearts' | 'spades' | 'diamonds' | 'clubs';
type Color = 'red' | 'black';

interface CardConfig {
    suit: Suit;
    color: Color;
    bgColor: 'white' | 'black';
}

export const BrandAdvice: React.FC<BrandAdviceProps> = ({ onBack, onTarotSelect }) => {
    const { t } = useLanguage();
    const [randomCards, setRandomCards] = useState<CardConfig[]>([
        { suit: 'spades', color: 'black', bgColor: 'white' },
        { suit: 'diamonds', color: 'red', bgColor: 'white' },
        { suit: 'clubs', color: 'black', bgColor: 'white' }
    ]);

    useEffect(() => {
        const suits: Suit[] = ['hearts', 'spades', 'diamonds', 'clubs'];
        const getSuitColor = (s: Suit): Color => (s === 'hearts' || s === 'diamonds') ? 'red' : 'black';

        // Shuffle suits to ensure uniqueness
        const shuffledSuits = [...suits].sort(() => Math.random() - 0.5);

        const newCards = [0, 1, 2].map((index) => {
            const randomSuit = shuffledSuits[index];
            const color = getSuitColor(randomSuit);
            const bgColor = Math.random() > 0.5 ? 'black' : 'white';

            return {
                suit: randomSuit,
                color: color,
                bgColor: bgColor
            };
        });

        setRandomCards(newCards);
    }, []);
    return (
        <div className="flex flex-col gap-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-4">
                <h2 className="text-3xl font-black text-slate-800 tracking-tight">{t('advice.title')}</h2>
            </div>

            <p className="text-lg text-slate-600 max-w-2xl">
                {t('advice.subtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <FlipCard
                    title={t('advice.card1Title')}
                    description={t('advice.card1Desc')}
                    icon={<Sparkles size={32} />}
                    suit={randomCards[0].suit}
                    color={randomCards[0].color}
                    value="J"
                    glowColor="blue"
                    bgColor={randomCards[0].bgColor}
                    onEnter={onTarotSelect}
                />
                <FlipCard
                    title={t('advice.card2Title')}
                    description={t('advice.card2Desc')}
                    icon={<Briefcase size={32} />}
                    suit={randomCards[1].suit}
                    color={randomCards[1].color}
                    value="Q"
                    glowColor="green"
                    bgColor={randomCards[1].bgColor}
                    onEnter={onTarotSelect}
                />
                <FlipCard
                    title={t('advice.card3Title')}
                    description={t('advice.card3Desc')}
                    icon={<Star size={32} />}
                    suit={randomCards[2].suit}
                    color={randomCards[2].color}
                    value="K"
                    glowColor="purple"
                    bgColor={randomCards[2].bgColor}
                    onEnter={onTarotSelect}
                />
            </div>

            <style>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
        </div>
    );
};
