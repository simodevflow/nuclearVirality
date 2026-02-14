import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How quickly can we get started?",
          a: "After our initial strategy call, we can have your tracking infrastructure (Pixel + CAPI) installed within 2-3 business days. First campaigns typically launch within 7-10 days after onboarding, depending on creative production timeline."
        },
        {
          q: "What's the minimum ad budget to work with you?",
          a: "We recommend a minimum of $3,000/month in ad spend. This gives Meta's AI enough data to optimize effectively. For B2B or higher-ticket offers, we often start at $5,000-10,000/month. Remember: this is your ad budget (paid to Meta), separate from our service fee."
        },
        {
          q: "Do you have long-term contracts?",
          a: "No. We work month-to-month after an initial 90-day engagement. We believe in earning your business through results, not locking you into long contracts. Most clients stay because the ROAS speaks for itself."
        }
      ]
    },
    {
      category: "Process & Strategy",
      questions: [
        {
          q: "What's your process for new clients?",
          a: "1) Strategy call to understand your business and goals, 2) Audit of existing Meta setup (if any), 3) Install proper tracking infrastructure (Pixel + CAPI), 4) Develop creative strategy and produce initial ad sets, 5) Launch campaigns with close monitoring during learning phase, 6) Weekly optimization and reporting. The first 30 days focus on data gathering and testing. Months 2-3 are about scaling what works."
        },
        {
          q: "How is NuclearVirality different from other Meta Ads agencies?",
          a: "Three key differences: 1) We build proper infrastructure first (most agencies skip Pixel + CAPI setup), 2) We prioritize creative excellence—70% of performance comes from creative, not targeting wizardry, 3) We're data-obsessed—weekly optimization based on actual performance, not gut feelings. Plus, you own all assets and see all data. No black boxes."
        },
        {
          q: "Do you handle creative production or do we need to provide it?",
          a: "We handle complete creative production: static images, video ads, copywriting, UGC-style content. Our in-house creative team has produced 10,000+ converting ads. If you have existing creative assets, we'll test those too. But our systematic creative testing process is a core part of why we drive results."
        }
      ]
    },
    {
      category: "Results & Performance",
      questions: [
        {
          q: "What results can I realistically expect?",
          a: "It depends on your industry, offer, and current baseline. Typical results: 8-15X ROAS for e-commerce, $50-150 CPL for B2B depending on deal size, 40-70% reduction in CAC within 90 days. We're conservative in projections and over-deliver. Month 1 is learning, Month 2-3 is where you see significant improvement."
        },
        {
          q: "How long until we see results?",
          a: "You'll see campaign data immediately, but meaningful optimization happens after Meta's learning phase (typically 50 conversions or 7-10 days). Significant ROAS improvement usually shows by days 30-45. Full potential is realized by day 90 once we've tested multiple creative angles and audience strategies. This is engineering, not magic."
        },
        {
          q: "Do you guarantee specific ROAS?",
          a: "No ethical agency guarantees specific ROAS—too many variables outside our control (offer quality, website conversion rate, seasonality, competition). What we do guarantee: proper infrastructure setup, data-driven optimization, transparent reporting, and our best systematic effort. Our track record speaks for itself: 10.8X average ROAS across 127+ brands."
        }
      ]
    },
    {
      category: "Technical Setup",
      questions: [
        {
          q: "What is Pixel + CAPI and why does it matter?",
          a: "Meta Pixel is browser-side tracking (JavaScript). CAPI (Conversions API) is server-side tracking. Since iOS14+ privacy changes, browser tracking alone misses 30-40% of conversions. CAPI captures this missing data, giving Meta's AI better information to optimize. This dramatically improves campaign performance. Most agencies skip this. We don't."
        },
        {
          q: "Do I need to give you admin access to my accounts?",
          a: "Yes, we need admin access to your Meta Business Manager and Ad Account to manage campaigns. You maintain ownership—we're just granted access. You can revoke it anytime. We'll also need admin on your website for Pixel installation (or we can provide you the code to install). Full transparency on what we access and why."
        },
        {
          q: "What platforms do you advertise on?",
          a: "We specialize in Meta (Facebook & Instagram). That's it. We don't dilute our expertise across every platform. Meta is the most powerful, sophisticated, and ROI-positive platform for most businesses. If you need Google, TikTok, or LinkedIn, we can refer you to specialists. We stay laser-focused on what we do best."
        }
      ]
    },
    {
      category: "Pricing & Investment",
      questions: [
        {
          q: "How much does your service cost?",
          a: "Our service fee depends on your ad spend tier: $3K-10K/month spend = $2,500/month service fee, $10K-25K/month spend = $3,500/month service fee, $25K+/month spend = custom pricing (typically 12-15% of ad spend). This covers strategy, creative production, campaign management, tracking setup, and weekly optimization."
        },
        {
          q: "Why should I pay for an agency when I can run ads myself?",
          a: "You absolutely can. But consider: Do you know how to properly implement CAPI? Can you produce 50+ creative variations per month? Do you have time for daily campaign monitoring and weekly optimization? Most business owners who try DIY Meta Ads waste $10K-50K learning painful lessons we've already learned across 127+ brands. We're the shortcut to profitability."
        },
        {
          q: "What payment terms do you offer?",
          a: "Monthly invoicing, due at the start of each month. First month requires both service fee + initial ad budget. We accept bank transfer, credit card (via Stripe), or ACH. No hidden fees. No surprise charges. Everything is clear upfront."
        }
      ]
    },
    {
      category: "Working Together",
      questions: [
        {
          q: "How much of my time is required?",
          a: "Initial onboarding: 2-3 hours (strategy call, account setup, creative briefing). Ongoing: ~30 mins/week for our optimization review call. We handle everything else. You focus on running your business while we scale your customer acquisition."
        },
        {
          q: "How do you communicate and report results?",
          a: "Weekly: Slack/email update with key metrics and optimizations made. Bi-weekly: 30-minute Zoom call to review performance and discuss strategy. Monthly: Comprehensive report with full analysis and next-month roadmap. You also have 24/7 dashboard access to see live campaign data."
        },
        {
          q: "What if Meta Ads just don't work for my business?",
          a: "Rare, but it happens. Some businesses truly aren't a fit for Meta (ultra-niche B2B with tiny TAM, products with severe ad policy restrictions, offers with terrible unit economics). We'll identify this in the strategy call before you spend a dollar. If we don't think Meta will work for you, we'll tell you upfront and save you the headache."
        }
      ]
    }
  ];

  const toggleQuestion = (catIdx, qIdx) => {
    const index = `${catIdx}-${qIdx}`;
    setOpenIndex(openIndex === index ? null : index);
  };

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
            ❓ FREQUENTLY ASKED QUESTIONS
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Everything You
            <br />
            Need To Know
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Straight answers to the questions every potential client asks. No sales fluff. Just facts.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, catIdx) => (
            <div key={catIdx}>
              <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIdx) => {
                  const index = `${catIdx}-${qIdx}`;
                  const isOpen = openIndex === index;
                  
                  return (
                    <div
                      key={qIdx}
                      className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleQuestion(catIdx, qIdx)}
                        className="w-full px-8 py-6 flex justify-between items-center text-left"
                      >
                        <span className="text-xl font-bold pr-4">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-6 h-6 text-purple-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-purple-400 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-8 pb-6 text-gray-300 leading-relaxed border-t border-purple-500/20 pt-6">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <MessageCircle className="w-16 h-16 text-purple-400 mx-auto mb-6" />
          <h2 className="text-4xl font-black mb-6 text-white">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a free 30-minute strategy call. We'll answer every question and show you exactly what's possible for your business.
          </p>
          <Link
            to="/masterclass"
            className="inline-block px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full font-black text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110"
          >
            BOOK YOUR STRATEGY CALL
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/about"
              className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 text-center"
            >
              <h3 className="text-xl font-bold mb-2">About Us</h3>
              <p className="text-sm text-gray-400">Learn about our team and approach</p>
            </Link>
            <Link
              to="/case-studies"
              className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 text-center"
            >
              <h3 className="text-xl font-bold mb-2">Case Studies</h3>
              <p className="text-sm text-gray-400">See real results from real brands</p>
            </Link>
            <Link
              to="/testimonials"
              className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 text-center"
            >
              <h3 className="text-xl font-bold mb-2">Testimonials</h3>
              <p className="text-sm text-gray-400">What our clients actually say</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
