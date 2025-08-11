export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vallaroo",
  description: "Complete shop management platform for modern businesses. Manage your shop, products, customers, and orders all in one place.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Features",
      href: "#features",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Shops",
      href: "/shops",
    },
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "Customers",
      href: "/customers",
    },
    {
      label: "Orders",
      href: "/orders",
    },
    {
      label: "Analytics",
      href: "/analytics",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Support",
      href: "/help",
    },
  ],
  links: {
    github: "https://github.com/vallaroo/vallaroo",
    twitter: "https://twitter.com/vallaroo",
    docs: "https://docs.vallaroo.com",
    discord: "https://discord.gg/vallaroo",
    demo: "https://demo.vallaroo.com",
  },
};
