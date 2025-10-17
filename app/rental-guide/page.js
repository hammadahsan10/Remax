"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function RentalGuide() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    location: '',
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
    console.log('Rental evaluation submitted:', formData);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
            Dubai Landlord & Leasing Guide
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8 max-w-3xl">
            Maximize Your Rental Returns with RE/MAX Hub Dubai
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Renting out your property in Dubai should be simple, secure, and profitable. At RE/MAX Hub Dubai, we help landlords find qualified tenants, achieve competitive rental income, and maintain their properties with peace of mind.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you own one apartment or an entire portfolio, our team provides end-to-end leasing and management services to protect your investment and optimize returns.
          </p>
        </div>
      </section>

      {/* Why Lease Through RE/MAX Hub Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Lease Through RE/MAX Hub</h2>
              <p className="text-lg text-gray-600 mb-8">
                As part of the world's most recognized real estate brand, RE/MAX Hub offers landlords a professional, transparent, and data-driven leasing experience.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Access to qualified, pre-screened tenants</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Professional marketing across Dubai's leading portals</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Rental valuation and pricing strategy based on market insights</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Full documentation & RERA-compliant contracts</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 mt-1">✓</span>
                  <span className="text-gray-700">End-to-end property management (optional)</span>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-blue-800 font-semibold">
                  Our expertise ensures your property remains occupied, maintained, and generating consistent income.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
                alt="Dubai property"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Dubai's Rental Market Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Dubai's Rental Market</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Dubai's rental market is dynamic and competitive. Rental rates vary by location, property type, and amenities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Rental Comparisons</h3>
              <p className="text-gray-600">in your community</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Insights on Tenant Demand</h3>
              <p className="text-gray-600">trends</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rent Cap Laws Guidance</h3>
              <p className="text-gray-600">and renewal rules</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 max-w-2xl mx-auto">
              <p className="text-green-800 font-semibold">
                We help you set the optimal rent value — ensuring quick occupancy and steady returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preparing Your Property Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
                alt="Property preparation"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Preparing Your Property for Rent</h2>
              <p className="text-xl text-gray-700 mb-4 font-semibold">First impressions attract better tenants.</p>
              <p className="text-gray-600 mb-8">Before listing, our agents help you:</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-blue-500 text-xl mr-3 mt-1">🔍</span>
                  <span className="text-gray-700">Inspect the property and recommend any repairs or upgrades</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 text-xl mr-3 mt-1">🧹</span>
                  <span className="text-gray-700">Arrange professional cleaning and photography</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 text-xl mr-3 mt-1">⚡</span>
                  <span className="text-gray-700">Ensure utilities and DEWA connections are active</span>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
                <p className="text-yellow-800 font-semibold">
                  A well-presented property rents faster and commands higher value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Your Property Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Marketing Your Property</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              RE/MAX Hub markets your property across Dubai's top real estate platforms and through our global RE/MAX network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bayut</h3>
              <p className="text-gray-600 text-sm">Leading property portal</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Property Finder</h3>
              <p className="text-gray-600 text-sm">Comprehensive listings</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Dubizzle</h3>
              <p className="text-gray-600 text-sm">Popular classified platform</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">RE/MAX Global</h3>
              <p className="text-gray-600 text-sm">International network</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 max-w-3xl mx-auto">
              <p className="text-blue-800 font-semibold">
                We ensure maximum visibility to the right audience — locally and internationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tenant Screening Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tenant Screening & Selection</h2>
              <p className="text-xl text-gray-700 mb-4 font-semibold">Every tenant is thoroughly vetted to protect your investment.</p>
              <p className="text-gray-600 mb-8">Our screening process includes:</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-red-500 text-xl mr-3 mt-1">🆔</span>
                  <span className="text-gray-700">ID & visa verification</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 text-xl mr-3 mt-1">💰</span>
                  <span className="text-gray-700">Proof of income and employment</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-500 text-xl mr-3 mt-1">📞</span>
                  <span className="text-gray-700">Reference checks</span>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <p className="text-red-800 font-semibold">
                  Only qualified tenants who meet your terms proceed to contract signing — ensuring reliability and peace of mind.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
                alt="Tenant screening"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lease Agreement Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lease Agreement & Documentation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Once a tenant is approved, RE/MAX Hub prepares the Ejari-compliant tenancy contract and handles all necessary paperwork.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We ensure all terms — including rent, deposits, and maintenance obligations — are clearly outlined and legally binding under RERA regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Title Deed Copy</h3>
              <p className="text-gray-600">Property ownership proof</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🆔</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Emirates ID or Passport</h3>
              <p className="text-gray-600">Identity verification</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">DEWA Connection Proof</h3>
              <p className="text-gray-600">Utility connection status</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Management Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Property management"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Property Handover & Management</h2>
              <p className="text-gray-600 mb-8">
                After the lease is signed, our team coordinates the property handover, meter transfers, and inventory checklist.
              </p>
              <p className="text-gray-600 mb-8">
                For landlords preferring a hands-off experience, we also offer comprehensive property management, including:
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <span className="text-purple-500 text-xl mr-3 mt-1">💰</span>
                  <span className="text-gray-700">Rent collection & deposit handling</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-500 text-xl mr-3 mt-1">🔧</span>
                  <span className="text-gray-700">Maintenance coordination</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-500 text-xl mr-3 mt-1">📋</span>
                  <span className="text-gray-700">Routine inspections & reporting</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-500 text-xl mr-3 mt-1">📝</span>
                  <span className="text-gray-700">Lease renewals and tenant communication</span>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                <p className="text-purple-800 font-semibold">
                  You enjoy passive income — we handle the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renewals & Exit Management Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Renewals & Exit Management</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              As the lease term nears completion, RE/MAX Hub proactively manages:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Renewal Negotiations</h3>
              <p className="text-gray-600">Based on current rent caps</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Notice Periods</h3>
              <p className="text-gray-600">In compliance with Dubai Tenancy Law</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">End-of-lease Inspections</h3>
              <p className="text-gray-600">And security deposit settlements</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600 max-w-2xl mx-auto">
              <p className="text-green-800 font-semibold">
                Our process ensures continuity, minimal vacancy, and tenant satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">List Your Property with RE/MAX Hub Today</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our experts will evaluate your property, recommend an ideal rental price, and connect you with quality tenants quickly and efficiently.
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
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select property type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Studio">Studio</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Property Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Dubai Marina, Downtown Dubai, JBR"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your property and rental requirements..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-lg"
                >
                  Book a Free Rental Evaluation
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-3">📞</span>
                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <p className="text-gray-600">+971 XXX XXX XXX</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-3">📧</span>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">info@remaxhub.ae</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-3">📍</span>
                <div>
                  <p className="font-semibold text-gray-900">Visit</p>
                  <p className="text-gray-600">RE/MAX Hub Office, Dubai</p>
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
