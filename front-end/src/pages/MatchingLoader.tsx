
import React, { useEffect, useState } from 'react';
import { Heart, Search, Stars } from 'lucide-react';

export const MatchingLoader: React.FC = () => {
  const [text, setText] = useState("Consulting the stars...");
  const messages = [
    "Consulting the stars...",
    "Analyzing your whimsy levels...",
    "Brewing digital attraction tea...",
    "Scouring the multiverse...",
    "Almost there, don't blink!",
    "Synchronizing heartbeats..."
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % messages.length;
      setText(messages[i]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-12 space-y-12 animate-pulse">
      <div className="relative">
        <div className="w-48 h-48 rounded-full border-4 border-dashed border-pink-400 animate-spin flex items-center justify-center" style={{ animationDuration: '8s' }}>
          <Stars size={64} className="text-yellow-400" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Heart size={48} className="text-pink-500 float" />
        </div>
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-800">{text}</h2>
        <div className="flex gap-2 justify-center">
           {[...Array(3)].map((_, i) => (
             <div key={i} className={`w-3 h-3 bg-pink-400 rounded-full animate-bounce`} style={{ animationDelay: `${i * 0.2}s` }} />
           ))}
        </div>
        <p className="text-slate-400 max-w-xs mx-auto text-sm italic">
          Finding the perfect soulmate takes a little magic. Please stay with us!
        </p>
      </div>
    </div>
  );
};
