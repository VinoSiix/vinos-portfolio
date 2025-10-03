import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="AI and Web Development Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto" data-aos="fade-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
          Vino: <span className="text-primary">AI-Driven</span> Dev
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
          Innovative developer specializing in cutting-edge AI integration and modern web technologies. 
          Transforming complex problems into elegant solutions through the power of artificial intelligence 
          and sophisticated web development frameworks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-100">
          <button 
            onClick={scrollToProjects}
            className="wine-btn text-lg"
          >
            View My Work
          </button>
          
          <div className="flex space-x-4">
            <a href="https://github.com/VinoSiix" className="p-3 glass-effect rounded-full hover:text-primary transition-colors animate-hover-pulse" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://x.com/VinoSiix" className="p-3 glass-effect rounded-full hover:text-primary transition-colors animate-hover-pulse" aria-label="Twitter/X">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce delay-300">
          <ArrowDown className="mx-auto text-primary" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
