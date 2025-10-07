import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Vallaroo Shop Management Platform',
  description: 'Expert insights, tips, and strategies to help you succeed with your shop management journey. Learn from industry experts and discover best practices.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}