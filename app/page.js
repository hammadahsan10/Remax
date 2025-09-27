'use client'
import Link from 'next/link'
import { useState } from 'react';
export default function Home() {
  const [activeTab, setActiveTab] = useState('BUY');
  return (
    <main className="min-h-screen bg-white">

      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* RE/MAX Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="bg-red-600 text-white px-2 py-1 rounded-sm text-xl">RE</span>
                <span className="text-blue-600 ml-1 text-xl">MAX</span>
              </div>
            </div>

            {/* Right side navigation and buttons */}
            <div className="flex items-center space-x-1">
              {/* Navigation Menu */}
              <nav className="hidden md:flex items-center space-x-1" style={{ color: "#003da5" }}>
                <a href="#" className="hover:text-blue-800 font-medium px-4 py-2 rounded">Buy</a>
                <a href="#" className="hover:text-blue-800 font-medium px-4 py-2 rounded">Sell</a>
                <a href="#" className="hover:text-blue-800 font-medium px-4 py-2 rounded">Rent</a>
                <a href="#" className="hover:text-blue-800 font-medium px-4 py-2 rounded">Agents</a>
                <a href="#" className="hover:text-blue-800 font-medium px-4 py-2 rounded">More</a>
              </nav>

              {/* Login/Signup Buttons */}
              <div className="flex items-center space-x-2 ml-4">
                <button style={{ color: "#003da5" }} className="hover:text-blue-800 font-medium px-4 py-2 rounded">Log In</button>
                <button style={{ backgroundColor: "#003da5" }} className="text-white px-4 py-2 rounded hover:bg-blue-700 font-medium">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://static-images.remax.com/assets/web/homepage/homepage-hero-4-2025.jpg?width=2160&format=auto&quot")',
        // backgroundBlendMode: 'overlay',
        // backgroundColor: 'rgba(0,0,0,0.3)'
      }}>
        {/* Background image placeholder - you'll need to replace with actual image */}

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold mb-8 tracking-wide">
              WHEN HOME MATTERS MOST, GO WITH THE MOST TRUSTED.
            </h1>

            {/* Search Tabs and Form */}
            <div className="max-w-2xl mx-auto">
              {/* Tabs */}
              <div className="flex justify-center mb-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-t-lg flex">
                  {['BUY', 'RENT', 'SELL', 'AGENTS', 'OFFICES'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 font-medium transition-colors ${activeTab === tab
                        ? 'bg-white text-gray-800 border-b-2 border-red-600'
                        : 'text-gray-600 hover:text-gray-800'
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Form */}
              <div className="bg-white/95 backdrop-blur-sm rounded-b-lg rounded-t-none shadow-lg">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Address, City, ZIP, and More"
                    className="flex-1 px-4 py-3 text-lg border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button className="bg-red-600 text-white px-8 py-3 rounded-r-md hover:bg-red-700 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>

                <div className="mt-4 text-sm text-gray-600 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  LISTING DATA LAST UPDATED TODAY AT 12:41 AM
                </div>

                <div className="mt-2 text-sm text-white/90 flex items-center justify-center">
                  <span>Search for RE/MAX properties in over 110 countries and territories</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-6">
                <div className="bg-red-600 text-white p-4 rounded-lg">
                  <div className="text-xs font-bold text-center">
                    <div>AMERICA'S</div>
                    <div>MOST</div>
                    <div>TRUSTED</div>
                    <div className="text-yellow-300">★★★★★</div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Voted #1 Most Trusted Real Estate Agents in the USA
                </h2>
                <p className="text-gray-600">
                  Voted most trusted Real Estate Agency brand by American shoppers based on the
                  BrandSpark® American Trust Study, years 2022-2024 and 2019.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-w-16 aspect-h-10 rounded-lg overflow-hidden">
                <div className="w-full h-96 rounded-lg relative">
                  <img
                    src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Beautiful modern house for sale"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-4 right-4 bg-red-600 text-white px-3 py-1 rounded text-sm font-medium">
                    FOR SALE
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Have confidence in any market with us.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                RE/MAX<sup>®</sup> agents have the experience to get the job done in today's market<sup>1</sup>,
                backed by a robust network of over 140,000 agents in more than 9,000 offices
                worldwide. With our extensive global connections and deep local insights, you gain
                an edge that transcends what you'll find online. Regardless of market conditions,
                life moves on—people need to move, sell and buy. RE/MAX agents understand that market shifts open new doors of opportunity, and with a trusted and experienced RE/MAX agent, these opportunities are yours to seize.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The right time to move is when you're with the right agent—nobody sells more real estate than RE/MAX<sup>2</sup>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Searches Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Popular Searches Nearby New York, NY
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* New Listings */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://static-images.remax.com/assets/web/homepage/01_NewListings.jpg")' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">New Listings</h3>
                {/* <p className="text-gray-600 mt-2">Discover the latest properties on the market</p> */}
              </div>
            </div>

            {/* Luxury Homes */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://static-images.remax.com/assets/web/homepage/01_NewListings.jpg")' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Luxury Homes</h3>
                {/* <p className="text-gray-600 mt-2">Premium properties with exceptional amenities</p> */}
              </div>
            </div>

            {/* Open Houses */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://static-images.remax.com/assets/web/homepage/03_OpenHouses.jpg")' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Open Houses</h3>
                {/* <p className="text-gray-600 mt-2">Visit properties available for viewing this weekend</p> */}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* New Listings */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://static-images.remax.com/assets/web/homepage/04_PriceReductions.jpg")' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Price Reductions</h3>
                {/* <p className="text-gray-600 mt-2">Discover the latest properties on the market</p> */}
              </div>
            </div>

            {/* Luxury Homes */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://static-images.remax.com/assets/web/homepage/05_VirtualTours.jpg")' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Virtual Tours</h3>
                {/* <p className="text-gray-600 mt-2">Premium properties with exceptional amenities</p> */}
              </div>
            </div>

            {/* Open Houses */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://static-images.remax.com/assets/web/childrens_hospitals/childrens_hospital.jpg")' }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Miracle Homes</h3>
                {/* <p className="text-gray-600 mt-2">Visit properties available for viewing this weekend</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">RE/MAX News</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-1">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://news.remax.com/wp-content/uploads/2025/06/May_Home.jpeg"
                  alt="Beautiful home with landscaping"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            <div className="order-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                U.S. Market Update: New Listings on the Rise Heading into Summer
              </h3>
              <div className="mb-4">
                <span className="text-sm text-gray-500">June 18, 2025</span>
                <div className="mt-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Market Trends
                  </span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Explore comprehensive data pertaining to new listings, home prices, time spent on market and
                more in the latest REMAX National Housing Report for May 2025.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                READ POST
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Worldwide Search Section */}
      <section className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0, 0, 0, 0.18)), url("https://static-images.remax.com/assets/web/homepage/07_Worldwide.jpg")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 h-full flex items-center justify-end pr-12 md:pr-20">
          <div className="text-right text-white max-w-lg mr-8">
            {/* RE/MAX Collection Logo */}
            <div className="mb-6 flex justify-end">
              <div className="text-right">
                <div className="text-2xl font-bold">
                  <span className="bg-red-600 text-white px-2 py-1 rounded-sm">RE</span>
                  <span className="text-white ml-1">/</span>
                  <span className="bg-red-600 text-white px-2 py-1 rounded-sm ml-1">MAX</span>
                </div>
                <div className="text-sm font-medium text-gray-300 mt-1 tracking-wider">
                  COLLECTION
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Luxury
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Fine Homes & Luxury Properties
            </p>
            <button className="border-2 border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-black transition-colors">
              DISCOVER LUXURY
            </button>
          </div>
        </div>
      </section>

      {/* RE/MAX Commercial Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://static-images.remax.com/assets/web/homepage/08_Commercial.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-md">
              <div className="flex items-center mb-4">
                <div className="text-red-600 font-bold text-lg mr-2">RE/MAX</div>
                <div className="text-white text-lg">COMMERCIAL</div>
              </div>
              <h2 className="text-4xl font-bold text-white mb-2">Commercial</h2>
              <div className="w-20 h-1 bg-red-600 mb-4"></div>
              <p className="text-white text-lg mb-6">Commercial with Confidence</p>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-colors">
                EXPLORE COMMERCIAL REAL ESTATE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RE/MAX Collection Luxury Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://static-images.remax.com/assets/web/homepage/09_Collection.jpg")' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-white/40"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-md ml-auto">
              <div className="text-right mb-4">
                <div className="text-white text-sm mb-1">THE</div>
                <div className="flex items-center justify-end">
                  <div className="text-red-600 font-bold text-lg mr-2">RE/MAX</div>
                  <div className="text-white text-lg">COLLECTION</div>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-white mb-2 text-right">Luxury</h2>
              <div className="w-20 h-1 bg-red-600 mb-4 ml-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Real Estate Listings By City */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Real Estate Listings By City</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link href="#" className="text-blue-600 hover:underline">Homes for sale in Atlanta</Link>
                <Link href="#" className="text-blue-600 hover:underline">Homes for sale in Nashville</Link>
                <Link href="#" className="text-blue-600 hover:underline">Homes for sale in Phoenix</Link>
                <Link href="#" className="text-blue-600 hover:underline">Homes for sale in San Francisco</Link>
                <Link href="#" className="text-blue-600 hover:underline">Homes for sale in Austin</Link>
                <Link href="#" className="text-blue-600 hover:underline">Homes for sale in New York</Link>
                <Link href="#" className="text-blue-600 hover:underline">Homes for sale in Raleigh</Link>
                <Link href="#" className="text-blue-600 hover:underline">Homes for sale in Seattle</Link>
                <Link href="#" className="text-blue-600 hover:underline">Homes for sale in Denver</Link>
                <Link href="#" className="text-blue-600 hover:underline">Homes for sale in Orlando</Link>
                <Link href="#" className="text-blue-600 hover:underline">Homes for sale in San Antonio</Link>
                <Link href="#" className="text-blue-600 hover:underline">Homes for sale in Tampa</Link>
              </div>
            </div>

            {/* Popular Searches */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Popular Searches Nearby New York, NY</h3>
              <div className="space-y-2 text-sm">
                <Link href="#" className="block text-blue-600 hover:underline">New Listings Near Me</Link>
                <Link href="#" className="block text-blue-600 hover:underline">Virtual Tours Near Me</Link>
                <Link href="#" className="block text-blue-600 hover:underline">Open Houses Near Me</Link>
                <Link href="#" className="block text-blue-600 hover:underline">Price Reductions Near Me</Link>
                <Link href="#" className="block text-blue-600 hover:underline">Homes For Sale Near Me</Link>
              </div>
            </div>

            {/* Search Homes By State */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Search Homes For Sale By State</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link href="#" className="text-blue-600 hover:underline">Alabama Real Estate</Link>
                <Link href="#" className="text-blue-600 hover:underline">Arkansas Real Estate</Link>
                <Link href="#" className="text-blue-600 hover:underline">Connecticut Real Estate</Link>
                <Link href="#" className="text-blue-600 hover:underline">Georgia Real Estate</Link>
                <Link href="#" className="text-blue-600 hover:underline">Alaska Real Estate</Link>
                <Link href="#" className="text-blue-600 hover:underline">California Real Estate</Link>
                <Link href="#" className="text-blue-600 hover:underline">Delaware Real Estate</Link>
                <Link href="#" className="text-blue-600 hover:underline">Hawaii Real Estate</Link>
                <Link href="#" className="text-blue-600 hover:underline">Arizona Real Estate</Link>
                <Link href="#" className="text-blue-600 hover:underline">Colorado Real Estate</Link>
                <Link href="#" className="text-blue-600 hover:underline">Florida Real Estate</Link>
                <Link href="#" className="text-blue-600 hover:underline">Idaho Real Estate</Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link href="#" className="block text-blue-600 hover:underline">Worldwide Property Search</Link>
                <Link href="#" className="block text-blue-600 hover:underline">RE/MAX Canada</Link>
                <Link href="#" className="block text-blue-600 hover:underline">RE/MAX Commercial</Link>
                <Link href="#" className="block text-blue-600 hover:underline">The RE/MAX Collection</Link>
                <Link href="#" className="block text-blue-600 hover:underline">Real Estate Articles and Advice</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        {/* Footer */}
        <footer className="text-white py-12" style={{ backgroundColor: "#1a3668" }}>
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {/* Column 1 */}
              <div>
                <div className="space-y-3 text-sm">
                  <a href="#" className="block hover:text-gray-300">Worldwide Property Search</a>
                  <a href="#" className="block hover:text-gray-300">RE/MAX Canada</a>
                  <a href="#" className="block hover:text-gray-300">RE/MAX Commercial</a>
                  <a href="#" className="block hover:text-gray-300">The RE/MAX Collection</a>
                  <a href="#" className="block hover:text-gray-300">Real Estate Articles and Advice</a>
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <div className="space-y-3 text-sm">
                  <a href="#" className="block hover:text-gray-300">Homes For Sale</a>
                  <a href="#" className="block hover:text-gray-300">New Listings For Sale</a>
                  <a href="#" className="block hover:text-gray-300">Newest Rentals</a>
                  <a href="#" className="block hover:text-gray-300">Open Houses</a>
                  <a href="#" className="block hover:text-gray-300">News</a>
                  <a href="#" className="block hover:text-gray-300">Leadership</a>
                  <a href="#" className="block hover:text-gray-300">Investor Relations</a>
                </div>
              </div>

              {/* Column 3 */}
              <div>
                <div className="space-y-3 text-sm">
                  <a href="#" className="block hover:text-gray-300">RE/MAX Holdings</a>
                  <a href="#" className="block hover:text-gray-300">Invest in a RE/MAX Franchise</a>
                  <a href="#" className="block hover:text-gray-300">RE/MAX, LLC Careers</a>
                  <a href="#" className="block hover:text-gray-300">Become a RE/MAX Agent</a>
                </div>
              </div>

              {/* Column 4 */}
              <div>
                <div className="space-y-3 text-sm">
                  <a href="#" className="block hover:text-gray-300">NAHREP English-Spanish Glossary of Real Estate Industry Terms</a>
                  <a href="#" className="block hover:text-gray-300">Advertise on the RE/MAX Media Network</a>
                  <a href="#" className="block hover:text-gray-300">LifeLock™ Home Title Protect</a>

                  {/* Children's Miracle Network Logo */}
                  <div className="mt-6">
                    <div className="bg-white rounded p-2 inline-block">
                      <div className="text-blue-900 text-xs font-bold">
                        <div>Children's</div>
                        <div>Miracle Network</div>
                        <div>Hospitals</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Family of Brands */}
            <div className="border-t border-blue-800 pt-8 mb-8">
              <h4 className="text-center mb-6 text-lg">Our Family of Brands</h4>
              <div className="flex justify-center items-center space-x-12">
                <div className="bg-white text-blue-900 px-4 py-2 rounded font-bold text-sm">
                  MOTTO MORTGAGE
                </div>
                <div className="text-2xl font-bold text-cyan-400">
                  wemlo.
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-blue-800 pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
                {/* Left side - Legal text */}
                <div className="text-xs text-gray-300 max-w-2xl">
                  <p className="mb-2">Each office independently owned and operated.</p>
                  <p className="mb-2">RE/MAX, LLC is an Equal Opportunity Employer and supports the Fair Housing Act and equal opportunity housing.</p>
                  <p className="mb-2">If you have a disability that is preventing you from experiencing this website, call (800) 525-7452.</p>
                  <p>© 2025 RE/MAX, LLC. All Rights Reserved.</p>
                </div>

                {/* Right side - Social links and legal links */}
                <div className="flex flex-col space-y-4">
                  {/* Social Media Icons */}
                  <div className="flex space-x-4 justify-end">
                    <a href="#" className="hover:text-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a href="#" className="hover:text-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.093.112.105.210.077.323-.083.345-.402 1.618-.402 1.618-.053.225-.172.271-.402.165C4.045 16.983 2.963 14.15 2.963 11.94c0-4.299 3.123-8.24 9.004-8.24 4.727 0 8.407 3.366 8.407 7.873 0 4.699-2.963 8.476-7.077 8.476-1.382 0-2.679-.718-3.121-1.568-.272 1.041-1.02 2.631-1.102 2.967-.397 1.283-1.46 2.896-2.177 3.874 1.639.508 3.391.782 5.204.782 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z" />
                      </svg>
                    </a>
                    <a href="#" className="hover:text-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="#" className="hover:text-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                    <a href="#" className="hover:text-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="hover:text-gray-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                      </svg>
                    </a>
                  </div>

                  {/* Legal Links */}
                  <div className="flex space-x-6 text-sm justify-end">
                    <a href="#" className="hover:text-gray-300">Privacy Notice</a>
                    <a href="#" className="hover:text-gray-300">Terms of Use</a>
                    <a href="#" className="hover:text-gray-300">Your Privacy Choices</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </footer>
    </main>
  )
}
