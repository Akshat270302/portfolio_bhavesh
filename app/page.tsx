import { PortfolioShell } from '@/components/portfolio-shell';
import { portfolio } from '@/data/portfolio';

export default function Page() {
  return <PortfolioShell data={portfolio} />;
}