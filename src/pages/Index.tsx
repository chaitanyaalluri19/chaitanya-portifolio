import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <ScrollToTop />
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Services />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Chaitanya Alluri.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
