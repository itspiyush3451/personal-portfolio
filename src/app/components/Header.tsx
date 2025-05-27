// Header component with responsive navigation and CV viewer modal
"use client";
import { useState, useEffect } from "react";
import { Menu, X, Eye, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  cvUrl?: string; // Default resume path can be overridden
}

const Header = ({ cvUrl = "/Piyush_Yadav_Resume.pdf" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showViewer, setShowViewer] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow and background to header when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup to prevent memory leaks
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
            {/* Dev-style logo with animated bracket elements */}
            <div className="flex-shrink-0">
      <a href="#" className="group block">
        <div className="flex items-center text-3xl font-mono font-bold select-none">
          <span className="text-indigo-500 group-hover:text-purple-500 transition-all duration-300 transform group-hover:scale-110">
            &lt;
          </span>
          <span className="text-purple-500 group-hover:text-blue-500 transition-all duration-300 mx-1 transform group-hover:scale-110 group-hover:rotate-12">
            /
          </span>
          <span className="text-blue-500 group-hover:text-indigo-500 transition-all duration-300 transform group-hover:scale-110">
            &gt;
          </span>
        </div>
      </a>
    </div>

            {/* Main navigation - hidden on mobile */}
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
            
            {/* Theme toggle and resume buttons - desktop only */}
            <div className="hidden md:flex items-center space-x-4">
  <ThemeToggle />
  <button
    onClick={handleView}
    className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-muted/50"
    aria-label="View CV"
  >
    <Eye size={20} />
    <span className="text-sm font-medium">View CV</span>
  </button>
  <button
    onClick={handleDownload}
    className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-muted/50"
    aria-label="Download CV"
  >
    <Download size={20} />
    <span className="text-sm font-medium">Download CV</span>
  </button>
</div>

            {/* Mobile controls with hamburger menu */}
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

          {/* Collapsible mobile menu with smooth height transition */}
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

      {/* Resume viewer modal with embedded PDF */}
      {showViewer && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
    <div className="bg-background rounded-xl max-w-4xl w-full h-[90vh] flex flex-col border border-border shadow-2xl">
      {/* Modal Header */}
      <div className="flex justify-between items-center p-6 border-b border-border">
        <h3 className="text-xl font-semibold text-foreground">View CV</h3>
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
          Download CV
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