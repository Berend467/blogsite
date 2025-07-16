import { MDXRemote } from 'next-mdx-remote/rsc';
import BlogPost from '../../../components/BlogPost';
import { getPostBySlug } from '../../../lib/posts';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return <div>Post not found</div>;
  return (
    <BlogPost post={{
      title: post.data.title,
      image: post.data.image,
      content: <MDXRemote source={post.content} />,
    }} />
  );
} 