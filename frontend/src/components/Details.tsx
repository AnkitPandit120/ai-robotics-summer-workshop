import React from 'react';

const Details: React.FC = () => {
  const detailsList = [
    {
      id: 'date',
      label: 'START DATE',
      value: '15 July 2026',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      bg: 'bg-blue-50',
      border: 'hover:border-blue-300 hover:shadow-blue-500/10'
    },
    {
      id: 'duration',
      label: 'DURATION',
      value: '4 Weeks',
      icon: (
        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bg: 'bg-orange-50',
      border: 'hover:border-orange-300 hover:shadow-orange-500/10'
    },
    {
      id: 'age',
      label: 'AGE GROUP',
      value: '8–14 Years',
      icon: (
        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bg: 'bg-pink-50',
      border: 'hover:border-pink-300 hover:shadow-pink-500/10'
    },
    {
      id: 'mode',
      label: 'TEACHING MODE',
      value: 'Online (Zoom)',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      bg: 'bg-emerald-50',
      border: 'hover:border-emerald-300 hover:shadow-emerald-500/10'
    },
    {
      id: 'fee',
      label: 'COURSE FEE',
      value: '₹2,999',
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bg: 'bg-purple-50',
      border: 'hover:border-purple-300 hover:shadow-purple-500/10'
    }
  ];

  return (
    <section className="bg-slate-50 py-4 -mt-6 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {detailsList.map((detail) => (
            <div 
              key={detail.id} 
              className={`bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${detail.border}`}
            >
              <div className={`p-3 rounded-2xl ${detail.bg} mb-3 transition-transform duration-300`}>
                {detail.icon}
              </div>
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                {detail.label}
              </span>
              <span className="text-sm sm:text-base font-extrabold text-slate-800 mt-1 select-none">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;
