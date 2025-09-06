import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Server, Building2, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Resume Matcher Using AI",
      description: "AI-powered resume-job matching system with NLP and ATS optimization using BERT and advanced machine learning algorithms.",
      technologies: ["Python", "BERT", "Streamlit", "NLP", "Machine Learning", "TensorFlow"],
      icon: <Brain className="w-6 h-6" />,
      metrics: "95% accuracy in job-resume matching",
      category: "AI/ML",
      featured: true
    },
    {
      title: "Job Portal API System",
      description: "Secure and scalable job board API with JWT authentication, Redis caching, and comprehensive RESTful endpoints.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "AWS", "Docker"],
      icon: <Server className="w-6 h-6" />,
      metrics: "Handles 1k+ concurrent users",
      category: "Backend",
      featured: true
    },
    {
      title: "Loan Origination Platform",
      description: "Enterprise loan processing system at JPMorgan Chase handling high-volume financial transactions with real-time processing.",
      technologies: ["Java", "Spring Boot", "Microservices", "Oracle DB", "Kubernetes", "AWS"],
      icon: <Building2 className="w-6 h-6" />,
      metrics: "$500M+ processed annually",
      category: "Enterprise",
      featured: true
    },
    {
      title: "Financial Dashboard Suite",
      description: "Comprehensive financial analytics dashboard with real-time data visualization and reporting capabilities for enterprise clients.",
      technologies: ["React.js", "Node.js", "MongoDB", "Chart.js", "WebSocket", "Redis"],
      icon: <TrendingUp className="w-6 h-6" />,
      metrics: "25% reduction in reporting time",
      category: "Frontend",
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
            Portfolio
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my work in building scalable applications, from  Web applications to enterprise-grade financial platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`portfolio-card ${project.featured ? 'lg:col-span-1' : ''} group`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="p-3 bg-gradient-primary rounded-xl text-primary-foreground">
                    {project.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-accent mb-4">
                    <TrendingUp className="w-4 h-4" />
                    {project.metrics}
                  </div>
                  
                  <div className="flex gap-2">
                    
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="mt-16">
          <Card className="portfolio-card bg-gradient-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">
                Impact & <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
              </h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$500M+</div>
                  <div className="text-sm text-muted-foreground">Annual Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Faster Queries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">25%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">System Uptime</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;