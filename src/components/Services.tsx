import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, Database, Cloud, Shield, Smartphone, Brain, 
  ArrowRight, CheckCircle, Zap, Users, Target, Cog 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Full-Stack Application Development",
      description: "End-to-end web application development using modern technologies like React.js, Node.js, Java Spring Boot, and cloud deployment.",
      icon: <Code className="w-8 h-8" />,
      features: [
        "Custom web application development",
        "Responsive UI/UX implementation", 
        "Real-time features with WebSocket",
        "Progressive Web App (PWA) development"
      ],
      technologies: ["React.js", "Node.js", "TypeScript", "Tailwind CSS"],
      color: "bg-gradient-primary"
    },
    {
      title: "API & Microservices Design",
      description: "Scalable RESTful APIs and microservices architecture with proper authentication, documentation, and performance optimization.",
      icon: <Database className="w-8 h-8" />,
      features: [
        "RESTful API development",
        "Microservices architecture",
        "API documentation with Swagger",
        "Rate limiting and caching strategies"
      ],
      technologies: ["Spring Boot", "Express.js", "PostgreSQL", "Redis"],
      color: "bg-gradient-accent"
    },
    {
      title: "Cloud Deployment & DevOps",
      description: "Complete cloud infrastructure setup, containerization, and CI/CD pipeline implementation for scalable deployments.",
      icon: <Cloud className="w-8 h-8" />,
      features: [
        "AWS/Azure cloud deployment",
        "Docker containerization",
        "Kubernetes orchestration",
        "CI/CD pipeline setup"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins"],
      color: "bg-secondary/20 border-secondary/30"
    },
    {
      title: "Database Optimization",
      description: "Database design, query optimization, indexing strategies, and performance tuning for high-traffic applications.",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Query performance optimization",
        "Database schema design",
        "Indexing strategies",
        "Connection pooling and caching"
      ],
      technologies: ["MySQL", "PostgreSQL", "Redis", "MongoDB"],
      color: "bg-gradient-primary"
    },
    {
      title: "Security Implementation",
      description: "Comprehensive security measures including authentication, authorization, data encryption, and security audits.",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "JWT authentication systems",
        "OAuth2.0 integration",
        "Role-based access control",
        "Security audit and compliance"
      ],
      technologies: ["Spring Security", "JWT", "OAuth2.0", "HTTPS"],
      color: "bg-gradient-accent"
    },
    {
      title: "AI/ML Integration",
      description: "Integration of machine learning models, natural language processing, and AI-powered features into web applications.",
      icon: <Brain className="w-8 h-8" />,
      features: [
        "ML model integration",
        "Natural Language Processing",
        "Data analytics dashboards",
        "Predictive analytics"
      ],
      technologies: ["Python", "TensorFlow", "BERT", "Streamlit"],
      color: "bg-secondary/20 border-secondary/30"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding requirements, defining scope, and creating technical specifications",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "02", 
      title: "Architecture Design",
      description: "Designing scalable system architecture and selecting optimal technology stack",
      icon: <Cog className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous integration and comprehensive testing",
      icon: <Code className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Cloud deployment, monitoring setup, and ongoing maintenance support",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What I <span className="bg-gradient-primary bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive full-stack development services from conception to deployment, 
            ensuring scalable, secure, and high-performance solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="portfolio-card group h-full">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-primary/10 text-primary hover:bg-primary/20 transition-smooth group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Development <span className="bg-gradient-accent bg-clip-text text-transparent">Process</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-3 group-hover:text-primary transition-smooth">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="portfolio-card bg-gradient-hero text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a scalable, high-performance solution together.
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 transition-smooth"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;