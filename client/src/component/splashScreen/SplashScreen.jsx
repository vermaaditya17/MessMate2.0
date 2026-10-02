import React, { useState, useEffect } from 'react';

export default function SplashScreen({ onFinish }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    setIsLoaded(true);

    // Timer to transition to the next page after 3 seconds
    const timer = setTimeout(() => {
      if (onFinish) {
        onFinish(); 
      }
    }, 4000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen w-full bg-[#ea580c] overflow-hidden font-sans">
      
      {/* Animated Background Gradient/Wave Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden flex items-center justify-center">
        <div className={`absolute w-[150vw] h-[150vw] rounded-full border-[1px] border-white/10 transition-all duration-1000 ease-out ${isLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'} animate-[spin_60s_linear_infinite]`}></div>
        <div className={`absolute w-[100vw] h-[100vw] rounded-full border-[40px] border-white/10 transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}></div>
        <div className={`absolute w-[50vw] h-[50vw] rounded-full border-[60px] border-white/10 transition-all duration-1000 delay-500 ease-out ${isLoaded ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}></div>
      </div>

      {/* Top Spacer */}
      <div className="flex-1"></div>

      {/* Center Content: Logo & Branding */}
      <div 
        className={`z-10 flex flex-col items-center justify-center transition-all duration-1000 ease-out transform ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'
        }`}
      >
        {/* Animated Logo Container */}
        <div className="relative mb-6 group">
          {/* Pulsing ring behind logo */}
          <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
          
          <div className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-transform duration-500 hover:scale-105">
            {/* Custom SVG replicating the brackets and cutlery */}
            <svg 
              className="w-12 h-12 text-[#ea580c]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              {/* Corner brackets */}
              <path d="M6 4H4v2M18 4h2v2M6 20H4v-2M18 20h2v-2" strokeWidth="2" strokeLinecap="square" />
              {/* Fork */}
              <path d="M9 16V8m-2 4V8m4 4V8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 12a2 2 0 004 0" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Knife/Spoon Element */}
              <path d="M15 8v8M15 8c0-2 2-3 2-3v11" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Text Details */}
        <h1 className="text-4xl font-bold text-white tracking-wide mb-2">
          MessMate
        </h1>
        <p className="text-white/90 font-medium text-sm tracking-wider">
          Smart Mess Management
        </p>
      </div>

      {/* Bottom Content: Footer info */}
      <div 
        className={`z-10 flex-1 flex flex-col justify-end items-center pb-8 transition-all duration-1000 delay-700 ease-out transform ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-white/80 text-xs font-light mb-1.5 tracking-wide">
          Made for hostels & colleges across India
        </p>
        <p className="text-white/60 text-[10px] font-mono tracking-widest">
          v1.0.0
        </p>
      </div>
      
    </div>
  );
}