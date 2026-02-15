import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Target, TrendingUp, Brain, Download, Calendar, CheckCircle, ChevronDown } from 'lucide-react';

export default function NuclearViralityLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownload = async (e) => {
    e.preventDefault();
    if (email) {
      // alert('Submitting email: ' + email) // Debugging alert                  
      try {
        // Call backend API to save email and send PDF
        // const response = await fetch('http://localhost:5000/api/capture-lead', {
        const formData = new FormData();
        formData.append("email", email);

        const response = await fetch('https://nuclearvirality.simodevflow.com/send.php', {
          method: "POST",
          body: formData,

          // headers: {
          //   // 'Content-Type': 'application/json',
          // "Content-Type": "application/x-www-form-urlencoded",

          // },
          // body: JSON.stringify({ email }),
          
        });
        

        const text = await response.text();
        // alert("RAW RESPONSE: " + text);     
        alert('Email submitted: ' + email) // Debugging alert
        setTimeout(() => {
            // Open booking calendar in new tab
            window.location.href = 'https://calendly.com/medbenomar/15min';
          }, 2000); 
        if (data.success) {
          setSubmitted(true);
          // Show success message and booking link
          
        } else {
          // alert('Something went wrong. Please try again.....');
        }
      } catch (error) {
        console.error('Error:', error);
        // alert('Connection error. Please try again.');
      }
    }
  };

  const sections = [
    { icon: Target, title: "The Ecosystem", desc: "Master Meta Business Manager, Ads Manager, Pixel & CAPI" },
    { icon: Brain, title: "Campaign Architecture", desc: "3-Level system: Campaign → Ad Set → Creative" },
    { icon: Zap, title: "AI Optimization", desc: "How Meta's auction system actually drives results" },
    { icon: TrendingUp, title: "2026 Strategy", desc: "Creative excellence + Broad targeting = Maximum ROI" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
      }}></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full bg-black/80 backdrop-blur-lg border-b border-purple-500/20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">NuclearVirality</span>
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
              Book Consultation
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-sm font-bold text-purple-300 tracking-wide">
                ☢️ ELITEMASTER VIRAL ENGINEER
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  META ADS
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  MASTERCLASS
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
                From Assets to Results: The Complete System Business Leaders Use to Scale Profitably in 2026
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <div className="flex items-center gap-2 text-cyan-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">12 Pages of Pure Strategy</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Zero Fluff. All Systems.</span>
                </div>
                <div className="flex items-center gap-2 text-pink-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Used by Elite Brands</span>
                </div>
              </div>
            </div>

            {/* Lead Capture Form */}
            <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {!submitted ? (
                <form onSubmit={handleDownload} className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4">Download the Complete Masterclass</h3>
                  <p className="text-gray-300 mb-6">Get instant access + free 30-min strategy call</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@company.com"
                      required
                      className="flex-1 px-6 py-4 bg-black/50 border border-purple-500/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-xl font-black text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      GET INSTANT ACCESS <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">By downloading, you agree to receive expert Meta Ads insights. Unsubscribe anytime.</p>
                </form>
              ) : (
                <div className="bg-gradient-to-br from-green-900/40 to-cyan-900/40 backdrop-blur-xl border border-green-500/30 rounded-2xl p-8 shadow-2xl">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-green-400">Download Started!</h3>
                  <p className="text-gray-300 mb-6">Check your email for the Masterclass PDF and your free consultation booking link.</p>
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-black flex items-center gap-2 mx-auto hover:scale-105 transition-transform">
                    <Calendar className="w-5 h-5" />
                    BOOK YOUR STRATEGY CALL NOW
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </div>
        </section>

        {/* What You'll Master Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              What You'll Master
            </h2>
            <p className="text-center text-gray-400 mb-16 text-lg">The exact system we use to scale brands 10x on Meta</p>

            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                  onMouseEnter={() => setActiveSection(idx)}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <section.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
                  <p className="text-gray-400">{section.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-xl border-l-4 border-red-500 rounded-2xl p-10">
              <h2 className="text-4xl font-black mb-6 text-red-400">The $100K Mistake Most Business Leaders Make</h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>✗ They "boost" posts randomly with no tracking infrastructure</p>
                <p>✗ They underfund campaigns, preventing AI from learning effectively</p>
                <p>✗ They blame Meta when the real issue is weak creative</p>
                <p>✗ They over-target, constraining the algorithm's power</p>
                <p className="text-xl font-bold text-white pt-4">The cost? Thousands in wasted ad spend. Every. Single. Month.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              The NuclearVirality 5-Step System
            </h2>
            <p className="text-gray-400 mb-12 text-lg">From chaos to cash-printing machine</p>

            <div className="grid md:grid-cols-5 gap-4 mb-12">
              {[
                { num: "01", label: "Install Tracking", desc: "Pixel + CAPI" },
                { num: "02", label: "Define Goal", desc: "Clear metrics" },
                { num: "03", label: "Provide Creative", desc: "High-impact ads" },
                { num: "04", label: "Meta AI Optimizes", desc: "Finds buyers" },
                { num: "05", label: "Weekly Analysis", desc: "Continuous gains" },
              ].map((step, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300">
                  <div className="text-4xl font-black text-purple-400 mb-2">{step.num}</div>
                  <div className="font-bold mb-1">{step.label}</div>
                  <div className="text-sm text-gray-400">{step.desc}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-10">
              <h3 className="text-3xl font-bold mb-4">This Isn't Theory. This Is Execution.</h3>
              <p className="text-gray-300 text-lg mb-6">
                Every week, we install tracking, optimize creative, analyze data, and scale what works. 
                No guessing. No hoping. Just systematic, profitable growth.
              </p>
              <button onClick={() => window.open('https://calendly.com/medbenomar/15min', '_blank')} className="px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full font-black text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 flex items-center gap-3 mx-auto">
                <Calendar className="w-6 h-6" />
                BOOK YOUR FREE STRATEGY SESSION
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-12 text-white">Trusted by Elite Brands</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { metric: "10X", label: "Average ROAS", desc: "For e-commerce clients" },
                { metric: "$2.4M+", label: "Ad Spend Managed", desc: "Across 47 industries" },
                { metric: "73%", label: "Cost Reduction", desc: "Vs previous agencies" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-xl font-bold mb-2">{stat.label}</div>
                  <div className="text-gray-400">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/50 rounded-3xl p-12 shadow-2xl">
              <Zap className="w-20 h-20 text-yellow-400 mx-auto mb-6 animate-pulse" />
              <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Your Meta Ads System Awaits
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Download the complete Masterclass and book your free 30-minute strategy session. 
                We'll audit your current setup and show you exactly where you're leaving money on the table.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full font-black text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 flex items-center gap-3 justify-center">
                  <Download className="w-6 h-6" />
                  DOWNLOAD MASTERCLASS
                </button>
                <button onClick={() => window.open('https://calendly.com/medbenomar/15min', '_blank')} className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full font-black text-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-3 justify-center">
                  <Calendar className="w-6 h-6" />
                  BOOK STRATEGY CALL
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-6">No credit card required. No pressure. Just results.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-purple-500/20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                NuclearVirality
              </span>
            </div>
            <p className="text-gray-500 mb-2">EliteMasterViralEngineer</p>
            <p className="text-gray-600 text-sm">
              We install tracking → define your goal → provide creative → Meta's AI finds buyers → we analyze & improve weekly
            </p>
            <p className="text-gray-700 text-xs mt-4">Your key to scaling efficiently in 2026</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
