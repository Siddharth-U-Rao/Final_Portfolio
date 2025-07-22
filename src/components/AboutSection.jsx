import {  Code,  LayoutDashboard, Target } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 text-lg">
              I’m a full-stack web developer driven by a deep love for clean code, intuitive design, and impactful user experiences. From crafting responsive frontends with React and Tailwind CSS to building scalable backends with Node.js and Express, I thrive in bringing ideas to life with precision and clarity. I enjoy turning complex problems into elegant, maintainable solutions—always focused on performance, usability, and modern best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">Get In Touch</a>
              <a  href="./Resume/Siddharth_U_Rao_K's Resume.pdf"
  download target="_blank" rel="noopener noreferrer"className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Web Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    I build full-stack web apps using React, Tailwind CSS, Node.js, Express, and MongoDB. Focused on clean architecture, reusable components.
                  </p>
                </div>
              </div>
            </div>

            {/* User-Centered Design */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <LayoutDashboard className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">User-Centered Design</h4>
                  <p className="text-muted-foreground">
                    I value aesthetics and usability—prioritizing accessibility, responsiveness, and seamless user interaction in every design.
                  </p>
                </div>
              </div>
            </div>

            {/* Real-World Projects */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Real-World Projects</h4>
                  <p className="text-muted-foreground">
                    From finance trackers to SaaS landing page, I bring hands-on experience delivering real-world apps that solve meaningful problems and scale efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
