import React from 'react';
import { Github, Linkedin, Mail, Heart, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-primary mb-4">Vino</div>
            <p className="text-muted-foreground mb-4">
              AI-driven developer crafting intelligent web solutions with a passion for innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/VinoSiix"
                className="p-2 glass-effect rounded-full hover:border-primary/50 hover:text-primary transition-all duration-300 transform hover:scale-110 hover:animate-wine-glow"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://x.com/VinoSiix"
                className="p-2 glass-effect rounded-full hover:border-primary/50 hover:text-primary transition-all duration-300 transform hover:scale-110 hover:animate-wine-glow"
                aria-label="Twitter/X"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'Projects', 'About', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block wine-link text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Services</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>AI Integration</p>
              <p>Web Development</p>
              <p>Machine Learning</p>
              <p>Technical Consulting</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center space-x-2">
            <span>Built by Vino – AI Dev with Dark/Wine-Red Vibe</span>
            <Heart className="text-primary" size={16} />
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Vino Portfolio. Crafted with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
