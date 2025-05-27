// Modern footer with social links and smart navigation button
"use client";
import { useState, useEffect } from "react";
import { Twitter, Instagram, Mail, ArrowUp, ArrowDown } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // { icon: Github, href: "https://github.com/itspiyush3451" },
    // { icon: Linkedin, href: "https://linkedin.com/in/piyush-yadav-609500234/" },
    { icon: Twitter, href: "https://twitter.com/Piyush3451" },
    { icon: Instagram, href: "https://instagram.com/piyyuss__" },
    { icon: Mail, href: "mailto:piyus3451@gmail.com" },
  ];

  // Keep track of whether we're at the top of the page to determine scroll button behavior
  const [isAtTop, setIsAtTop] = useState(true);

  // Function to handle scrolling logic
  const handleSmartScroll = () => {
    if (isAtTop) {
      // If at top, scroll to bottom
      window.scrollTo({ 
        top: document.documentElement.scrollHeight, 
        behavior: "smooth" 
      });
    } else {
      // If not at top, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Track scroll position to determine button state
  useEffect(() => {
    const handleScroll = () => {
      // Check if we're at the top of the page (with a small threshold)
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsAtTop(scrollTop < 200);
    };

    // Initialize scroll position
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 border-t border-gray-800/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 py-12 text-center">
        {/* Social Links */}
        <div className="flex justify-center space-x-3 mb-8">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-500/20"
              >
                <IconComponent size={20} />
              </a>
            );
          })}
        </div>
        {/* Location info */}
        <div className="space-y-3 mb-8">
          
          <p className="text-gray-400 text-sm">Pune, India</p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800/50 pt-6 text-center">
          <span className="text-sm text-gray-400"> {currentYear} Piyush Yadav</span>
        </div>
      </div>

      {/* Context-aware scroll button - changes direction based on scroll position */}
      <div className="fixed right-8 bottom-8 z-50 transition-all duration-300">
        <button
          onClick={handleSmartScroll}
          className="w-14 h-14 bg-gray-900 text-blue-400 hover:text-white rounded-xl shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:scale-110 flex items-center justify-center backdrop-blur-sm border border-gray-800 hover:border-blue-900 group"
          aria-label={isAtTop ? "Scroll to bottom" : "Scroll to top"}
        >
          {isAtTop ? (
            <ArrowDown 
              className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-y-1" 
              strokeWidth={2.5}
            />
          ) : (
            <ArrowUp
              className="w-6 h-6 transform transition-transform duration-300 group-hover:-translate-y-1" 
              strokeWidth={2.5}
            />
          )}
        </button>
      </div>
    </footer>
  );
};

export default Footer;