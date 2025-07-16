import Link from "next/link";

interface BlogPostProps {
  post: {
    title: string;
    image: string;
    content: React.ReactNode;
    next?: { slug: string; title: string };
    prev?: { slug: string; title: string };
  };
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="max-w-3xl mx-auto py-12">
      <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-8" />
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <div className="prose prose-neutral dark:prose-invert mb-12">{post.content}</div>
      <div className="flex justify-between">
        {post.prev && (
          <Link href={`/blog/${post.prev.slug}`}>
            <a className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100">← {post.prev.title}</a>
          </Link>
        )}
        {post.next && (
          <Link href={`/blog/${post.next.slug}`}>
            <a className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100">{post.next.title} →</a>
          </Link>
        )}
      </div>
    </article>
  );
} 