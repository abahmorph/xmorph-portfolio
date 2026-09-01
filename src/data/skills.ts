export interface Skill {
  name: string
  use: string
}

export interface SkillGroup {
  label: string
  icon: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    icon: 'UI',
    skills: [
      { name: 'HTML', use: 'Semantic, accessible markup as the foundation of every interface.' },
      { name: 'CSS', use: 'Responsive, fluid layouts and modern styling systems.' },
      { name: 'JavaScript', use: 'Core language powering interactive, dynamic experiences.' },
      { name: 'React', use: 'Building component-driven, reactive UIs with clean state.' },
      { name: 'Tailwind CSS', use: 'Rapid, consistent utility-first styling at scale.' },
      { name: 'Vite', use: 'Fast, modern build tooling and a smooth dev experience.' },
    ],
  },
  {
    label: 'Backend',
    icon: 'DB',
    skills: [
      { name: 'Node.js', use: 'Server-side JavaScript for APIs and real-time apps.' },
      { name: 'Express', use: 'Designing RESTful API routes and middleware.' },
      { name: 'PostgreSQL', use: 'Relational data modelling and reliable persistence.' },
      { name: 'Prisma', use: 'Typed, ergonomic database access and migrations.' },
      { name: 'REST APIs', use: 'Designing clean, versioned, secure interfaces between systems.' },
    ],
  },
  {
    label: 'Tools & Deployment',
    icon: 'DEPLOY',
    skills: [
      { name: 'Git', use: 'Version control and collaborative, clean commit workflows.' },
      { name: 'GitHub', use: 'Hosting, PRs, CI and project-based collaboration.' },
      { name: 'VS Code', use: 'Primary editor optimised for speed and extension workflows.' },
      { name: 'Netlify', use: 'Frontend hosting with modern deploy pipelines.' },
      { name: 'Render', use: 'Backend and full-stack deployment in the cloud.' },
    ],
  },
  {
    label: 'Experimentation',
    icon: 'AI',
    skills: [
      { name: 'AI Integrations', use: 'Wiring intelligent assistants and model-backed features into products.' },
      { name: 'Automation', use: 'Scripting and tooling that removes repetitive manual work.' },
      { name: 'Computer vision', use: 'On-device image and face processing with model pipelines.' },
      { name: 'Desktop applications', use: 'Native-feeling apps with Electron and system-level access.' },
      { name: 'E-commerce systems', use: 'Carts, checkout, payments and storefront architecture.' },
    ],
  },
]
