// src/components/layout/Header.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sun, Menu } from 'lucide-react'
import { Button } from '../ui/button'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          Kirubel's Blog
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link to="/blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
          <Link to="/projects" className="text-sm font-medium hover:text-primary">
            Projects
          </Link>
          {/* <Link to="/newsletter" className="text-sm font-medium hover:text-primary">
            Newsletter
          </Link> */}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="hidden md:inline-flex"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  )
}