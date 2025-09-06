import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Cloud, Settings, Smartphone, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Java", level: 95, color: "bg-gradient-primary" },
        { name: "Spring Boot", level: 90, color: "bg-gradient-primary" },
        { name: "Node.js", level: 85, color: "bg-gradient-accent" },
        { name: "Python", level: 88, color: "bg-gradient-accent" },
        { name: "REST APIs", level: 92, color: "bg-gradient-primary" }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 90, color: "bg-gradient-primary" },
        { name: "TypeScript", level: 85, color: "bg-gradient-accent" },
        { name: "HTML/CSS", level: 88, color: "bg-gradient-accent" },
        { name: "JavaScript", level: 87, color: "bg-gradient-primary" },
        { name: "Tailwind CSS", level: 82, color: "bg-gradient-accent" }
      ]
    },
    {
      title: "Database & Caching",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MySQL", level: 90, color: "bg-gradient-primary" },
        { name: "PostgreSQL", level: 88, color: "bg-gradient-primary" },
        { name: "Redis", level: 85, color: "bg-gradient-accent" },
        { name: "MongoDB", level: 80, color: "bg-gradient-accent" },
        { name: "Oracle DB", level: 82, color: "bg-gradient-primary" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", level: 88, color: "bg-gradient-primary" },
        { name: "Docker", level: 85, color: "bg-gradient-accent" },
        { name: "Kubernetes", level: 82, color: "bg-gradient-accent" },
        { name: "Azure DevOps", level: 80, color: "bg-gradient-primary" },
        { name: "CI/CD", level: 87, color: "bg-gradient-accent" }
      ]
    },
    {
      title: "Security & Authentication",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "JWT", level: 92, color: "bg-gradient-primary" },
        { name: "OAuth2.0", level: 88, color: "bg-gradient-primary" },
        { name: "Spring Security", level: 90, color: "bg-gradient-accent" },
        { name: "HTTPS/TLS", level: 85, color: "bg-gradient-accent" },
        { name: "RBAC", level: 83, color: "bg-gradient-primary" }
      ]
    },
    {
      title: "AI & Data Science",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Machine Learning", level: 85, color: "bg-gradient-primary" },
        { name: "NLP", level: 82, color: "bg-gradient-accent" },
        { name: "BERT", level: 80, color: "bg-gradient-accent" },
        { name: "TensorFlow", level: 78, color: "bg-gradient-primary" },
        { name: "Data Analysis", level: 87, color: "bg-gradient-accent" }
      ]
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Oracle Certified Professional Java",
    "Microsoft Azure Developer Associate",
    "Spring Framework Certification"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
            Technical Skills
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technology <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive skill set across the full technology stack, from backend systems to AI/ML implementations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-card">
              <CardContent className="p-0">
                <div className="p-6 border-b border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="portfolio-card">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              Certifications & <span className="bg-gradient-accent bg-clip-text text-transparent">Achievements</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Development Methodologies */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Development <span className="bg-gradient-primary bg-clip-text text-transparent">Methodologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Agile/Scrum", "Test-Driven Development", "Microservices Architecture", 
              "CI/CD", "DevOps", "Clean Code", "SOLID Principles", "Design Patterns"
            ].map((methodology, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm hover:bg-primary/5 transition-smooth">
                {methodology}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;