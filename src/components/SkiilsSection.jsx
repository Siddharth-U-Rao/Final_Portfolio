import { useState } from "react";

const skills = [
  // Frontend Technologies
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "TypeScript", level: 70, category: "frontend" },
  { name: "React", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },
  
  // Backend Technologies
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "C", level: 85, category: "backend" },
  { name: "Java", level: 90, category: "backend" },
  { name: "Python", level: 70, category: "backend" },
  
  // Database Technologies
  { name: "MongoDB", level: 80, category: "database" },
  { name: "SQL", level: 80, category: "database" },
  
  // Tools
  { name: "Git/Github", level: 90, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "Canva", level: 60, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "PyCharm", level: 85, category: "tools" },
  { name: "Postman", level: 60, category: "tools" }
];

const categories = [
  { id: "all", name: "All" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "database", name: "Database" },
  { id: "tools", name: "Tools" }
];

export const SkillSection = () => {
    const [active, setActive] = useState("all");
    
    const filteredSkills = active === "all" 
        ? skills 
        : skills.filter(skill => skill.category === active);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button 
                            key={category.id}
                            onClick={() => setActive(category.id)}
                            className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${
                                active === category.id 
                                    ? "bg-primary text-primary-foreground" 
                                    : "bg-card hover:bg-card/80"
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left" 
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}