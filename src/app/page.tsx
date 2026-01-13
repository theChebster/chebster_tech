"use client";
import { useState, useEffect, useRef } from "react"; // Added useRef
import emailjs from '@emailjs/browser'; // Ensure you've run: npm install @emailjs/browser
import {
  Menu,
  X,
  Code2,
  Smartphone,
  Cloud,
  Database,
  Zap,
  ShieldCheck,
  Sun,
  Moon,
  Lock,
  Cpu,
  CheckCircle2,
  Trophy,
  Users,
  Clock,
  Rocket,
  Mail,
  Phone,
  ArrowRight
} from "lucide-react";

// --- CHILD COMPONENTS ---

function TeamSection() {
  const team = [
    {
      name: "Frank Ahoba Kwadwo Junior",
      role: "CEO & Founder (The Chebster)",
      bio: "Visionary leader driving the strategic growth and technological innovation of Chebster Tech.",
      image: "FK",
    },
    {
      name: "Umar Abdul Malik",
      role: "Lead Systems Engineer",
      bio: "Expert in JavaScript, React, and Database systems with a focus on securing high-performance systems.",
      image: "UA",
    },
    {
      name: "Prince Baah Nyefreh",
      role: "Frontend & Styling Specialist",
      bio: "Master of JavaScript and modern UI styling, dedicated to crafting beautiful user experiences.",
      image: "PB",
    },
  ];

  return (
    <section id="team" className="py-16 sm:py-24 bg-white dark:bg-[#121212]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">The Brains</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mt-4 mb-4">Meet Our Experts</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-blue-600 border-2 border-transparent group-hover:border-blue-500 group-hover:scale-110 transition-all duration-500 shadow-md">
                {member.image}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{member.name}</h3>
              <p className="text-blue-500 text-sm font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed px-4">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  Icon: React.ElementType;
  title: string;
  desc: string;
}

function ServiceCard({ Icon, title, desc }: ServiceCardProps) {
  return (
    <div className="p-8 bg-gray-50 dark:bg-[#1E1E1E] rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 group hover:-translate-y-2">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{title}</h3>
      <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
  );
}

// --- MAIN PAGE ---

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // EMAIL SETTINGS STATE
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // EMAIL SENDING FUNCTION
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (!formRef.current) return;

    emailjs.sendForm(
      "service_4p7znoi", // Your Service ID
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(() => {
      setStatus("success");
      formRef.current?.reset();
      setTimeout(() => setStatus(""), 5000);
    })
    .catch((error) => {
      console.error("Email Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-500">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center h-20">
          <div className="flex items-center space-x-4 cursor-pointer group" onClick={() => scrollToSection("home")}>
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500 bg-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">Chebster Tech</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "Team", "About", "Contact"].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all hover:after:w-full">
                {item}
              </button>
            ))}
            <button onClick={() => setDarkMode(!darkMode)} className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:ring-2 hover:ring-blue-500 transition-all">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 dark:text-gray-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-12 sm:pb-20 bg-gray-50 dark:bg-[#1E1E1E] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh]">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                Innovative <span className="text-blue-500">Tech</span> Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">Empowering businesses with cutting-edge technology. From enterprise web development to secure mobile architectures.</p>
              <div className="pt-4">
                <button onClick={() => scrollToSection('contact')} className="px-10 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-1">Get Started</button>
              </div>
            </div>

            <div className="relative lg:pl-8 flex justify-center lg:justify-end">
              <div className="bg-white dark:bg-[#262626] rounded-3xl shadow-2xl p-6 sm:p-10 w-full max-w-md border border-gray-100 dark:border-gray-700 relative z-10">
                <h3 className="text-xl font-bold mb-8 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="text-blue-500" /> Core Competencies
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Cpu, label: "Scalability", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
                    { icon: Lock, label: "Security", color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20" },
                    { icon: Cloud, label: "Cloud Native", color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20" },
                    { icon: Zap, label: "Performance", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20" }
                  ].map((item, i) => (
                    <div key={i} className={`${item.bg} p-4 rounded-2xl flex flex-col items-center text-center hover:scale-105 transition-transform cursor-default group`}>
                      <item.icon className={`${item.color} mb-2 group-hover:animate-pulse`} size={32} />
                      <span className="text-sm font-bold dark:text-gray-200">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-16 sm:py-24 bg-white dark:bg-[#121212]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard Icon={Code2} title="Web Development" desc="Modern, responsive websites built for enterprise scale." />
            <ServiceCard Icon={Smartphone} title="Mobile Apps" desc="iOS and Android solutions for every screen size." />
            <ServiceCard Icon={Cloud} title="Cloud Infrastructure" desc="Secure and scalable cloud management and DevOps." />
            <ServiceCard Icon={Database} title="Database Design" desc="Optimized architecture for complex data systems." />
            <ServiceCard Icon={ShieldCheck} title="Security" desc="Enterprise-grade protection for your digital assets." />
            <ServiceCard Icon={Zap} title="Performance" desc="Lighting fast optimization for modern web applications." />
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <TeamSection />

      {/* ABOUT & VISION SECTION */}
      <section id="about" className="py-16 sm:py-24 bg-gray-50 dark:bg-[#1E1E1E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">Our Purpose</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mt-4 mb-6">Building the Future</h2>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border-l-4 border-blue-500 shadow-sm transition-transform hover:scale-[1.01]">
                <h4 className="font-bold text-blue-500 mb-2">Our Vision</h4>
                <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">"To become a global catalyst for digital evolution, where every business—regardless of size—is empowered by secure, seamless, and intelligent technology."</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">Chebster Tech is a forward-thinking technology company dedicated to delivering innovative solutions that drive business growth.</p>
            </div>
            
            {/* STATS SEGMENT */}
            <div className="relative group min-h-[400px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative h-full bg-blue-600 rounded-3xl shadow-2xl p-8 sm:p-12 flex flex-col justify-center text-white overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 relative z-10">
                  <div className="flex flex-col items-center sm:items-start group/stat">
                    <Trophy className="mb-3 text-blue-200 group-hover/stat:scale-110 transition-transform" size={28} />
                    <p className="text-4xl lg:text-5xl font-black mb-1">50+</p>
                    <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">Projects Completed</p>
                  </div>
                  <div className="flex flex-col items-center sm:items-start group/stat">
                    <Users className="mb-3 text-blue-200 group-hover/stat:scale-110 transition-transform" size={28} />
                    <p className="text-4xl lg:text-5xl font-black mb-1">100%</p>
                    <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">Client Satisfaction</p>
                  </div>
                  <div className="flex flex-col items-center sm:items-start group/stat">
                    <Clock className="mb-3 text-blue-200 group-hover/stat:scale-110 transition-transform" size={28} />
                    <p className="text-4xl lg:text-5xl font-black mb-1">24/7</p>
                    <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">Technical Support</p>
                  </div>
                  <div className="flex flex-col items-center sm:items-start group/stat">
                    <Rocket className="mb-3 text-blue-200 group-hover/stat:scale-110 transition-transform" size={28} />
                    <p className="text-4xl lg:text-5xl font-black mb-1">3+</p>
                    <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">Years Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-[#121212]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info Side */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">Let's Create Something Together</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">Ready to elevate your digital presence? Reach out to our team of experts today.</p>
              </div>

              <div className="space-y-6">
                <a href="tel:+233256991802" className="flex items-center space-x-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl group transition-all hover:bg-blue-50 dark:hover:bg-blue-900/10">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Call Us</p>
                    <p className="text-xl font-bold dark:text-gray-100">+233 256 991 802</p>
                  </div>
                </a>

                <a href="mailto:thechebsticentity@gmail.com" className="flex items-center space-x-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl group transition-all hover:bg-blue-50 dark:hover:bg-blue-900/10">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Email Us</p>
                    <p className="text-xl font-bold dark:text-gray-100 break-all">thechebsticentity@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Form Side */}
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6 bg-gray-50 dark:bg-[#1E1E1E] p-8 sm:p-10 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl relative overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" name="from_name" placeholder="Name" required className="w-full px-5 py-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white" />
                <input type="email" name="reply_to" placeholder="Email" required className="w-full px-5 py-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white" />
              </div>
              <textarea name="message" placeholder="Tell us about your project..." rows={5} required className="w-full px-5 py-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"></textarea>
              
              <button type="submit" disabled={status === "sending"} className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center space-x-2 group disabled:opacity-50">
                <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {status === "success" && (
                <p className="text-green-500 text-center font-bold mt-4 animate-bounce">✅ Message Sent Successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center font-bold mt-4">❌ Error. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-10 bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-blue-500 bg-white">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-bold text-white">Chebster Tech</span>
            </div>
            <p className="max-w-sm leading-relaxed text-sm">Empowering the next generation of businesses through high-performance, secure, and scalable technology solutions.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {["Services", "Team", "About", "Contact"].map(link => (
                <li key={link}><button onClick={() => scrollToSection(link.toLowerCase())} className="hover:text-blue-400 transition-colors">{link}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Availability</h4>
            <ul className="space-y-4 text-sm">
              <li>Mon - Fri: 8am - 6pm</li>
              <li>Sat: 10am - 2pm</li>
              <li className="text-blue-400 font-semibold">24/7 Priority Support</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-10 border-t border-gray-800 flex flex-col md:row items-center justify-between space-y-4 md:space-y-0 text-xs">
          <p>© 2026 Chebster Tech. All rights reserved.</p>
          <p className="uppercase tracking-[0.3em] font-black text-gray-700">Integrity • Innovation • Excellence</p>
        </div>
      </footer>
    </div>
  );
}
