export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Sora",
    body: "Inter",
    display: "Space Grotesk",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "overlay",
  projectGridStyle: "bento",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Techmaster",
    legalName: "Techmaster Zimbabwe (Pvt) Ltd",
    tagline: "Master Your Technology",
    description:
      "Harare's trusted tech services company specializing in computer repair, networking, CCTV installation, POS systems, and comprehensive IT support for businesses of all sizes.",
    phone: "+263 71 212 3610",
    phoneRaw: "+263712123610",
    whatsappNumber: "263712123610",
    email: "info@techmaster.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.6,
    ratingRounded: 5,
    reviewCount: 58,
    established: "2017",
    yearsExperience: "8+",
    projectsCompleted: "3,000+",
    employees: "20+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:30 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Emergency Only" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "techmaster-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Tech",
    logoLine2: "master",
  },

  hero: {
    badge: "Harare's Trusted Tech Partner",
    titleParts: [
      { text: "Master Your " },
      { text: "Technology.", highlight: true },
    ],
    subtitle:
      "From crashed laptops to enterprise networks. CCTV that actually captures. POS systems that never freeze. We fix, build, and maintain the tech your business runs on.",
    ctaPrimary: "Get Tech Support",
    ctaSecondary: "View Our Services",
    trustBadge: "3,000+ Devices Repaired",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1920&q=80", alt: "Computer repair workstation" },
      { url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80", alt: "Network infrastructure setup" },
      { url: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1920&q=80", alt: "CCTV security systems" },
    ],
  },

  stats: [
    { number: "3,000+", label: "Devices Repaired" },
    { number: "500+", label: "CCTV Installs" },
    { number: "8+", label: "Years Experience" },
    { number: "24hr", label: "Emergency Response" },
  ],

  servicesPreview: [
    {
      iconName: "Desktop",
      title: "Computer Repair",
      desc: "Laptops, desktops, servers. Hardware failures, software issues, data recovery. Same-day service for most repairs. We fix what others give up on.",
    },
    {
      iconName: "WifiHigh",
      title: "Networking",
      desc: "Structured cabling, Wi-Fi deployment, switches, routers, and firewalls. From small offices to multi-floor enterprises.",
    },
    {
      iconName: "SecurityCamera",
      title: "CCTV Installation",
      desc: "Hikvision, Dahua, and IP camera systems. Remote viewing, night vision, and analytics. Design, install, and maintain.",
    },
    {
      iconName: "CashRegister",
      title: "POS Systems",
      desc: "Point-of-sale hardware and software for retail, restaurants, and hospitality. Barcode scanners, receipt printers, and inventory integration.",
    },
    {
      iconName: "Code",
      title: "Software Solutions",
      desc: "OS installation, antivirus deployment, cloud backup setup, and business software configuration. Licensed, optimized, updated.",
    },
    {
      iconName: "Headset",
      title: "IT Support",
      desc: "Ongoing managed IT support. Help desk, remote assistance, on-site visits, and proactive monitoring. Your IT department, outsourced.",
    },
  ],

  featuredProjects: [
    {
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
      title: "32-Camera CCTV — Retail Complex",
      category: "CCTV",
    },
    {
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      title: "Network Overhaul — Law Firm",
      category: "Networking",
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      title: "POS Deployment — Restaurant Chain",
      category: "POS Systems",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Why " },
      { text: "Techmaster?", highlight: true },
    ],
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80",
    imageAlt: "Techmaster engineer repairing computer hardware",
    experienceYears: "3,000+",
    experienceLabel: "Devices Fixed",
    points: [
      {
        title: "Same-Day Repairs",
        desc: "Most computer repairs completed within 24 hours. Bring it in the morning, pick it up by evening. No week-long waits.",
      },
      {
        title: "Certified Engineers",
        desc: "CompTIA, Cisco, and Hikvision certified technicians. We know the hardware and software inside out.",
      },
      {
        title: "Full Warranty",
        desc: "Every repair and installation comes with a written warranty. If it breaks again within the warranty period, we fix it free.",
      },
      {
        title: "Emergency Support",
        desc: "Server down? Network crashed? We offer 24-hour emergency response because business does not wait until Monday.",
      },
    ],
  },

  homeCta: {
    backgroundImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80",
    backgroundAlt: "Technology infrastructure and networks",
    titleParts: [
      { text: "Tech " },
      { text: "Problems?", highlight: true },
      { text: " Solved." },
    ],
    subtitle:
      "Call us, WhatsApp us, or bring your device in. Free diagnostics on all walk-in repairs. No fix, no fee — that is the Techmaster guarantee.",
    ctaPrimary: "Call for Free Diagnosis",
    whatsappText:
      "Hi Techmaster! I need tech support. Can you help?",
  },

  homeTestimonials: [
    {
      name: "Kudzai Mapfumo",
      role: "Restaurant Owner",
      text: "Techmaster installed our POS system across 3 locations. Seamless integration with our inventory. When we had an issue at midnight before a holiday, they answered the phone and fixed it remotely. Incredible service.",
      rating: 5,
    },
    {
      name: "Rudo Chigwedere",
      role: "Office Manager, Law Firm",
      text: "They networked our entire 3-floor office, installed 16 CCTV cameras, and set up our server room. Three years later, everything still runs flawlessly. Their warranty is real — they came back twice at no charge.",
      rating: 5,
    },
    {
      name: "Brian Makomborero",
      role: "School IT Coordinator",
      text: "We gave them 40 laptops that were basically dead. They recovered data from 38 of them and repaired 35. The school saved thousands of dollars. Techmaster is our first call for anything tech.",
      rating: 5,
    },
  ],

  // ====== ABOUT PAGE ======
  about: {
    heroTitle: [{ text: "Tech " }, { text: "Mastery.", highlight: true }],
    heroSubtitle: "Techmaster was built by engineers who got tired of watching businesses suffer from bad IT support.",
    storyImage: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80",
    storyImageAlt: "Techmaster repair workshop",
    storyProjectCount: "3,000+",
    storyProjectLabel: "Devices Repaired",
    storyTitle: "From a Repair Bench to Harare's Most Trusted Tech Team.",
    storyParagraphs: [
      "Techmaster started in 2017 with two engineers and a simple promise: fix it right the first time. We saw too many businesses losing days of productivity to bad IT support — technicians who could not diagnose, repairs that took weeks, and installations that failed on day one.",
      "We built our reputation one fix at a time. Word spread. The repair shop grew into a full-service IT company. Today, we handle everything from laptop screen replacements to enterprise network deployments.",
      "With 20+ certified engineers and over 3,000 successful repairs, we are Harare's go-to technology partner. But our promise has not changed: fix it right, fix it fast, and stand behind our work.",
    ],
    mission: "To be the most reliable technology services company in Zimbabwe. Every device fixed. Every network online. Every client confident in their tech.",
    vision: "To set the standard for IT services in Southern Africa — competent, honest, and always available when technology fails.",
    values: [
      { iconName: "Wrench", title: "Precision", desc: "We diagnose accurately and repair thoroughly. No guesswork." },
      { iconName: "Lightning", title: "Speed", desc: "Same-day repairs. 24-hour emergency response. Time is money." },
      { iconName: "ShieldCheck", title: "Warranty", desc: "Every service is backed by a written guarantee." },
      { iconName: "Handshake", title: "Honesty", desc: "Fair pricing. Transparent diagnostics. No surprise charges." },
      { iconName: "GraduationCap", title: "Expertise", desc: "CompTIA, Cisco, and Hikvision certified engineers." },
      { iconName: "Heart", title: "Care", desc: "We treat every device like it is our own." },
    ],
    team: [
      { name: "Tawanda Moyo", role: "Founder & Lead Engineer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Chenai Dube", role: "Network Specialist", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Simba Nyamhere", role: "CCTV & Security Lead", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
      { name: "Grace Madzima", role: "POS & Software Lead", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
    ],
    milestones: [
      { year: "2017", title: "Techmaster Founded", desc: "Started as a two-person repair shop in Harare." },
      { year: "2018", title: "CCTV Division", desc: "Became Hikvision certified installer." },
      { year: "2019", title: "1,000 Repairs", desc: "Crossed 1,000 successful device repairs." },
      { year: "2020", title: "Network Services", desc: "Added enterprise networking to our capabilities." },
      { year: "2022", title: "POS Division", desc: "Launched point-of-sale solutions for retail and hospitality." },
      { year: "2024", title: "3,000+ Repairs", desc: "Surpassed 3,000 device repairs and 500 CCTV installations." },
    ],
    ctaTitle: "Need Tech Help?",
    ctaSubtitle: "Free diagnostics on all walk-in repairs. Call or WhatsApp us now.",
    ctaCta: "Get Support Now",
  },

  // ====== SERVICES PAGE ======
  services: {
    heroTitle: [{ text: "Every Tech " }, { text: "Problem", highlight: true }, { text: " — Solved." }],
    heroSubtitle: "Six core services covering every technology need your business has.",
    items: [
      {
        iconName: "Desktop", title: "Computer Repair", slug: "computer-repair",
        image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80",
        desc: "Expert diagnosis and repair for laptops, desktops, and servers. Hardware replacements, software fixes, virus removal, and data recovery.",
        features: ["Laptop screen and keyboard replacement", "Hard drive and SSD upgrades", "Virus and malware removal", "Data recovery from failed drives", "Server repair and maintenance", "Same-day service for most repairs"],
      },
      {
        iconName: "WifiHigh", title: "Networking", slug: "networking",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        desc: "Structured cabling, enterprise Wi-Fi, switches, routers, and firewalls. From small offices to multi-floor businesses.",
        features: ["Cat6/Cat6A structured cabling", "Enterprise Wi-Fi design and deployment", "Managed switch and router configuration", "Firewall setup and VPN configuration", "Network performance monitoring", "Fiber optic termination and splicing"],
      },
      {
        iconName: "SecurityCamera", title: "CCTV Installation", slug: "cctv-installation",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80",
        desc: "Hikvision and Dahua camera systems with remote viewing, night vision, and AI analytics. Design, install, and maintain.",
        features: ["Hikvision and Dahua certified installer", "IP and analog camera systems", "Remote viewing via smartphone app", "Night vision and motion detection", "AI-powered analytics (people counting, intrusion)", "DVR/NVR setup with cloud backup"],
      },
      {
        iconName: "CashRegister", title: "POS Systems", slug: "pos-systems",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
        desc: "Complete point-of-sale solutions for retail, restaurants, and hospitality. Hardware, software, and inventory integration.",
        features: ["Touchscreen POS terminals", "Barcode scanner and receipt printer setup", "Inventory management integration", "Multi-location POS synchronization", "Staff training and onboarding", "24/7 POS support and maintenance"],
      },
      {
        iconName: "Code", title: "Software Solutions", slug: "software-solutions",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
        desc: "Operating system installation, antivirus deployment, cloud backup, and business software setup.",
        features: ["Windows and Linux OS installation", "Antivirus and endpoint protection", "Cloud backup (Google, Microsoft, AWS)", "Microsoft 365 and Google Workspace setup", "Business software configuration", "License management and optimization"],
      },
      {
        iconName: "Headset", title: "IT Support", slug: "it-support",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
        desc: "Managed IT support with help desk, remote assistance, on-site visits, and proactive monitoring.",
        features: ["Monthly managed IT plans", "Help desk with phone and remote support", "Proactive server and network monitoring", "On-site visits for hardware issues", "IT asset management and tracking", "24-hour emergency response"],
      },
    ],
    ctaTitle: "Got a Tech Emergency?",
    ctaSubtitle: "Call us now. Free diagnostics on all walk-in devices.",
  },

  // ====== PROJECTS PAGE ======
  projects: {
    heroTitle: [{ text: "Work " }, { text: "Done.", highlight: true }],
    heroSubtitle: "Real projects. Real businesses. Technology that works from day one.",
    categories: ["All", "CCTV", "Networking", "POS Systems", "Computer Repair", "IT Support"],
    items: [
      { id: 1, title: "32-Camera CCTV — Retail Complex", category: "CCTV", location: "Harare", year: "2024", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80", desc: "Designed and installed a 32-camera IP system with AI analytics, remote viewing, and 30-day storage.", services: ["CCTV Installation"] },
      { id: 2, title: "Network Overhaul — Law Firm", category: "Networking", location: "Harare", year: "2024", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", desc: "Complete 3-floor network redesign with Cat6A cabling, managed switches, and enterprise Wi-Fi.", services: ["Networking", "IT Support"] },
      { id: 3, title: "POS Deployment — Restaurant Chain", category: "POS Systems", location: "Harare", year: "2023", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80", desc: "Multi-location POS rollout with inventory sync across 5 restaurants.", services: ["POS Systems", "Networking"] },
      { id: 4, title: "40-Laptop Recovery — School", category: "Computer Repair", location: "Harare", year: "2023", image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80", desc: "Recovered data from 38 laptops and repaired 35. Saved the school thousands in replacement costs.", services: ["Computer Repair"] },
      { id: 5, title: "Managed IT — Accounting Firm", category: "IT Support", location: "Harare", year: "2024", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", desc: "Full managed IT for 45 workstations. Monthly support, server monitoring, and security updates.", services: ["IT Support", "Networking"] },
      { id: 6, title: "16-Camera CCTV — Warehouse", category: "CCTV", location: "Chitungwiza", year: "2024", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80", desc: "IP camera system with night vision, intrusion detection, and cloud backup for a distribution warehouse.", services: ["CCTV Installation"] },
    ],
  },

  // ====== REVIEWS PAGE ======
  reviews: {
    heroTitle: [{ text: "Client " }, { text: "Proof.", highlight: true }],
    heroSubtitle: "Real reviews from real businesses. Our work speaks for itself.",
    ratingBreakdown: [{ stars: 5, count: 42 }, { stars: 4, count: 12 }, { stars: 3, count: 3 }, { stars: 2, count: 1 }, { stars: 1, count: 0 }],
    items: [
      { name: "Kudzai Mapfumo", role: "Restaurant Owner", text: "POS system across 3 locations. Fixed an issue at midnight remotely. Incredible service.", rating: 5, date: "1 month ago", project: "POS Systems", avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c" },
      { name: "Rudo Chigwedere", role: "Office Manager, Law Firm", text: "Networked our 3-floor office, 16 cameras, server room. Three years, still flawless.", rating: 5, date: "2 months ago", project: "Networking", avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c" },
      { name: "Brian Makomborero", role: "School IT Coordinator", text: "40 dead laptops. Recovered 38, repaired 35. Saved the school thousands.", rating: 5, date: "3 months ago", project: "Computer Repair", avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c" },
      { name: "Tatenda Mushore", role: "Retail Manager", text: "32-camera CCTV system works perfectly. Remote viewing from my phone. Installation was clean and professional.", rating: 5, date: "4 months ago", project: "CCTV Installation", avatar: "https://lh3.googleusercontent.com/a/default-user=s120-c" },
    ],
  },

  contact: {
    heroTitle: [{ text: "Get " }, { text: "Help.", highlight: true }],
    heroSubtitle: "Free diagnostics on walk-ins. 24-hour emergency support. Call, WhatsApp, or visit.",
    formTitle: "Send Us a Message",
    formSubtitle: "Describe your tech problem and we will respond within 2 hours.",
  },

  careers: {
    heroTitle: [{ text: "Join the " }, { text: "Team.", highlight: true }],
    heroSubtitle: "We are hiring certified technicians and engineers.",
    perks: [
      { iconName: "GraduationCap", title: "Certification", desc: "Company-funded CompTIA, Cisco, and Hikvision certs." },
      { iconName: "Heart", title: "Health Cover", desc: "Medical aid for you and your family." },
      { iconName: "Car", title: "Field Vehicle", desc: "Company vehicle for on-site visits." },
      { iconName: "Wrench", title: "Tools Provided", desc: "Professional toolkit and diagnostic equipment." },
    ],
    positions: [
      { title: "CCTV Installation Technician", department: "Security", type: "Full-time", location: "Harare", desc: "Install and maintain Hikvision/Dahua systems. Hikvision cert preferred." },
      { title: "Network Engineer", department: "Networking", type: "Full-time", location: "Harare", desc: "Design and deploy structured cabling and enterprise networks. CCNA required." },
    ],
  },

  footer: {
    tagline: "Harare's trusted tech services company. Repair. Install. Support.",
    bottomLinks: [
      { label: "Privacy Policy", url: "/privacy" },
      { label: "Terms of Service", url: "/terms" },
    ],
  },
};

export default siteData;
