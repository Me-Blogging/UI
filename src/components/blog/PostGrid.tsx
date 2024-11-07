import PostCard from './PostCard';
import Pagination from './Pagination';
import type { Post } from '../../api/postApi';

interface PostGridProps {
  showHeading?: boolean;
  posts: Post[];
}

export default function PostGrid({ showHeading = true, posts }: PostGridProps) {
  return (
    <section>
      {showHeading && (
        <h2 className="text-2xl font-semibold mb-6">Recent blog posts</h2>
      )}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
      <Pagination className="mt-12" />
    </section>
  );
}