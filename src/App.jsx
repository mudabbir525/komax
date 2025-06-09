import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  User, 
  MapPin, 
  ChevronRight, 
  ChevronLeft, 
  ArrowRight,
  Calendar,
  Play,
  Maximize2,
  Check
} from 'lucide-react';

const KomaxWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [compareItems, setCompareItems] = useState([]);

  // Auto-slide for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "ALONG THE ENTIRE VALUE CHAIN",
      subtitle: "Wire Processing Solutions",
      image: "/api/placeholder/800/600"
    },
    {
      title: "INNOVATIVE TECHNOLOGY",
      subtitle: "Smart Manufacturing",
      image: "/api/placeholder/800/600"
    },
    {
      title: "GLOBAL EXPERTISE",
      subtitle: "Local Support",
      image: "/api/placeholder/800/600"
    }
  ];

  const products = [
    {
      id: 1,
      category: "Twister",
      name: "SIGMA 688 LTT",
      description: "Manufacture UTP cables with the new LTT (low torsion twisting) quality standard using proven Komax technology within the Sigma family.",
      image: "/api/placeholder/400/300",
      type: "machine"
    },
    {
      id: 2,
      category: "Automated Platform Data Wire",
      name: "LAMBDA 3 SERIES",
      description: "The Lambda 3 platform is the ideal entry-level solution for high-quality, semiautomatic cable assembly where space is limited.",
      image: "/api/placeholder/400/300",
      type: "machine"
    },
    {
      id: 3,
      category: "Taping",
      name: "KTR 5",
      description: "The KTR 5 is the smallest model from Komax with an open bundling head. The operator-controlled machine is ideal for taping wire harness lengths of 1.5 meters or more.",
      image: "/api/placeholder/400/300",
      type: "machine"
    }
  ];

  const accessories = [
    {
      id: 4,
      category: "Accessories",
      name: "TOUCH SCREEN",
      description: "The touchscreen for Komax wire processing machines makes operation even more intuitive and simpler, as no additional mouse or keyboard is required.",
      image: "/api/placeholder/400/300",
      type: "accessory",
      detailed: "Operation via a touchscreen is extremely simple: The parameters on the machine can be set on the screen with a finger or a pen. For example, when tapping on 'wire dimension', a keypad with ten numeric keys appears immediately, on which the length can be entered. The control elements and fonts are enlarged to make them easier to read and operate. This increases efficiency and ease of use. A mouse or keyboard can still be used for complex functions and text input. The user interface is and remains TopWin–it is therefore not necessary to retrain users."
    },
    {
      id: 5,
      category: "Accessories",
      name: "BAR CODE SCANNER",
      description: "The wireless barcode scanner is perfect for efficient wire processing as a robust, industrial-grade hand-held scanner for fast detection of 1D and 2D codes.",
      image: "/api/placeholder/400/300",
      type: "accessory"
    },
    {
      id: 6,
      category: "Accessories",
      name: "SEALS CLEANING DEVICE",
      description: "The Komax seals cleaning device removes dirt and silicone oil and thus facilitates error-free seal placement in automated wire assembly.",
      image: "/api/placeholder/400/300",
      type: "accessory"
    }
  ];

  const stories = [
    {
      title: "Lambda 3: Flexible entry-level solution for semi-automatic cable assembly",
      author: "Julia Weny",
      date: "26 May 2025",
      category: "Technology & Innovation",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Komax with self-designed solar robot at this year's LUGA",
      author: "Matthias Wüller",
      date: "5 May 2025",
      category: "Inside Komax",
      image: "/api/placeholder/400/300"
    },
    {
      title: "SMART FACTORY by KOMAX – from vision to reality",
      author: "Roger Müller",
      date: "29 April 2025",
      category: "Technology & Innovation",
      image: "/api/placeholder/400/300"
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

  const toggleCompare = (productId) => {
    setCompareItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const Navigation = () => (
    <motion.nav 
      className="bg-gray-700 text-white px-6 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          className="text-2xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => setCurrentPage('home')}
        >
          komax
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {['EXPERTISE', 'PRODUCTS', 'SERVICES', 'CAREERS', 'MORE'].map((item) => (
            <motion.button
              key={item}
              className="hover:text-red-400 transition-colors font-medium"
              whileHover={{ y: -2 }}
              onClick={() => {
                if (item === 'PRODUCTS') setCurrentPage('products');
                if (item === 'EXPERTISE') setCurrentPage('home');
              }}
            >
              {item}
            </motion.button>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 cursor-pointer hover:text-red-400 transition-colors" />
          <User className="w-5 h-5 cursor-pointer hover:text-red-400 transition-colors" />
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">India English</span>
          </div>
        </div>
      </div>
    </motion.nav>
  );

  const Breadcrumb = ({ items }) => (
    <div className="flex items-center space-x-2 text-sm text-gray-600 px-6 py-4">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <motion.span 
            className={`cursor-pointer ${index === items.length - 1 ? 'text-gray-400' : 'hover:text-blue-600'}`}
            whileHover={index !== items.length - 1 ? { scale: 1.02 } : {}}
            onClick={() => {
              if (item === 'Products') setCurrentPage('products');
              if (item === 'Home') setCurrentPage('home');
            }}
          >
            {item}
          </motion.span>
          {index < items.length - 1 && <ChevronRight className="w-4 h-4" />}
        </React.Fragment>
      ))}
    </div>
  );

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 flex items-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
              <div className="text-white max-w-2xl">
                <motion.p 
                  className="text-lg mb-2"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>
                <motion.h1 
                  className="text-5xl font-bold mb-8 leading-tight"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>
                <motion.button 
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded font-medium transition-colors"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Expertises
                </motion.button>
              </div>
              <motion.div 
                className="hidden lg:block w-1/2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Hero" 
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Slide Navigation */}
        <div className="absolute bottom-6 right-6 flex space-x-2">
          <button 
            onClick={() => setCurrentSlide(prev => (prev - 1 + 3) % 3)}
            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setCurrentSlide(prev => (prev + 1) % 3)}
            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-2">Work at Komax</h3>
            <p className="text-gray-600 mb-4">At home and abroad opportunities</p>
            <motion.button 
              className="text-blue-600 hover:text-blue-800 flex items-center mx-auto"
              whileHover={{ x: 5 }}
            >
              Start your career <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-2">Get in touch with Komax</h3>
            <p className="text-gray-600 mb-4">100+ Locations, 6 Continents</p>
            <motion.button 
              className="text-blue-600 hover:text-blue-800 flex items-center mx-auto"
              whileHover={{ x: 5 }}
            >
              Contact us <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-2">Komax Stories</h3>
            <p className="text-gray-600 mb-4">Insights into the world of wire processing</p>
            <motion.button 
              className="text-blue-600 hover:text-blue-800 flex items-center mx-auto"
              whileHover={{ x: 5 }}
            >
              Read more <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Start exploring THE WORLD OF KOMAX
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => {
                  setSelectedProduct(product);
                  setCurrentPage('product-detail');
                }}
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-gray-600 mb-2">Read the latest</p>
              <h2 className="text-3xl font-bold">KOMAX STORIES</h2>
            </div>
            <motion.button 
              className="text-blue-600 hover:text-blue-800 flex items-center"
              whileHover={{ x: 5 }}
            >
              See all <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                className="cursor-pointer"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <img src={story.image} alt={story.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <p className="text-sm text-blue-600 mb-2">{story.category}</p>
                <h3 className="font-bold mb-3 leading-tight">{story.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">{story.author}</span>
                  <span>{story.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Trade Fairs */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-gray-600 mb-2">Meet us in person</p>
              <h2 className="text-3xl font-bold">UPCOMING TRADE FAIRS</h2>
            </div>
            <motion.button 
              className="text-blue-600 hover:text-blue-800 flex items-center"
              whileHover={{ x: 5 }}
            >
              See all <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tradeFairs.map((fair, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow cursor-pointer"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-bold text-lg mb-3">{fair.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{fair.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{fair.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Anniversary Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <motion.div 
              className="w-1/2"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-8xl font-bold flex items-center">
                50
                <div className="ml-4">
                  <motion.div 
                    className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </div>
              </div>
              <div className="text-2xl font-bold mt-2">
                komax<br/>
                50-year<br/>
                anniversary
              </div>
            </motion.div>
            
            <motion.div 
              className="w-1/2 pl-12"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">50-Year Anniversary: Celebrating Connections</h2>
              <p className="text-gray-600 mb-6">
                Join us in celebrating 50 years of Komax. In our anniversary year, 2025, 
                we will take you on a journey through time and give you exciting insights 
                into the world of the Komax Group. Visit our anniversary page and marvel 
                at our historic anecdotes and recollections.
              </p>
              <motion.button 
                className="text-blue-600 hover:text-blue-800 flex items-center"
                whileHover={{ x: 5 }}
              >
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProductsPage = () => (
    <div className="min-h-screen">
      <Breadcrumb items={['Home', 'Products', 'Accessories']} />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.h1 
          className="text-4xl font-bold mb-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          ACCESSORIES
        </motion.h1>
        
        <motion.p 
          className="text-gray-600 mb-12 max-w-4xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Komax offers an extensive range of accessories for high quality and efficiency. 
          This makes it possible for users to upgrade their processing systems with a touchscreen, 
          barcode scanner or seal cleaning module as required.
        </motion.p>
        
        <div className="space-y-12">
          {accessories.map((product, index) => (
            <motion.div
              key={product.id}
              className="flex items-center space-x-8 cursor-pointer group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => {
                setSelectedProduct(product);
                setCurrentPage('product-detail');
              }}
            >
              <div className="w-80 h-60 bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={compareItems.includes(product.id)}
                      onChange={() => toggleCompare(product.id)}
                      className="rounded"
                    />
                    <span className="text-sm">Compare</span>
                  </label>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {compareItems.length > 0 && (
          <motion.div 
            className="fixed bottom-6 right-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
              {compareItems.length} items selected for comparison
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );

  const ProductDetailPage = () => {
    if (!selectedProduct) return null;
    
    return (
      <div className="min-h-screen">
        <Breadcrumb items={['Home', 'Products', 'Accessories', 'Touch screen']} />
        
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-start space-x-12">
            {/* Product Image */}
            <motion.div 
              className="w-1/2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-96 object-cover"
                />
                <motion.button 
                  className="absolute top-4 right-4 bg-white/80 p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  <Maximize2 className="w-5 h-5" />
                </motion.button>
              </div>
              
              {/* Thumbnail */}
              <div className="mt-4">
                <img 
                  src={selectedProduct.image} 
                  alt="Thumbnail" 
                  className="w-20 h-20 object-cover rounded border-2 border-blue-500"
                />
              </div>
            </motion.div>
            
            {/* Product Info */}
            <motion.div 
              className="w-1/2"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm text-gray-500 mb-2">{selectedProduct.category}</p>
              <h1 className="text-4xl font-bold mb-6">{selectedProduct.name}</h1>
              
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {selectedProduct.description}
              </p>
              
              {selectedProduct.detailed && (
                <div className="mb-8">
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProduct.detailed}
                  </p>
                </div>
              )}
              
              <div className="flex items-center space-x-6 mb-8">
                <motion.button 
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                  whileHover={{ x: -5 }}
                >
                  Read less
                </motion.button>
                
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={compareItems.includes(selectedProduct.id)}
                    onChange={() => toggleCompare(selectedProduct.id)}
                    className="rounded"
                  />
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Compare</span>
                </label>
              </div>
              
              <motion.button 
                className="bg-gray-700 text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="w-5 h-5 mr-2" />
                Talk to an Expert
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HomePage />
          </motion.div>
        )}
        
        {currentPage === 'products' && (
          <motion.div
            key="products"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProductsPage />
          </motion.div>
        )}
        
        {currentPage === 'product-detail' && (
          <motion.div
            key="product-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
>
<ProductDetailPage />
</motion.div>
)}
</AnimatePresence>
  {/* Footer */}
  <footer className="bg-gray-800 text-white py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">KOMAX</h3>
          <p className="text-gray-400 text-sm">
            Komax is a leading global provider of innovative solutions for wire processing.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">COMPANY</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {['About us', 'Careers', 'News', 'Contact'].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">PRODUCTS</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {['Machines', 'Accessories', 'Software', 'Services'].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">CONNECT</h4>
          <div className="flex space-x-4">
            {['Facebook', 'Twitter', 'LinkedIn', 'YouTube'].map((social) => (
              <motion.div 
                key={social}
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
              >
                <span className="text-xs">{social[0]}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          © 2025 Komax Holding AG. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <span className="text-gray-400 text-sm hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="text-gray-400 text-sm hover:text-white cursor-pointer">Terms of Service</span>
          <span className="text-gray-400 text-sm hover:text-white cursor-pointer">Cookie Policy</span>
        </div>
      </div>
    </div>
  </footer>
</div>);
};

export default KomaxWebsite;