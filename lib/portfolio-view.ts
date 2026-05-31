import { portfolio, type PortfolioProject } from '@/data/portfolio';
import { filePathToDataUrl } from '@/lib/assets';

export type PortfolioView = Omit<typeof portfolio, 'projects'> & {
  heroImageSrc: string;
  projects: Array<PortfolioProject & { imageSrc: string }>;
};

export async function getPortfolioView(): Promise<PortfolioView> {
  const heroImageSrc = await filePathToDataUrl(portfolio.heroImagePath);

  const projects = await Promise.all(
    portfolio.projects.map(async (project) => ({
      ...project,
      imageSrc: await filePathToDataUrl(project.imagePath),
    })),
  );

  return {
    ...portfolio,
    heroImageSrc,
    projects,
  };
}