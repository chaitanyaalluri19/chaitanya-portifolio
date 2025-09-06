import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, MapPin, Phone, Send, Calendar } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "chaitanya.alluri@aogjob.com",
      link: "mailto:chaitanya.alluri@aogjob.com",
      description: "Best for detailed project discussions",
      color: "bg-gradient-primary"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Chaitanya-alluri261",
      link: "https://www.linkedin.com/in/Chaitanya-alluri261/",
      description: "Professional networking and quick connects",
      color: "bg-gradient-accent"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "New York, NY",
      link: "#",
      description: "Available for local meetings and remote work",
      color: "bg-secondary/20 border-secondary/30"
    }
  ];

  const availability = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM EST", available: true },
    { day: "Response Time", time: "Within 24 hours", available: true }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something <span className="bg-gradient-primary bg-clip-text text-transparent">Amazing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm available for full-time opportunities, 
            consulting projects, and technical collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="portfolio-card group h-full">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-foreground group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {method.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {method.description}
                </p>
                <a 
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-primary font-medium hover:underline transition-smooth"
                >
                  {method.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Availability */}
          <Card className="portfolio-card">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Availability</h3>
              </div>
              <div className="space-y-4">
                {availability.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                    <div>
                      <div className="font-medium">{item.day}</div>
                      <div className="text-sm text-muted-foreground">{item.time}</div>
                    </div>
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Contact Form */}
          <Card className="portfolio-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Message</h3>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <div className="w-full h-12 bg-muted/50 rounded-xl border border-border/50 px-4 flex items-center text-muted-foreground">
                      Your name
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <div className="w-full h-12 bg-muted/50 rounded-xl border border-border/50 px-4 flex items-center text-muted-foreground">
                      your.email@example.com
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Type</label>
                    <div className="w-full h-12 bg-muted/50 rounded-xl border border-border/50 px-4 flex items-center text-muted-foreground">
                      Select project type
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <div className="w-full h-32 bg-muted/50 rounded-xl border border-border/50 p-4 text-muted-foreground">
                      Tell me about your project...
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full btn-gradient group"
                  onClick={() => window.location.href = 'mailto:chaitanya.alluri@aogjob.com'}
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  This will open your email client. You can also reach out directly via email or LinkedIn.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="portfolio-card bg-gradient-card border-primary/20">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you need a full-stack application, API development, or cloud deployment, 
                I'm here to help bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  className="btn-gradient"
                  onClick={() => window.location.href = 'mailto:chaitanya.alluri@aogjob.com?subject=Project Inquiry'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Start a Conversation
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/5"
                  onClick={() => window.open('https://www.linkedin.com/in/Chaitanya-alluri261/', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;