import { Mail, Phone, Map, Linkedin, Instagram, Send,  } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { cn } from "../lib/utils";
import emailjs from "emailjs-com"
import { useState } from "react";

export const ContactSection = () => {
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
});
    const service_id="service_d0ah7jl";
    const template_id="template_2u94p5j";
    const api_id="T8ddxjwfODx9Hhs8Y";
    
const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(service_id, template_id, e.target, api_id)
    .then(() => {
      alert("Message Sent");
      setFormData({    
        name: "",
        email: "",
        message: ""
      });
    })
    .catch(() => {
      alert("Oops! Something Went Wrong. Please try again");
    });
};
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:raosiddharth2004@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    raosiddharth2004@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+918971062407"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-8971062407
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    B.S Sadana Near Co-operative Bank Perady post & Villege-574236
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 px-4 justify-center">
                <a href="https://www.linkedin.com/in/siddharth-u-rao-6170232b2" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://wa.me/918971062407" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <BsWhatsapp className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/siddharthraok" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John"
                  onChange={(e)=> setFormData({...formData,name:e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                  onChange={(e)=> setFormData({...formData,email:e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message here..."
                  onChange={(e)=> setFormData({...formData,message:e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              > Send Message <Send size={15}/>

              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};