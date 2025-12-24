
import React from 'react';
import Countdown from './components/Countdown';
import Snowfall from './components/Snowfall';
import GeminiMagic from './components/GeminiMagic';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden selection:bg-pink-200 selection:text-pink-900">
      {/* Background with soft feminine gradients */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_#fff5f7_0%,_#ffe4e9_50%,_#f8edeb_100%)]"></div>
      
      <Snowfall />

      <main className="z-10 w-full max-w-4xl mx-auto text-center space-y-12 py-12">
        <header className="space-y-4 animate-float">
          <div className="flex items-center justify-center gap-3 mb-2">
             <span className="text-3xl">🎀</span>
             <div className="h-[1px] w-12 bg-pink-300"></div>
             <span className="text-3xl">🎀</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-playfair font-black text-pink-400 tracking-tight leading-tight">
            Sparkle <br/> 
            <span className="text-pink-300/80 font-dancing text-4xl md:text-7xl block mt-2">to Christmas</span>
          </h1>
          <p className="text-pink-400/70 font-medium tracking-[0.2em] uppercase text-xs md:text-sm">
            Counting down in rose gold and magic
          </p>
        </header>

        <section>
          <Countdown />
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-forwards opacity-0">
          <GeminiMagic />
        </section>

        <footer className="pt-12 pb-6">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4 text-2xl">
              <span className="hover:scale-110 transition-transform cursor-default">⛸️</span>
              <span className="hover:scale-110 transition-transform cursor-default">🦢</span>
              <span className="hover:scale-110 transition-transform cursor-default">🕯️</span>
              <span className="hover:scale-110 transition-transform cursor-default">🍪</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-pink-300 text-[10px] tracking-widest uppercase font-semibold">
                Made with ✨ & Love
              </p>
              <a 
                href="https://github.com/tschoi5675" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-400/60 hover:text-pink-400 text-[9px] tracking-[0.3em] uppercase transition-colors duration-300 border-b border-transparent hover:border-pink-300/50 pb-0.5"
              >
                github.com/tschoi5675
              </a>
            </div>
          </div>
        </footer>
      </main>
      
      {/* Subtle snowflake accents */}
      <div className="fixed top-1/4 right-10 hidden lg:block opacity-20 pointer-events-none animate-soft-drift" style={{ animationDuration: '20s' }}>
        <span className="text-4xl text-pink-300">❄️</span>
      </div>
      <div className="fixed bottom-1/4 left-10 hidden lg:block opacity-20 pointer-events-none animate-soft-drift" style={{ animationDuration: '18s', animationDelay: '-5s' }}>
        <span className="text-4xl text-pink-300">❄️</span>
      </div>
    </div>
  );
};

export default App;
