import { ExternalLink, Github } from "lucide-react";

const MyProjects = [
  {
    id: 1,
    title: "Modern AI SaaS Landing Page",
    Description:
      "Developed a modern and responsive SaaS landing page using React with TypeScript and Tailwind CSS. The layout features a hero section, service highlights, company introduction, call-to-action buttons, and a responsive footer—designed to reflect professional SaaS branding and clean UI principles. Built with Vite and deployed on Vercel.",
    Myimage: "/ProjectsPic/AI SaaS.png",
    tags: ["React (TypeScript)", "Tailwind CSS", "Vite"],
    demourl: "https://landing-page-six-zeta-57.vercel.app/",
    githuburl: "https://github.com/Siddharth-U-Rao/landing-page",
  },
  {
    id: 2,
    title: "Finance Tracker with User Management",
    Description: "A full-stack web application developed using the MERN stack with TypeScript. It allows users to register, log in, and manage personal financial records. Features include secure user authentication via Clerk and full CRUD functionality for tracking income and expenses. Designed with modular architecture and clean code practices.",
    Myimage: "/ProjectsPic/Finance.png",
    tags: ["MongoDB", "Node.js", "React (TypeScript)", "Express.js", "Clerk"],
    githuburl: "https://github.com/Siddharth-U-Rao/Finance-Tracker",
  },
  {
    id: 3,
    title: "Smart Credit Card Fraud Detection with AI Chatbot Verification.",
    Description: "Designed a credit card fraud detection system using rule-based logic and transaction analysis in Python. Integrated a Dialogflow chatbot for real-time user verification when suspicious activity is detected. The system enhances transaction security by combining backend data validation with conversational user authentication",
    Myimage: "/ProjectsPic/comingsoon.webp",
    tags: ["Python", "Pandas", "Dialogflow", "SQLite"],
  },
];

export const Projects = () => {
  return (
    <section id="project" className="py-24 px-6 md:px-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was built with modern technologies and best practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MyProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.Myimage}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.Description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary rounded-full text-xs border font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  {project.demourl && (
                    <a
                      href={project.demourl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githuburl && (
                    <a
                      href={project.githuburl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
