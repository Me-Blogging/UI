import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background z-50 md:hidden">
      <div className="flex flex-col h-full">
        <div className="flex justify-end p-4">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex flex-col items-center gap-8 mt-16">
          <Link to="/" className="text-2xl font-medium" onClick={onClose}>
            Blog
          </Link>
          <Link to="/projects" className="text-2xl font-medium" onClick={onClose}>
            Projects
          </Link>
          <Link to="/about" className="text-2xl font-medium" onClick={onClose}>
            About
          </Link>
          <Link to="/newsletter" className="text-2xl font-medium" onClick={onClose}>
            Newsletter
          </Link>
        </nav>
      </div>
    </div>
  );
}