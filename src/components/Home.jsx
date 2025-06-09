import React, { useState, useEffect } from 'react';
import {
    ChevronRight,
    ChevronLeft,
    ArrowRight,
    Calendar,
    Play,
    MapPin
} from 'lucide-react';
import HeroCarousel from './Carousel';

const Homepage = ({ setCurrentPage, setSelectedProduct }) => {





    const products = [
        {
            id: 1,
            category: "Twister",
            name: "SIGMA 688 LTT",
            description: "Manufacture UTP cables with the new LTT (low torsion twisting) quality standard using proven Komax technology within the Sigma family.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcl941OCfMiSlU96SL6FJci0VfdfqTuBHWVw&s?w=400&h=300&fit=crop&crop=center",
            type: "machine"
        },
        {
            id: 2,
            category: "Automated Platform Data Wire",
            name: "LAMBDA 3 SERIES",
            description: "The Lambda 3 platform is the ideal entry-level solution for high-quality, semiautomatic cable assembly where space is limited.",
            image: "https://eu-central-1-enterprise-euc1.graphassets.com/Avst4xSGfMbQnhS8Fgi62z/resize=fit:crop,height:540,width:960/output=format:png/quality=value:90/cm9ic3gkx65ys07w8ahwiysbh",
            type: "machine"
        },
        {
            id: 3,
            category: "Taping",
            name: "KTR 5",
            description: "The KTR 5 is the smallest model from Komax with an open bundling head. The operator-controlled machine is ideal for taping wire harness lengths of 1.5 meters or more.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtBK9PKhv9lQXFtKRE9nI6gj8KFi0IOdJRQA&s",
            type: "machine"
        }
    ];

    const stories = [
        {
            title: "Lambda 3: Flexible entry-level solution for semi-automatic cable assembly",
            author: "Julia Weny",
            date: "26 May 2025",
            category: "Technology & Innovation",
            image: "https://eu-central-1-enterprise-euc1.graphassets.com/Avst4xSGfMbQnhS8Fgi62z/resize=fit:crop,height:540,width:960/output=format:png/quality=value:90/cm9ic3gkx65ys07w8ahwiysbh",

        },
        {
            title: "Komax with self-designed solar robot at this year's LUGA",
            author: "Matthias Wüller",
            date: "5 May 2025",
            category: "Inside Komax",
            image: "https://eu-central-1-enterprise-euc1.graphassets.com/Axl5x2heXSkS3gUfqbj1Cz/resize=fit:crop,width:780/output=format:png/quality=value:90/cmaarbc6h5uiy07uonfouky6s"
        },
        {
            title: "SMART FACTORY by KOMAX – from vision to reality",
            author: "Roger Müller",
            date: "29 April 2025",
            category: "Technology & Innovation",
            image: "https://eu-central-1-enterprise-euc1.graphassets.com/Axl5x2heXSkS3gUfqbj1Cz/resize=fit:crop,height:540,width:960/output=format:png/quality=value:90/cm7bz6kv663ec07vzxls77302"
        }
    ];

    const tradeFairs = [
        {
            name: "TECH.CON",
            date: "12/6/2025 - 13/6/2025",
            location: "Dornbirn, Austria"
        },
        {
            name: "Zuken Innovation World (ZIW)",
            date: "12/6/2025 - 12/6/2025",
            location: "Paris, France"
        },
        {
            name: "Paris Air Show 2025",
            date: "16/6/2025 - 22/6/2025",
            location: "Le Bourget, France"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <div className="min-h-screen">
            <div className="relative z-10">
                {/* Hero Section with Carousel */}
                <HeroCarousel />

                {/* Quick Links Section */}
                <div className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="text-center group cursor-pointer">
                                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                                    <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors">Work at Komax</h3>
                                <p className="text-gray-600 mb-6 text-lg">At home and abroad opportunities</p>
                                <button className="text-red-500 hover:text-red-700 flex items-center mx-auto font-medium group">
                                    Start your career
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            <div className="text-center group cursor-pointer">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                                    <MapPin className="w-10 h-10 text-blue-500" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">Get in touch with Komax</h3>
                                <p className="text-gray-600 mb-6 text-lg">100+ Locations, 6 Continents</p>
                                <button className="text-blue-500 hover:text-blue-700 flex items-center mx-auto font-medium group">
                                    Contact us
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            <div className="text-center group cursor-pointer">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                                    <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5zM15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-500 transition-colors">Komax Stories</h3>
                                <p className="text-gray-600 mb-6 text-lg">Insights into the world of wire processing</p>
                                <button className="text-green-500 hover:text-green-700 flex items-center mx-auto font-medium group">
                                    Read more
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Products */}
                <div className="bg-gray-50 py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Start exploring THE WORLD OF KOMAX</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Discover our innovative wire processing solutions designed to meet the highest standards of quality and efficiency
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {products.map((product, index) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                    onClick={() => {
                                        if (setSelectedProduct && setCurrentPage) {
                                            setSelectedProduct(product);
                                            setCurrentPage('product-detail');
                                        }
                                    }}
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-8">
                                        <p className="text-sm text-red-500 font-medium mb-3 uppercase tracking-wide">{product.category}</p>
                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors">{product.name}</h3>
                                        <p className="text-gray-600 leading-relaxed">{product.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stories Section */}
                <div className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-between items-center mb-12">
                            <div>
                                <p className="text-gray-600 mb-2 text-lg">Read the latest</p>
                                <h2 className="text-4xl font-bold">KOMAX STORIES</h2>
                            </div>
                            <button className="text-red-500 hover:text-red-700 flex items-center text-lg font-medium group">
                                See all
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {stories.map((story, index) => (
                                <div
                                    key={index}
                                    className="cursor-pointer group"
                                >
                                    <div className="relative overflow-hidden rounded-xl mb-6">
                                        <img
                                            src={story.image}
                                            alt={story.title}
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <p className="text-sm text-red-500 font-medium mb-3 uppercase tracking-wide">{story.category}</p>
                                    <h3 className="font-bold text-xl mb-4 leading-tight group-hover:text-red-500 transition-colors">{story.title}</h3>
                                    <div className="flex items-center text-gray-500">
                                        <span className="mr-4">{story.author}</span>
                                        <span>{story.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trade Fairs */}
                <div className="bg-gray-50 py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-between items-center mb-12">
                            <div>
                                <p className="text-gray-600 mb-2 text-lg">Meet us in person</p>
                                <h2 className="text-4xl font-bold">UPCOMING TRADE FAIRS</h2>
                            </div>
                            <button className="text-red-500 hover:text-red-700 flex items-center text-lg font-medium group">
                                See all
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {tradeFairs.map((fair, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <h3 className="font-bold text-2xl mb-6 text-gray-800">{fair.name}</h3>
                                    <div className="flex items-center text-gray-600 mb-4">
                                        <Calendar className="w-5 h-5 mr-3 text-red-500" />
                                        <span>{fair.date}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <MapPin className="w-5 h-5 mr-3 text-red-500" />
                                        <span>{fair.location}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Anniversary Section */}
                <div className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="text-9xl font-bold text-gray-200 absolute -top-8 -left-4">50</div>
                                <div className="relative z-10">
                                    <div className="flex items-center mb-8">
                                        <div className="text-8xl font-bold text-gray-800 mr-6">50</div>
                                        <div>
                                            <div className="text-3xl font-bold text-red-500 mb-2">YEARS</div>
                                            <div className="text-lg text-gray-600">of Innovation</div>
                                        </div>
                                    </div>
                                    <h2 className="text-4xl font-bold mb-6 leading-tight">
                                        Celebrating Five Decades of Wire Processing Excellence
                                    </h2>
                                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                        From our founding in 1975 to today, Komax has been at the forefront of wire processing innovation,
                                        serving customers worldwide with cutting-edge solutions and unwavering commitment to quality.
                                    </p>
                                    <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center">
                                        Learn Our History
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </button>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-12 text-white transform rotate-1 hover:rotate-0 transition-transform duration-300">
                                    <div className="grid grid-cols-2 gap-8 text-center">
                                        <div>
                                            <div className="text-4xl font-bold mb-2">100+</div>
                                            <div className="text-lg opacity-90">Global Locations</div>
                                        </div>
                                        <div>
                                            <div className="text-4xl font-bold mb-2">6</div>
                                            <div className="text-lg opacity-90">Continents</div>
                                        </div>
                                        <div>
                                            <div className="text-4xl font-bold mb-2">3000+</div>
                                            <div className="text-lg opacity-90">Employees</div>
                                        </div>
                                        <div>
                                            <div className="text-4xl font-bold mb-2">50K+</div>
                                            <div className="text-lg opacity-90">Machines Delivered</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Wire Processing?</h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Join thousands of manufacturers worldwide who trust Komax for their wire processing needs.
                            Let's discuss how our solutions can optimize your production.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                                Contact Sales
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center">
                                <Play className="w-5 h-5 mr-2" />
                                Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;