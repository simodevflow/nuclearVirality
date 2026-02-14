import React from 'react';
import { Star, Quote, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO",
      company: "LuxeWear Fashion",
      industry: "E-Commerce",
      rating: 5,
      quote: "NuclearVirality turned our Meta Ads from a money pit into our most profitable channel. The ROAS went from 2.1X to 12.4X in 90 days. The systematic approach and creative excellence are unmatched.",
      results: "12.4X ROAS · 340% Revenue Growth",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Marcus Rodriguez",
      role: "CMO",
      company: "FlowSync SaaS",
      industry: "B2B Software",
      rating: 5,
      quote: "Finally, an agency that actually understands B2B. The lead quality jumped dramatically. Our sales team went from complaining about leads to thanking us for the pipeline. Cost per qualified demo dropped 71%.",
      results: "8.7X ROAS · 450+ Qualified Demos/Month",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      name: "Jennifer Matthews",
      role: "Managing Partner",
      company: "Matthews Legal Group",
      industry: "Professional Services",
      rating: 5,
      quote: "We were complete Meta skeptics. NuclearVirality proved us wrong with data, not promises. Now Meta is our #1 client acquisition channel. 92 new clients in 6 months speaks for itself.",
      results: "15.2X ROAS · 92 New Clients in 6 Months",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "David Park",
      role: "Founder",
      company: "VitalCore Supplements",
      industry: "Health & Wellness",
      rating: 5,
      quote: "The creative strategy alone was worth 10X the investment. Our ads finally stand out instead of looking like every other supplement brand. Subscription revenue up 280%, and ad costs actually went down.",
      results: "9.8X ROAS · 280% Subscription Growth",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Amanda Foster",
      role: "Director of Growth",
      company: "HomeStyle Furniture",
      industry: "Home Goods",
      rating: 5,
      quote: "We burned through 3 agencies before NuclearVirality. The difference? They actually know what they're doing. Proper tracking, data-driven decisions, creative that converts. Finally seeing real ROI.",
      results: "11.3X ROAS · 65% Lower CAC",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      name: "Tom Harrison",
      role: "Owner",
      company: "Elite Fitness Studios",
      industry: "Fitness",
      rating: 5,
      quote: "From zero Meta presence to 200+ new members in 4 months. The systematic approach, the creative testing, the weekly optimization — it all just works. Best marketing decision we've made.",
      results: "14.1X ROAS · 200+ New Members",
      gradient: "from-red-500 to-pink-500"
    },
    {
      name: "Lisa Nguyen",
      role: "VP Marketing",
      company: "TechGear Pro",
      industry: "Consumer Electronics",
      rating: 5,
      quote: "NuclearVirality doesn't just run ads — they engineer campaigns. The attention to detail, the data analysis, the creative excellence. Every dollar is accounted for and optimized. This is what premium service looks like.",
      results: "10.2X ROAS · 420% YoY Growth",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Michael Okonkwo",
      role: "Founder",
      company: "AfriStyle Marketplace",
      industry: "Marketplace Platform",
      rating: 5,
      quote: "They built our Meta infrastructure from scratch and scaled us to 6 figures/month in revenue. The transparency, the communication, the results — everything we wanted from an agency but never got until now.",
      results: "13.7X ROAS · 6-Figure Monthly Revenue",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      name: "Rachel Kim",
      role: "Co-Founder",
      company: "MindfulPath Coaching",
      industry: "Coaching & Consulting",
      rating: 5,
      quote: "I was skeptical about paid ads for coaching services. NuclearVirality proved me completely wrong. $89 per qualified consultation booking. My calendar is now fully booked 4 weeks out. Incredible ROI.",
      results: "16.4X ROAS · $89 Per Consultation",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const stats = [
    { value: "127+", label: "Brands Scaled" },
    { value: "10.8X", label: "Avg ROAS" },
    { value: "$2.4M+", label: "Ad Spend Managed" },
    { value: "98%", label: "Client Retention" }
  ];

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
            ⭐ CLIENT TESTIMONIALS
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            What Our Clients
            <br />
            Actually Say
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No cherry-picked reviews. No fake testimonials. Real brands. Real results. Real feedback.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center">
                <div className="text-4xl font-black text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 flex flex-col"
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-purple-400 mb-4 opacity-50" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 flex-grow italic">"{testimonial.quote}"</p>

                {/* Results Badge */}
                <div className={`bg-gradient-to-r ${testimonial.gradient} rounded-lg p-3 mb-4 text-center`}>
                  <div className="font-bold text-sm text-white">{testimonial.results}</div>
                </div>

                {/* Author */}
                <div className="border-t border-purple-500/20 pt-4">
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-purple-400">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                  <p className="text-xs text-gray-600 mt-1">{testimonial.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 text-white">Why Clients Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center border border-purple-500/20">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Results-Driven</h3>
              <p className="text-gray-400">We're measured on ROAS, not vanity metrics. Your profit is our north star.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center border border-purple-500/20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-3">Full Transparency</h3>
              <p className="text-gray-400">You see all data. You own all assets. No black boxes. No hidden fees.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center border border-purple-500/20">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Systematic Excellence</h3>
              <p className="text-gray-400">Proper infrastructure. Data-driven decisions. Weekly optimization. No guessing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border border-purple-500/50 rounded-3xl p-12">
            <h2 className="text-4xl font-black mb-6 text-white">Join 127+ Brands Scaling With Us</h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your free 30-minute strategy session. We'll show you exactly where you're leaving money on the table.
            </p>
            <Link
              to="/masterclass"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full font-black text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110"
            >
              <TrendingUp className="w-6 h-6" />
              GET THE MASTERCLASS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
