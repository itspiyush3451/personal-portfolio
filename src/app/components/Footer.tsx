// components/Footer.tsx
"use client";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#collaborate", label: "Collaborate" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/itspiyush3451",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/piyush-yadav-609500234/",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/Piyush3451",
      label: "Twitter/X",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/piyyuss__",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:piyus3451@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Piyush Yadav
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Full-Stack Web developer creating innovative digital solutions.
                Currently pursuing Master's degree while building amazing
                projects and collaborating with fellow developers.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-3 text-gray-300">
                <p>
                  <a
                    href="mailto:piyus3451@gmail.com"
                    className="hover:text-white transition-colors duration-300"
                  >
                    piyus3451@gmail.com
                  </a>
                </p>
                <p>Pune, India</p>
                <p className="text-sm">
                  Available for collaborations and new opportunities
                </p>
              </div>

              {/* Current Status */}
              <div className="bg-green-900/30 border border-green-700 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 text-sm font-medium">
                    Available for new projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Piyush. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Built with ❤️ using Next.js & TypeScript</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-40"
        aria-label="Scroll to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
