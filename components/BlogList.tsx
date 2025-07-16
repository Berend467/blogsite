import BlogCard from "./BlogCard";

interface BlogListProps {
  posts: Array<{
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    tags?: string[];
    category?: string;
  }>;
  filterTag?: string;
  filterCategory?: string;
}

export default function BlogList({ posts, filterTag, filterCategory }: BlogListProps) {
  const filtered = posts.filter(post => {
    if (filterTag && !(post.tags || []).includes(filterTag)) return false;
    if (filterCategory && post.category !== filterCategory) return false;
    return true;
  });
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {filtered.map(post => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
} 