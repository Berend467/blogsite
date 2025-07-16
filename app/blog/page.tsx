import BlogList from "../../components/BlogList";

const allPosts = [
  {
    slug: "welcome-to-the-minimal-blog",
    title: "Welcome to the Minimal Blog",
    excerpt: "A clean, modern blog template inspired by Curate Labs.",
    image: "/images/featured1.jpg",
    tags: ["design", "minimalism"],
    category: "Inspiration",
  },
  {
    slug: "minimalism-in-web-design",
    title: "Minimalism in Web Design",
    excerpt: "How whitespace and typography create focus and clarity.",
    image: "/images/featured2.jpg",
    tags: ["design", "web"],
    category: "Design",
  },
  {
    slug: "building-with-nextjs-tailwind",
    title: "Building with Next.js & Tailwind",
    excerpt: "A modern stack for fast, beautiful blogs.",
    image: "/images/featured3.jpg",
    tags: ["tech", "nextjs"],
    category: "Development",
  },
];

export default function BlogArchivePage() {
  // Filtering logic can be added here
  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">All Posts</h1>
      <BlogList posts={allPosts} />
    </section>
  );
} 