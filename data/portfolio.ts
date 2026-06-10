export type PortfolioTabId = 'skills' | 'tools' | 'languages';

export type PortfolioProject = {
  name: string;
  category: string;
  imagePath: string;
  description: string;
  details: string[];
  externalLinkLabel?: string;
  externalLinkUrl?: string;
};

export type PortfolioTool = {
  name: string;
  kind: 'figma' | 'flow' | 'claude' | 'photoshop' | 'canva' | 'notion';
};

export const portfolio = {
  name: 'Bhavesh',
  title: 'Brand Strategist & Creative Designer',
  location: 'Jabalpur, India.',
  description:
    'Bachelor of Design from IIITDM Jabalpur, building concept-driven brands across Fashion, AI & Consumer Products where cultural narrative meets visual systems.',
  heroImagePath: '/profile.jpg',
  contact: {
    behanceLabel: 'Behance',
    behanceUrl: 'https://www.behance.net/bhaveshchawre',
    resumeLabel: 'Resume',
    resumeUrl: '/api/resume',
    phone: '+91 7000625438',
    email: 'BCbhaveshchawre@gmail.com',
    linkedinLabel: 'Linkedin',
    linkedinUrl: 'https://www.linkedin.com/in/chawrebhavesh/',
  },
  skills: [
    {
      label: 'Creative Skills',
      items: ['Design Thinking', 'Creative Strategy', 'Visual Storytelling', 'Problem-Solving'],
    },
    {
      label: 'Analytical Skills',
      items: ['Market Research', 'Consumer Insights', 'Trend Analysis', 'Competitive Analysis'],
    },
  ],
  tools: [
    { name: 'Figma', kind: 'figma' },
    { name: 'Google Flow', kind: 'flow' },
    { name: 'Claude', kind: 'claude' },
    { name: 'Adobe Photoshop', kind: 'photoshop' },
    { name: 'Canva', kind: 'canva' },
    { name: 'Notion', kind: 'notion' },
  ] satisfies PortfolioTool[],
  languages: [
    { name: 'English', selected: true },
    { name: 'Hindi', selected: true },
  ],
  projects: [
    {
      name: 'Milkyway',
      category: 'Branding & Packaging',
      imagePath: '/projects/milkyway.jpg',
      description:
        'Is a premium milk brand that reimagines milk as a lifestyle product through bold retro branding, canned packaging, and distinctive storytelling.',
      details: ['Branding', 'Packaging', 'Creative Direction'],
      externalLinkLabel: 'Behance gallery',
      externalLinkUrl: 'https://www.behance.net/gallery/248961351/Milkyway-Branding-Packaging',
    },
    {
      name: 'ZARDOZI',
      category: 'Creative direction',
      imagePath: '/projects/zardozi.jpg',
      description:
        'Reimagines traditional Indian embroidery as a contemporary luxury lifestyle brand, preserving heritage craftsmanship through modern branding, storytelling, and product design.',
      details: ['Branding', 'Logo Design', 'Creative Direction'],
      externalLinkLabel: 'Behance gallery',
      externalLinkUrl: 'https://www.behance.net/gallery/249543783/ZARDOZI',
    },
    {
      name: 'Be boring',
      category: 'Visual Identity',
      imagePath: '/projects/beboring.jpg',
      description:
        'is a fashion brand identity inspired by retro American culture, combining minimalist design, raw imagery, and nostalgic storytelling to create a bold yet understated brand experience.',
      details: ['Visual identity', 'Logo design', 'Creative Direction'],
      externalLinkLabel: 'Behance gallery',
      externalLinkUrl: 'https://www.behance.net/gallery/250238535/Be-boring-Visual-Identity',
    },
  ] satisfies PortfolioProject[],
  footer: '@Bhaveshchawre2026',
} as const;

export type PortfolioData = typeof portfolio;