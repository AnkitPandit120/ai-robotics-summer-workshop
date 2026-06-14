import React from 'react';

const LearningOutcomes: React.FC = () => {
  const outcomes = [
    {
      title: 'Foundations of Coding',
      description: 'Learn fundamental programming logic, variables, and loops using virtual simulation tools.',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      bg: 'bg-blue-50',
      border: 'hover:border-blue-200'
    },
    {
      title: 'Robotics Engineering',
      description: 'Understand how motors, gears, and sensors connect and interact to bring a machine to life.',
      icon: (
        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      bg: 'bg-orange-50',
      border: 'hover:border-orange-200'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Discover how computers see images, process speech, and make smart decisions using simple AI models.',
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      bg: 'bg-purple-50',
      border: 'hover:border-purple-200'
    },
    {
      title: 'Building Smart Systems',
      description: 'Program automation tasks like obstacle-avoiding cars, smart alarms, and traffic light control.',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      bg: 'bg-emerald-50',
      border: 'hover:border-emerald-200'
    },
    {
      title: 'Problem Solving & Logic',
      description: 'Develop algorithmic thinking and debugging skills to diagnose and fix errors systematically.',
      icon: (
        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      ),
      bg: 'bg-pink-50',
      border: 'hover:border-pink-200'
    }
  ];

  const tags = [
    { name: 'coding', color: 'text-blue-600 bg-blue-50 border-blue-100 hover:bg-blue-100' },
    { name: 'robotics', color: 'text-orange-600 bg-orange-50 border-orange-100 hover:bg-orange-100' },
    { name: 'ai', color: 'text-purple-600 bg-purple-50 border-purple-100 hover:bg-purple-100' },
    { name: 'stem', color: 'text-pink-600 bg-pink-50 border-pink-100 hover:bg-pink-100' },
    { name: 'kidstech', color: 'text-emerald-600 bg-emerald-50 border-emerald-100 hover:bg-emerald-100' },
    { name: 'summercamp', color: 'text-yellow-700 bg-yellow-50 border-yellow-100 hover:bg-yellow-100' }
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8 space-y-8">
      <div className="flex items-center gap-3">
        <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
        <h2 className="text-2xl font-black text-slate-800 tracking-tight">What you'll learn</h2>
      </div>

      <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
        This hands-on workshop introduces kids ages 8–14 to the wonders of software engineering and robot design. 
        Through interactive online simulations, they will build a strong technical foundation without requiring expensive physical kits.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {outcomes.map((outcome, idx) => (
          <div 
            key={idx} 
            className={`flex gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-all duration-300 hover:shadow-md ${outcome.border} group ${
              idx === outcomes.length - 1 ? 'md:col-span-2' : ''
            }`}
          >
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${outcome.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
              {outcome.icon}
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-800 flex items-center gap-2">
                <span>{outcome.title}</span>
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed font-medium">
                {outcome.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-slate-100">
        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
          Topics Covered
        </h4>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag.name} 
              className={`text-xs font-bold px-3.5 py-2 rounded-xl border transition-all cursor-pointer ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningOutcomes;
