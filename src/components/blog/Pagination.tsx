// src/components/blog/Pagination.tsx
import  { Button } from '../ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <Button variant="outline" size="icon">
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {[1, 2, 3, '...', 8, 9, 10].map((page, i) => (
        <Button
          key={i}
          variant={page === 1 ? 'default' : 'outline'}
          className={page === '...' ? 'pointer-events-none' : ''}
        >
          {page}
        </Button>
      ))}
      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}