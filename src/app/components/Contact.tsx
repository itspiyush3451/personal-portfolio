// Contact form with animated send button and social links
"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Add a small delay to show the loading state
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", formData);
    setIsLoading(false);
    
    // Clear the form after successful submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "piyus3451@gmail.com",
      href: "mailto:piyus3451@gmail.com",
      description: "Drop me a line anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9730823374",
      href: "tel:9730823374",
      description: "Let's have a quick chat",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: "#",
      description: "Available for remote work",
    },
  ];

  // Contact links defined directly where needed

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Soft background gradient and blur effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 dark:from-blue-900/5 dark:to-purple-900/5"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title with gradient underline */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="text-blue-600" size={18} />
            <span className="text-sm font-medium text-foreground/80">Let&apos;s Talk</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-foreground/70 mt-6 max-w-2xl mx-auto leading-relaxed px-4">
            Have a project in mind or just want to say hello? I&apos;d love to hear
            from you. Let&apos;s start a conversation and see how we can work
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact details cards - left side on desktop */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="bg-muted/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/50">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-foreground/70 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Feel free to reach out through any of these channels. I&apos;m
                usually quick to respond and always open to interesting
                conversations and opportunities.
              </p>

              {/* Contact Details */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start space-x-4 p-3 sm:p-4 bg-background/80 backdrop-blur-sm rounded-xl hover:bg-primary/5 hover:border-primary/20 border border-transparent transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="text-white" size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-foreground text-sm sm:text-base">{info.label}</p>
                        <p className="text-foreground/70 text-sm break-all">{info.value}</p>
                        <p className="text-foreground/50 text-xs mt-1">{info.description}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              
            </div>

          
          </div>

          {/* Contact Form - Takes 3 columns on large screens */}
          <div className="lg:col-span-3">
            <div className="bg-muted/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-border/50 sticky top-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Send className="text-white" size={16} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Send me a message
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground/80 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background/80 backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground/80 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background/80 backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground/80 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-xl bg-background/80 backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground/80 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-xl bg-background/80 backdrop-blur-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none hover:border-primary/50"
                    placeholder="Tell me about your project or how we can work together..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

             
            </div>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-muted/80 to-muted/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border/50 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
              Prefer other ways to connect?
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <a
                href="https://www.linkedin.com/in/piyush-yadav-609500234/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-4 sm:px-6 py-3 rounded-xl hover:bg-primary/80 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/itspiyush3451"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gray-800 text-white px-4 sm:px-6 py-3 rounded-xl hover:bg-gray-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;