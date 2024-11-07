import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PostGrid from '../components/blog/PostGrid'
import { Button } from '../components/ui/button'
import { Code2, Brain, Cloud, Briefcase, MessageSquareCode, Github, ArrowRight } from 'lucide-react'
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

  const topics = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'Web Development',
      description: 'Modern web development practices and technologies'
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'Programming',
      description: 'Software engineering principles and best practices'
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: 'Cloud Computing',
      description: 'AWS and other cloud platforms'
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Career Advice',
      description: 'Tips and insights for tech careers'
    },
    {
      icon: <MessageSquareCode className="h-6 w-6" />,
      title: 'Telegrams Bots',
      description: 'Building and deploying Telegram bots'
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: 'Open Source',
      description: 'Contributing to open source projects'
    }
  ]

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
                <span className="block bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                  Blog Collection 
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join me on a journey through software engineering, cloud computing, and everything in between.
              </p>
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
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-2">
              <h2 className="text-3xl font-bold">What do I write about?</h2>
              <p className="text-muted-foreground">Dive into various topics across software development</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <div key={topic.title} 
                  className="group relative p-6 rounded-xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                      {topic.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                    <p className="text-muted-foreground">{topic.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts with Enhanced Styling */}
      <section ref={latestPostsRef} className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-2">
              <h2 className="text-3xl font-bold">Latest Articles</h2>
              <p className="text-muted-foreground">Fresh insights and tutorials</p>
            </div>
            {isLoading ? (
              <p className="text-center">Loading posts...</p>
            ) : error ? (
              <p className="text-center text-destructive">{error}</p>
            ) : (
              <PostGrid posts={posts} showHeading={false} />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}