// ─────────────────────────────────────────────────────────────
//  YOUR CV LIVES HERE.
//  Everything from Yara Al-Mansouri's CV (all 8 pages) is in this file.
//  The pages read from this file, so you never hard-code CV text
//  inside a component.
//
//  The starter pages already show: name, title, location, summary,
//  contact (email, github, linkedin), education, experience, projects,
//  skills and achievements (awards).
//  The extra sections further down (highlights, certifications, patents,
//  publications, talks, media, leadership, languages, interests) still
//  need a <Section> on the page so they show up.
// ─────────────────────────────────────────────────────────────

export const cv = {
  name: "Yara Saud Al-Mansouri, PhD",
  title: "Principal Product Engineer | Design Technology Lead | HCI Researcher",
  location: "Riyadh, Saudi Arabia",
  summary:
    "Product engineer and designer with 16 years of professional experience building digital products in Saudi Arabia and the United Kingdom, across health tech, fintech, education and mobility. Leads teams from first research to launch while still designing and writing code every week. Has led a team of up to 64 people, shipped more than 40 products used by over 9 million people, co-founded two startups (one acquired) and earned a PhD in Human-Computer Interaction focused on Arabic interfaces.",

  contact: {
    email: "yara.almansouri@mail.example",
    phone: "+966 55 000 0000",
    portfolio: "https://yara.example",
    github: "https://github.example/yara-mansouri",
    linkedin: "https://linkedin.example/in/yaramansouri",
    dribbble: "https://dribbble.example/yaram",
    behance: "https://behance.example/yaram",
    medium: "https://medium.example/@yaram",
    scholar: "https://scholar.example/yaram",
    youtube: "https://youtube.example/@YaraBuilds",
  },

  // Put the CV PDF in the /public folder and write its file name here.
  // Leave it as "" to hide the "Download CV" button.
  cvFile: "",

  highlights: [
    "16 years of professional experience (since Jul 2010)",
    "40+ products shipped, reaching 9 million+ people",
    "Led a team of 64 people across 7 squads",
    "Co-founded 2 startups: 1 acquired, 1 closed",
    "2 patents: 1 granted, 1 pending",
    "9 publications and 31 talks and keynotes",
    "Taught 1,400+ university students",
    "19 certifications earned, 1 in progress",
  ],

  education: [
    {
      degree: "PhD in Human-Computer Interaction",
      school: "Eastmoor Institute of Technology",
      location: "Part-time, remote",
      period: "Sep 2018 – Jul 2022",
      details:
        "Thesis: “Adaptive Typography for Arabic Interfaces: Readability, Density and Trust”. Best Doctoral Thesis in HCI, 2022.",
    },
    {
      degree: "Executive Certificate in Technology Leadership",
      school: "Eastmoor Business School",
      location: "Online",
      period: "Jan 2021 – Jun 2021",
      details: "6-month program completed while working full-time.",
    },
    {
      degree: "MSc in Interaction Design, with Distinction",
      school: "University of Northbridge",
      location: "Northbridge, United Kingdom",
      period: "Sep 2011 – Sep 2012",
      details:
        "Dissertation: “Bilingual Navigation Menus on Small Screens”. Full scholarship.",
    },
    {
      degree: "BSc in Computer Science, First Class Honours",
      school: "Najd Valley University",
      location: "Riyadh, Saudi Arabia",
      period: "Sep 2006 – Jun 2010",
      details:
        "GPA: 4.81 / 5.00. Exchange semester: Lindenhall University, Germany, Feb 2009 – Jul 2009. Best Graduation Project, 2010.",
    },
  ],

  experience: [
    {
      role: "Principal Product Engineer & Design Technology Lead",
      company: "Faseela Ventures",
      location: "Riyadh, Saudi Arabia",
      period: "Sep 2023 – Present",
      points: [
        "Set the front-end and design-system direction for 9 product teams across payments, savings and rewards in a fintech super-app with 4.2 million users.",
        "Built Mizan, the company’s bilingual design system: 180 components adopted by all 9 teams, cutting UI build time by 38%.",
        "Led the rebuild of the web app in Next.js and TypeScript, reducing Largest Contentful Paint from 4.8 s to 1.6 s.",
        "Introduced accessibility reviews for every release, raising screens that meet WCAG 2.2 AA from 41% to 96%.",
        "Designed the Savings Goals feature from research in 5 cities; 610,000 users opened a goal in its first 6 months.",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Native", "GraphQL", "AWS"],
    },
    {
      role: "Director of Product Engineering",
      company: "Zayna Health Tech",
      location: "Riyadh, Saudi Arabia",
      period: "Mar 2021 – Aug 2023",
      points: [
        "Led 64 people across 7 squads (engineering, design, quality and data) with an annual budget of SAR 21 million.",
        "Launched the telemedicine platform at national scale, delivering 3.1 million consultations in 2022.",
        "Cut the app crash rate from 2.4% to 0.3% and raised the app-store rating from 3.6 to 4.7.",
        "Took the platform through two health-data security audits with zero major findings.",
      ],
      tech: ["React", "React Native", "Node.js", "PostgreSQL", "Google Cloud", "Kubernetes"],
    },
    {
      role: "Engineering Manager, Patient Apps",
      company: "Zayna Health Tech",
      location: "Riyadh, Saudi Arabia",
      period: "Jan 2019 – Feb 2021",
      points: [
        "Grew the patient apps team from 6 to 22 people; hired and mentored 4 team leads.",
        "Shipped appointment booking used by 1.8 million patients across 140 clinics.",
        "Shortened the release cycle from 6 weeks to 1 week with CI/CD and feature flags.",
      ],
      tech: [],
    },
    {
      role: "Senior Front-End Engineer",
      company: "Zayna Health Tech",
      location: "Riyadh, Saudi Arabia",
      period: "Jul 2017 – Dec 2018",
      points: [
        "Rebuilt the clinic dashboard in React, cutting doctors’ average task time by 27%.",
        "Created the first shared component library, which later grew into the Zayna design system.",
      ],
      tech: [],
    },
    {
      role: "Co-founder (part-time)",
      company: "Qalam Learn",
      location: "Riyadh, Saudi Arabia",
      period: "Feb 2019 – Nov 2022",
      points: [
        "Co-founded an Arabic-first coding education platform that reached 230,000 learners in 14 countries.",
        "Designed and built its interactive code editor, which explains errors in plain Arabic.",
        "Grew the team to 9 people and led product until the company was acquired by Mirqab Group in Nov 2022.",
      ],
      tech: ["Vue", "TypeScript", "Monaco Editor", "Firebase"],
    },
    {
      role: "Career Break",
      company: "Family relocation and volunteering",
      location: "Riyadh, Saudi Arabia",
      period: "Jan 2017 – Jun 2017",
      points: [
        "Family relocation and volunteering.",
        "Taught a 12-week web development course to 45 adult learners with the Code for Community initiative.",
      ],
      tech: [],
    },
    {
      role: "Co-founder & Chief Technology Officer",
      company: "Rafeeq Rides",
      location: "Riyadh, Saudi Arabia",
      period: "Apr 2015 – Dec 2016",
      points: [
        "Built a ride-sharing app for university students: 26,000 sign-ups and 140,000 rides in 20 months.",
        "Raised SAR 3.5 million in seed funding and led a team of 11.",
        "Closed the company in Dec 2016 after a market change and wrote a public post-mortem read by 80,000 people.",
      ],
      tech: ["React Native", "Node.js", "MongoDB", "Google Maps APIs"],
    },
    {
      role: "Senior UX Engineer",
      company: "Brightwell Studio",
      location: "London, United Kingdom",
      period: "Jun 2014 – Mar 2015",
      points: [
        "Led the studio’s first Arabic, right-to-left project, for a Gulf travel client.",
        "Mentored 3 junior designers and ran the studio’s monthly front-end guild.",
      ],
      tech: [],
    },
    {
      role: "UX Engineer",
      company: "Brightwell Studio",
      location: "London, United Kingdom",
      period: "Oct 2012 – May 2014",
      points: [
        "Designed and built responsive websites for 14 clients in retail, banking and the public sector.",
        "Delivered 2 projects that won industry awards (see Awards).",
      ],
      tech: [],
    },
    {
      role: "Research Assistant (part-time)",
      company: "University of Northbridge, Interaction Lab",
      location: "Northbridge, United Kingdom",
      period: "Jan 2012 – Sep 2012",
      points: [
        "Ran 30 usability sessions for a study on bilingual navigation menus and co-authored a technical report.",
      ],
      tech: [],
    },
    {
      role: "Junior Web Developer",
      company: "Mirqab Digital Agency",
      location: "Riyadh, Saudi Arabia",
      period: "Jul 2010 – Aug 2011",
      points: [
        "Built more than 20 websites in HTML, CSS, jQuery and PHP for local businesses and event organizers.",
      ],
      tech: [],
    },
    {
      role: "Freelance Graphic and Web Designer (part-time)",
      company: "Self-employed",
      location: "Riyadh, Saudi Arabia",
      period: "Sep 2008 – Jun 2010",
      points: [
        "Designed logos, printed material and websites for 35 clients while at university.",
      ],
      tech: [],
    },
  ],

  // Each project gets its own page at /projects/<slug>.
  projects: [
    {
      slug: "mizan-design-system",
      name: "Mizan Design System",
      organization: "Faseela Ventures",
      period: "Oct 2023 – Jun 2025",
      role: "Lead designer and engineer",
      team: "Team of 6",
      summary:
        "A bilingual design system of 180 components used by 9 product teams.",
      problem:
        "9 product teams built the same interface parts in different ways, with 4 button styles and 11 shades of green.",
      action:
        "Audited 1,300 screens, defined design tokens, and built and documented the components in Figma and code.",
      result:
        "180 components, 38% faster UI build time, and 96% of screens meeting WCAG 2.2 AA.",
      description:
        "Problem: 9 product teams built the same interface parts in different ways, with 4 button styles and 11 shades of green. Action: Audited 1,300 screens, defined design tokens, and built and documented the components in Figma and code. Result: 180 components, 38% faster UI build time, and 96% of screens meeting WCAG 2.2 AA.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Figma tokens"],
      demo: "",
      repo: "",
    },
    {
      slug: "national-telemedicine-platform",
      name: "National Telemedicine Platform",
      organization: "Zayna Health Tech",
      period: "May 2021 – Dec 2022",
      role: "Product engineering lead",
      team: "Team of 31",
      summary:
        "A national telemedicine platform that delivered 3.1 million consultations in 2022.",
      problem:
        "Patients waited an average of 22 minutes for a video consultation, and 1 in 5 calls dropped.",
      action:
        "Led the redesign of the patient queue, the doctor console and the video layer.",
      result:
        "3.1 million consultations in 2022; average wait fell from 22 to 6 minutes and dropped calls from 20% to 3%.",
      description:
        "Problem: Patients waited an average of 22 minutes for a video consultation, and 1 in 5 calls dropped. Action: Led the redesign of the patient queue, the doctor console and the video layer. Result: 3.1 million consultations in 2022; average wait fell from 22 to 6 minutes and dropped calls from 20% to 3%.",
      tech: ["React", "React Native", "WebRTC", "Node.js", "Google Cloud"],
      demo: "",
      repo: "",
    },
    {
      slug: "savings-goals",
      name: "Savings Goals",
      organization: "Faseela Ventures",
      period: "Jan 2024 – Aug 2024",
      role: "Research and design lead",
      team: "Team of 8",
      summary:
        "A goal-setting savings feature: 610,000 goals opened in 6 months.",
      problem: "70% of users had never saved money inside the app.",
      action:
        "Ran 48 interviews in 5 cities, tested 3 prototypes and designed the final goal-setting flow.",
      result:
        "610,000 goals opened in 6 months, with an average of SAR 2,300 saved per goal; won Best Fintech Experience 2024.",
      description:
        "Problem: 70% of users had never saved money inside the app. Action: Ran 48 interviews in 5 cities, tested 3 prototypes and designed the final goal-setting flow. Result: 610,000 goals opened in 6 months, with an average of SAR 2,300 saved per goal; won Best Fintech Experience 2024.",
      tech: ["React Native", "GraphQL", "Figma"],
      demo: "",
      repo: "",
    },
    {
      slug: "qalam-learn-code-editor",
      name: "Qalam Learn Code Editor",
      organization: "Qalam Learn",
      period: "Feb 2019 – Apr 2021",
      role: "Co-founder, design and front-end",
      team: "Team of 4",
      summary:
        "A browser code editor that explains errors in plain Arabic.",
      problem: "Learners quit when English error messages stopped their code.",
      action:
        "Built a browser code editor that explains errors in plain Arabic and suggests the next step.",
      result: "Course completion rose from 18% to 46%.",
      description:
        "Problem: Learners quit when English error messages stopped their code. Action: Built a browser code editor that explains errors in plain Arabic and suggests the next step. Result: Course completion rose from 18% to 46%.",
      tech: ["Vue", "TypeScript", "Monaco Editor", "Firebase"],
      demo: "",
      repo: "",
    },
    {
      slug: "khatt-adaptive-typography-engine",
      name: "Khatt Adaptive Typography Engine",
      organization: "PhD research, Eastmoor Institute of Technology",
      period: "Sep 2019 – Jul 2022",
      role: "Researcher and sole developer",
      team: "Solo",
      summary:
        "An engine that adapts Arabic text to the reader and the screen; granted a patent.",
      problem:
        "Arabic text on screens is often too small, too dense and hard to scan.",
      action:
        "Built an engine that adjusts Arabic font size, spacing and line length to the reader and the screen, then tested it with 312 participants.",
      result:
        "Reading speed rose by 19% and errors fell by 31%; the method was granted a patent in Jun 2024.",
      description:
        "Problem: Arabic text on screens is often too small, too dense and hard to scan. Action: Built an engine that adjusts Arabic font size, spacing and line length to the reader and the screen, then tested it with 312 participants. Result: Reading speed rose by 19% and errors fell by 31%; the method was granted a patent in Jun 2024.",
      tech: ["TypeScript", "Canvas API", "Python"],
      demo: "",
      repo: "",
    },
    {
      slug: "hirfa-ui",
      name: "Hirfa UI (open source)",
      organization: "Open source",
      period: "Mar 2020 – Present",
      role: "Founder and lead maintainer",
      team: "210 contributors",
      summary:
        "An open-source right-to-left component library with 9,800 GitHub stars.",
      problem:
        "Popular component libraries handled right-to-left layouts poorly.",
      action:
        "Designed and built 95 components with mirrored layouts, Arabic typography presets and full keyboard support.",
      result:
        "9,800 GitHub stars and 1.2 million npm downloads a year; won the Open Source Impact Award 2022.",
      description:
        "Problem: Popular component libraries handled right-to-left layouts poorly. Action: Designed and built 95 components with mirrored layouts, Arabic typography presets and full keyboard support. Result: 9,800 GitHub stars and 1.2 million npm downloads a year; won the Open Source Impact Award 2022.",
      tech: ["React", "TypeScript", "CSS logical properties", "Storybook"],
      demo: "",
      repo: "https://github.example/yara-mansouri",
    },
    {
      slug: "dalil-accessibility-toolkit",
      name: "Dalil Accessibility Toolkit",
      organization: "Side project",
      period: "Jan 2022 – Sep 2022",
      role: "Designer and developer",
      team: "Solo",
      summary:
        "A browser extension that flags 42 Arabic-specific accessibility issues.",
      problem:
        "Accessibility checkers missed issues specific to Arabic and right-to-left pages.",
      action:
        "Built a browser extension that flags 42 Arabic-specific accessibility issues and explains how to fix each one.",
      result: "Used by 3,400 developers in 22 countries.",
      description:
        "Problem: Accessibility checkers missed issues specific to Arabic and right-to-left pages. Action: Built a browser extension that flags 42 Arabic-specific accessibility issues and explains how to fix each one. Result: Used by 3,400 developers in 22 countries.",
      tech: ["JavaScript", "Chrome Extensions API", "axe-core"],
      demo: "",
      repo: "",
    },
    {
      slug: "rafeeq-rides-matching-app",
      name: "Rafeeq Rides Matching App",
      organization: "Rafeeq Rides",
      period: "Apr 2015 – Dec 2016",
      role: "Co-founder and CTO",
      team: "Team of 11",
      summary:
        "A ride-matching app for university students: 140,000 rides.",
      problem:
        "University students had few safe and affordable ways to commute.",
      action:
        "Designed the matching system that paired riders by campus, timetable and route.",
      result:
        "26,000 sign-ups and 140,000 rides before the company closed in Dec 2016.",
      description:
        "Problem: University students had few safe and affordable ways to commute. Action: Designed the matching system that paired riders by campus, timetable and route. Result: 26,000 sign-ups and 140,000 rides before the company closed in Dec 2016.",
      tech: ["React Native", "Node.js", "MongoDB", "Google Maps APIs"],
      demo: "",
      repo: "",
    },
  ],

  skills: [
    {
      group: "Product Design",
      level: "Expert",
      years: 18,
      items: ["Figma", "design systems", "prototyping", "motion design", "information architecture"],
    },
    {
      group: "Front-End Engineering",
      level: "Expert",
      years: 16,
      items: ["TypeScript", "JavaScript", "React", "Next.js", "Vue", "Tailwind CSS", "Web Components"],
    },
    {
      group: "User Research",
      level: "Expert",
      years: 14,
      items: ["interviews", "usability testing", "diary studies", "A/B testing", "eye-tracking"],
    },
    {
      group: "Accessibility",
      level: "Expert",
      years: 11,
      items: ["WCAG 2.2 AA", "ARIA", "screen-reader testing", "Arabic right-to-left accessibility"],
    },
    {
      group: "Back-End and APIs",
      level: "Advanced",
      years: 10,
      items: ["Node.js", "NestJS", "GraphQL", "REST", "PostgreSQL", "Redis"],
    },
    {
      group: "Leadership",
      level: "Expert",
      years: 9,
      items: ["hiring", "organization design", "OKRs", "budgeting", "stakeholder management", "mentoring"],
    },
    {
      group: "Mobile",
      level: "Advanced",
      years: 8,
      items: ["React Native", "Flutter", "Swift (basic)"],
    },
    {
      group: "Cloud and DevOps",
      level: "Advanced",
      years: 7,
      items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    },
    {
      group: "Security and Compliance",
      level: "Intermediate",
      years: 6,
      items: ["secure development lifecycle", "PCI DSS", "health-data privacy", "threat modelling"],
    },
    {
      group: "Data and AI",
      level: "Intermediate",
      years: 5,
      items: ["Python", "SQL", "data visualization", "recommendation systems", "AI product features"],
    },
  ],

  // Awards (shown in the "Achievements" section of the starter).
  achievements: [
    { title: "Design Technology Leader of the Year", detail: "Gulf Design Week Awards, 2025. For the Mizan Design System." },
    { title: "Best Fintech Experience", detail: "Arab Fintech Excellence Awards, 2024. For Savings Goals." },
    { title: "Top 40 Under 40 in Saudi Tech", detail: "Riyadh Tech Review, 2023. For career achievement." },
    { title: "Best Doctoral Thesis in HCI", detail: "Eastmoor Institute of Technology, 2022. For the PhD thesis." },
    { title: "Open Source Impact Award", detail: "Arab Open Source Foundation, 2022. For Hirfa UI." },
    { title: "Digital Health Innovation Award", detail: "Middle East Health Informatics Board, 2021. For the telemedicine platform." },
    { title: "Women in Tech Leadership Award", detail: "Saudi Women in Design Network, 2020. For leadership at Zayna Health Tech." },
    { title: "Silver, Responsive Design category", detail: "London Web Craft Awards, 2014. For a retail client website at Brightwell Studio." },
    { title: "Rising Star in UX", detail: "UK Interaction Design Guild, 2013. For a public-sector client website at Brightwell Studio." },
    { title: "Best Graduation Project", detail: "Najd Valley University, 2010. For an Arabic speech-to-text note-taking app." },
  ],

  // 19 earned, 1 in progress. All issuers and credential IDs are fictional.
  certifications: [
    { name: "Certified Security Architecture Professional (CSAP)", issuer: "Global Cyber Assurance Council", year: "", status: "In progress, exam booked for Dec 2026", id: "" },
    { name: "Certified Cloud Solutions Architect – Professional", issuer: "Cloud Architecture Guild", year: "2025", status: "Active", id: "CAG-CSA-25-0912" },
    { name: "Certified Design Leader", issuer: "Arabian Design Council", year: "2025", status: "Active", id: "ADC-CDL-25-0044" },
    { name: "Multi-Cloud Platform Architect", issuer: "Halcyon Cloud Institute", year: "2024", status: "Active", id: "HLC-MPA-24-3307" },
    { name: "Certified Container Application Developer", issuer: "Open Container Academy", year: "2024", status: "Active", id: "OCA-CAD-24-1185" },
    { name: "Open Banking Product Specialist", issuer: "Gulf FinTech Academy", year: "2024", status: "Active", id: "GFA-OBP-24-0219" },
    { name: "Certified Project Leadership Professional", issuer: "International Project Leadership Society", year: "2023", status: "Active", id: "IPLS-CPL-23-5560" },
    { name: "Certified Accessibility Specialist", issuer: "Inclusive Interfaces Council", year: "2023", status: "Active", id: "IIC-CAS-23-0471" },
    { name: "Applied Data Visualization Certificate", issuer: "Riyadh Data Institute", year: "2023", status: "Lifetime", id: "RDI-ADV-23-0118" },
    { name: "UX Research and Interaction Design Certificate", issuer: "Meridian UX Institute", year: "2022", status: "Lifetime", id: "MUI-UXR-22-8842" },
    { name: "Enterprise Architecture Practitioner", issuer: "Global Enterprise Architecture Forum", year: "2022", status: "Active", id: "GEAF-EAP-22-0193" },
    { name: "Certified Agile Product Owner", issuer: "Agile Practice Council", year: "2022", status: "Expired 2024", id: "APC-APO-22-6620" },
    { name: "Professional Scrum Facilitator, Level 1", issuer: "Agile Delivery Institute", year: "2021", status: "Lifetime", id: "ADI-PSF-21-4410" },
    { name: "Cloud Application Developer – Associate", issuer: "Skyline Developer Program", year: "2021", status: "Expired 2023", id: "SDP-CAD-21-2075" },
    { name: "IT Service Management Foundation", issuer: "Service Excellence Board", year: "2020", status: "Lifetime", id: "SEB-ITSM-20-9931" },
    { name: "Health Data Privacy Practitioner", issuer: "Middle East Health Informatics Board", year: "2020", status: "Active", id: "MEHIB-HDP-20-0306" },
    { name: "Lean Six Sigma Green Belt", issuer: "Institute for Process Excellence", year: "2019", status: "Lifetime", id: "IPE-LSS-19-1402" },
    { name: "Security Fundamentals Professional", issuer: "Cyber Readiness Academy", year: "2019", status: "Expired 2022", id: "CRA-SFP-19-7718" },
    { name: "Usability Analysis Professional", issuer: "Usability Practice Institute", year: "2016", status: "Lifetime", id: "UPI-UAP-16-0268" },
    { name: "Advanced Motion Design for Interfaces", issuer: "London School of Interface Craft", year: "2014", status: "Lifetime", id: "LSIC-MD-14-0052" },
  ],

  patents: [
    {
      title: "Method for adaptive Arabic text rendering based on reading context",
      number: "Patent No. SA 11223 (fictional)",
      status: "Granted Jun 2024",
    },
    {
      title: "System for bilingual component theming in design systems",
      number: "Application No. SA 2025-0417 (fictional)",
      status: "Filed Mar 2025, pending",
    },
  ],

  // Selected 6 of 9. Full list: scholar.example/yaram
  publications: [
    "Al-Mansouri, Y., & Marsh, H. (2022). Adaptive typography for Arabic interfaces: A study with 312 readers. Journal of Human-Centred Computing, 14(3), 211–238.",
    "Al-Mansouri, Y. (2021). Trust signals in Arabic health apps. Proceedings of the International Conference on Arabic Interfaces (ICAI 2021), 45–56.",
    "Al-Mansouri, Y., Rahman, S., & Okafor, T. (2020). Right-to-left design systems at scale. Proceedings of DesignOps Summit Asia 2020, 12–19.",
    "Al-Mansouri, Y., & Marsh, H. (2020). Measuring reading comfort on small screens. ICAI 2020 Workshop on Arabic Typography, 8–13.",
    "Al-Mansouri, Y. (2019). Teaching front-end development in Arabic: Lessons from 50,000 learners. Gulf Journal of Computing Education, 7(1), 33–49.",
    "Hart, L., & Al-Mansouri, Y. (2012). Bilingual navigation menus on small screens. Northbridge Interaction Lab Technical Report NIL-TR-2012-07.",
  ],

  // Selected 8 of 31 talks.
  talks: [
    { type: "Keynote", title: "Design systems that speak two languages", event: "Najd Developer Days 2025", city: "Riyadh", year: "2025" },
    { type: "Talk", title: "Accessibility is a product decision", event: "Gulf Design Week 2025", city: "Dubai", year: "2025" },
    { type: "Panel", title: "Building trust in fintech UX", event: "Gulf Fintech Builders Forum 2024", city: "Riyadh", year: "2024" },
    { type: "Talk", title: "Scaling a team from 6 to 64", event: "Engineering Leadership Week 2023", city: "Cairo", year: "2023" },
    { type: "Talk", title: "What my PhD taught me about Arabic type", event: "Typography Majlis 2022", city: "Jeddah", year: "2022" },
    { type: "Keynote", title: "Telemedicine at national scale", event: "Digital Health Middle East Summit 2021", city: "Online", year: "2021" },
    { type: "Talk", title: "Why our startup failed", event: "Founders Night Riyadh 2016", city: "Riyadh", year: "2016" },
    { type: "Talk", title: "Responsive design for right-to-left", event: "Frontend Horizons London 2014", city: "London", year: "2014" },
  ],

  media: [
    { type: "Cover story", title: "The engineer who designs in two directions", outlet: "Riyadh Tech Review", date: "Mar 2023" },
    { type: "Podcast guest", title: "From startup failure to Principal Engineer", outlet: "Build in Arabic, Episode 42", date: "Jun 2024" },
    { type: "YouTube channel", title: "Yara Builds", outlet: "86 tutorials on design systems and right-to-left front-end | 48,000 subscribers", date: "2020 – Present" },
    { type: "Article", title: "Accessibility debt in fintech", outlet: "Medium | Read 120,000 times", date: "Nov 2023" },
  ],

  // Held alongside the full-time roles above.
  leadership: [
    { role: "Adjunct Lecturer (part-time)", organization: "College of Computing, Najd Valley University", period: "Sep 2019 – Jun 2024", detail: "Taught Human-Computer Interaction, Front-End Development and Design Systems to 1,400+ students over 10 semesters." },
    { role: "Advisory Board Member", organization: "Saudi Women in Design Network", period: "Mar 2022 – Present", detail: "Runs the annual mentorship program for 60 early-career designers." },
    { role: "Technical Advisor", organization: "2 early-stage health-tech startups", period: "Feb 2024 – Present", detail: "Advises on product strategy, hiring and architecture." },
    { role: "Mentor", organization: "Najd Valley Startup Accelerator", period: "Jan 2020 – Present", detail: "Mentored 25 startups across 6 cohorts." },
    { role: "Hackathon Judge", organization: "Various organizers", period: "Jan 2018 – Present", detail: "Judged 12 hackathons in Riyadh, Jeddah and Dubai." },
    { role: "Volunteer Instructor", organization: "Code for Community, Riyadh", period: "Jan 2017 – Jun 2017", detail: "Taught a 12-week web development course to 45 adult learners." },
  ],

  languages: [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "Fluent (C2), IELTS 8.5" },
    { language: "French", level: "Upper intermediate (B2), DELF B2" },
    { language: "German", level: "Elementary (A2), from the exchange semester" },
    { language: "Turkish", level: "Beginner (A1), currently learning" },
  ],

  interests: [
    "Arabic calligraphy, with work shown in 2 group exhibitions",
    "Long-distance running: 3 half marathons",
    "Restoring old film cameras",
    "Chess, with an online rating of 1,850",
  ],
};
