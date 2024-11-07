import { Link } from 'react-router-dom'
import { Twitter, Github, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-2xl font-semibold pl-4">
            <Link to="/blog" className="hover:text-foreground transition-colors">
              Blogs
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-8">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blogs
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact me
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}