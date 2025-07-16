import BlogList from "../../components/BlogList";
import { getAllPosts } from "../../lib/posts";

export default function BlogArchivePage() {
  const allPosts = getAllPosts().map(post => ({
    slug: post.slug,
    title: post.data.title,
    excerpt: post.data.excerpt,
    image: post.data.image,
    tags: post.data.tags,
    category: post.data.category,
  }));
  // Filtering logic can be added here
  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">All Posts</h1>
      <BlogList posts={allPosts} />
    </section>
  );
} 