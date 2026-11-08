// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  firstName: 'Olumide',
  fullName: 'Olumide Ayeromara',
  role: 'Web Developer',
  intro:
    'I build responsive websites and web apps with React, WordPress and PHP — from custom plugins to API integrations — and turn business requirements into products people enjoy using.',
  email: 'ayeromara12@gmail.com',
  phone: '+234 701 908 3919',
  phoneHref: 'tel:+2347019083919',
  location: 'Lagos, Nigeria · Open to remote',
  // Drop your photo in /public as profile.png (transparent background looks best).
  // Until then, initials are shown.
  photo: '/olumide.png',
  resume: 'Olumide_Ayeromara_CV.pdf',
  socials: {
    github: 'https://github.com/Olumide04',
    linkedin: '#', // TODO: paste your LinkedIn URL
  },
}

export const heroStats = {
  left: { value: '4+', label: 'Live client websites' },
  right: { value: '2+ Years', label: 'Building for the web' },
}

export const services = [
  {
    title: 'Frontend Development',
    text: 'Responsive, fast interfaces in React, Vite and Tailwind CSS, built pixel-close to the design.',
    tags: ['React', 'Tailwind', 'Vite'],
  },
  {
    title: 'WordPress Development',
    text: 'Business, e-commerce and community sites on WordPress, tailored beyond the stock theme.',
    tags: ['WordPress', 'WooCommerce', 'PHP'],
  },
  {
    title: 'Custom Plugins & APIs',
    text: 'Custom WordPress plugins, booking flows and third-party API integrations that fit the business.',
    tags: ['PHP', 'JavaScript', 'REST APIs'],
  },
]

export const experience = [
  {
    company: 'RKY Careers',
    meta: 'UK · Remote',
    period: 'Jun 2025 – Present',
    role: 'Web Developer',
    text: 'Grew from a six-month frontend internship into a development role. I build and maintain client WordPress sites with HTML, CSS, JavaScript and PHP, and extend them with custom plugins across e-commerce, career, community and business projects.',
  },
  {
    company: 'LingoSultan Enterprise',
    meta: 'Benin, Nigeria · Remote',
    period: 'May 2024 – May 2025',
    role: 'Junior Frontend Developer',
    text: 'Built and maintained responsive web apps with React, Tailwind CSS and Vite alongside a senior developer: new components, bug fixes and performance improvements, run through weekly sprints on Trello and GitHub Issues.',
  },
  {
    company: 'Product Square Technologies',
    meta: 'Remote',
    period: 'Mar 2024 – May 2024',
    role: 'Frontend Developer Intern',
    text: 'Turned design mockups and wireframes into interactive, responsive pages, tested across browsers and devices, and worked with backend developers to wire frontends to APIs.',
  },
]

export const whyMe = {
  text: 'I care about the details that make a site feel finished: clean responsive layouts, fast pages and features that actually match how the business works. I am comfortable owning a project end to end or slotting into a remote team.',
  stats: [
    { value: '7+', label: 'Projects shipped' },
    { value: '4+', label: 'Industries served' },
  ],
}

// Add screenshots to /public/projects and set `image` (e.g. 'projects/abwel.png').
// Without an image, a styled preview card is shown instead.
export const projects = [
  {
    title: 'ABWEL Global',
    url: 'https://abwelglobal.com/',
    tags: ['WordPress', 'E-commerce', 'WooCommerce'],
    text: 'A WordPress e-commerce store for a UK-wide grocery and food distributor, with product categories, product pages and checkout flows serving retail and wholesale customers.',
    image: 'projects/abwel.webp',
    accent: '#ff4d1c',
  },
  {
    title: 'Aspire by RKY Careers',
    url: 'https://aspire.rkycareers.site/',
    tags: ['WordPress', 'PHP', 'Custom Plugin'],
    text: 'An ongoing career services platform with service pages, appointment booking and provider access, powered by custom PHP and JavaScript functionality.',
    image: 'projects/aspire.webp',
    accent: '#3b82f6',
  },
  {
    title: "Immigrant Founders' Network UK",
    url: 'https://www.immigrantfoundersnetwork.co.uk/',
    tags: ['WordPress', 'Community', 'Forms'],
    text: 'A site for a UK network supporting immigrant founders through mentorship, events and resources, with member information, forms and programme content.',
    image: '',
    accent: '#10b981',
  },
  {
    title: 'O3TS Global International',
    url: 'https://o3ts.com/',
    tags: ['WordPress', 'Corporate', 'Responsive'],
    text: 'A corporate website presenting property development, construction, importation and consultancy services to business and property audiences.',
    image: 'projects/o3ts.webp',
    accent: '#a855f7',
  },
  {
    title: 'Movie App',
    url: '',
    tags: ['React', 'React Router', 'API'],
    text: 'A React movie browser with trailer playback, interactive movie cards and a curated catalogue pulled from an external movie API.',
    image: '',
    accent: '#f59e0b',
  },
  {
    title: 'Weather App',
    url: '',
    tags: ['HTML', 'CSS', 'JavaScript'],
    text: 'Real-time weather and forecasts for any city in the world, built with vanilla JavaScript and a weather API.',
    image: '',
    accent: '#0ea5e9',
  },
]

export const skills = [
  { group: 'Frontend', items: ['React.js', 'Redux', 'Vite', 'JavaScript (ES6+)', 'HTML', 'CSS', 'Tailwind CSS'] },
  { group: 'WordPress & Backend', items: ['WordPress', 'PHP', 'Custom Plugins', 'API Integration', 'SQL'] },
  { group: 'Workflow', items: ['Git & GitHub', 'Responsive Design', 'Debugging', 'Performance', 'Trello / Sprints'] },
  { group: 'Data', items: ['Power BI', 'Tableau', 'Excel'] },
]

export const marquee = ['React', 'WordPress', 'Custom Plugins', 'Tailwind CSS', 'PHP', 'API Integration', 'Responsive UI', 'JavaScript']

export const certification = {
  title: 'Full Stack / Frontend Engineer',
  issuer: 'ALX Software Engineering',
  period: 'Jun 2022 – Sep 2023',
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
