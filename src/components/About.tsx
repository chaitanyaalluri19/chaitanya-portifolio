import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Building, Calendar, MapPin } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "M.S. in Data Science",
      school: "University of New Haven",
      year: "2023-2025",
      location: "New Haven, CT"
    },
    {
      degree: "B.Tech in Computer Science",
      school: "Vellore Institute of Technology (VIT)",
      year: "2019-2023",
      location: "Vellore, India"
    }
  ];

  const experience = [
    {
      role: "Full-Stack Developer",
      company: "JPMorgan Chase",
      period: "2024-present",
      achievements: [
        "Built loan origination platform processing $500M+ annually",
        "Improved query performance by 40% using Redis caching",
        "Maintained 99.9% system uptime with proactive monitoring"
      ]
    },
    {
      role: "Software Engineer",
      company: "Version 1",
      period: "2022-2023",
      achievements: [
        "Developed financial dashboards for enterprise clients",
        "Reduced infrastructure costs by 25% through optimization",
        "Implemented secure online banking system features"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My Journey in <span className="bg-gradient-primary bg-clip-text text-transparent">Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From building enterprise-grade financial systems to developing AI-powered applications, 
            I bring a unique blend of technical expertise and business acumen to every project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="portfolio-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.year}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-2">{edu.school}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      {edu.location}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Building className="w-6 h-6 text-primary" />
              Experience
            </h3>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <Card key={index} className="portfolio-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-lg">{exp.role}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </Badge>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <Card className="portfolio-card">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              What Drives Me
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">🚀</span>
                </div>
                <h4 className="font-semibold mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Constantly exploring new technologies and methodologies to solve complex problems
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">🎯</span>
                </div>
                <h4 className="font-semibold mb-2">Performance</h4>
                <p className="text-sm text-muted-foreground">
                  Delivering high-performance, scalable solutions that exceed expectations
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 border border-secondary/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary">🤝</span>
                </div>
                <h4 className="font-semibold mb-2">Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Working closely with teams to create impactful, user-centered solutions
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;