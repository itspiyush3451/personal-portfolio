// components/Header.tsx
"use client";
import { useState, useEffect } from "react";
import { Menu, X, Eye, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  cvUrl?: string; // Optional CV URL prop
}

const Header = ({ cvUrl = "/Piyush_Yadav_Resume.pdf" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showViewer, setShowViewer] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Work" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV_Piyush.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    setShowViewer(true);
  };

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-background/90 backdrop-blur-md shadow-sm border-b border-border/50' : 'py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="group">
                <h1 className="text-2xl font-bold tracking-tight text-foreground">
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-600 hover:via-blue-600 hover:to-indigo-600 transition-all duration-300">
                    Piyush.
                  </span>
                </h1>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-all duration-200 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
            
            {/* Theme Toggle and CV - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={handleView}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200"
                aria-label="View CV"
              >
                <Eye size={20} />
              </button>
              <button
                onClick={handleDownload}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200"
                aria-label="Download CV"
              >
                <Download size={20} />
              </button>
            </div>

            {/* Mobile/Tablet Navigation Toggle */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={handleView}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200"
                aria-label="View CV"
              >
                <Eye size={20} />
              </button>
              <button
                onClick={handleDownload}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200"
                aria-label="Download CV"
              >
                <Download size={20} />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary transition-colors ml-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="py-4 space-y-6">
              <nav className="flex flex-col space-y-6 items-center">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-foreground/80 hover:text-foreground transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* CV Viewer Modal */}
      {showViewer && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-background rounded-xl max-w-4xl w-full h-[90vh] flex flex-col border border-border shadow-2xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-border">
              <h3 className="text-xl font-semibold text-foreground">CV Preview</h3>
              <button
                onClick={() => setShowViewer(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors text-foreground hover:scale-110"
              >
                <X size={24} />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 p-6">
              <embed
                src="/Piyush_Yadav_Resume.pdf"
                type="application/pdf"
                className="w-full h-full border rounded-lg shadow-inner"
                title="CV Preview"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-border flex justify-end gap-3">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 font-medium hover:scale-105"
              >
                <Download size={16} />
                Download
              </button>
              <button
                onClick={() => setShowViewer(false)}
                className="px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;