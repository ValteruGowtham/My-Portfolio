import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gowtham.valteru05@gmail.com",
      link: "mailto:gowtham.valteru05@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7989178386",
      link: "tel:+917989178386"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Eluru, Andhra Pradesh 522107",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ValteruGowtham",
      link: "https://github.com/ValteruGowtham"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/gowtham-valteru",
      link: "https://linkedin.com/in/gowtham-valteru"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a tech conversation!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Contact Information (left) */}
          <div className="flex">
            <Card className="glass-card border-border/50 h-full w-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <Card 
                      key={contact.label}
                      className="glass-card border-border/50 hover:border-tech-blue/50 transition-all duration-300 fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-full bg-gradient-to-br from-tech-blue/20 to-tech-purple/20">
                            <contact.icon className="w-5 h-5 text-tech-blue" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-sm">{contact.label}</p>
                            {contact.link ? (
                              <a 
                                href={contact.link}
                                className="text-muted-foreground hover:text-tech-blue transition-colors"
                                target={contact.link.startsWith('http') ? '_blank' : undefined}
                                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {contact.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{contact.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form (right) */}
          <div className="flex">
            <Card className="glass-card border-border/50 h-full w-full">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input 
                        placeholder="Your full name"
                        className="bg-background/50 border-border/50 focus:border-tech-blue/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-background/50 border-border/50 focus:border-tech-blue/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input 
                      placeholder="What's this about?"
                      className="bg-background/50 border-border/50 focus:border-tech-blue/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-tech-blue/50 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-tech-blue to-tech-purple hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Or reach out directly via{" "}
                    <a 
                      href="mailto:gowtham.valteru05@gmail.com"
                      className="text-tech-blue hover:underline"
                    >
                      email
                    </a>
                    {" "}for faster response
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Links - full width row */}
        <div className="max-w-6xl mx-auto mt-12">
          <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {socialLinks.map((social, index) => (
              <Card 
                key={social.label}
                className="glass-card border-border/50 hover:border-tech-purple/50 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <a 
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-full bg-gradient-to-br from-tech-purple/20 to-tech-cyan/20 group-hover:from-tech-purple/30 group-hover:to-tech-cyan/30 transition-all duration-300">
                      <social.icon className="w-5 h-5 text-tech-purple" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{social.label}</p>
                      <p className="text-muted-foreground group-hover:text-tech-purple transition-colors">
                        {social.value}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Availability - separate wide box */}
        <div className="max-w-6xl mx-auto mt-8">
          <Card className="relative overflow-hidden glass-card border border-tech-green/40 hover:border-tech-green/60 transition-all duration-300">
            <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-tech-green/15 via-tech-blue/10 to-tech-purple/15 blur-2xl opacity-40" />
            <CardContent className="relative p-6">
              <h4 className="font-bold text-lg mb-3 text-tech-green">🟢 Currently Available</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Open to new opportunities in AI/ML engineering, full-stack development, and innovative tech projects. Let's build something amazing together!
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 bg-tech-green/20 text-tech-green rounded">
                  Full-time positions
                </span>
                <span className="px-2 py-1 bg-tech-blue/20 text-tech-blue rounded">
                  Internships
                </span>
                <span className="px-2 py-1 bg-tech-purple/20 text-tech-purple rounded">
                  Freelance projects
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;