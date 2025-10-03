import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Telegram AI Bot",
      description: "An AI-powered Telegram bot built using n8n workflow automation platform",
      tech: ["n8n", "Telegram API", "AI", "LLM"],
      image: "🤖",
    },
    {
      title: "Gmail Sorter",
      description: "A Gmail sorting automation tool that organizes emails using AI algorithms",
      tech: ["n8n", "Google API", "AI", "LLM"],
      image: "📫",
    },
    {
      title: "n8n Lead Scraper",
      description: "Automated lead generation tool that scrapes and processes business contact information",
      tech: ["n8n", "Web Scraping", "AI", "LLM"],
      image: "🛒",
    },
    {
      title: "Essay Writer",
      description: "An AI-powered essay writing tool that generates high-quality academic content with proper citations and research all written in your style.",
      tech: ["n8n", "Google API", "AI", "LLM"],
      image: "✍️",
    },
    {
      title: "Daily Summary n8n",
      description: "Automated daily summary tool that aggregates and processes daily activities and data using n8n workflows.",
      tech: ["n8n", "Automation", "Data Processing", "Workflow"],
      image: "📊",
    },
    {
      title: "News n8n",
      description: "Automated news aggregation and processing system built with n8n workflows for real-time content curation.",
      tech: ["n8n", "News API", "Automation", "Content Processing"],
      image: "📰",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of AI and web development through innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card group cursor-pointer transform transition-all duration-500 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-6xl mb-6 group-hover:animate-wine-glow transition-all duration-300 transform group-hover:scale-110">
                {project.image}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--wine-glow)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {index === 0 ? (
                  <button 
                    className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors animate-hover-pulse"
                    onClick={() => window.open('https://github.com/VinoSiix/N8N-telegram-bot/tree/main', '_blank')}
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                ) : index === 1 ? (
                  <button 
                    className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors animate-hover-pulse"
                    onClick={() => window.open('https://github.com/VinoSiix/gmail-sorter', '_blank')}
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                ) : index === 2 ? (
                  <button 
                    className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors animate-hover-pulse"
                    onClick={() => window.open('https://github.com/VinoSiix/lead-scraper', '_blank')}
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                ) : index === 3 ? (
                  <button
                    className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors animate-hover-pulse"
                    onClick={() => window.open('https://github.com/VinoSiix/essay-writer', '_blank')}
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                ) : index === 4 ? (
                  <button
                    className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors animate-hover-pulse"
                    onClick={() => window.open('https://github.com/VinoSiix/daily-summary-n8n', '_blank')}
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                ) : index === 5 ? (
                  <button
                    className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors animate-hover-pulse"
                    onClick={() => window.open('https://github.com/VinoSiix/news-n8n/tree/main', '_blank')}
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                ) : (
                  <button className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors animate-hover-pulse">
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
