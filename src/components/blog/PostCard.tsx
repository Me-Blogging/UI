// src/components/blog/PostCard.tsx
import { Link } from 'react-router-dom'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'

interface Post {
  title: string
  excerpt: string
  author: string
  date: string
  image: string
  categories: string[]
  slug: string
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Card className="overflow-hidden">
      <Link to={`/blog/${post.slug}`}>
        <img
          src={post.image}
          alt={post.title}
          className="object-cover w-full h-48"
        />
      </Link>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        <Link to={`/blog/${post.slug}`} className="group">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
            {post.title}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}