import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function getPostBySlug(slug: string) {
  const postPath = path.join(process.cwd(), 'content', 'posts', `${slug}.mdx`);
  try {
    const source = await fs.readFile(postPath, 'utf8');
    const { content, data } = matter(source);
    return { content, data };
  } catch {
    return null;
  }
}

export async function getAllPosts() {
  const postsDir = path.join(process.cwd(), 'content', 'posts');
  const files = await fs.readdir(postsDir);
  return Promise.all(
    files.filter(f => f.endsWith('.mdx')).map(async filename => {
      const slug = filename.replace(/\.mdx$/, '');
      const source = await fs.readFile(path.join(postsDir, filename), 'utf8');
      const { content, data } = matter(source);
      return { slug, content, data };
    })
  );
} 