import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkiilsSection";
import { Projects } from "../components/Projects";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home=()=>{
return(<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <ThemeToggle />
      <StarBackground />
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <Projects/>
        <ContactSection/>   
      </main>
      <Footer/>
    </div>
  );
};