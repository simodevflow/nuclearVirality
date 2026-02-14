import React, { useState } from 'react';
import { TrendingUp, DollarSign, Target, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudiesPage() {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      industry: "E-Commerce Fashion",
      brandType: "Online Clothing Retailer",
      challenge: "High CAC, low ROAS, saturated market",
      solution: [
        "Rebuilt tracking infrastructure (Pixel + CAPI)",
        "Created 50+ creative variations testing different hooks",
        "Implemented broad targeting strategy",
        "Weekly creative refresh cycle"
      ],
      results: {
        roas: "12.4X",
        cac: "64% reduction",
        revenue: "+340%",
        timeframe: "90 days"
      },
      testimonial: "NuclearVirality transformed our Meta Ads from a cost center to our most profitable acquisition channel. The systematic approach and creative excellence are unmatched.",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      industry: "SaaS B2B",
      brandType: "Project Management Software",
      challenge: "Low-quality leads, high cost per demo",
      solution: [
        "Shifted from interest targeting to broad + strong creative",
        "Developed lead magnet funnel (free trial → demo)",
        "Implemented CAPI for accurate lead tracking",
        "Created video ads explaining problem/solution clearly"
      ],
      results: {
        roas: "8.7X",
        cac: "71% lower CPL",
        revenue: "450+ qualified demos/month",
        timeframe: "120 days"
      },
      testimonial: "Finally, an agency that understands B2B. The lead quality jumped dramatically, and our sales team actually thanks us for the pipeline now.",
      icon: Target,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      industry: "Professional Services",
      brandType: "Legal Services Firm",
      challenge: "Zero Meta presence, skeptical of paid ads",
      solution: [
        "Built complete Meta infrastructure from scratch",
        "Created educational content positioning firm as authority",
        "Hyper-local targeting for service area",
        "Automated consultation booking system"
      ],
      results: {
        roas: "15.2X",
        cac: "$47 per consultation",
        revenue: "92 new clients in 6 months",
        timeframe: "180 days"
      },
      testimonial: "We were complete Meta skeptics. NuclearVirality proved us wrong with data. Now it's our #1 client acquisition channel.",
      icon: DollarSign,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      industry: "Health & Wellness",
      brandType: "Supplement Brand",
      challenge: "Rising ad costs, declining ROAS, creative fatigue",
      solution: [
        "Complete creative overhaul with UGC-style content",
        "Implemented subscription funnel optimization",
        "Added dynamic product ads for retargeting",
        "Built lookalike audiences from high-LTV customers"
      ],
      results: {
        roas: "9.8X",
        cac: "58% increase in LTV",
        revenue: "+280% in subscription revenue",
        timeframe: "150 days"
      },
      testimonial: "The creative strategy alone was worth 10X the investment. Our ads finally stand out instead of looking like every other supplement brand.",
      icon: Zap,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const activeStudy = caseStudies[activeCase];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="fixed inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-sm font-bold text-purple-300">
            🏆 PROVEN RESULTS
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Real Brands.
            <br />
            Real Results.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No theoretical fluff. These are actual campaigns we've run with measurable, documented outcomes.
          </p>
        </div>
      </section>

      {/* Case Study Selector */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {caseStudies.map((study, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCase(idx)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  activeCase === idx
                    ? 'bg-gradient-to-br from-purple-900/50 to-cyan-900/50 border-purple-500'
                    : 'bg-purple-900/20 border-purple-500/20 hover:border-purple-500/50'
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${study.gradient} rounded-lg flex items-center justify-center mb-4`}>
                  <study.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-1">{study.industry}</h3>
                <p className="text-sm text-gray-400">{study.brandType}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Case Study */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12">
            {/* Challenge */}
            <div className="mb-12">
              <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                The Challenge
              </h2>
              <p className="text-xl text-gray-300">{activeStudy.challenge}</p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Solution
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {activeStudy.solution.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-black/30 rounded-xl p-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                The Results
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-black/30 rounded-xl p-6 text-center border border-green-500/20">
                  <div className="text-5xl font-black text-green-400 mb-2">{activeStudy.results.roas}</div>
                  <div className="text-sm text-gray-400">Return on Ad Spend</div>
                </div>
                <div className="bg-black/30 rounded-xl p-6 text-center border border-cyan-500/20">
                  <div className="text-5xl font-black text-cyan-400 mb-2">{activeStudy.results.cac}</div>
                  <div className="text-sm text-gray-400">Cost Improvement</div>
                </div>
                <div className="bg-black/30 rounded-xl p-6 text-center border border-purple-500/20">
                  <div className="text-5xl font-black text-purple-400 mb-2">{activeStudy.results.revenue}</div>
                  <div className="text-sm text-gray-400">Revenue Growth</div>
                </div>
                <div className="bg-black/30 rounded-xl p-6 text-center border border-pink-500/20">
                  <div className="text-5xl font-black text-pink-400 mb-2">{activeStudy.results.timeframe}</div>
                  <div className="text-sm text-gray-400">Time to Results</div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-black/30 rounded-xl p-8 border-l-4 border-purple-500">
              <p className="text-lg text-gray-300 italic mb-4">"{activeStudy.testimonial}"</p>
              <p className="text-sm text-gray-500">— {activeStudy.brandType}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Success Patterns */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4 text-white">What Every Success Has In Common</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">The non-negotiable elements present in every winning campaign</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-8 border border-purple-500/20">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Proper Infrastructure</h3>
              <p className="text-gray-400">Pixel + CAPI tracking. Clear objectives. Sufficient budget for AI learning. No guessing.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-8 border border-purple-500/20">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3">Creative Excellence</h3>
              <p className="text-gray-400">Thumb-stopping ads that actually convert. Continuous testing. Weekly refreshes.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-8 border border-purple-500/20">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-3">Data-Driven Optimization</h3>
              <p className="text-gray-400">Weekly analysis. Ruthless iteration. Scale what works. Kill what doesn't.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/50 rounded-3xl p-12">
            <h2 className="text-4xl font-black mb-6 text-white">Ready For Your Case Study?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Every success story started with a single strategy call. Book yours and discover what's possible.
            </p>
            <Link
              to="/masterclass"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full font-black text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110"
            >
              GET THE MASTERCLASS <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
