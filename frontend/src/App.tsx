import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Details from './components/Details';
import LearningOutcomes from './components/LearningOutcomes';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Banner Section */}
      <Hero />

      {/* Key Details Horizontal Bar */}
      <Details />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow">
        {/* Two-column layout for details + registration form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Main Column: outcomes, about details, and FAQs */}
          <div className="lg:col-span-2 space-y-8">
            <LearningOutcomes />
            <FAQ />
          </div>

          {/* Right Sidebar: booking/registration form & organizer info */}
          <div className="space-y-6">
            <RegistrationForm />
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
