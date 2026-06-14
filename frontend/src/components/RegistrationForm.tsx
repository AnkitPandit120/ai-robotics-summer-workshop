import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error status on input change to make form user-friendly
    if (status.type === 'error') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Name is required.' });
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setStatus({ type: 'error', message: 'Please enter a valid 10-digit phone number.' });
      return;
    }

    setStatus({ type: 'loading', message: 'Submitting...' });

    try {
      const response = await fetch('http://localhost:5001/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: 'Enquiry submitted successfully!'
        });
        setFormData({ name: '', email: '', phone: '' });
        setShowSuccessModal(true);
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: 'error',
        message: 'Could not connect to the server. Please try again later.'
      });
    }
  };

  return (
    <div id="registration-form" className="space-y-6">
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6 md:p-8 relative">
        <h3 className="text-xl font-black text-slate-800 border-b border-slate-100 pb-4 mb-5 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
            ⚡
          </div>
          <span>Book This Workshop</span>
        </h3>

        <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl mb-6 border border-slate-100">
          <span className="text-slate-500 font-extrabold text-sm">Registration Fee</span>
          <div className="text-right">
            <span className="text-2xl font-black text-slate-800">₹2,999</span>
            <span className="text-slate-400 text-[10px] block font-extrabold uppercase tracking-wider">all-inclusive</span>
          </div>
        </div>

        {status.type === 'error' && (
          <div className="bg-red-50 text-red-700 p-4 rounded-2xl text-xs sm:text-sm font-semibold border border-red-100 mb-5 flex items-start gap-2 animate-pulse">
            <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>{status.message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
              Parent/Student Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter full name"
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800 font-bold transition-all bg-slate-50/50 focus:bg-white"
                disabled={status.type === 'loading'}
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@example.com"
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800 font-bold transition-all bg-slate-50/50 focus:bg-white"
                disabled={status.type === 'loading'}
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="10-digit number"
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800 font-bold transition-all bg-slate-50/50 focus:bg-white"
                disabled={status.type === 'loading'}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3.5 rounded-2xl text-sm transition-all duration-300 shadow-md hover:shadow-orange-500/10 disabled:bg-slate-300 disabled:cursor-not-allowed mt-2 active:scale-98 cursor-pointer flex justify-center items-center gap-2"
            disabled={status.type === 'loading'}
          >
            {status.type === 'loading' ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <span>Submit Enquiry</span>
            )}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 flex flex-col gap-4">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2.5">
          Event Organizer
        </h3>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-black text-sm shadow-sm select-none">
            KD
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-slate-800">Kidrove Team</h4>
            <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Professional Event Organizer</p>
          </div>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed font-medium">
          Specializing in creative, high-quality coding, robotics, and STEM courses for kids.
        </p>
      </div>

      {/* Success Modal Overlay */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop blur */}
          <div 
            onClick={() => setShowSuccessModal(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm modal-overlay"
          ></div>
          
          {/* Modal Card */}
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative border border-slate-100 text-center space-y-5 z-10 modal-content">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto text-3xl shadow-inner animate-bounce">
              ✓
            </div>
            
            <div className="space-y-2">
              <h4 className="text-2xl font-black text-slate-900 leading-none">Enquiry Submitted!</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                Thank you for your interest! Our team will contact you shortly via email/phone to complete your child's booking.
              </p>
            </div>

            <button 
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3.5 rounded-2xl text-sm transition-colors active:scale-98 shadow-md"
            >
              Great, thank you!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
