import React from 'react';
import { Zap, Award, Target, Users, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const stats = [
    { icon: TrendingUp, value: "10X", label: "Average ROAS", desc: "For e-commerce clients" },
    { icon: Users, value: "127+", label: "Brands Scaled", desc: "Across 47 industries" },
    { icon: Award, value: "$2.4M+", label: "Ad Spend Managed", desc: "With proven systems" },
    { icon: Shield, value: "73%", label: "Cost Reduction", desc: "Vs previous agencies" },
  ];

  const principles = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "We don't spray and pray. Every dollar is allocated based on data, not guesswork. Meta's AI combined with our expertise finds your ideal buyers."
    },
    {
      icon: Zap,
      title: "Creative Excellence",
      description: "70% of campaign performance comes from creative. We produce thumb-stopping ads that convert, not generic templates that blend into feeds."
    },
    {
      icon: TrendingUp,
      title: "Continuous Optimization",
      description: "Markets change. Competition evolves. Creative fatigues. We analyze weekly and iterate constantly to keep your campaigns profitable."
    },
    {
      icon: Shield,
      title: "Full Transparency",
      description: "You own all assets. You see all data. You control the budget. We provide expertise and execution. No black boxes. No hidden fees."
    }
  ];

  const team = [
    {
      name: "Elite Viral Engineer",
      role: "Founder & Chief Strategist",
      expertise: "15+ years scaling brands on Meta",
      focus: "Campaign architecture & creative strategy"
    },
    {
      name: "Performance Team",
      role: "Media Buyers & Analysts",
      expertise: "Ex-Facebook Ads specialists",
      focus: "Daily optimization & data analysis"
    },
    {
      name: "Creative Studio",
      role: "Designers & Copywriters",
      expertise: "10,000+ ads produced",
      focus: "Thumb-stopping creative that converts"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-sm font-bold text-purple-300">
            ☢️ ABOUT NUCLEARVIRALITY
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            We Turn Meta Ads Into
            <br />
            Cash-Printing Machines
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            No fluff. No vanity metrics. Just systematic, profitable growth through data-driven Meta advertising that scales.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 text-white">Our Track Record</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-bold mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Built From Frustration
          </h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              NuclearVirality was born after watching too many business leaders waste millions on Meta Ads agencies that over-promised and under-delivered.
            </p>
            <p>
              The problem wasn't Meta. The problem was agencies treating Meta Ads like magic rather than engineering. Random "boosts." Vanity metrics. No tracking. No strategy. Just burning budgets and hoping for miracles.
            </p>
            <p className="text-xl font-bold text-white">
              We built NuclearVirality to be the exact opposite.
            </p>
            <p>
              Every campaign starts with proper infrastructure: Pixel + CAPI tracking. Clear, measurable objectives. High-impact creative. Sufficient budget for AI learning. And continuous, data-driven optimization.
            </p>
            <p>
              No guessing. No hoping. Just systematic execution that compounds week after week.
            </p>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4 text-white">How We Operate</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">The non-negotiable principles behind every campaign we run</p>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <principle.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{principle.title}</h3>
                <p className="text-gray-400 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 text-white">The Team Behind The Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-black">
                  ☢️
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-purple-400 font-semibold mb-4">{member.role}</p>
                <p className="text-sm text-gray-400 mb-3">{member.expertise}</p>
                <p className="text-sm text-cyan-400 font-medium">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/50 rounded-3xl p-12">
            <h2 className="text-4xl font-black mb-6 text-white">Ready to Scale With Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a free 30-minute strategy session. We'll audit your setup and show you exactly where you're leaving money on the table.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/masterclass"
                className="px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full font-black text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 inline-block"
              >
                GET THE MASTERCLASS
              </Link>
              <Link
                to="/case-studies"
                className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full font-black text-xl hover:bg-white/20 transition-all duration-300 inline-block"
              >
                SEE CASE STUDIES
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
