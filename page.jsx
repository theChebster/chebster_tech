"use client";
import { useState } from "react";
import {
Menu,
Code2,
Smartphone,
Cloud,
Database,
Zap,
Shield,
Lock,
ShieldCheck,
Bug,
} from "lucide-react";

function Header() {
return (
<header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#121212] border-b border-gray-200 dark:border-gray-800">
<div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center h-16">
<div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
Chebster Tech
</div>
<div className="hidden sm:flex space-x-4 lg:space-x-8">
<button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
Home
</button>
<button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
Services
</button>
<button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
About
</button>
<button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
Contact
</button>
</div>
<button className="sm:hidden p-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
<Menu size={20} />
</button>
</div>
</header>
);
}

function HeroSection() {
return (
<section className="pt-16 pb-12 sm:pb-20 bg-gray-50 dark:bg-[#1E1E1E] overflow-hidden">
<div className="max-w-6xl mx-auto px-4 sm:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh]">
<div className="space-y-6 sm:space-y-8 pt-4 sm:pt-8 text-center lg:text-left">
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
Innovative Tech Solutions
</h1>
<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
Empowering businesses with cutting-edge technology. From web
development to mobile apps and cloud solutions, we transform your
digital vision into reality.
</p>
<div className="pt-4 sm:pt-6">
<button className="px-8 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 active:bg-black dark:active:bg-white transition-colors">
Get Started
</button>
</div>
</div>
<div className="relative lg:pl-8 flex justify-center lg:justify-end">
<div className="bg-white dark:bg-[#262626] rounded-2xl shadow-2xl dark:shadow-none dark:ring-1 dark:ring-gray-700 p-6 sm:p-8 w-full max-w-sm">
<div className="space-y-6">
<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
Our Expertise
</h3>
<div className="space-y-4">
<div className="flex items-start space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
<div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
<Code2 size={20} className="text-white" />
</div>
<div>
<h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
Web Development
</h4>
<p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
Modern, responsive websites
</p>
</div>
</div>
<div className="flex items-start space-x-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
<div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
<Smartphone size={20} className="text-white" />
</div>
<div>
<h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
Mobile Apps
</h4>
<p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
iOS & Android solutions
</p>
</div>
</div>
<div className="flex items-start space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
<div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
<Cloud size={20} className="text-white" />
</div>
<div>
<h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
Cloud Services
</h4>
<p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
Scalable infrastructure
</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
);
}

function TrustSection() {
return (
<section className="py-12 sm:py-16 bg-gray-900 dark:bg-[#0A0A0A]">
<div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
<p className="text-sm text-gray-400 dark:text-gray-500 mb-8 sm:mb-12">
Trusted by innovative companies
</p>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 opacity-60 items-center justify-items-center">
<div className="text-gray-400 dark:text-gray-500 font-semibold">
TechFlow
</div>
<div className="text-gray-400 dark:text-gray-500 font-semibold">
InnovateCo
</div>
<div className="text-gray-400 dark:text-gray-500 font-semibold">
CloudBase
</div>
<div className="text-gray-400 dark:text-gray-500 font-semibold col-span-2 sm:col-span-1">
DataSync
</div>
<div className="text-gray-400 dark:text-gray-500 font-semibold hidden sm:block lg:block">
AppWorks
</div>
</div>
</div>
</section>
);
}

function ServicesSection() {
const services = [
{
title: "Custom Web Development",
desc: "Tailored websites and web applications built with modern technologies",
icon: Code2,
},
{
title: "Mobile App Development",
desc: "Native and cross-platform mobile solutions for iOS and Android",
icon: Smartphone,
},
{
title: "Cloud Infrastructure",
desc: "Scalable cloud solutions and migration services",
icon: Cloud,
},
{
title: "Database Design",
desc: "Optimized data architecture and management systems",
icon: Database,
},
{
title: "API Integration",
desc: "Seamless third-party service integration and custom APIs",
icon: Zap,
},
{
title: "Security Consulting",
desc: "Comprehensive cybersecurity audits and risk assessments",
icon: Shield,
},
{
title: "Penetration Testing",
desc: "Identify vulnerabilities before attackers do with ethical hacking",
icon: Bug,
},
{
title: "Data Protection",
desc: "Encryption, secure storage, and compliance solutions",
icon: Lock,
},
{
title: "Threat Monitoring",
desc: "24/7 security monitoring and incident response services",
icon: ShieldCheck,
},
];

return (
<section className="py-16 sm:py-24 bg-gray-50 dark:bg-[#1E1E1E]">
<div className="max-w-6xl mx-auto px-4 sm:px-8">
<div className="text-center mb-12 sm:mb-16">
<span className="inline-block px-3 py-1 bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full mb-6">
Services
</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-4">
What We Offer
</h2>
<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
Comprehensive tech solutions tailored to your business needs
</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
{services.map((service, index) => {
const Icon = service.icon;
return (
<div
key={index}
className="bg-white dark:bg-[#262626] dark:ring-1 dark:ring-gray-700 rounded-xl p-6 sm:p-8 hover:shadow-lg dark:hover:ring-gray-600 transition-all"
>
<div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
<Icon
className="text-blue-600 dark:text-blue-400"
size={24}
/>
</div>
<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
{service.title}
</h3>
<p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
{service.desc}
</p>
</div>
);
})}
</div>
</div>
</section>
);
}

function AboutSection() {
return (
<section className="py-16 sm:py-24 bg-white dark:bg-[#121212]">
<div className="max-w-6xl mx-auto px-4 sm:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start">
<div className="space-y-6 sm:space-y-8">
<span className="inline-block px-3 py-1 bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
About Us
</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
Building the future of technology
</h2>
</div>
<div className="space-y-8 sm:space-y-10">
<div className="space-y-6 sm:space-y-8">
<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
Chebster Tech is a forward-thinking technology company dedicated
to delivering innovative solutions that drive business growth.
With years of expertise in web development, mobile applications,
and cloud infrastructure, we partner with organizations to
transform their digital presence.
</p>
<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
Our team of skilled developers, designers, and engineers work
collaboratively to create robust, scalable, and user-friendly
applications. We believe in the power of technology to solve
complex problems and create meaningful experiences.
</p>
<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
From startups to enterprises, we've helped hundreds of clients
bring their ideas to life with cutting-edge technology and
best-in-class development practices.
</p>
</div>
<div className="flex items-start space-x-3 sm:space-x-4 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
<div className="w-12 sm:w-14 h-12 sm:h-14 bg-blue-500 rounded-full flex-shrink-0 flex items-center justify-center">
<span className="text-white font-semibold">CT</span>
</div>
<div className="space-y-1 sm:space-y-2">
<h4 className="font-semibold text-gray-900 dark:text-gray-100">
Chebster Tech Team
</h4>
<p className="text-sm text-gray-600 dark:text-gray-400">
Innovation & Excellence
</p>
</div>
</div>
</div>
</div>
</div>
</section>
);
}

function ContactSection() {
const [formData, setFormData] = useState({
name: "",
email: "",
projectType: "",
message: "",
});
const [status, setStatus] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();
setStatus("sending");
setTimeout(() => {
setStatus("success");
setFormData({ name: "", email: "", projectType: "", message: "" });
setTimeout(() => setStatus(""), 5000);
}, 1000);
};

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

return (
<section className="py-16 sm:py-24 bg-gray-50 dark:bg-[#1E1E1E]">
<div className="max-w-4xl mx-auto px-4 sm:px-8">
<div className="text-center mb-12 sm:mb-16">
<span className="inline-block px-3 py-1 bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full mb-6">
Contact
</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-4">
Let's Build Something Great
</h2>
<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
Ready to start your project? Get in touch and let's discuss how we
can help.
</p>
</div>
<div className="bg-white dark:bg-[#262626] rounded-2xl shadow-lg dark:shadow-none dark:ring-1 dark:ring-gray-700 p-6 sm:p-8 lg:p-10">
<form onSubmit={handleSubmit} className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label
htmlFor="name"
className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2"
>
Name
</label>
<input
type="text"
id="name"
name="name"
value={formData.name}
onChange={handleChange}
required
className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
placeholder="Your name"
/>
</div>
<div>
<label
htmlFor="email"
className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2"
>
Email
</label>
<input
type="email"
id="email"
name="email"
value={formData.email}
onChange={handleChange}
required
className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
placeholder="your@email.com"
/>
</div>
</div>
<div>
<label
htmlFor="projectType"
className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2"
>
Project Type
</label>
<select
id="projectType"
name="projectType"
value={formData.projectType}
onChange={handleChange}
required
className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
<option value="">Select a service</option>
<option value="web">Web Development</option>
<option value="mobile">Mobile App</option>
<option value="cloud">Cloud Services</option>
<option value="consulting">Consulting</option>
<option value="other">Other</option>
</select>
</div>
<div>
<label
htmlFor="message"
className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2"
>
Message
</label>
<textarea
id="message"
name="message"
value={formData.message}
onChange={handleChange}
required
rows={5}
className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
placeholder="Tell us about your project..."
/>
</div>
<div>
<button
type="submit"
disabled={status === "sending"}
className="w-full px-8 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 active:bg-black dark:active:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
>
{status === "sending" ? "Sending..." : "Send Message"}
</button>
</div>
{status === "success" && (
<div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
<p className="text-green-800 dark:text-green-200 text-center">
Thank you! We'll get back to you soon.
</p>
</div>
)}
</form>
</div>
</div>
</section>
);
}

function Footer() {
return (
<footer className="py-12 sm:py-16 bg-gray-900 dark:bg-[#0A0A0A] border-t border-gray-800 dark:border-gray-900">
<div className="max-w-6xl mx-auto px-4 sm:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
<div className="space-y-4">
<h3 className="text-xl font-bold text-gray-100 dark:text-gray-200">
Chebster Tech
</h3>
<p className="text-sm text-gray-400 dark:text-gray-500">
Innovative technology solutions for modern businesses.
</p>
</div>
<div className="space-y-4">
<h4 className="text-sm font-semibold text-gray-100 dark:text-gray-200">
Services
</h4>
<ul className="space-y-2">
<li>
<a
href="#"
className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-200 dark:hover:text-gray-300 transition-colors"
>
Web Development
</a>
</li>
<li>
<a
href="#"
className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-200 dark:hover:text-gray-300 transition-colors"
>
Mobile Apps
</a>
</li>
<li>
<a
href="#"
className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-200 dark:hover:text-gray-300 transition-colors"
>
Cloud Services
</a>
</li>
<li>
<a
href="#"
className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-200 dark:hover:text-gray-300 transition-colors"
>
Consulting
</a>
</li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-sm font-semibold text-gray-100 dark:text-gray-200">
Company
</h4>
<ul className="space-y-2">
<li>
<a
href="#"
className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-200 dark:hover:text-gray-300 transition-colors"
>
About Us
</a>
</li>
<li>
<a
href="#"
className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-200 dark:hover:text-gray-300 transition-colors"
>
Team
</a>
</li>
<li>
<a
href="#"
className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-200 dark:hover:text-gray-300 transition-colors"
>
Careers
</a>
</li>
<li>
<a
href="#"
className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-200 dark:hover:text-gray-300 transition-colors"
>
Contact
</a>
</li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-sm font-semibold text-gray-100 dark:text-gray-200">
Legal
</h4>
<ul className="space-y-2">
<li>
<a
href="#"
className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-200 dark:hover:text-gray-300 transition-colors"
>
Privacy Policy
</a>
</li>
<li>
<a
href="#"
className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-200 dark:hover:text-gray-300 transition-colors"
>
Terms of Service
</a>
</li>
<li>
<a
href="#"
className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-200 dark:hover:text-gray-300 transition-colors"
>
Cookie Policy
</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-800 dark:border-gray-900">
<p className="text-sm text-gray-400 dark:text-gray-500 text-center">
© 2026 Chebster Tech. All rights reserved.
</p>
</div>
</div>
</footer>
);
}

export default function HomePage() {
return (
<div className="min-h-screen bg-white dark:bg-[#121212]">
<Header />
<HeroSection />
<TrustSection />
<ServicesSection />
<AboutSection />
<ContactSection />
<Footer />
</div>
);
}
