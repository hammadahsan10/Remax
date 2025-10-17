"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Star, MapPin, Bed, Bath, Square } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Luxury() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTab, setActiveTab] = useState('HOMES');

    const luxuryProperties = [
        {
            id: 1,
            price: "$39,900,000",
            beds: 8,
            baths: "8F/4H",
            sqft: "17254",
            location: "Los Angeles, CA",
            image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
            title: "Modern Luxury Estate"
        },
        {
            id: 2,
            price: "$25,500,000",
            beds: 6,
            baths: "6F/3H",
            sqft: "12500",
            location: "Beverly Hills, CA",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
            title: "Hillside Villa"
        },
        {
            id: 3,
            price: "$18,750,000",
            beds: 5,
            baths: "5F/2H",
            sqft: "9800",
            location: "Malibu, CA",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
            title: "Oceanfront Penthouse"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % luxuryProperties.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + luxuryProperties.length) % luxuryProperties.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="min-h-screen bg-white">
            <Header />
            
            {/* Hero Section with Image Slider */}
            <section className="relative h-screen overflow-hidden">
                {/* Background Images */}
                {luxuryProperties.map((property, index) => (
                    <div
                        key={property.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div
                            className="w-full h-full bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${property.image})` }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40" />
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-end">
                    <div className="w-full bg-gradient-to-t from-black via-black/70 to-transparent p-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex justify-between items-end">
                                {/* Property Details */}
                                <div className="text-white">
                                    <div className="text-5xl font-bold mb-2">
                                        {luxuryProperties[currentSlide].price}
                                    </div>
                                    <div className="flex items-center space-x-6 text-lg mb-4">
                                        <div className="flex items-center">
                                            <Bed className="w-5 h-5 mr-2" />
                                            {luxuryProperties[currentSlide].beds} Beds
                                        </div>
                                        <div className="flex items-center">
                                            <Bath className="w-5 h-5 mr-2" />
                                            {luxuryProperties[currentSlide].baths} Baths
                                        </div>
                                        <div className="flex items-center">
                                            <Square className="w-5 h-5 mr-2" />
                                            {luxuryProperties[currentSlide].sqft} Sq Ft
                                        </div>
                                    </div>
                                    <div className="flex items-center text-lg">
                                        <MapPin className="w-5 h-5 mr-2" />
                                        {luxuryProperties[currentSlide].location}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 border border-gray-300">
                                    VIEW MORE HOMES IN LOS ANGELES
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white z-10">
                        <h1 className="text-6xl font-bold mb-8">
                            Find Homes and Luxury Properties in The RE/MAX Collection
                        </h1>
                        
                        {/* Navigation Tabs */}
                        <div className="flex justify-center space-x-8 mb-8">
                            <button
                                onClick={() => setActiveTab('HOMES')}
                                className={`text-2xl font-semibold pb-2 border-b-2 transition-all duration-300 ${
                                    activeTab === 'HOMES' 
                                        ? 'border-white text-white' 
                                        : 'border-transparent text-gray-300 hover:text-white'
                                }`}
                            >
                                HOMES
                            </button>
                            <button
                                onClick={() => setActiveTab('AGENTS')}
                                className={`text-2xl font-semibold pb-2 border-b-2 transition-all duration-300 ${
                                    activeTab === 'AGENTS' 
                                        ? 'border-white text-white' 
                                        : 'border-transparent text-gray-300 hover:text-white'
                                }`}
                            >
                                AGENTS
                            </button>
                        </div>

                        {/* Search Bar */}
                        <div className="flex justify-center mb-8">
                            <div className="flex bg-white rounded-lg overflow-hidden shadow-lg max-w-2xl w-full">
                                <input
                                    type="text"
                                    placeholder="Address, City, ZIP, and More"
                                    className="flex-1 px-6 py-4 text-gray-900 placeholder-gray-500 focus:outline-none"
                                />
                                <button className="bg-[#004e9b] text-white px-6 py-4 hover:bg-blue-800 transition-colors duration-300">
                                    <Search className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-xl max-w-4xl mx-auto leading-relaxed">
                            The right luxury agent can lead the way to the best homes in the world. The RE/MAX network has a presence in more than 110 countries and territories, giving The RE/MAX Collection® luxury agents global reach to help you discover unique homebuying or selling opportunities.
                        </p>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {luxuryProperties.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentSlide 
                                    ? 'bg-white' 
                                    : 'bg-white/50 hover:bg-white/75'
                            }`}
                        />
                    ))}
                </div>
            </section>

            {/* Featured Properties Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Featured Luxury Properties
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover exceptional properties from The RE/MAX Collection, featuring the world's most prestigious homes and estates.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {luxuryProperties.map((property) => (
                            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative">
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                                        <div className="flex items-center">
                                            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                                            <span className="text-sm font-semibold">Luxury</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {property.price}
                                    </h3>
                                    <h4 className="text-lg font-semibold text-gray-700 mb-4">
                                        {property.title}
                                    </h4>
                                    <div className="flex items-center text-gray-600 mb-4">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        {property.location}
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <Bed className="w-4 h-4 mr-1" />
                                            {property.beds} Beds
                                        </div>
                                        <div className="flex items-center">
                                            <Bath className="w-4 h-4 mr-1" />
                                            {property.baths} Baths
                                        </div>
                                        <div className="flex items-center">
                                            <Square className="w-4 h-4 mr-1" />
                                            {property.sqft} Sq Ft
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#004e9b] text-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold mb-6">
                        Find a Luxury Agent with The RE/MAX Collection
                    </h2>
                    <p className="text-xl mb-8 leading-relaxed">
                        When you work with a RE/MAX agent who specializes in The RE/MAX Collection, you'll receive unparalleled service and an unforgettable experience.
                    </p>
                    <button className="bg-white text-[#004e9b] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg">
                        LET'S WORK TOGETHER
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}