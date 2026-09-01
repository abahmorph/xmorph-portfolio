export interface TimelineItem {
  stage: string
  title: string
  description: string
}

export const timeline: TimelineItem[] = [
  {
    stage: 'LEARN',
    title: 'Foundations of the web',
    description:
      'Mastering HTML, CSS and JavaScript — the core languages that turn raw ideas into things you can see, touch and use.',
  },
  {
    stage: 'BUILD',
    title: 'Ships over studies',
    description:
      'Turning concepts into working software. Learning by building real interfaces and whole projects instead of chasing tutorials.',
  },
  {
    stage: 'EXPERIMENT',
    title: 'Full-stack & beyond',
    description:
      'Pushing into complete systems — frontends, APIs, databases, deployments — plus AI, automation and desktop-level software.',
  },
  {
    stage: 'SHIP',
    title: 'Production-style products',
    description:
      'Engineering polished, performance-minded products with clean architecture, real integrations and obsessive attention to detail.',
  },
  {
    stage: 'EVOLVE',
    title: 'Remote & freelance work',
    description:
      'Applying the full stack to client and remote work — solving real problems for real people and businesses, and growing with every project.',
  },
]

export const journeyStages = ['LEARN', 'BUILD', 'EXPERIMENT', 'SHIP', 'EVOLVE']

export const processSteps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the problem, the users and the business objective before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create a clean interface and user experience that makes the product feel effortless and intentional.',
  },
  {
    number: '03',
    title: 'Engineer',
    description: 'Build the frontend, backend, APIs and integrations using modern, maintainable architecture.',
  },
  {
    number: '04',
    title: 'Ship',
    description: 'Deploy, test, optimise and continuously improve — because a product is never truly finished.',
  },
]

export const principles = [
  'I care about the details.',
  'I build responsive experiences.',
  'I think about the entire product.',
  'I learn quickly.',
  'I experiment constantly.',
  "I don't stop at making something \"work\" — I aim to make it exceptional.",
]

export const aboutHighlights = [
  'Modern websites',
  'Full-stack applications',
  'APIs & services',
  'Dashboards',
  'E-commerce systems',
  'AI-powered experiences',
  'Interactive interfaces',
]

export const stats = [
  { figure: 'Multiple', label: 'Projects Built' },
  { figure: 'Modern', label: 'Tech Stack' },
  { figure: 'Constant', label: 'Building & Learning' },
  { figure: 'Always', label: 'Pushing Further' },
]

export const whyMe = {
  kicker: "I don't just build websites.",
  headline: "I build experiences.",
  body: "Every project is an opportunity to combine engineering, design and imagination into something people actually remember.",
  highlights: [
    { title: 'Engineering', text: 'Clean, maintainable, production-ready systems.' },
    { title: 'Design', text: 'Interfaces with intention, hierarchy and polish.' },
    { title: 'Curiosity', text: 'Always exploring new tools, patterns and ideas.' },
    { title: 'Execution', text: 'Ideas that ship — not slides that stay behind glass.' },
  ],
}