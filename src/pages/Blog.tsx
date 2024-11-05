import PostGrid from '../components/blog/PostGrid'

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">All Blog Posts</h1>
      <PostGrid showHeading={false} />
    </div>
  )
}