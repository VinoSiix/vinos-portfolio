import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your AI-powered vision to life? Let's collaborate and build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 mx-auto max-w-2xl">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-8 text-foreground">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 glass-effect rounded-full group-hover:border-primary/50 transition-all">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">vinosiix@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="p-3 glass-effect rounded-full group-hover:border-primary/50 transition-all">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Available</h4>
                  <p className="text-muted-foreground">Always</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="p-3 glass-effect rounded-full group-hover:border-primary/50 transition-all">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Remote</h4>
                  <p className="text-muted-foreground">Working globally</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <h4 className="font-bold text-primary mb-3">Quick Response</h4>
              <p className="text-muted-foreground">
                I typically respond to messages within 24 hours. For urgent projects, 
                feel free to mention the timeline in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
