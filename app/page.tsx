import BlogList from "../components/BlogList";
import { getAllPosts } from "../lib/posts";
import { motion } from "framer-motion";

export default async function HomePage() {
  const allPosts = (await getAllPosts())
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .slice(0, 3)
    .map(post => ({
      slug: post.slug,
      title: post.data.title,
      excerpt: post.data.excerpt,
      image: post.data.image,
      tags: post.data.tags,
      category: post.data.category,
    }));
  return (
    <>
      <motion.section
        className="py-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-bold mb-4">Curated Ideas, Minimal Design</h1>
        <p className="text-lg text-gray-500 mb-10">A modern blog for thoughtful stories and inspiration.</p>
      </motion.section>
      <BlogList posts={allPosts} />
    </>
  );
}
