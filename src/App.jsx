import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/masterclass" element={<LandingPage />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                NuclearVirality
              </h3>
              <p className="text-gray-500 text-sm">
                EliteMasterViralEngineer
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="/case-studies" className="hover:text-purple-400 transition-colors">Case Studies</a></li>
                <li><a href="/testimonials" className="hover:text-purple-400 transition-colors">Testimonials</a></li>
                <li><a href="/faq" className="hover:text-purple-400 transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/masterclass" className="hover:text-purple-400 transition-colors">Meta Ads Masterclass</a></li>
                <li><a href="/" className="hover:text-purple-400 transition-colors">Strategy Call</a></li>
                <li><a href="/case-studies" className="hover:text-purple-400 transition-colors">Success Stories</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4 text-white">Get Started</h4>
              <p className="text-sm text-gray-400 mb-4">
                Ready to scale with Meta Ads?
              </p>
              <a
                href="https://calendly.com/medbenomar/15min"
                className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Book Strategy Call.
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-purple-500/20 pt-8 text-center text-sm text-gray-600">
            <p className="mb-2">We install tracking → define your goal → provide creative → Meta's AI finds buyers → we analyze & improve weekly</p>
            <p>© 2026 NuclearVirality. Your key to scaling efficiently.</p>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
