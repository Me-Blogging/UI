import { Link } from 'react-router-dom';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react'; 
import type { Post } from '../../api/postApi';

export default function PostCard({ post }: { post: Post }) {
  return (
    <Card className="overflow-hidden">
      <Link to={`/blog/${post._id}`}>
        <img
          src={post.file || post.picture}
          alt={post.title}
          className="object-cover w-full h-48"
        />
      </Link>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        <Link to={`/blog/${post._id}`} className="group">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
            {post.title}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-4">
          {post.content.slice(0, 150)}...
        </p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <Button variant="outline" asChild>
            <Link to={`/blog/${post._id}`}>
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}