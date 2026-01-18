
import React, { useState } from 'react';
import { User, Sparkles } from 'lucide-react';
import { COLORS } from '../constants';

interface AuthScreenProps {
  onComplete: (name: string) => void;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ onComplete }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError('Please tell us your lovely name!');
      return;
    }
    onComplete(name);
  };

  return (
    <div className="sketch-border bg-white p-8 md:p-12 space-y-8 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-100 rounded-full opacity-50" />
      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-pink-100 rounded-full opacity-50" />
      
      <div className="text-center space-y-4 relative z-10">
        <div className="inline-block p-4 bg-orange-100 rounded-full mb-2 float">
          <User size={48} className="text-orange-500" />
        </div>
        <h2 className="text-4xl font-bold text-slate-800">Hello there!</h2>
        <p className="text-slate-500 text-lg">Ready to find the one who truly speaks your language?</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-600 ml-2">How should we call you?</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError('');
            }}
            placeholder="Your name here..."
            className="w-full p-4 rounded-2xl border-2 border-slate-800 focus:outline-none focus:ring-4 focus:ring-pink-100 text-xl transition-all"
          />
          {error && <p className="text-red-500 text-sm ml-2">{error}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-5 bg-[#f9d2d2] hover:bg-[#f2baba] text-slate-800 font-bold text-2xl sketch-button rounded-2xl flex items-center justify-center gap-2 group"
        >
          Begin Journey
          <Sparkles className="group-hover:rotate-12 transition-transform" />
        </button>
      </form>

      <p className="text-center text-xs text-slate-400 mt-8">
        By joining, you agree that you get exactly ONE soulmate. <br/> No refunds on destiny!
      </p>
    </div>
  );
};
