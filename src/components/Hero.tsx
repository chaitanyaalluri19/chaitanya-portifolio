import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Mail, Linkedin, MapPin } from "lucide-react";
import chaitanyaHeadshot from "@/assets/chaitanya-headshot.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero bg-dots flex items-center relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div
        className="absolute bottom-32 right-16 w-32 h-32 bg-primary/10 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-smooth">
                <MapPin className="w-3 h-3 mr-1" />
                New York, NY
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Hi, I'm</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Chaitanya Alluri
                </span>
              </h1>

              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                Full-Stack Developer
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                3+ years of experience building scalable, high-performance
                applications in banking, fintech, and enterprise systems.
                Specialized in Java, Spring Boot, React.js, and cloud
                technologies with a track record of processing $500M+ annually.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="btn-gradient group"
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Portfolio
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 hover:bg-primary/5 transition-smooth"
                asChild
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=1gAJQEXoeqHLLNK9oXVOu08sOio5yezLL"
                  download
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Contact Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="mailto:chaitanya.alluri@aogjob.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="w-4 h-4" />
                chaitanya.alluri@aogjob.com
              </a>
              <a
                href="https://www.linkedin.com/in/Chaitanya-alluri261/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div
            className="flex justify-center lg:justify-end animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-strong">
                <img
                  src={chaitanyaHeadshot}
                  alt="Chaitanya Alluri - Full-Stack Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-2xl animate-pulse-glow"></div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-xl animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
