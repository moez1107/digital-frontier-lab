import {
  Shield, Server, Network, Building2, ClipboardCheck, GraduationCap,
  Cpu, Wifi, Cable, Lock, Camera, Headphones,
} from "lucide-react";

export const company = {
  name: "ITnIS Consulting",
  tagline: "Designing & Securing the Digital Future",
  short: "Premium ICT & Information Security consultancy firm.",
  address: "Office #1, 5th Floor, 44-A, Civic Center, Bahria Town, Islamabad",
  email: "info@itnis.com",
  phones: ["051-5733207", "+92 333 5626269"],
  whatsapp: "923335626269",
};

export const stats = [
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 24, suffix: "/7", label: "Support & Monitoring" },
];

export const mainServices = [
  {
    slug: "ict-consultancy",
    title: "ICT Consultancy",
    icon: Cpu,
    short: "Strategic ICT guidance, design, and implementation.",
    description:
      "Tailored strategies and advanced solutions spanning Data Center Design, Active Network, Passive Infrastructure, Wireless, and IPTV — engineered for reliability and scale.",
    bullets: ["Data Center Design", "Active & Passive Network", "Wireless Solutions", "IPTV & VoIP"],
  },
  {
    slug: "information-security-consultancy",
    title: "Information Security Consultancy",
    icon: Shield,
    short: "Build cyber resilience with custom security strategies.",
    description:
      "Customised strategies, physical security, vulnerability assessment, and ISO 27000 alignment to fortify your defences against evolving digital threats.",
    bullets: ["ISO 27001 Readiness", "Vulnerability Assessment", "Risk Management", "Security Architecture"],
  },
  {
    slug: "unified-communication",
    title: "Unified Communication",
    icon: Headphones,
    short: "VoIP, IP telephony and collaboration that just works.",
    description:
      "Assessment and design for unified communication networks — covering performance, security, staff readiness and collaboration platforms.",
    bullets: ["VoIP / IP Telephony", "IP Collaboration", "UC Security Review", "Performance Tuning"],
  },
  {
    slug: "smart-city-building",
    title: "Smart City / Building",
    icon: Building2,
    short: "Connected, sustainable and efficient spaces.",
    description:
      "We envision and shape smart cities and buildings — intertwining technology with daily life for efficient, sustainable and connected spaces.",
    bullets: ["IoT Infrastructure", "Building Automation", "Smart Surveillance", "Sustainability"],
  },
  {
    slug: "audits",
    title: "Audits",
    icon: ClipboardCheck,
    short: "Data Center, Information Security, EM and Energy audits.",
    description:
      "Comprehensive audit services covering Data Center, Information Security, Electromagnetic and Energy — with clear findings and remediation roadmaps.",
    bullets: ["Data Center Audit", "Information Security Audit", "EM Audit", "Energy Audit"],
  },
  {
    slug: "trainings",
    title: "Trainings",
    icon: GraduationCap,
    short: "Security awareness and bespoke corporate training.",
    description:
      "From security awareness to customised corporate trainings — programs that ignite minds and uplift organisational capability.",
    bullets: ["Security Awareness", "ISO 27001 Internal Auditor", "Custom Corporate", "Hands-on Labs"],
  },
];

export const detailedServices = [
  { slug: "data-center-design", title: "Data Center Design", icon: Server,
    summary: "Power, cooling, availability and risk-led design for resilient data centers." },
  { slug: "active-network", title: "Active Network", icon: Network,
    summary: "Switching, routing and security fabric engineered for performance and uptime." },
  { slug: "passive-infrastructure", title: "Passive Infrastructure", icon: Cable,
    summary: "Structured cabling and pathways built to standards that outlast the active layer." },
  { slug: "wireless-solution", title: "Wireless Solution", icon: Wifi,
    summary: "High-density, secure Wi-Fi designs from site survey to optimisation." },
  { slug: "iso-27000-compliance", title: "ISO 27000 Compliance", icon: ClipboardCheck,
    summary: "End-to-end ISMS implementation from gap analysis to certification." },
  { slug: "physical-security-access-control", title: "Physical Security & Access Control", icon: Camera,
    summary: "CCTV, access control and monitoring infrastructure for new builds and upgrades." },
];

export const allServiceDetails: Record<string, { title: string; intro: string; sections: { heading: string; points: string[] }[] }> = {
  "ict-consultancy": {
    title: "ICT Consultancy",
    intro: "Strategic ICT consultancy that aligns technology with business outcomes — from design through implementation and beyond.",
    sections: [
      { heading: "What we deliver", points: ["Data Center Design", "Active Network", "Passive Infrastructure", "Wireless Solutions", "IPTV / VoIP"] },
      { heading: "Why ITnIS", points: ["Vendor-neutral design", "Security-first architecture", "Standards-aligned delivery", "Lifecycle support"] },
    ],
  },
  "information-security-consultancy": {
    title: "Information Security Consultancy",
    intro: "Build defences that match today's threats — and tomorrow's.",
    sections: [
      { heading: "Capabilities", points: ["ISO 27001 ISMS implementation", "Risk & vulnerability assessment", "Security architecture review", "Policy & governance"] },
      { heading: "Outcomes", points: ["Reduced cyber risk", "Audit-ready posture", "Clear remediation roadmap", "Continuous improvement"] },
    ],
  },
  "unified-communication": {
    title: "Unified Communication",
    intro: "Assessment and design for modern UC stacks — secure, performant, and people-friendly.",
    sections: [
      { heading: "Services", points: ["VoIP & IP telephony design", "IP application & collaboration", "UC security assessment", "Capacity & performance planning"] },
    ],
  },
  "smart-city-building": {
    title: "Smart City / Building",
    intro: "Connected infrastructure that improves life, work and sustainability.",
    sections: [
      { heading: "Focus areas", points: ["IoT & sensor networks", "Building management systems", "Smart surveillance", "Energy efficiency"] },
    ],
  },
  audits: {
    title: "Audits",
    intro: "Independent, evidence-based audits with actionable findings.",
    sections: [
      { heading: "Audit types", points: ["Data Center Audit", "Information Security Audit", "EM Audit", "Energy Audit"] },
    ],
  },
  trainings: {
    title: "Trainings",
    intro: "Training programs that elevate teams and reduce human risk.",
    sections: [
      { heading: "Programs", points: ["Security awareness", "ISO 27001 internal auditor", "Custom corporate trainings", "Hands-on technical labs"] },
    ],
  },
  "data-center-design": {
    title: "Data Center Design",
    intro: "Resilient data centers engineered for availability, efficiency and growth.",
    sections: [
      { heading: "Scope", points: ["Power & cooling analysis", "Availability tier design", "Risk assessment", "Site selection", "Relocation evaluation", "Planning & energy assessment", "Server planning"] },
    ],
  },
  "active-network": {
    title: "Active Network",
    intro: "Switching, routing and security fabric tuned for enterprise workloads.",
    sections: [
      { heading: "What's included", points: ["LAN/WAN architecture", "SD-WAN readiness", "Network segmentation", "QoS & performance"] },
    ],
  },
  "passive-infrastructure": {
    title: "Passive Infrastructure",
    intro: "Structured cabling and pathways built to global standards.",
    sections: [
      { heading: "Deliverables", points: ["Cabling design (Cat6A / Fiber)", "Pathway & containment", "Labeling & documentation", "Testing & certification"] },
    ],
  },
  "wireless-solution": {
    title: "Wireless Solution",
    intro: "Secure, high-density wireless for offices, campuses and venues.",
    sections: [
      { heading: "From survey to optimisation", points: ["Predictive & on-site surveys", "AP placement & RF planning", "Secure SSID architecture", "Post-deployment tuning"] },
    ],
  },
  "iso-27000-compliance": {
    title: "ISO 27000 Compliance",
    intro: "ISMS implementation that gets you certified — and keeps you certified.",
    sections: [
      { heading: "Engagement", points: ["Gap analysis", "Risk assessment & treatment", "Policy & control implementation", "Internal audit & certification support"] },
    ],
  },
  "physical-security-access-control": {
    title: "Physical Security & Access Control",
    intro: "Physical security design for new facilities and upgrades.",
    sections: [
      { heading: "Focus", points: ["Access control points", "Security surveillance & CCTV", "Risk mitigation", "Monitoring infrastructure"] },
    ],
  },
};

import cinema from "@/assets/project-cinema.jpg";
import ffc from "@/assets/project-ffc.jpg";
import mazaar from "@/assets/project-mazaar.jpg";
import hilton from "@/assets/project-hilton.jpg";
import smartcity from "@/assets/project-smartcity.jpg";
import gov from "@/assets/project-gov.jpg";

export const projects = [
  { slug: "arena-cinema", title: "Arena — 5 Star Cinema", category: "Information Security", image: cinema,
    description: "Information Security audits with evaluation of safety protocols and improvement recommendations." },
  { slug: "abdullah-shah-ghazi-mazaar", title: "Abdullah Shah Ghazi Mazaar", category: "Physical Security", image: mazaar,
    description: "ICT infrastructure, CCTV deployment, physical security and access control solutions." },
  { slug: "ffc", title: "Fauji Fertilizer Company Limited", category: "ISO 27001", image: ffc,
    description: "Appointed consultant for ISO 27001:2013 ISMS certification." },
  { slug: "double-tree-hilton", title: "Double Tree Hilton Islamabad", category: "Smart Building", image: hilton,
    description: "Smart building infrastructure and unified communication design." },
  { slug: "government-infrastructure", title: "Government Security Infrastructure", category: "Cybersecurity", image: gov,
    description: "Critical government infrastructure protection and security operations design." },
  { slug: "smart-city-initiative", title: "Smart City Deployment", category: "Smart City", image: smartcity,
    description: "Connected city infrastructure with IoT, surveillance and command operations." },
];

export const testimonials = [
  { name: "Director, Critical Infrastructure", company: "Government Sector",
    quote: "ITnIS delivered a security architecture that exceeded compliance and gave us real operational confidence.", rating: 5 },
  { name: "CIO", company: "Leading Fertilizer Enterprise",
    quote: "Their ISO 27001 engagement was world-class — methodical, vendor-neutral and outcome focused.", rating: 5 },
  { name: "Facilities Head", company: "Hospitality Group",
    quote: "From cabling to surveillance, the design was rigorous and the rollout was painless.", rating: 5 },
];

export const blogs = [
  { slug: "official-beta-launch", title: "Official beta website of ITnIS Consulting launched",
    date: "2024-02-12", category: "Company",
    excerpt: "We are proud to announce the launch of the beta version of our official website — a responsive experience built for our clients and partners." },
  { slug: "teradata-it-excellence-award", title: "Mr. Ameen Sharif, CTO ITnIS Consulting, honoured with Teradata IT Excellence Award",
    date: "2024-01-08", category: "Recognition",
    excerpt: "Recognising leadership and contribution to the ICT and Information Security industry." },
  { slug: "iso-27001-2022-transition", title: "Transitioning to ISO 27001:2022 — what enterprises need to know",
    date: "2023-11-22", category: "Security",
    excerpt: "A practical look at the new control set and what your roadmap to recertification should look like." },
];
