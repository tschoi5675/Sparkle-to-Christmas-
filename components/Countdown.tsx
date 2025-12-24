
import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const currentYear = now.getFullYear();
    let christmas = new Date(currentYear, 11, 25); // Month is 0-indexed, so 11 is Dec

    if (now > christmas) {
      christmas = new Date(currentYear + 1, 11, 25);
    }

    const difference = +christmas - +now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center justify-center p-4 md:p-6 glass rounded-2xl md:rounded-3xl shadow-lg border border-pink-100 min-w-[80px] md:min-w-[120px] transition-transform hover:scale-105 duration-300">
      <span className="text-4xl md:text-6xl font-playfair font-bold text-pink-400 text-glow">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs uppercase tracking-widest text-pink-300 mt-2 font-semibold">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12 mb-12">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;
