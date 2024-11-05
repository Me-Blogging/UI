// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2023
          </div>
          <nav className="flex items-center gap-4">
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
              Twitter
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
              LinkedIn
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
              Email
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
              RSS feed
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary">
              Add to Feedly
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}