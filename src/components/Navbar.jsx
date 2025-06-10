import React, { useState } from 'react';
import { Search, MapPin, User, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';
const Navbar = ({ currentPage, setCurrentPage }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const expertiseItems = {
        main: [
            { title: 'Overview Expertise', hasArrow: true },
            {
                title: 'Solutions along the Value Chain',
                description: 'Innovation has always been a driving factor. We develop tailored, future-oriented solutions in wire processing.'
            }
        ],
        sections: [
            {
                title: 'SMART FACTORY by KOMAX',
                items: ['Batch Production', 'Data Wire', 'High Voltage', 'Process Integration']
            },
            {
                title: 'Industries',
                items: ['Cabinet Building', 'Railway', 'Aerospace', 'Quality Tools', 'Trade Fairs']
            }
        ]
    };

    const productsItems = {
        main: [
            { title: 'Overview Products', hasArrow: true },
            {
                title: 'Wire Processing Solutions',
                description: 'Comprehensive range of automated wire processing machines and systems for efficient production.'
            }
        ],
        sections: [
            {
                title: 'PROCESSING MACHINES',
                items: ['Wire Stripping', 'Crimping Systems', 'Cutting Tools', 'Testing Equipment']
            },
            {
                title: 'HARNESS SYSTEMS',
                items: ['Assembly Lines', 'Production Tools', 'Quality Control', 'Integration']
            }
        ]
    };

    const servicesItems = {
        main: [
            { title: 'Overview Services', hasArrow: true },
            {
                title: 'Support & Maintenance',
                description: 'Complete service portfolio to maximize your production efficiency and equipment lifespan.'
            }
        ],
        sections: [
            {
                title: 'TECHNICAL SUPPORT',
                items: ['Remote Support', 'On-site Service', 'Emergency Service', 'Consulting']
            },
            {
                title: 'TRAINING & PARTS',
                items: ['Operator Training', 'Spare Parts', 'Maintenance', 'Digital Services']
            }
        ]
    };

    const careersItems = {
        main: [
            { title: 'Overview Careers', hasArrow: true },
            {
                title: 'Join Our Team',
                description: 'Build your career with us and become part of a global leader in automated wire processing.'
            }
        ],
        sections: [
            {
                title: 'OPPORTUNITIES',
                items: ['Engineering', 'Sales & Marketing', 'Production', 'Research & Development']
            },
            {
                title: 'BENEFITS',
                items: ['Working Culture', 'Development', 'Benefits Package', 'Global Career']
            }
        ]
    };

    const moreItems = {
        main: [
            { title: 'Overview Company', hasArrow: true },
            {
                title: 'About Komax',
                description: 'Learn more about our company, values, and commitment to sustainable innovation.'
            }
        ],
        sections: [
            {
                title: 'COMPANY INFO',
                items: ['About Us', 'Leadership', 'History', 'Locations']
            },
            {
                title: 'INVESTOR & MEDIA',
                items: ['Investor Relations', 'News & Media', 'Sustainability', 'Contact']
            }
        ]
    };

    const handleMouseEnter = (dropdown) => {
        setActiveDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const renderComplexDropdown = (items) => (
        <div className="absolute top-full left-0 w-screen max-w-4xl bg-white shadow-2xl border-t-4 border-black rounded-b-lg overflow-hidden z-50">
            <div className="flex">
                {/* Left Section */}
                <div className="w-2/5 p-8 bg-gray-50">
                    <div className="space-y-5">
                        {items.main.map((item, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-base font-semibold text-gray-800 group-hover:text-black transition-colors">
                                        {item.title}
                                    </h3>
                                    {item.hasArrow && (
                                        <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                                    )}
                                </div>
                                {item.description && (
                                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-3/5 p-6">
                    <div className="grid grid-cols-2 gap-6">
                        {items.sections.map((section, index) => (
                            <div key={index}>
                                <h4 className="font-bold text-gray-800 mb-3 text-xs uppercase tracking-wide">
                                    {section.title}
                                </h4>
                                <div className="space-y-2">
                                    {section.items.map((item, itemIndex) => (
                                        <a
                                            key={itemIndex}
                                            href="#"
                                            className="block text-gray-600 hover:text-black transition-colors text-xs py-1"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="relative z-40">
            {/* Main Navbar */}
            <nav className="relative bg-white shadow-lg">
                {/* Diagonal Background Element */}
                <div className="absolute inset-0 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1400 80" preserveAspectRatio="none">
                        <polygon
                            points="0,0 750,0 800,80 0,80"
                            fill="#2d3748"
                        />
                        <polygon
                            points="750,0 1400,0 1400,80 800,80"
                            fill="#ffffff"
                        />

                    </svg>
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 py-4">
                    <div className="max-w-7xl mx-auto flex items-center">
                        {/* Logo */}
                        <div
                            className="cursor-pointer mr-8 group"
                            onClick={() => setCurrentPage && setCurrentPage('home')}
                        >
                            <img 
                                src={logo}
                                alt="Komax - Automated Wire Processing" 
                                className="h-10 w-auto group-hover:opacity-80 transition-opacity"
                            />
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden lg:flex items-center space-x-4 flex-1">
                            {/* Expertise Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => handleMouseEnter('expertise')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className="text-white hover:text-gray-300 transition-colors font-medium py-6 px-3 border-b-2 border-transparent hover:border-gray-400 text-sm"
                                    onClick={() => setCurrentPage && setCurrentPage('expertise')}
                                >
                                    EXPERTISE
                                </button>
                                {activeDropdown === 'expertise' && renderComplexDropdown(expertiseItems)}
                            </div>

                            {/* Products Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => handleMouseEnter('products')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className="text-white hover:text-gray-300 transition-colors font-medium py-6 px-3 border-b-2 border-transparent hover:border-gray-400 text-sm"
                                    onClick={() => setCurrentPage && setCurrentPage('products')}
                                >
                                    PRODUCTS
                                </button>
                                {activeDropdown === 'products' && renderComplexDropdown(productsItems)}
                            </div>

                            {/* Services Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => handleMouseEnter('services')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="text-white hover:text-gray-300 transition-colors font-medium py-6 px-3 border-b-2 border-transparent hover:border-gray-400 text-sm">
                                    SERVICES
                                </button>
                                {activeDropdown === 'services' && renderComplexDropdown(servicesItems)}
                            </div>

                            {/* Careers Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => handleMouseEnter('careers')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="text-white hover:text-gray-300 transition-colors font-medium py-6 px-3 border-b-2 border-transparent hover:border-gray-400 text-sm">
                                    CAREERS
                                </button>
                                {activeDropdown === 'careers' && renderComplexDropdown(careersItems)}
                            </div>

                            {/* More Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => handleMouseEnter('more')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="text-white  hover:text-gray-300 transition-colors font-medium py-6 px-0 flex items-center border-b-2 border-transparent hover:border-gray-400 text-sm">
                                    MORE
                                    <div className="flex space-x-1 ml-2">
                                        <div className="w-1 h-1 bg-current rounded-full"></div>
                                        <div className="w-1 h-1 bg-current rounded-full"></div>
                                        <div className="w-1 h-1 bg-current rounded-full"></div>
                                    </div>
                                </button>
                                {activeDropdown === 'more' && renderComplexDropdown(moreItems)}
                            </div>
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center space-x-5 text-gray-700 ml-auto">
                            <Search className="w-4 h-4 cursor-pointer hover:text-black transition-colors" />
                            <User className="w-4 h-4 cursor-pointer hover:text-black transition-colors" />
                            <div className="flex items-center space-x-2 text-xs">
                                <span className="hover:text-black cursor-pointer transition-colors">India</span>
                                <span className="text-gray-400">|</span>
                                <span className="hover:text-black cursor-pointer transition-colors">English</span>
                                <MapPin className="w-3 h-3 text-black" />
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="lg:hidden flex flex-col space-y-1 ml-4 group">
                            <span className="w-6 h-0.5 bg-gray-700 group-hover:bg-black transition-colors"></span>
                            <span className="w-6 h-0.5 bg-gray-700 group-hover:bg-black transition-colors"></span>
                            <span className="w-6 h-0.5 bg-gray-700 group-hover:bg-black transition-colors"></span>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
