import { notFound } from "next/navigation";
import Link from "next/link";
import IconifyIconClient from "@/src/IconifyIconClient";
import { getBlogPostById, getRecentPosts, getAllBlogPosts } from "@/lib/blog-data";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostById(slug);

  if (!post) {
    notFound();
  }

  const recentPosts = getRecentPosts(3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark py-12.5 lg:py-25 md:py-17.5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-primary transition-colors mb-6"
            >
              <IconifyIconClient icon="tabler:arrow-left" className="text-xl" />
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-primary text-dark px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-white/60 text-sm">{post.readTime}</span>
            </div>

            <h1 className="text-white lg:text-5xl md:text-4xl text-3xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{post.author.avatar}</div>
                <div>
                  <p className="font-medium text-white">{post.author.name}</p>
                  <p className="text-white/60 text-sm">{post.author.role}</p>
                </div>
              </div>
              <div className="text-white/60 text-sm">
                {formatDate(post.publishedAt)}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-white/80 hover:text-primary transition-colors">
                <IconifyIconClient icon="tabler:share" className="text-xl" />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12.5 lg:py-25 md:py-22.5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              {/* Article Header Image */}
              <div className="mb-8">
                <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                  <div className="text-8xl">{post.image}</div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </div>
                
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {post.content}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-dark transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{post.author.avatar}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{post.author.name}</h3>
                    <p className="text-gray-600 mb-3">{post.author.role}</p>
                    <p className="text-gray-600">
                      Expert in shop management and business operations with years of experience 
                      helping businesses streamline their processes and grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12.5 lg:py-25 md:py-22.5 bg-body-bg">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-4xl">{relatedPost.image}</div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gray-500 text-xs">{relatedPost.readTime}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-xs">
                        {formatDate(relatedPost.publishedAt)}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-lg">{relatedPost.author.avatar}</div>
                      <div>
                        <p className="font-medium text-xs">{relatedPost.author.name}</p>
                        <p className="text-gray-500 text-xs">{relatedPost.author.role}</p>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${relatedPost.id}`}
                      className="inline-flex w-full justify-center py-2 px-4 bg-primary font-medium rounded-2xl text-dark text-sm transition-all duration-300 hover:bg-primary/90"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12.5 lg:py-25 md:py-22.5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Enjoyed This Article?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get more insights, tips, and strategies 
              delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 bg-white border border-gray-200 rounded-2xl text-dark placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button className="py-4 px-8 bg-primary font-medium rounded-2xl text-dark transition-all duration-300 hover:bg-primary/90">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}