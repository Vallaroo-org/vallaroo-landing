import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - Vallaroo Shop Management Platform',
  description: 'Join the Vallaroo team and help us build the future of shop management. Explore current job openings and company culture.',
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
