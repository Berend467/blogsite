import Link from "next/link";
import { motion } from "framer-motion";

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    image: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link href={`/blog/${post.slug}`}>
        <a className="block rounded-lg overflow-hidden shadow-soft hover:shadow-lg transition-shadow bg-white dark:bg-neutral-900">
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-500 dark:text-gray-400">{post.excerpt}</p>
          </div>
        </a>
      </Link>
    </motion.div>
  );
} 