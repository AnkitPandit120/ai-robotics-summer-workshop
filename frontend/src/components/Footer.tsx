import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white mt-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div>
            <span className="text-3xl font-black tracking-tight select-none">
              <span className="text-red-500">K</span>
              <span className="text-blue-500">i</span>
              <span className="text-purple-500">d</span>
              <span className="text-orange-500">r</span>
              <span className="text-yellow-500">o</span>
              <span className="text-green-500">v</span>
              <span className="text-pink-500">e</span>
            </span>
            <p className="text-slate-400 text-xs mt-2 font-medium">
              Empowering children through interactive workshops, camps, and courses.
            </p>
          </div>

          {/* Social links & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-3 text-slate-400 text-sm">
            <div className="flex gap-4 font-medium">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
            <div className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Kidrove. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
