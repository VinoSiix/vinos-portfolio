import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI Chat Assistant",
      description: "Advanced conversational AI with natural language processing and context awareness.",
      tech: ["React", "Python", "OpenAI", "FastAPI"],
      image: "🤖",
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Real-time data visualization with AI-powered insights and predictive analytics.",
      tech: ["Vue.js", "D3.js", "TensorFlow", "Node.js"],
      image: "📊",
    },
    {
      title: "ML-Powered E-commerce",
      description: "Personalized shopping experience with recommendation engine and dynamic pricing.",
      tech: ["Next.js", "PyTorch", "MongoDB", "Stripe"],
      image: "🛒",
    },
    {
      title: "Automated Code Review",
      description: "AI-driven code analysis tool for bug detection and performance optimization.",
      tech: ["TypeScript", "AST", "Machine Learning", "GitHub API"],
      image: "🔍",
    },
    {
      title: "Voice-Controlled App",
      description: "Hands-free application control with speech recognition and natural commands.",
      tech: ["React Native", "Speech API", "Firebase", "TensorFlow"],
      image: "🎤",
    },
    {
      title: "Predictive Maintenance",
      description: "IoT sensor data analysis for equipment failure prediction and optimization.",
      tech: ["Python", "IoT", "Time Series", "Docker"],
      image: "⚙️",
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
              className="project-card group cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-6xl mb-6 group-hover:animate-wine-glow transition-all duration-300">
                {project.image}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors">
                  <Github size={18} />
                  <span>Code</span>
                </button>
                <button className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors">
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;