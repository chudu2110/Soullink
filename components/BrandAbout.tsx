
import React from 'react';
import { ArrowLeft, BookOpen, Coffee, Sun } from 'lucide-react';

interface BrandAboutProps {
  onBack: () => void;
}

export const BrandAbout: React.FC<BrandAboutProps> = ({ onBack }) => {
  return (
    <div className="space-y-12 animate-in slide-in-from-right-4 fade-in duration-500 max-w-3xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black text-slate-800 uppercase italic">Our Little Secret</h2>
        <div className="h-2 w-32 bg-yellow-300 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="sketch-border p-8 space-y-4 hover:bg-blue-50 transition-colors">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center border-2 border-slate-800">
            <BookOpen className="text-blue-500" />
          </div>
          <h3 className="text-2xl font-bold">The Philosophy</h3>
          <p className="text-slate-600 font-medium">
            SoulLink was born from a simple thought: quality over quantity. We believe dating should feel less like a shopping mall and more like finding a hidden treasure.
          </p>
        </div>

        <div className="sketch-border p-8 space-y-4 hover:bg-pink-50 transition-colors">
          <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center border-2 border-slate-800">
            <Sun className="text-pink-500" />
          </div>
          <h3 className="text-2xl font-bold">The Promise</h3>
          <p className="text-slate-600 font-medium">
            Once you are matched, that's it. Your profile is retired. No more games, no more noise. Just you and your match.
          </p>
        </div>
      </div>

      <div className="sketch-border p-12 bg-slate-800 text-white relative overflow-hidden group">
        <div className="relative z-10 space-y-6">
          <h3 className="text-3xl font-black">Ready to retire from swiping?</h3>
          <p className="text-slate-300 text-lg">
            Our algorithm doesn't look at height or zip codes. It looks at the texture of your dreams and the color of your ideal Sunday.
          </p>
          <button
            onClick={onBack}
            className="px-8 py-3 bg-white text-slate-800 font-black rounded-xl sketch-button uppercase relative z-20"
          >
            Take me back
          </button>
        </div>
        <Coffee size={120} className="absolute -bottom-10 -right-10 text-slate-700 opacity-50 rotate-12" />
      </div>
    </div>
  );
};
