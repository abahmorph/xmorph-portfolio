export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  role: string
  technologies: string[]
  features: string[]
  problem: string
  solution: string
  result: string
  accent: string
  status: string
  repo: string
  demo: string
  previewHue: number
}

export const projects: Project[] = [
  {
    id: 'veyra',
    name: 'Veyra',
    tagline: 'Real-time AI video transformation platform',
    description:
      'A futuristic desktop application turning a physical webcam into an AI-powered virtual camera with live face effects, background replacement and voice effects.',
    role: 'Full-stack engineer — engine, desktop app & server',
    technologies: ['React', 'TypeScript', 'Electron', 'Node.js', 'WebGL2', 'Tailwind'],
    features: [
      'Virtual camera via v4l2loopback for any video-call app',
      '13 GPU shader effects + face-anchored canvas effects',
      'MediaPipe segmentation for background replacement',
      'Voice effects with a virtual microphone sink',
    ],
    problem:
      'Video call tools lock users to a single, static view of their camera, with limited or no built-in AI processing.',
    solution:
      'Built a cross-platform engine that intercepts the camera feed, applies real-time AI effects on-device, and exposes the result as a standard virtual camera any app can select.',
    result:
      'A desktop product (Electron) and iOS app that turns any machine into an AI video studio without sacrificing privacy — processing stays on-device.',
    accent:
      'from-blue-500/20 via-violet-500/15 to-cyan-500/15',
    status: 'In development',
    repo: 'https://github.com/abahmorph/Veyra',
    demo: '#',
    previewHue: 222,
  },
  {
    id: 'ecp',
    name: 'E-commerce Platform',
    tagline: 'Full-stack commerce with payments',
    description:
      'A complete commerce system handling products, accounts, cart and checkout with admin management and payment integration architecture.',
    role: 'Full-stack developer',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    features: [
      'Product catalogue with categories and search',
      'User accounts and authenticated sessions',
      'Cart, address capture and checkout flow',
      'Payment integration and admin management',
    ],
    problem:
      'Modern commerce is more than a product list — it needs accounts, a reliable cart, secure checkout and a way to manage it all.',
    solution:
      'Engineered a layered system with a clean REST API, typed data models and a separated admin interface so store management stays maintainable as the store grows.',
    result:
      'A production-style platform demonstrating the full checkout-to-admin pipeline needed for real online stores.',
    accent: 'from-emerald-500/20 via-blue-500/15 to-violet-500/15',
    status: 'Built',
    repo: 'https://github.com/abahmorph',
    demo: '#',
    previewHue: 160,
  },
  {
    id: 'vanta',
    name: 'Vanta',
    tagline: 'AI desktop assistant experiment',
    description:
      'An experimental desktop AI assistant exploring voice interaction, automation and system-level functionality in a native shell.',
    role: 'Creator & engineer',
    technologies: ['TypeScript', 'Electron', 'Node.js', 'AI', 'Automation'],
    features: [
      'Voice-driven assistant interface',
      'System automation experiments',
      'Local, native desktop shell',
    ],
    problem:
      'Voice and AI assistants often live in the cloud; exploring how they can act directly on a user&#39;s own machine was an open design question.',
    solution:
      'Experimented with a desktop-native assistant shell that pairs voice input with local automation, keeping the loop tight and responsive.',
    result:
      'A working prototype proving the concept of an on-device, voice-first assistant — a foundation for deeper system integration.',
    accent: 'from-cyan-500/20 via-blue-500/15 to-indigo-500/15',
    status: 'Experimental',
    repo: 'https://github.com/abahmorph',
    demo: '#',
    previewHue: 190,
  },
  {
    id: 'docsword',
    name: 'Docsword / DocswordX',
    tagline: 'Modern portfolio & product site',
    description:
      'A polished portfolio/product website demonstrating modern frontend design and responsive development with clean, intentional interfaces.',
    role: 'Design & development',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    features: [
      'Modern, responsive layouts',
      'Clean design system and typography',
      'Performance-minded frontend',
    ],
    problem:
      'Presenting a product or personal brand online requires more than a template — it needs a considered, responsive visual identity.',
    solution:
      'Designed and built an original interface with a clear design language, focused on readability, hierarchy and buttery responsive behaviour.',
    result:
      'A brand-forward site that communicates quality through polish and attention to detail rather than stock visuals.',
    accent: 'from-violet-500/20 via-fuchsia-500/15 to-pink-500/15',
    status: 'Shipped',
    repo: 'https://github.com/abahmorph',
    demo: '#',
    previewHue: 270,
  },
  {
    id: 'bluecodes',
    name: 'Blue Codes',
    tagline: 'Premium technology & business brand site',
    description:
      'A premium technology/business website focused on presenting a digital brand professionally and convincingly to the public.',
    role: 'Design & development',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Branding'],
    features: [
      'Professional brand presentation',
      'Business-focused layout and copy',
      'Responsive and accessible',
    ],
    problem:
      'A technology brand needs to look and feel credible from the moment a visitor arrives, or it loses trust immediately.',
    solution:
      'Crafted a premium, business-focused experience with a consistent tone and a professional visual language throughout.',
    result:
      'A brand that reads as established and trustworthy, built to represent the company the way it wants to be seen.',
    accent: 'from-sky-500/20 via-blue-500/15 to-cyan-500/15',
    status: 'Shipped',
    repo: 'https://github.com/abahmorph',
    demo: '#',
    previewHue: 205,
  },
]
