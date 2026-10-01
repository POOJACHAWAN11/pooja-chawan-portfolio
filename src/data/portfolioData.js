export const PROFILE = {
  name: 'Pooja Chawan',
  badge: 'Building in public · Platina target: January 2027',
  headline: 'I build products, not just pages.',
  roles: [
    'MERN Stack Developer',
    'Playwright Automation Test Engineer',
    'React.js & TypeScript Engineer',
    'Technical Trainer & Mentor',
  ],
  bio: 'I’m Pooja Chawan — a product-minded MERN developer and Playwright automation engineer. I like owning the journey from user problem → interface → API → quality → release.',
  email: 'poojachawan1998@gmail.com',
  phone: '+91 9513698378',
  phoneRaw: '9513698378',
  whatsapp: '919513698378',
  linkedin: 'https://www.linkedin.com/in/pooja-chawan-53813918a',
  github: 'https://github.com',
  youtube: 'https://youtube.com',
  location: 'Bangalore, India',
  photo: '/profile.jpg',
};

export const METRICS = [
  { value: 3, suffix: '+', label: 'Years as MERN Developer' },
  { value: 2, suffix: '+', label: 'Years Playwright Automation' },
  { value: 100, suffix: '+', label: 'REST APIs Architected & Shipped' },
  { value: 10000, suffix: '+', label: 'Active Learners Served' },
];

export const ABOUT_PILLARS = [
  {
    iconType: 'speed',
    title: 'Performance-minded',
    description:
      'Lazy loading, route-level code splitting, and smart API caching with TanStack Query keep data-heavy screens responsive and fast under peak load.',
  },
  {
    iconType: 'component',
    title: 'Component-driven',
    description:
      'Designing reusable UI component libraries and modular workflows that accelerate feature delivery while ensuring high long-term maintainability.',
  },
  {
    iconType: 'fullstack',
    title: 'Full-stack Ownership',
    description:
      'Frontends wired to 5 independent microservices, backed by 100+ REST APIs built with Node.js, Express, MongoDB, and robust RBAC.',
  },
  {
    iconType: 'quality',
    title: 'Quality First',
    description:
      'Playwright UI automation, Postman API test suites, and Jest unit tests eliminate regressions and keep every deployment confident and safe.',
  },
];

export const EXPERTISE_TRACKS = [
  {
    role: 'MERN STACK DEVELOPER',
    themeColor: '#16704d',
    bgColor: '#eaf4ee',
    headline: 'End-to-end MongoDB, Express, React & Node',
    metrics: [
      { val: '3+ yrs', lbl: 'MERN experience' },
      { val: '100+', lbl: 'REST APIs' },
      { val: '35%', lbl: 'Faster API responses' },
    ],
    highlights: [
      'Architected 100+ REST APIs with JWT authentication and RBAC as primary backend developer',
      'Built an enterprise experiential training platform from scratch: 40 modules, 50 APIs, real-time analytics',
      'MongoDB indexing, schema design, and aggregation tuning for data-heavy dashboard screens',
      'Production React + TypeScript frontends integrated cleanly with 5 backend microservices',
    ],
  },
  {
    role: 'PLAYWRIGHT AUTOMATION TEST ENGINEER',
    themeColor: '#b94743',
    bgColor: '#faebea',
    headline: 'UI & API test automation catching regressions early',
    metrics: [
      { val: '2+ yrs', lbl: 'Playwright testing' },
      { val: '3', lbl: 'Core critical flows automated' },
      { val: '0', lbl: 'Blind production releases' },
    ],
    highlights: [
      'Playwright end-to-end UI automation suites for login, real-time messaging, and notification flows',
      'Postman API test collections validating messaging and transaction endpoints before every release',
      'Collaborative release criteria and test plans validated with cross-functional stakeholders before go-live',
      'Unit and integration coverage utilizing Jest and React Testing Library for regression resilience',
    ],
  },
];

export const PLATINA_PRODUCT = {
  badge: 'Flagship Build · Live Target: January 2027',
  title: 'Platina — A Women-Powered Culinary Entrepreneurship Platform',
  lead:
    'Platina is being developed as a real end-to-end food entrepreneurship platform connecting home-based women chefs with customers seeking authentic, healthier, customized meal choices. It reflects not only code quality, but deep product thinking from domain modelling to automated release.',
  story:
    'The product journey bridges home-kitchen business operations with an intuitive customer ordering experience: chef onboarding, automated menu scheduling, discovery, custom bowl builders, cart, real-time order lifecycle, and proactive notifications.',
  architectureHeadline: 'Architecture Before Screens',
  architectureText:
    'The build is deliberately executed as a senior-level engineering practice: domain modeling → explicit API contracts → role-based workflows → UX edge-case states → automation suites → cloud deployment.',
  flow: [
    '👩‍🍳 Chef Onboarding & Verification',
    '🍱 Dynamic Menus & Meal Bowls',
    '🔎 Location-based Discovery',
    '🛒 Smart Cart & Add-ons',
    '📦 Real-time Order Lifecycle',
    '✉️ Automated Notifications',
  ],
  architectureLayers: [
    { layer: 'CLIENT', stack: 'React.js, TypeScript, Material UI, Redux Toolkit' },
    { layer: 'API GATEWAY', stack: 'Node.js, Express.js, JWT Auth & RBAC' },
    { layer: 'DATA LAYER', stack: 'MongoDB, Mongoose, Redis Caching' },
    { layer: 'QUALITY & CI', stack: 'Playwright E2E, Postman Newman, GitHub Actions' },
  ],
  roadmap: [
    {
      phase: '01 · Foundation',
      details: 'UX research, user roles, auth system, MongoDB schemas, and baseline REST endpoints.',
    },
    {
      phase: '02 · Commerce Engine',
      details: 'Dynamic menus, bowl customization, cart, payment integration, and push alerts.',
    },
    {
      phase: '03 · Launch & Scale',
      details: 'Full Playwright automated test regression, CI/CD pipeline, and public web launch.',
    },
  ],
};

export const ENGINEERING_PRINCIPLES = [
  {
    num: '01',
    principle: 'DOMAIN FIRST',
    title: 'Model the business before the UI.',
    description:
      'Model chef, customer, menu, meal, cart, and order responsibilities in clean domain boundaries before screens grow complex.',
    signature: 'Chef → Menu → MealBowl → Cart → OrderLifecycle',
  },
  {
    num: '02',
    principle: 'CONTRACT FIRST',
    title: 'Make API boundaries explicit.',
    description:
      'Define request/response shapes, schema validation, and error envelopes upfront between frontend clients and microservices.',
    signature: 'UI (Zod) → API (Joi) → Controller → Service → DB',
  },
  {
    num: '03',
    principle: 'QUALITY BY DESIGN',
    title: 'Automate journeys that matter.',
    description:
      'Automate the critical revenue-generating user pathways with Playwright rather than burning time automating volatile cosmetic pixels.',
    signature: 'auth.spec.ts → discovery.spec.ts → checkout.spec.ts',
  },
  {
    num: '04',
    principle: 'REAL UX STATES',
    title: 'Design beyond the happy path.',
    description:
      'Every interface explicitly accounts for loading, empty, input validation, unavailable, error fallback, and retry states.',
    signature: 'loading | empty | validating | error | retry',
  },
  {
    num: '05',
    principle: 'SECURITY & RBAC',
    title: 'Access control is architectural.',
    description:
      'Role-based permissions, token refresh workflows, password hashing, and payload sanitization are engineered in from day one.',
    signature: 'JWT Auth + RoleMiddleware(chef | buyer | admin)',
  },
  {
    num: '06',
    principle: 'SHIP SMALL',
    title: 'Deliver vertical slices.',
    description:
      'Build and deploy one complete slice from UI to database to automation test and monitoring, then incrementally expand.',
    signature: 'slice → verify → deploy → observe → iterate',
  },
];

export const ACHIEVEMENTS = [
  {
    badge: '🏆 Shipped Mobile Product',
    title: 'Scribble — Published Flutter App on Google Play',
    description:
      'Engineered and published "Scribble", a fast, offline-first note-taking and canvas application on Google Play. Handled the complete product lifecycle from mobile UI design and Flutter state management to production signing, release management, and Play Store hosting.',
    tech: 'Flutter · Dart · Google Play Store · Mobile UX',
    link: 'https://play.google.com/store/apps/details?id=com.widgetsandco.scribble&pcampaignid=web_share',
    linkText: 'View Scribble on Google Play',
    sideHighlight: 'Flutter',
    sideSubtext: 'Google Play · Shipped',
  },
];

export const SKILLS_DATA = {
  Frontend: [
    'React.js',
    'TypeScript',
    'JavaScript (ES6+)',
    'Redux Toolkit',
    'TanStack Query',
    'HTML5',
    'CSS3 / SCSS',
    'Tailwind CSS',
    'Material UI (MUI)',
    'Monaco Code Editor',
  ],
  'Backend & Data': [
    'Node.js',
    'Express.js',
    'REST API Design',
    'JWT & RBAC Security',
    'MongoDB',
    'Mongoose ODM',
    'MySQL',
    'Oracle SQL',
  ],
  Architecture: [
    'Microservices Integration',
    'Micro Frontends',
    'SSR & SSG',
    'Real-time WebSocket Systems',
    'Reusable Component Libraries',
    'State Management Patterns',
  ],
  'Testing & Automation': [
    'Playwright E2E',
    'Postman API Testing',
    'Jest',
    'React Testing Library',
    'Selenium WebDriver',
    'Cucumber (BDD)',
  ],
  Performance: [
    'Route Code Splitting',
    'Component Lazy Loading',
    'TanStack API Caching',
    'Rendering Profiling & Memo',
    'MongoDB Index & Query Tuning',
  ],
  'Delivery & DevOps': [
    'Git & GitHub Workflows',
    'Docker Containerization',
    'CI/CD Pipelines',
    'Rigorous Code Reviews',
    'Agile & Sprint Planning',
  ],
};

export const EXPERIENCE = [
  {
    period: 'Feb 2022 – Present',
    role: 'Software Engineer · MERN Developer & Playwright Automation Test Engineer',
    company: 'TYSS, Bangalore',
    location: 'Bangalore, India',
    achievements: [
      'Ship production React + TypeScript features for EdTech platforms serving 10,000+ active learners: auth, assessments, analytics dashboards, and admin tooling.',
      'Architected 100+ REST APIs with JWT authentication and fine-grained RBAC as the primary backend engineer.',
      'Cut API response times by 35% via MongoDB compound indexing, schema optimization, and aggregation restructuring.',
      'Integrated React frontends seamlessly with 5 backend microservices; strictly aligned API contracts across teams.',
      'Turned designer specifications into responsive, accessible, reusable components using SCSS, Tailwind, and Material UI.',
      'Published the "Scribble" note-taking app on Google Play with Flutter, handling development through release.',
    ],
  },
  {
    period: 'Sept 2020 – Sept 2021',
    role: 'Scientific Officer',
    company: 'Metropolis Healthcare, Bangalore',
    location: 'Bangalore, India',
    achievements: [
      'Managed research documentation and high-precision data-analysis workflows under rigorous laboratory quality standards.',
      'Improved reporting turnaround speed and diagnostic accuracy during peak-volume COVID-19 testing through process optimization.',
    ],
  },
];

export const PROJECTS = [
  {
    category: 'Production EdTech',
    title: 'TopBrains Learning Platform',
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Monaco Editor'],
    points: [
      'Engineered interactive frontend serving 10,000 active learners and 1,000+ daily online assessments.',
      'Integrated 5 microservices: authentication, assessments, user analytics, dynamic content, and code compilation.',
      'Implemented in-browser IDE using Monaco Editor; applied lazy loading and code splitting for rapid load times.',
      'Maintained shared UI component libraries in an active 12–15 member cross-functional team.',
    ],
  },
  {
    category: 'Full-Stack MERN Platform',
    title: 'Experiential Learning Platform',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Jest', 'RBAC'],
    points: [
      'Designed and built end-to-end: 40 frontend/backend modules and 50+ RESTful API endpoints.',
      'Implemented role-based security access for learners, reviewers, corporate trainers, and system admins.',
      'Delivered interactive analytics dashboards tracking engagement and performance across 150+ corporate employees.',
      'Authored Jest unit and integration test suites covering critical evaluation flows.',
    ],
  },
  {
    category: 'Test Automation',
    title: 'Qtalk Real-time Communication Platform',
    stack: ['Playwright', 'Postman', 'JavaScript', 'CI Validation'],
    points: [
      'Engineered 2 years of automated Playwright test suites covering login, group messaging, and notification flows.',
      'Integrated Postman API test suites validating real-time messaging endpoints ahead of every production release.',
      'Continuously expanded test coverage as features evolved, catching regressions before customer impact.',
    ],
  },
];

export const TEACHING_PILLARS = [
  {
    iconType: 'mentor',
    title: 'Technical Trainer & Mentor',
    description:
      'Mentored 300+ aspiring software engineers and professionals through corporate training bootcamps, structured code reviews, and hands-on full-stack curriculum design.',
  },
  {
    iconType: 'youtube',
    title: 'Developer Education & Content',
    description:
      'Creates practical full-stack and React engineering tutorials, code snippets, automation scripts, and reusable UI components to help developers bridge theory into production.',
  },
];

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'platina', label: 'Platina' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'contact', label: 'Contact' },
];
