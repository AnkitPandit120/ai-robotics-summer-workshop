import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formElement = document.getElementById('registration-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/40' 
        : 'bg-white py-4 border-b border-slate-100'
    }`}>
      {/* Top Bar - hides on scroll to maximize viewport real estate */}
      <div className={`bg-blue-600 text-white transition-all duration-300 overflow-hidden flex justify-center items-center gap-4 text-xs font-semibold tracking-wide ${
        scrolled ? 'h-0 opacity-0' : 'h-8 py-1.5'
      } hidden md:flex`}>
        <span>Follow us:</span>
        <a href="#" className="hover:text-blue-200 transition-colors">Facebook</a>
        <a href="#" className="hover:text-blue-200 transition-colors">Twitter</a>
        <a href="#" className="hover:text-blue-200 transition-colors">Instagram</a>
        <a href="#" className="hover:text-blue-200 transition-colors">YouTube</a>
        <a href="#" className="hover:text-blue-200 transition-colors">LinkedIn</a>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex-shrink-0 flex items-center">
          <a href="#" className="text-3xl font-black tracking-tight select-none flex items-center gap-1">
            <span className="text-red-500 hover:scale-110 transition-transform inline-block">K</span>
            <span className="text-blue-500 hover:scale-110 transition-transform inline-block">i</span>
            <span className="text-purple-500 hover:scale-110 transition-transform inline-block">d</span>
            <span className="text-orange-500 hover:scale-110 transition-transform inline-block">r</span>
            <span className="text-yellow-500 hover:scale-110 transition-transform inline-block">o</span>
            <span className="text-green-500 hover:scale-110 transition-transform inline-block">v</span>
            <span className="text-pink-500 hover:scale-110 transition-transform inline-block">e</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-bold text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">Find Activities</a>
          <a href="#" className="hover:text-blue-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">Blog</a>
          <a href="#" className="hover:text-blue-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">Kidrove Go</a>
          <a href="#faq" className="hover:text-blue-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">FAQ</a>
          <a href="#registration-form" onClick={handleScrollToForm} className="bg-orange-100/60 text-orange-600 hover:bg-orange-500 hover:text-white px-4 py-1.5 rounded-full transition-all">Book Now</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="text-slate-500 hover:text-blue-600 p-2 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="text-slate-500 hover:text-pink-600 p-2 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className="bg-blue-600 text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-md hover:shadow-blue-500/20 active:scale-95 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Login</span>
          </button>
        </div>

        <div className="flex md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-600 hover:text-blue-600 focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-4 space-y-3 font-semibold text-slate-700 absolute top-full left-0 w-full shadow-lg">
          <a href="#" className="block hover:text-blue-600 py-1" onClick={() => setMobileMenuOpen(false)}>Find Activities</a>
          <a href="#" className="block hover:text-blue-600 py-1" onClick={() => setMobileMenuOpen(false)}>Blog</a>
          <a href="#" className="block hover:text-blue-600 py-1" onClick={() => setMobileMenuOpen(false)}>Kidrove Go</a>
          <a href="#faq" className="block hover:text-blue-600 py-1" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <a href="#registration-form" onClick={handleScrollToForm} className="block text-orange-600 bg-orange-50 px-3 py-2 rounded-xl text-center">Book Now</a>
          <hr className="border-slate-100" />
          <button className="bg-blue-600 text-white font-bold w-full py-2.5 rounded-xl text-sm hover:bg-blue-700">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
