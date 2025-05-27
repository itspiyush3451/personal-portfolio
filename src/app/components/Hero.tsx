// components/Hero.tsx
"use client";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const socialLinks = [
    {
      icon: Twitter,
      href: "https://x.com/Piyush3451",
      label: "Twitter/X",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/piyush-yadav-609500234/",
      label: "LinkedIn",
    },
    { icon: Github, href: "https://github.com/itspiyush3451", label: "GitHub" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/piyyuss__/",
      label: "Instagram",
    },
    { icon: Mail, href: "mailto:piyus3451@gmail.com", label: "Email" },
  ];

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-24 pb-20 bg-background border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-8">
              {/* Intro Text */}
              <div>
                <p className="text-primary font-medium uppercase tracking-wider mb-3">
                  HELLO,
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                  I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Piyush Yadav</span>
                  <br />
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-normal mt-2 block text-foreground/80">
                    a full-stack developer
                  </span>
                </h1>
              </div>
              
              {/* Bio */}
              <p className="text-lg text-foreground/70 max-w-xl mx-auto lg:mx-0">
                Crafting digital experiences with modern technologies. 
                Currently pursuing my Master&apos;s degree while building 
                amazing projects.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="border border-border text-foreground px-8 py-3 rounded-lg hover:bg-muted/50 transition-all duration-300 font-medium"
                >
                  Get In Touch
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-5 justify-center lg:justify-start mt-2">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors duration-300 p-2 hover:scale-110"
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Large profile image with background effect */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl relative">
                {/* If you have an actual image, replace this with an <img> tag */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-800 flex items-center justify-center text-white text-8xl font-bold">
                  <Image 
                    src="/profilePhoto.jpg" 
                    alt="Profile" 
                    width={384} 
                    height={384} 
                    priority 
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Optional: Floating background shapes for visual interest */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary/20 blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-500/20 blur-lg"></div>
              </div>
              
              {/* Background effect */}
              <div className="absolute -z-10 w-full h-full rounded-2xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 blur-3xl opacity-30 top-4 left-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
