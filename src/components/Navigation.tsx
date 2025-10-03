import React, { useState, useEffect } from 'react';
import { Menu, X, Palette, Github, Twitter } from 'lucide-react';

// Navigation component with enhanced styling
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Load theme from localStorage on component mount
    const savedTheme = localStorage.getItem('theme') || 'darkplus-theme';
    document.body.className = savedTheme;
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const switchTheme = (theme: string) => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
    setThemeDropdownOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass-effect shadow-lg' : 'bg-background/90 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary tracking-wide">Vino</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 items-center">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="wine-link text-lg font-medium px-4 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                {item}
              </button>
            ))}

            {/* Social Links */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => window.open('https://github.com/VinoSiix', '_blank')}
                className="wine-link text-lg font-medium px-4 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300 flex items-center"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </button>

              <button
                onClick={() => window.open('https://x.com/VinoSiix', '_blank')}
                className="wine-link text-lg font-medium px-4 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300 flex items-center"
                aria-label="Twitter/X Profile"
              >
                <Twitter size={20} />
              </button>
            </div>

            {/* Theme Switcher */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="wine-link text-lg font-medium px-4 py-2 rounded-lg hover:bg-primary/10 transition-all duration-300 flex items-center"
                aria-label="Switch theme"
              >
                <Palette size={20} />
              </button>

              {themeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 glass-effect rounded-xl shadow-xl border border-border/50 z-50 backdrop-blur-lg bg-card/80">
                  <button
                    onClick={() => switchTheme('dark-theme')}
                    className="block w-full text-left px-4 py-3 text-foreground hover:bg-primary/10 rounded-t-xl transition-colors duration-200"
                  >
                    Dark Theme
                  </button>
                  <button
                    onClick={() => switchTheme('light-theme')}
                    className="block w-full text-left px-4 py-3 text-foreground hover:bg-primary/10 transition-colors duration-200"
                  >
                    Light Theme
                  </button>
                  <button
                    onClick={() => switchTheme('darkplus-theme')}
                    className="block w-full text-left px-4 py-3 text-foreground hover:bg-primary/10 rounded-b-xl transition-colors duration-200"
                  >
                    Dark+ Theme
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10 duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-3 glass-effect rounded-xl p-4 shadow-lg border border-border/50 backdrop-blur-lg bg-card/80">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 wine-link text-lg font-medium hover:bg-primary/10 rounded-lg px-4 transition-all duration-300 mb-1"
              >
                {item}
              </button>
            ))}
            
            {/* Mobile Theme Switcher */}
            <div className="mt-3 pt-3 border-t border-border/50">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="wine-link text-lg font-medium py-3 w-full text-left hover:bg-primary/10 rounded-lg px-4 transition-all duration-300 flex items-center"
                aria-label="Switch theme"
              >
                <Palette size={20} className="mr-2" />
                Switch Theme
              </button>
              
              {themeDropdownOpen && (
                <div className="mt-2 space-y-1">
                  <button
                    onClick={() => switchTheme('dark-theme')}
                    className="block w-full text-left px-4 py-3 text-foreground hover:bg-primary/10 rounded-lg transition-colors duration-200"
                  >
                    Dark Theme
                  </button>
                  <button
                    onClick={() => switchTheme('light-theme')}
                    className="block w-full text-left px-4 py-3 text-foreground hover:bg-primary/10 rounded-lg transition-colors duration-200"
                  >
                    Light Theme
                  </button>
                  <button
                    onClick={() => switchTheme('darkplus-theme')}
                    className="block w-full text-left px-4 py-3 text-foreground hover:bg-primary/10 rounded-lg transition-colors duration-200"
                  >
                    Dark+ Theme
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
