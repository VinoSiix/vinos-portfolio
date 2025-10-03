import React from 'react';
import { Brain, Code, Zap, Cpu } from 'lucide-react';

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Python", "FastAPI", "GraphQL", "PostgreSQL"] },
    { category: "AI/ML", items: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "Scikit-learn"] },
    { category: "Tools", items: ["Docker", "AWS", "Git", "CI/CD", "Kubernetes"] },
  ];

  const highlights = [
    { icon: <Brain className="w-8 h-8" />, title: "AI Integration", desc: "Seamlessly incorporating AI into web applications" },
    { icon: <Code className="w-8 h-8" />, title: "Clean Code", desc: "Writing maintainable and scalable solutions" },
    { icon: <Zap className="w-8 h-8" />, title: "Performance", desc: "Optimizing for speed and user experience" },
    { icon: <Cpu className="w-8 h-8" />, title: "Innovation", desc: "Pushing boundaries with emerging technologies" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About <span className="text-primary">Vino</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div data-aos="fade-right">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Innovative developer specializing in cutting-edge AI integration and modern web technologies. 
              Transforming complex problems into elegant solutions through the power of artificial intelligence 
              and sophisticated web development frameworks.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Passionate about creating intelligent web applications that learn, adapt, and deliver exceptional 
              user experiences. Always exploring the latest in machine learning, neural networks, and emerging 
              web technologies.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="text-primary group-hover:animate-wine-glow transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Technical Expertise</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="glass-effect p-6 rounded-xl group hover:border-primary/50 transition-all">
                  <h4 className="font-bold text-primary mb-4 text-lg group-hover:animate-wine-glow">
                    {skillGroup.category}
                  </h4>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;