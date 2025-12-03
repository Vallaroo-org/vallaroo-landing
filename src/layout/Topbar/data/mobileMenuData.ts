export interface MenuChild {
  label: string;
  href: string;
  icon?: string;
  description?: string;
}

export interface MenuItem {
  title: string;
  children?: MenuChild[];
}

export const mobileMenuData: MenuItem[] = [
  {
    title: 'Home',
    children: [
      { label: 'Home', href: '/' },
    ],
  },
  {
    title: 'Products',
    children: [
      {
        label: 'B2B Application',
        href: 'https://app.vallaroo.com',
        icon: 'tabler:building-store',
        description: 'Shop management platform for businesses.',
      },
      {
        label: 'B2C Application (Free)',
        href: 'https://app.vallaroo.com',
        icon: 'tabler:shopping-cart',
        description: 'Free customer shopping experience.',
      },
      {
        label: 'Mobile Apps',
        href: '/products/mobile',
        icon: 'tabler:device-mobile',
        description: 'iOS and Android applications.',
      },
    ],
  },
  {
    title: 'Pages',
    children: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];
