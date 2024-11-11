import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PostGrid from '../components/blog/PostGrid'
import { Button } from '../components/ui/button'
import { ArrowRight } from 'lucide-react'
import postApi, { type Post } from '../api/postApi'

export default function Home() {
  const latestPostsRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await postApi.getPosts()
        setPosts(response.data)
      } catch (err) {
        setError('Failed to fetch posts')
        console.error('Error fetching posts:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const scrollToLatestPosts = () => {
    latestPostsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-background to-muted/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto py-32 flex flex-col items-center">
            <div className="animate-fade-in space-y-6 text-center">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Welcome to Kirubel's
                <span className="block">
                  Blog Collection
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A collection of blogs written by Kirubel Wondwoson. The blogs are about web development, programming, and also  topics.</p>
              <div className="flex gap-4 justify-center pt-4">
                <Button size="lg" className="rounded-full group" onClick={() => navigate('/blog')}>
                  Read Blogs
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full" onClick={scrollToLatestPosts}>
                  Latest Posts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Grid with Hover Effects */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img src="src/assets/cha-bg_hu6ccbcd044992bff2c1491035227e49b6_79650_1110x0_resize_q90_h2_lanczos_3.webp" alt="Description" className="w-3/4 h-auto" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">What do I write about?</h2>
              <p className="text-muted-foreground mb-6">
                I am a backend heavy developer, so I write about backend technologies. I also write about some frontend technologies, but not as much as I write about backend technologies. I also write about other tech-related topics.
              </p>
              <ul className="list-none pl-5">
                <li className="flex items-center mb-4">
                  <span className="text-lg">✔️</span>
                  <span className="ml-2">Programming</span>
                </li>
                <li className="flex items-center mb-4">
                  <span className="text-lg">✔️</span>
                  <span className="ml-2">API development</span>
                </li>
                <li className="flex items-center mb-4">
                  <span className="text-lg">✔️</span>
                  <span className="ml-2">Spritual Exegesis</span>
                </li>
                <li className="flex items-center mb-4">
                  <span className="text-lg">✔️</span>
                  <span className="ml-2">Career Advice</span>
                </li>
                <li className="flex items-center mb-4">
                  <span className="text-lg">✔️</span>
                  <span className="ml-2">Open Source Contribution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts with Enhanced Styling */}
      <section ref={latestPostsRef} className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-2">
              <h2 className="text-3xl font-bold">Latest Blogs</h2>
              <p className="text-muted-foreground">Fresh insights and tutorials</p>
            </div>
            {isLoading ? (
              <p className="text-center">Loading posts...</p>
            ) : error ? (
              <p className="text-center text-destructive">{error}</p>
            ) : (
              <PostGrid posts={posts.slice(0, 3)} showHeading={false} />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}