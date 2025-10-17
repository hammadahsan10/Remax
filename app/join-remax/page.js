"use client";
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function JoinRemaxHub() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Application submitted:', formData);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
          }}
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
            Join RE/MAX Hub Dubai
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8 max-w-3xl">
            Empowering Real Estate Agents to Succeed Without Limits
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            At RE/MAX Hub Dubai, we believe success in real estate should have no ceiling. Whether you're an experienced broker or just starting your career, RE/MAX Hub gives you the platform, training, and tools to build your business, grow your brand, and maximize your earnings — all under one of the world's most powerful real estate names.
          </p>
        </div>
      </section>

      {/* Why RE/MAX Hub Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why RE/MAX Hub?</h2>
              <p className="text-xl text-gray-700 mb-4 font-semibold">You're not an employee — you're an entrepreneur.</p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                RE/MAX Hub is where independent agents thrive within a supportive environment that offers the systems, marketing, and global exposure you need to reach your full potential.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🏆</span>
                  <div>
                    <p className="text-gray-700 font-medium">Up to 80% commissions</p>
                    <p className="text-gray-600 text-sm">because your hard work deserves real rewards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🌍</span>
                  <div>
                    <p className="text-gray-700 font-medium">Global brand recognition</p>
                    <p className="text-gray-600 text-sm">trusted in 110+ countries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">💡</span>
                  <div>
                    <p className="text-gray-700 font-medium">Exclusive training & mentorship</p>
                    <p className="text-gray-600 text-sm">for skill and performance growth</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📈</span>
                  <div>
                    <p className="text-gray-700 font-medium">Continuous lead generation support</p>
                    <p className="text-gray-600 text-sm">through digital marketing & events</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🏢</span>
                  <div>
                    <p className="text-gray-700 font-medium">Modern office spaces</p>
                    <p className="text-gray-600 text-sm">with access to meeting rooms and creative tools</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🤝</span>
                  <div>
                    <p className="text-gray-700 font-medium">Collaborative culture</p>
                    <p className="text-gray-600 text-sm">join a team that celebrates your success</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-blue-800 font-semibold text-lg">
                  Your ambition. Our platform. Unlimited potential.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Real estate agent"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Your Journey Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Journey with RE/MAX Hub</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've designed a seamless agent onboarding and growth path that helps you get productive — fast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Connect</h3>
              <p className="text-gray-600">
                Meet our recruitment team and learn how RE/MAX Hub can help you grow your career.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Onboard</h3>
              <p className="text-gray-600">
                Receive full induction training on RE/MAX tools, systems, and compliance.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Launch</h3>
              <p className="text-gray-600">
                Start building your portfolio with access to exclusive listings, developer relationships, and marketing support.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Grow</h3>
              <p className="text-gray-600">
                Build your personal brand, expand your client base, and increase your earnings — the RE/MAX way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Technology tools"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tools & Support to Boost Your Success</h2>
              <p className="text-lg text-gray-600 mb-8">
                At RE/MAX Hub, we invest in your growth. Our agents benefit from cutting-edge tools and technology that make selling and renting properties faster, smarter, and more profitable.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700">CRM & lead management platform</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Personalized digital marketing materials</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Professional property photography & videography</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Open-house and event support</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Listing exposure on Dubai's top portals</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Admin and transaction coordination support</span>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <p className="text-green-800 font-semibold">
                  We make sure you can focus on selling — not paperwork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Thrives Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Thrives at RE/MAX Hub</h2>
          <p className="text-lg text-gray-600 mb-8">Our most successful agents are:</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center justify-center">
              <span className="text-green-500 text-2xl mr-4">✅</span>
              <span className="text-gray-700 text-lg">Self-motivated and entrepreneurial</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-green-500 text-2xl mr-4">✅</span>
              <span className="text-gray-700 text-lg">Passionate about real estate and client relationships</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-green-500 text-2xl mr-4">✅</span>
              <span className="text-gray-700 text-lg">Eager to learn, adapt, and grow</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-green-500 text-2xl mr-4">✅</span>
              <span className="text-gray-700 text-lg">Results-driven with strong ethics and teamwork</span>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-blue-800 font-semibold text-lg">
              If this sounds like you — we're ready to meet you.
            </p>
          </div>
        </div>
      </section>

      {/* Training & Development Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Training & Development</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Through the RE/MAX University and in-house coaching programs, we ensure every agent — new or experienced — gains the confidence and skills to lead in Dubai's fast-paced property market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real Estate Law & RERA Compliance</h3>
              <p className="text-gray-600">Master the legal framework and regulations governing Dubai's real estate market.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Negotiation and Closing Techniques</h3>
              <p className="text-gray-600">Learn proven strategies to close deals and maximize your success rate.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Marketing and Personal Branding</h3>
              <p className="text-gray-600">Build your personal brand and attract clients through effective marketing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">CRM and Digital Tools Mastery</h3>
              <p className="text-gray-600">Become proficient with the latest technology tools and systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Investor and Off-plan Sales Strategies</h3>
              <p className="text-gray-600">Specialize in high-value investment properties and off-plan developments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Client Relationship Management</h3>
              <p className="text-gray-600">Build lasting relationships and generate repeat business and referrals.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600 max-w-2xl mx-auto">
              <p className="text-red-800 font-semibold text-lg">
                Learn from the best. Become one of the best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Model Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Commission Model</h2>
          <p className="text-lg text-gray-600 mb-8">
            RE/MAX Hub offers a performance-based commission model that rewards achievement and transparency.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
              <p className="text-gray-700 font-semibold">Maximum Commission</p>
              <p className="text-gray-600 text-sm">on closed deals</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">0%</div>
              <p className="text-gray-700 font-semibold">Hidden Fees</p>
              <p className="text-gray-600 text-sm">or salary deductions</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <p className="text-gray-700 font-semibold">Transparency</p>
              <p className="text-gray-600 text-sm">clear structure and timely payments</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-800 font-semibold text-lg">
              We provide the environment — you build your business.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Future?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join a global brand with local expertise and unlimited growth potential.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Real Estate Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select experience level</option>
                    <option value="New to Real Estate">New to Real Estate</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5+ years">5+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about yourself
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Why are you interested in joining RE/MAX Hub? What are your goals?"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-lg"
                >
                  Apply Now – Become a RE/MAX Hub Agent
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-3">📞</span>
                <div>
                  <p className="font-semibold text-gray-900">Call / WhatsApp</p>
                  <p className="text-gray-600">+971 XXX XXX XXX</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-3">📧</span>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">careers@remaxhub.ae</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-3">📍</span>
                <div>
                  <p className="font-semibold text-gray-900">Visit us</p>
                  <p className="text-gray-600">RE/MAX Hub, Dubai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}