import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imageError, setImageError] = useState(false);

    const heroSlides = [
        {
            title: "STAY UP TO DATE",
            subtitle: "Komax Stories",
            description: "Discover the latest innovations, industry insights, and cutting-edge technology solutions that drive tomorrow's success.",
            buttonText: "Explore Komax Stories", 
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=700&fit=crop&crop=center",
            bgGradient: "from-slate-800 via-blue-900 to-cyan-600"
        },
        {
            title: "INNOVATION FORWARD",
            subtitle: "Technology Excellence",
            description: "Leading the future with breakthrough technologies and innovative solutions that transform industries worldwide.",
            buttonText: "Discover Innovation",
            image:"https://eu-central-1-enterprise-euc1.graphassets.com/Axl5x2heXSkS3gUfqbj1Cz/resize=fit:crop,width:870/output=format:webp/quality=value:90/U1ckhHfySz2mQrxyHuLV",
            bgGradient: "from-purple-900 via-blue-800 to-indigo-600"
        },
        {
            title: "GLOBAL IMPACT",
            subtitle: "Worldwide Solutions",
            description: "Connecting businesses across continents with scalable solutions and transformative digital experiences.",
            buttonText: "View Global Reach",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
            bgGradient: "from-emerald-900 via-teal-800 to-cyan-600"
        }
    ];

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [heroSlides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <div className="relative z-10 h-screen overflow-hidden">
            {/* Slides */}
            <div className="relative h-full">
                {heroSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ${
                            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                    >
                        {/* Background Image */}
                        {imageError ? (
                            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} flex items-center justify-center`}>
                                <div className="text-white/60 text-lg">Loading...</div>
                            </div>
                        ) : (
                            <img 
                                src={slide.image} 
                                alt={slide.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                onError={() => setImageError(true)}
                                loading="eager"
                            />
                        )}

                        {/* Overlay with gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-85`}></div>
                        
                        {/* Geometric overlay pattern */}
                        <div className="absolute inset-0">
                            <div className="absolute right-0 top-0 w-2/3 h-full">
                                <div className="relative h-full overflow-hidden">
                                    {/* Diagonal cut design */}
                                    <div className="absolute -left-32 top-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-white/10 transform skew-x-12"></div>
                                    <div className="absolute -left-16 top-0 w-full h-full bg-gradient-to-r from-transparent to-white/5 transform skew-x-12"></div>
                                    
                                    {/* Tech overlay elements */}
                                    <div className="absolute right-20 top-1/4 w-64 h-32 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"></div>
                                    <div className="absolute right-40 top-2/3 w-48 h-24 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"></div>
                                    <div className="absolute right-10 bottom-1/4 w-32 h-16 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"></div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex items-center">
                            <div className="max-w-7xl mx-auto px-6 w-full">
                                <div className="max-w-4xl text-white">
                                    <div className="overflow-hidden">
                                        <p className={`text-lg font-medium mb-4 text-red-400 tracking-wider transform transition-all duration-1000 delay-300 ${
                                            index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                        }`}>
                                            {slide.subtitle}
                                        </p>
                                    </div>

                                    <div className="overflow-hidden">
                                        <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transform transition-all duration-1000 delay-500 ${
                                            index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                                        }`}>
                                            {slide.title}
                                        </h1>
                                    </div>

                                    <div className="overflow-hidden">
                                        <p className={`text-xl mb-8 leading-relaxed max-w-2xl text-gray-100 transform transition-all duration-1000 delay-700 ${
                                            index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                        }`}>
                                            {slide.description}
                                        </p>
                                    </div>

                                    <div className="overflow-hidden">
                                        <button className={`bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-red-400/20 ${
                                            index === currentSlide ? 'translate-y-0 opacity-100 delay-1000' : 'translate-y-8 opacity-0'
                                        }`}>
                                            {slide.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-20 border border-white/20 hover:scale-110"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-20 border border-white/20 hover:scale-110"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 rounded-full transition-all duration-300 ${
                            index === currentSlide 
                                ? 'bg-white w-12' 
                                : 'bg-white/50 hover:bg-white/70 w-8'
                        }`}
                    />
                ))}
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
                <div 
                    className="h-full bg-red-500 transition-all duration-300 ease-linear"
                    style={{ 
                        width: `${((currentSlide + 1) / heroSlides.length) * 100}%`
                    }}
                />
            </div>
        </div>
    );
};

export default HeroCarousel;