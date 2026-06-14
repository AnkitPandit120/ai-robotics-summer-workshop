import React from 'react';
import heroRobot from '../assets/hero-robot.png';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('registration-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-slate-50 py-8 md:py-16 relative overflow-hidden">
      {/* Decorative background grids/blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                🛠️ Camps-Workshops
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                💻 Live Online (Zoom)
              </span>
              <span className="bg-orange-100 text-orange-800 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                🔥 Summer 2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] select-none">
              Empower Your Child's Digital Future With <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">AI & Robotics</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              A highly engaging, hands-on 4-week workshop for kids ages <span className="text-blue-600 font-extrabold bg-blue-50 px-2 py-0.5 rounded-md">8–14</span>. Program virtual robot simulations, build automation tools, and master coding basics without expensive hardware!
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-2">
              <button 
                onClick={scrollToForm}
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-full text-base tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20 active:scale-95 cursor-pointer"
              >
                Enroll Now • ₹2,999
              </button>
              <a 
                href="#registration-form"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToForm();
                }}
                className="w-full sm:w-auto text-center border-2 border-slate-200 hover:border-blue-500 hover:text-blue-600 text-slate-700 font-bold px-8 py-3.5 rounded-full text-base transition-all"
              >
                Learn More
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-4 text-slate-500 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span>4.9/5 Parent Rating</span>
              </div>
              <div className="h-4 w-px bg-slate-200 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-emerald-700">12 Spots Left for July Batch</span>
              </div>
            </div>
          </div>

          {/* Right Image/Graphic Column */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full opacity-10 animate-pulse blur-2xl"></div>
              <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-orange-400 to-pink-500 rounded-full opacity-10 animate-pulse blur-2xl delay-75"></div>

              {/* Main Image frame */}
              <div className="relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-md border border-slate-100 p-4 shadow-2xl hover:scale-102 transition-transform duration-500">
                <img 
                  src={heroRobot} 
                  alt="AI & Robotics Summer Camp Robot"
                  className="w-full h-auto rounded-2xl select-none"
                />
              </div>

              {/* Floating glass badge 1 */}
              <div className="absolute top-8 -left-6 bg-white/90 backdrop-blur-md border border-slate-100 shadow-lg px-4 py-2.5 rounded-2xl flex items-center gap-2 hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold shadow-md">
                  🤖
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-extrabold uppercase">INTERACTIVE</span>
                  <span className="block text-xs text-slate-800 font-bold">Virtual Simulator</span>
                </div>
              </div>

              {/* Floating glass badge 2 */}
              <div className="absolute -bottom-4 -right-2 bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl px-4 py-2.5 rounded-2xl flex items-center gap-2 hover:scale-105 transition-transform">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-bold shadow-md">
                  📜
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 font-extrabold uppercase">CERTIFICATE</span>
                  <span className="block text-xs text-slate-800 font-bold">On Completion</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
