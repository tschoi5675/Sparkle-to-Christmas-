
import React, { useState } from 'react';
import { getFestiveContent } from '../services/geminiService';

const GeminiMagic: React.FC = () => {
  const [message, setMessage] = useState<string>("Click for a daily dose of Christmas magic... ✨");
  const [loading, setLoading] = useState(false);

  const fetchMagic = async (type: string) => {
    setLoading(true);
    const result = await getFestiveContent(type);
    setMessage(result);
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto w-full px-4">
      <div className="glass p-8 rounded-3xl shadow-xl text-center border border-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <span className="text-6xl">🎄</span>
        </div>
        
        <h3 className="font-dancing text-3xl text-pink-500 mb-6">Festive Magic</h3>
        
        <div className="min-h-[80px] flex items-center justify-center italic text-pink-700 font-medium">
          {loading ? (
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          ) : (
            <p className="text-lg leading-relaxed">{message}</p>
          )}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => fetchMagic('Christmas wish')}
            disabled={loading}
            className="px-6 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-pink-200/50 disabled:opacity-50"
          >
            Get a Wish ✨
          </button>
          <button 
            onClick={() => fetchMagic('Holiday styling tip')}
            disabled={loading}
            className="px-6 py-2 bg-white text-pink-400 border border-pink-200 hover:bg-pink-50 rounded-full text-sm font-semibold transition-all shadow-md disabled:opacity-50"
          >
            Aesthetic Tip 🎀
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiMagic;
