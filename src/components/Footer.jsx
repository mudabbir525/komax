import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-6 text-gray-900">komax</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Komax is a leading global provider of innovative solutions for wire processing. 
                With over 50 years of experience, we connect the world through cutting-edge technology 
                and exceptional service.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors group">
                  <span className="text-xs font-bold text-gray-600 group-hover:text-white">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors group">
                  <span className="text-xs font-bold text-gray-600 group-hover:text-white">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors group">
                  <span className="text-xs font-bold text-gray-600 group-hover:text-white">in</span>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors group">
                  <span className="text-xs font-bold text-gray-600 group-hover:text-white">yt</span>
                </div>
              </div>
            </div>
            
            {/* Company Links */}
            <div>
              <h4 className="font-bold mb-6 text-gray-900">COMPANY</h4>
              <ul className="space-y-3">
                {['About Us', 'Leadership', 'Careers', 'Locations', 'News & Events', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-600 text-sm hover:text-red-600 cursor-pointer transition-colors relative group"
                    >
                      {item}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Products Links */}
            <div>
              <h4 className="font-bold mb-6 text-gray-900">PRODUCTS</h4>
              <ul className="space-y-3">
                {['Wire Processing', 'Machines', 'Accessories', 'Software Solutions', 'Spare Parts', 'Training'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-600 text-sm hover:text-red-600 cursor-pointer transition-colors relative group"
                    >
                      {item}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services Links */}
            <div>
              <h4 className="font-bold mb-6 text-gray-900">SERVICES</h4>
              <ul className="space-y-3">
                {['Technical Support', 'Maintenance', 'Consulting', 'Digital Services', 'Customer Portal', 'Documentation'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-600 text-sm hover:text-red-600 cursor-pointer transition-colors relative group"
                    >
                      {item}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-200 py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                © 2025 Komax Holding AG. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <span className="text-gray-500 text-sm hover:text-red-600 cursor-pointer transition-colors relative group">
                  Privacy Policy
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </span>
                <span className="text-gray-500 text-sm hover:text-red-600 cursor-pointer transition-colors relative group">
                  Terms of Service
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </span>
                <span className="text-gray-500 text-sm hover:text-red-600 cursor-pointer transition-colors relative group">
                  Cookie Policy
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-sm">
                Quality. Innovation. Partnership.
              </span>
              <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-red-600">ISO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;