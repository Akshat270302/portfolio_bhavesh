import { PortfolioShell } from '@/components/portfolio-shell';
import { getPortfolioView } from '@/lib/portfolio-view';

export default async function Page() {
  const data = await getPortfolioView();

  return <PortfolioShell data={data} />;
}