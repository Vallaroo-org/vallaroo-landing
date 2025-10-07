import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs - Vallaroo Shop Management Platform',
  description: 'Find answers to frequently asked questions about Vallaroo shop management platform.',
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
