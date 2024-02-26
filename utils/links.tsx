import { AreaChart, Layers, AppWindow } from 'lucide-react';

type NavLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const links: NavLink[] = [
  {
    name: 'add job',
    href: '/add-job',
    icon: <Layers />,
  },
  {
    name: 'all jobs',
    href: '/jobs',
    icon: <AppWindow />,
  },
  {
    name: 'stats',
    href: '/stats',
    icon: <AreaChart />,
  },
];

export default links;
