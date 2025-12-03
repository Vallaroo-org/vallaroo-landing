import Element from '@/src/assets/images/element/15.svg';
import { StaticImageData } from 'next/image';

export interface NavItem {
  title: string;
  type?: 'link' | 'mega' | 'image';
  href?: string;
  children?: {
    label: string;
    description?: string;
    icon?: string;
    href: string;
  }[];
  columns?: {
    title?: string;
    links: { label: string; href: string }[];
  }[];
  image?: StaticImageData;
}

export const navMenuData: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Products',
    type: 'image',
    image: Element,
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
    title: 'Features',
    href: '/features',
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];