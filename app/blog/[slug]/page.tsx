import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import BlogPost from '../../../components/BlogPost';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const postPath = path.join(process.cwd(), 'content', 'posts', `${params.slug}.mdx`);
  if (!fs.existsSync(postPath)) return notFound();
  const source = fs.readFileSync(postPath, 'utf8');
  const { content, data } = matter(source);
  return (
    <BlogPost post={{
      title: data.title,
      image: data.image,
      content: <MDXRemote source={content} />,
    }} />
  );
} 