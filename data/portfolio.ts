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
    'I\'m a 4th-year B.Des student at IIITDM Jabalpur, building concept-driven brands across Fashion, AI & Consumer Products where cultural narrative meets visual systems.',
  heroImagePath: 'images/WhatsApp Image 2026-05-29 at 06.47.49.jpeg',
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
      imagePath: 'images/Group 13.png',
      description:
        'A clean packaging direction that leans into clarity, contrast, and material-forward presentation for a premium milk concept.',
      details: ['Brand identity exploration', 'Packaging system', 'Art direction'],
      externalLinkLabel: 'Behance gallery',
      externalLinkUrl: 'https://www.behance.net/gallery/248961351/Milkyway-Branding-Packaging',
    },
    {
      name: 'ZARDOZI',
      category: 'Creative direction',
      imagePath: 'images/Slide 16_9 - 87.png',
      description:
        'A typographic gold-on-black identity study focused on sharp hierarchy, quiet luxury, and emblematic brand recall.',
      details: ['Creative direction', 'Logo refinement', 'Visual language'],
      externalLinkLabel: 'Behance gallery',
      externalLinkUrl: 'https://www.behance.net/gallery/249543783/ZARDOZI',
    },
    {
      name: 'Be boring',
      category: 'Visual Identity',
      imagePath: 'images/image 3045.png',
      description:
        'A sunlit visual identity built around a candid campaign image, bold caps, and a deliberately understated brand presence.',
      details: ['Visual identity', 'Campaign framing', 'Brand styling'],
      externalLinkLabel: 'Behance gallery',
      externalLinkUrl: 'https://www.behance.net/gallery/250238535/Be-boring-Visual-Identity',
    },
  ] satisfies PortfolioProject[],
  footer: '@Bhaveshchawre2026',
} as const;

export type PortfolioData = typeof portfolio;