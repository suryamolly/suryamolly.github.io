export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Flagship" | "Agentic AI" | "Open Source" | "System Engineering" | "Architecture";
  description: string;
  highlights: string[];
  tags: string[];
  metrics?: string;
  links: {
    github?: string;
    pubDev?: string;
    live?: string;
    playStore?: string;
    appStore?: string;
  };
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  current?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; iconName?: string }[];
}

export interface Publication {
  title: string;
  outlet: string;
  year?: string;
  description: string;
  link?: string;
  type: "Research Paper" | "Article" | "Blog";
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
  highlights?: string[];
}

export interface SpeakingEngagement {
  title: string;
  event: string;
  location: string;
  date: string;
  role: "Speaker" | "Keynote" | "Lightning Talk" | "Conference Presence";
  description: string;
  highlights?: string[];
  link?: string;
  tags: string[];
}

export const portfolioData = {
  personal: {
    name: "Surya Mouly",
    role: "Staff Engineer & Mobile App Architect",
    company: "Nagarro",
    tagline: "Building scalable cross-platform & native mobile systems, engineering production web platforms with Agentic AI, and translating complex requirements into robust architecture.",
    location: "Noida, Uttar Pradesh, India",
    email: "suryamouly@gmail.com",
    phone: "+91 9717799345",
    linkedin: "https://www.linkedin.com/in/suryamouly",
    github: "https://github.com/suryamolly",
    medium: "https://medium.com/@suryamouly",
    pubDev: "https://pub.dev/packages/muscle_mapper",
    verifiedPublisher: "https://pub.dev/publishers/suryamouly.in",
    resumeUrl: "#contact", // Can link to a hosted PDF or modal
    yearsOfExperience: "10+",
    avatarUrl: "/profile.png",
    fallbackAvatarUrl: "https://github.com/suryamolly.png",
  },

  metrics: [
    { label: "Years of Experience", value: "10+", description: "Mobile system engineering & architecture" },
    { label: "Leadership Role", value: "Staff Engineer", description: "At Nagarro driving mobile vision & RFPs" },
    { label: "Millions of Users", value: "10M+", description: "Impacted across enterprise & system apps" },
    { label: "Open Source Publisher", value: "pub.dev", description: "Verified author of muscle_mapper package" },
  ],

  about: {
    headline: "Architecting high-concurrency mobile systems & agentic AI web platforms with enterprise rigor and product focus.",
    paragraphs: [
      "As a Staff Engineer at Nagarro, I bridge technical excellence with business strategy. I specialize in cross-platform (Flutter) and native Android architectures, leading end-to-end delivery from Request for Proposal (RFP) solutioning to global production rollout.",
      "Beyond mobile ecosystems, I actively lead Agentic AI product engineering — taking ambiguous domain requirements from zero to one. By orchestrating autonomous AI coding agents, establishing resilient system architecture, and designing intuitive user funnels, I translate functional specs into production-grade web platforms.",
      "With over 10 years of hands-on software engineering, my career spans architecting flagship enterprise applications (such as Lufthansa Group's Miles & More and Tirhal On-Demand Mobility), contributing to Samsung ONE UI framework at Samsung R&D Institute Noida (SRIN), and building widely-adopted developer tools.",
      "I am deeply committed to cross-functional collaboration (CFT), mentoring technical leads, establishing robust CI/CD automation, and ensuring zero-compromise performance and code quality across distributed engineering teams.",
    ],
    corePillars: [
      {
        title: "Mobile Architecture",
        desc: "Modular Clean Architecture, BLoC, MVVM, and domain-driven isolation designed for multi-tenant scalability.",
      },
      {
        title: "Agentic AI & Product Engineering",
        desc: "Translating ambiguous functional requirements into resilient architectures, accelerated by autonomous AI agents and modern web stacks.",
      },
      {
        title: "Enterprise RFP & Solutioning",
        desc: "Deconstructing ambiguous business requirements into resilient technical blueprints and execution plans.",
      },
      {
        title: "Performance & CI/CD",
        desc: "Deep memory profiling, frame-rate stabilization, automated Fastlane deployment, and zero-downtime releases.",
      },
      {
        title: "Engineering Leadership",
        desc: "Mentoring tech leads, conducting architecture reviews, and fostering collaborative cross-functional culture.",
      },
    ],
  },

  projects: [
    {
      id: "miles-and-more",
      title: "Miles & More (Lufthansa Group)",
      tagline: "Flagship European Frequent Flyer & Loyalty Airline Companion App",
      category: "Flagship",
      description:
        "Europe's premier frequent flyer loyalty mobile application serving millions of active travelers across Lufthansa, Austrian Airlines, SWISS, Brussels Airlines, and Eurowings. Provides real-time mileage management, flight bookings, digital cards, and in-flight redemption.",
      highlights: [
        "Architected scalable Flutter modules integrated with legacy and modern backend airline service APIs.",
        "Implemented secure biometric authentication (Face ID / Fingerprint) and encrypted local storage.",
        "Designed resilient offline caching strategy ensuring flight passes and membership status remain accessible in transit.",
        "Built automated CI/CD build pipelines using Fastlane, cutting regression release cycles significantly.",
      ],
      tags: ["Flutter", "Dart", "Clean Architecture", "BLoC", "Fastlane", "Biometrics", "CI/CD", "iOS & Android"],
      metrics: "Millions of Active Travelers Across Europe",
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.plannet.milesandmoreapp&hl=en",
        appStore: "https://apps.apple.com/us/app/miles-more/id512571708",
      },
      featured: true,
    },
    {
      id: "tirhal",
      title: "Tirhal (On-Demand Mobility & Logistics)",
      tagline: "High-Concurrency Real-Time Taxi Booking & Driver Dispatch Android Application",
      category: "Flagship",
      description:
        "Leading on-demand ride-hailing and logistics mobility platform serving over 5 million users. Engineered core Android client applications powering real-time GPS fleet tracking, automated fare calculation, low-latency socket communication for ride dispatch, and background geolocation telemetry.",
      highlights: [
        "Real-Time Telemetry & Geolocation: Engineered high-frequency background location tracking, map clustering, and route polyline rendering with optimized battery consumption.",
        "Low-Latency Dispatch Engine: Integrated bi-directional WebSocket and MQTT communication protocols for instantaneous ride requests, driver matching, and fare estimation.",
        "Resilient High-Concurrency & Offline Handling: Built robust local SQLite caching, reconnect recovery algorithms, and payment gateway integration designed for volatile network conditions.",
      ],
      tags: ["Android SDK", "Java", "Kotlin", "Google Maps SDK", "WebSockets", "GPS Telemetry", "High Concurrency", "Architecture"],
      metrics: "5M+ Registered Users • #1 Ride-Hailing App",
      links: {
        live: "https://www.tirhal.net/",
        playStore: "https://play.google.com/store/apps/details?id=sd.tirhal.passenger",
      },
      featured: true,
    },
    {
      id: "muscle-mapper",
      title: "Muscle Mapper (pub.dev Package)",
      tagline: "Interactive 2D Human Anatomy & Muscle Heatmap Widget for Flutter",
      category: "Open Source",
      description:
        "An open-source Flutter UI package providing a mathematical 2D human anatomy model with interactive muscle group highlighting, tap detection, heatmaps, and multi-select support for fitness, physiotherapy, and medical apps.",
      highlights: [
        "BYOA (Bring Your Own Asset) architecture decoupling SVG geometry from the rendering core.",
        "Pixel-perfect mathematical hit testing: hybrid approach combining flutter_svg with path_drawing Flutter Path objects to eliminate bounding-box overlap bugs.",
        "3-tier anatomical hierarchy: Sub-Muscle, MuscleGroup, and MajorMuscleGroup.",
        "Multi-view support: Male & Female front and back views with smooth animated opacity heatmaps.",
        "Published under verified publisher suryamouly.in on pub.dev with top popularity and pub points.",
      ],
      tags: ["Flutter", "Dart", "Open Source", "SVG Parsing", "Path Drawing", "Canvas", "pub.dev"],
      metrics: "Verified pub.dev Publisher • Active Downloads",
      links: {
        pubDev: "https://pub.dev/packages/muscle_mapper",
        github: "https://github.com/suryamolly/muscle_mapper",
      },
      featured: true,
    },
    {
      id: "samsung-one-ui",
      title: "Samsung ONE UI System Applications",
      tagline: "Core OS Framework & System-Level Android Services",
      category: "System Engineering",
      description:
        "Engineered and integrated critical system-based Android applications into Samsung's proprietary ONE UI framework at Samsung R&D Institute Noida (SRIN), powering millions of Samsung Galaxy flagship and mid-range devices globally.",
      highlights: [
        "Developed low-latency Android background services and IPC interfaces utilizing AIDL.",
        "Conducted deep memory leak diagnostics, garbage collection tuning, and battery drain reduction.",
        "Collaborated with Samsung Global R&D engineers to ensure adherence to strict OS platform standards.",
      ],
      tags: ["Android SDK", "Java", "Kotlin", "Samsung ONE UI", "AIDL", "IPC", "Memory Profiling"],
      metrics: "Pre-installed on millions of Samsung Galaxy smartphones",
      links: {},
      featured: true,
    },
    {
      id: "tagmefit",
      title: "TagMeFit (Women's Fitness Platform)",
      tagline: "End-to-End Product Architecture, Requirement Mapping & Agentic AI Engineering",
      category: "Agentic AI",
      description:
        "Spearheaded the complete product journey for a premier women's online fitness coaching platform. Translated functional fitness coaching and client-onboarding requirements into an intuitive, high-converting digital experience using autonomous AI coding agents and Next.js.",
      highlights: [
        "Requirement Gathering to Tech Blueprint: Deconstructed coaching workflows, hormonal health considerations, and customized transformation tiers into a structured product architecture.",
        "Agentic AI Co-Engineering: Leveraged autonomous AI coding agents to rapidly scaffold modular components, interactive tools (workout generator, macro calculators), and responsive layouts.",
        "Production-Grade Architecture: Built on Next.js App Router with Supabase backend integration, dynamic tier pricing, and optimized Core Web Vitals for maximum user conversion.",
      ],
      tags: ["Agentic AI", "Next.js", "TypeScript", "Product Architecture", "Requirement Engineering", "Supabase", "Tailwind CSS"],
      metrics: "Live Production Platform • 500+ Client Transformations",
      links: {
        live: "https://www.tagmefit.com/",
      },
      featured: true,
    },
    {
      id: "hashtag-personal-trainer",
      title: "Hashtag Personal Trainer Platform",
      tagline: "Agent-Driven Architecture, Interactive Visuals & Automated Funnels",
      category: "Agentic AI",
      description:
        "Architected and delivered an interactive fitness training portal. Directed technical architecture decisions from stakeholder requirement analysis to Next.js App Router implementation, custom interactive canvas graphics, and frictionless WhatsApp lead funnels.",
      highlights: [
        "Architectural Decision-Making: Selected modern lightweight tech stack (Next.js, TypeScript, CSS modules) ensuring instant page loads, SSR performance, and zero server cold starts.",
        "Autonomous Agent Orchestration: Employed AI agent workflows to accelerate feature decomposition, complex SVG mesh rendering, and responsive UI implementation.",
        "Frictionless Conversion Flow: Designed conversion-focused onboarding architecture integrating consultation booking, transformation galleries, and multi-channel client inquiries.",
      ],
      tags: ["Agentic AI", "Next.js", "TypeScript", "System Architecture", "Interactive Canvas", "Conversion Funnels"],
      metrics: "Sub-second FCP • Automated Onboarding Funnel",
      links: {
        live: "https://www.hashtagpersonaltrainer.com/",
      },
      featured: true,
    },
    {
      id: "assignment-help-service",
      title: "Assignment Help Service (Global Academic Platform)",
      tagline: "High-Traffic Service Architecture, Requirement Translation & Workflow Automation",
      category: "Agentic AI",
      description:
        "Engineered an international academic consultation and writing support platform. Translated complex multi-step student intake requirements, internationalized ordering validation, and subject classification into a robust, high-traffic web platform.",
      highlights: [
        "Functional Requirements to System Design: Modeled complex multi-currency calculation rules, deadline-driven pricing logic, and multi-step intake validation.",
        "Agentic Development & Workflow Automation: Accelerated feature delivery using AI coding agents for complex form validation logic, international telephony integration, and responsive layouts.",
        "Technical SEO & Scalability: Implemented rich structured data (schema.org), semantic HTML, and performance optimizations supporting high organic search volume and 26,000+ client reviews.",
      ],
      tags: ["Agentic AI", "Product Engineering", "Requirement Gathering", "Workflow Automation", "SEO Architecture", "Full-Stack"],
      metrics: "26,000+ Verified Reviews • Global Multi-Country Traffic",
      links: {
        live: "https://www.assignmenthelpservice.com/",
      },
      featured: true,
    },
    {
      id: "enterprise-mobile-kit",
      title: "Enterprise Mobile Architecture Foundation",
      tagline: "Reusable Blueprint for Scalable Multi-Tenant Mobile Systems",
      category: "Architecture",
      description:
        "A hardened architectural foundation for multi-tenant mobile applications featuring modular feature packages, dependency injection, pluggable network layers, and automated localization pipelines.",
      highlights: [
        "Feature-by-package structure allowing independent teams to develop in parallel without merge conflicts.",
        "Automated build flavors for Dev, Staging, and Production with dynamic environment injection.",
        "Comprehensive automated testing pattern covering unit, widget, and end-to-end integration flows.",
      ],
      tags: ["Flutter", "Clean Architecture", "Dependency Injection", "Build Flavors", "Fastlane"],
      links: {},
      featured: false,
    },
  ] as Project[],

  experience: [
    {
      company: "Nagarro",
      role: "Staff Engineer",
      period: "June 2025 – Present",
      location: "Noida, India",
      type: "Full-Time",
      current: true,
      description:
        "Leading high-level mobile architecture, technology roadmaps, and cross-functional engineering execution across major enterprise initiatives including Lufthansa Group's mobile systems.",
      responsibilities: [
        "Architecting complex Flutter & Android applications with strict standards for performance, resilience, and security.",
        "Spearheading Request for Proposal (RFP) technical solutioning, creating architectural blueprints, effort estimations, and delivery models.",
        "Mentoring Tech Leads and engineering teams across multiple projects, establishing code quality benchmarks and CI/CD best practices.",
        "Partnering closely with product leadership and enterprise stakeholders in Cross-Functional Teams (CFT).",
      ],
      skills: ["Flutter", "Android SDK", "System Architecture", "RFP Solutioning", "CI/CD", "Leadership", "Mentoring"],
    },
    {
      company: "Nagarro",
      role: "Associate Staff Engineer",
      period: "January 2022 – June 2025",
      location: "Gurugram / Noida, India",
      type: "Full-Time",
      description:
        "Drove technical leadership, agile sprint planning, and architectural governance for mission-critical client projects.",
      responsibilities: [
        "Led mobile engineering pods as Tech Lead, providing hands-on architectural decisions, code reviews, and mentoring.",
        "Active member of Cross-Functional Teams (CFT), facilitating seamless alignment between engineering, design, and product management.",
        "Drove sprint planning sessions using JIRA, defining user stories, technical tasks, and reliable velocity metrics.",
        "Championed end-to-end ownership from initial ideation to app store release and post-launch monitoring.",
      ],
      skills: ["Flutter", "Dart", "Android", "Agile & JIRA", "Tech Leadership", "CFT Collaboration"],
    },
    {
      company: "Nagarro",
      role: "Senior Engineer",
      period: "March 2021 – December 2021",
      location: "India",
      type: "Full-Time",
      description:
        "Delivered core mobile modules, integrated complex third-party SDKs, and spearheaded performance optimization initiatives.",
      responsibilities: [
        "Designed and implemented high-performance UI components and state management pipelines.",
        "Identified bottlenecks and reduced app startup latency through lazy loading and asset optimization.",
      ],
      skills: ["Flutter", "Kotlin", "Android", "REST APIs", "State Management"],
    },
    {
      company: "Tech Mahindra (Client: Samsung R&D Institute Noida)",
      role: "Sr. Software Engineer / Associate Software Engineer",
      period: "April 2019 – March 2021",
      location: "Noida Area, India",
      type: "Full-Time",
      description:
        "Embedded at Samsung R&D Institute Noida (SRIN) working directly on Samsung ONE UI system framework apps.",
      responsibilities: [
        "Developed system-based Android applications tightly coupled with Samsung ONE UI user experience.",
        "Implemented IPC interfaces and optimized background services to meet Samsung's stringent battery and RAM limits.",
        "Collaborated with international R&D teams during device release cycles and firmware updates.",
      ],
      skills: ["Android Framework", "Java", "Samsung ONE UI", "AIDL", "IPC", "Memory Tuning"],
    },
    {
      company: "AppSquadz",
      role: "Software Engineer",
      period: "June 2016 – March 2019",
      location: "Noida Area, India",
      type: "Full-Time",
      description:
        "Spearheaded core Android development, proof-of-concepts, and client technical communications.",
      responsibilities: [
        "Took full ownership of overall Android app development, architecture design, and deployment.",
        "Coordinated with mobile, backend server, UI/UX, and QA teams for seamless sprint execution.",
        "Developed rapid POCs for prospective clients and formulated technical delivery timelines.",
      ],
      skills: ["Android SDK", "Java", "POC Development", "Client Communication", "Team Coordination"],
    },
    {
      company: "Purologics Technologies",
      role: "Android Application Developer & Trainee",
      period: "October 2015 – June 2016",
      location: "Noida Area, India",
      type: "Full-Time",
      description:
        "Started professional engineering career performing requirement analysis, application architecture, and unit testing.",
      responsibilities: [
        "Analyzed client specification documents and designed application layouts in collaboration with design teams.",
        "Wrote clean, testable Android Java code and performed comprehensive unit testing.",
      ],
      skills: ["Android", "Java", "Unit Testing", "Architecture Basics"],
    },
  ] as Experience[],

  skills: [
    {
      title: "Agentic AI & Product Engineering",
      description: "Translating functional requirements into products via AI agents & modern stacks",
      skills: [
        { name: "Agentic AI Workflows", level: "Expert" },
        { name: "Requirements to Architecture", level: "Expert" },
        { name: "Autonomous Coding Agents", level: "Advanced" },
        { name: "Product Strategy & RFCs", level: "Expert" },
        { name: "Next.js & TypeScript", level: "Advanced" },
        { name: "Rapid Prototyping to Prod", level: "Expert" },
        { name: "Interactive Web Experiences", level: "Advanced" },
        { name: "Technical SEO & Schema", level: "Advanced" },
      ],
    },
    {
      title: "Mobile & Cross-Platform",
      description: "Core expertise in cross-platform and native ecosystems",
      skills: [
        { name: "Flutter", level: "Expert" },
        { name: "Dart", level: "Expert" },
        { name: "Android SDK", level: "Expert" },
        { name: "Kotlin", level: "Advanced" },
        { name: "Java", level: "Advanced" },
        { name: "Samsung ONE UI", level: "Advanced" },
        { name: "Jetpack Compose", level: "Proficient" },
        { name: "iOS Fundamentals", level: "Proficient" },
      ],
    },
    {
      title: "Architecture & Engineering Patterns",
      description: "Proven practices for multi-tenant and scalable systems",
      skills: [
        { name: "Clean Architecture", level: "Expert" },
        { name: "BLoC & Provider", level: "Expert" },
        { name: "MVVM / MVI", level: "Expert" },
        { name: "Multi-Module Architecture", level: "Expert" },
        { name: "Microservices Integration", level: "Advanced" },
        { name: "RFP Technical Solutioning", level: "Expert" },
        { name: "Domain-Driven Design (DDD)", level: "Advanced" },
        { name: "State Machine Design", level: "Advanced" },
      ],
    },
    {
      title: "DevOps, CI/CD & Testing",
      description: "Automated pipelines, code quality, and release cadence",
      skills: [
        { name: "Fastlane Automation", level: "Expert" },
        { name: "GitHub Actions", level: "Advanced" },
        { name: "Gradle Build Optimization", level: "Advanced" },
        { name: "Unit & Widget Testing", level: "Expert" },
        { name: "Performance Profiling", level: "Expert" },
        { name: "Memory Leak Diagnostics", level: "Expert" },
        { name: "App Store & Play Store CI", level: "Expert" },
      ],
    },
    {
      title: "Leadership & Collaboration",
      description: "Strategic planning, stakeholder alignment, and mentorship",
      skills: [
        { name: "Cross-Functional Collaboration (CFT)", level: "Expert" },
        { name: "Technical Leadership & Mentoring", level: "Expert" },
        { name: "Agile & Sprint Planning (JIRA)", level: "Expert" },
        { name: "Stakeholder Engagement", level: "Expert" },
        { name: "End-to-End Ownership", level: "Expert" },
        { name: "Technical Writing & RFCs", level: "Advanced" },
      ],
    },
  ] as SkillCategory[],

  publications: [
    {
      title: "ONLINE VOTING TECHNOLOGY: A REVOLUTION IN DEMOCRACY",
      outlet: "Published Academic Research",
      description:
        "A comprehensive analysis of cryptographic validation, distributed digital verification protocols, and accessibility considerations for national-scale electronic voting infrastructure.",
      type: "Research Paper",
    },
    {
      title: "Technical Writing & Deep Dives on Medium",
      outlet: "medium.com/@suryamouly",
      description:
        "Articles and architectural insights covering Flutter state management, custom painting, performance profiling, and mobile engineering best practices.",
      link: "https://medium.com/@suryamouly",
      type: "Article",
    },
  ] as Publication[],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      institution: "IIMT College of Engineering / Uttar Pradesh Technical University (UPTU)",
      period: "2012 – 2016",
      location: "Greater Noida, Uttar Pradesh, India",
      description:
        "Four-year undergraduate engineering curriculum focused on computing foundations, algorithm design, software architecture, and distributed systems.",
      highlights: [
        "Core foundational focus in Data Structures, Algorithms, Object-Oriented Programming (Java/C++), and Operating Systems.",
        "Authored and published peer-reviewed research paper on 'Online Voting Technology: A Revolution in Democracy'.",
        "Participated in collegiate mobile application labs, algorithmic competitions, and technical symposiums.",
      ],
    },
  ] as Education[],

  speaking: [
    {
      title: "Teaching AI to Think: Chain of Thought in Action",
      event: "Nagarro FLO 2025 (Global Innovation Showcase)",
      location: "Global / Nagarro",
      date: "2025",
      role: "Lightning Talk",
      description:
        "Presented on how Large Language Models (LLMs) reason step-by-step using Chain of Thought (CoT). Conducted interactive live demos illustrating prompt reasoning workflows, enterprise AI transparency, and distributed the 'CoT Handbook' as an actionable practitioner's guide for engineering teams.",
      highlights: [
        "Explored multi-step cognitive reasoning paradigms in LLMs to build explainable and reliable AI systems.",
        "Demonstrated practical prompt engineering and Chain-of-Thought workflows through interactive live demos.",
        "Created and distributed the 'CoT Handbook' featuring actionable reasoning prompts and enterprise use cases.",
      ],
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7381591395788255232/",
      tags: ["Generative AI", "Chain of Thought (CoT)", "LLMs", "Prompt Engineering", "Enterprise AI", "Nagarro FLO"],
    },
    {
      title: "Fluttercon Europe 2025 & droidcon Berlin",
      event: "Fluttercon Europe & droidcon Berlin",
      location: "Berlin, Germany 🇩🇪",
      date: "2025",
      role: "Conference Presence",
      description:
        "Attended Europe's premier gathering of mobile and cross-platform engineers in Berlin. Engaged in technical exchanges spanning Flutter beyond mobile, AI integration into mobile engineering pipelines, and the architectural convergence of Android OS and Flutter.",
      highlights: [
        "Participated in deep-dive sessions exploring AI-driven workflows for cross-platform app development.",
        "Engaged in technical exchanges with international engineering leaders, GDEs, and Flutter core contributors.",
        "Represented Nagarro's mobile engineering practices within the global developer community.",
      ],
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7381593013786984448/",
      tags: ["Fluttercon EU", "droidcon Berlin", "Flutter & Dart", "Android", "Cross-Platform", "Tech Community"],
    },
  ] as SpeakingEngagement[],
};
