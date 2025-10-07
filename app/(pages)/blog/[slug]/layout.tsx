import { Metadata } from 'next';
import { getBlogPostById } from '@/lib/blog-data';

interface BlogPostLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostLayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostById(slug);

  if (!post) {
    return {
      title: 'Article Not Found - Vallaroo Blog',
      description: 'The requested blog article could not be found.',
    };
  }

  return {
    title: `${post.title} - Vallaroo Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
