import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getPostBySlug(slug: string) {
  const postPath = path.join(process.cwd(), 'content', 'posts', `${slug}.mdx`);
  if (!fs.existsSync(postPath)) return null;
  const source = fs.readFileSync(postPath, 'utf8');
  const { content, data } = matter(source);
  return { content, data };
}

export function getAllPosts() {
  const postsDir = path.join(process.cwd(), 'content', 'posts');
  const files = fs.readdirSync(postsDir);
  return files.filter(f => f.endsWith('.mdx')).map(filename => {
    const slug = filename.replace(/\.mdx$/, '');
    const { content, data } = matter(fs.readFileSync(path.join(postsDir, filename), 'utf8'));
    return { slug, content, data };
  });
} 