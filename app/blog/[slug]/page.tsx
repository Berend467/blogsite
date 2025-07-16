import { MDXRemote } from 'next-mdx-remote/rsc';
import BlogPost from '../../../components/BlogPost';
import { getPostBySlug } from '../../../lib/posts';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
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