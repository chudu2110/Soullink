
import React from 'react';
import { MatchProfile } from '../../types';
import { Heart, ExternalLink, Share2, Info } from 'lucide-react';

const CelebrationDoodle = () => (
  <svg width="120" height="120" viewBox="0 0 100 100" className="opacity-20 wiggle">
    <path d="M50 20 L55 5 M50 20 L45 5 M50 20 L65 15 M50 20 L35 15" stroke="#2d3436" strokeWidth="3" strokeLinecap="round" />
    <circle cx="50" cy="50" r="10" fill="none" stroke="#2d3436" strokeWidth="3" />
    <path d="M20 50 L5 50 M20 50 L5 45 M20 50 L10 65" stroke="#2d3436" strokeWidth="3" strokeLinecap="round" />
    <path d="M80 50 L95 50 M80 50 L95 55 M80 50 L90 35" stroke="#2d3436" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const KnotDoodle = () => (
  <svg width="80" height="60" viewBox="0 0 80 60" className="opacity-15 float">
    <path d="M10 30 Q40 10 40 30 Q40 50 70 30" fill="none" stroke="#2d3436" strokeWidth="4" />
    <path d="M10 30 Q40 50 40 30 Q40 10 70 30" fill="none" stroke="#2d3436" strokeWidth="4" />
  </svg>
);

interface MatchResultProps {
  profile: MatchProfile;
}

export const MatchResult: React.FC<MatchResultProps> = ({ profile }) => {
  return (
    <div className="w-full space-y-6 animate-in zoom-in-95 fade-in duration-700 relative">
      <div className="absolute -right-24 top-20 pointer-events-none -z-10">
        <CelebrationDoodle />
      </div>
      <div className="absolute -left-24 bottom-20 pointer-events-none -z-10 hidden lg:block">
        <KnotDoodle />
      </div>

      <div className="bg-green-100 border-2 border-green-400 rounded-2xl p-4 flex items-center gap-3 relative overflow-hidden">
        <div className="bg-white p-2 rounded-full border-2 border-green-400 relative z-10">
          <Heart fill="#f43f5e" className="text-rose-500" />
        </div>
        <div className="relative z-10">
          <p className="text-green-800 font-bold">Successful Match!</p>
          <p className="text-green-700 text-sm">Your unique connection has been found.</p>
        </div>
      </div>

      <div className="sketch-border bg-white overflow-hidden relative">
        <div className="relative h-64 md:h-80 bg-slate-100 border-b-2 border-slate-800">
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full border-2 border-slate-800 flex items-center gap-2">
            <span className="font-bold text-pink-600">{profile.compatibility}%</span>
            <span className="text-xs text-slate-500 font-medium">Match Score</span>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-slate-800">{profile.name}</h2>
            <div className="h-1 w-20 bg-pink-200 rounded-full" />
          </div>

          <p className="text-slate-600 text-lg leading-relaxed bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 italic">
            "{profile.bio}"
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-between pt-6 border-t-2 border-slate-100">
            <div className="space-y-4 w-full">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                Contact Soulmate <ExternalLink size={14} />
              </h3>
              <div className="flex gap-4">
                <a
                  href={profile.socialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-100 hover:bg-blue-200 p-4 rounded-xl border-2 border-slate-800 sketch-button flex items-center justify-center gap-2 font-bold transition-colors"
                >
                  View Socials
                </a>
                <button className="p-4 bg-yellow-100 hover:bg-yellow-200 rounded-xl border-2 border-slate-800 sketch-button flex items-center justify-center transition-colors">
                  <Share2 size={24} />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center bg-slate-50 p-4 rounded-2xl border-2 border-slate-800 relative group">
              <div className="w-24 h-24 bg-white border-2 border-slate-800 flex items-center justify-center">
                <div className="grid grid-cols-4 gap-1">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className={`w-4 h-4 ${Math.random() > 0.5 ? 'bg-slate-800' : 'bg-transparent'}`} />
                  ))}
                </div>
              </div>
              <span className="text-[10px] mt-2 font-bold text-slate-500">SCAN TO LINK</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 flex gap-4 relative">
        <Info className="text-yellow-600 shrink-0" />
        <p className="text-yellow-800 text-sm">
          <strong>Important:</strong> SoulLink adheres to the Principle of Singularity. You can only be matched once per lifetime. Further matches are permanently locked to preserve the magic.
        </p>
      </div>

      <button
        className="w-full p-4 rounded-2xl border-2 border-slate-300 text-slate-400 font-bold cursor-not-allowed flex items-center justify-center gap-2"
        disabled
      >
        Match Again (Locked)
      </button>
    </div>
  );
};
