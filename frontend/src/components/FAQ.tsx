import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: 'Do we need to buy any physical robotics kits or hardware?',
      answer: 'No physical hardware is required! We use state-of-the-art visual simulators where kids can design, wire, and program virtual robots. This makes learning completely safe, accessible, and cost-effective.'
    },
    {
      question: 'How are the online classes conducted?',
      answer: 'Classes are conducted live over Zoom. Each batch has a small size (under 10 students) to ensure personal attention. Kids can ask questions in real-time, share their screens for troubleshooting, and collaborate.'
    },
    {
      question: 'What happens if a class is missed?',
      answer: 'All sessions are recorded. If a student misses a class, they can access the HD recording and step-by-step homework sheets on the student portal. Instructors also offer a short doubt-clearing session before the next class.'
    },
    {
      question: 'Is there any prior programming experience required?',
      answer: 'Not at all! This workshop is designed specifically for beginners. We start with fundamental logical concepts using visual block-based coding and transition gradually into basic syntax.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
        <h2 className="text-2xl font-black text-slate-800 tracking-tight">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen ? 'border-blue-200 shadow-sm' : 'border-slate-100'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                className={`w-full text-left px-6 py-4 flex justify-between items-center transition-all focus:outline-none cursor-pointer ${
                  isOpen ? 'bg-blue-50/40 text-blue-600' : 'bg-slate-50 hover:bg-slate-100/60 text-slate-700'
                }`}
              >
                <span className="font-extrabold text-sm md:text-base leading-snug">
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 ${
                  isOpen ? 'rotate-185 text-blue-600' : 'text-slate-400'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              {/* Smooth CSS Grid transition container */}
              <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <div className="accordion-inner">
                  <div className="px-6 py-4 bg-white text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-100 font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
