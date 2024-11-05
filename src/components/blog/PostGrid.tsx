// src/components/blog/PostGrid.tsx
import PostCard from './PostCard'
import Pagination from './Pagination'

const posts = [
  {
    title: "UX review presentations",
    excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "1 Jan 2023",
    image: "/images/placeholder.jpg",
    categories: ["Design", "Research", "Presentation"],
    slug: "ux-review-presentations"
  },
  // Add more posts...
]
interface PostGridProps {
  showHeading?: boolean
}
export default function PostGrid({ showHeading = true }: PostGridProps) {
  return (
    <section>
      {showHeading && (
        <h2 className="text-2xl font-semibold mb-6">Recent blog posts</h2>
      )}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      <Pagination className="mt-12" />
    </section>
  )
}