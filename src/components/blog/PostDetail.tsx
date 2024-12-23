import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import postApi, { Post } from '../../api/postApi'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

function PostDetail() {
  const { postId } = useParams<{ postId: string }>()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getPostData = async () => {
      if (!postId) {
        setError('Post ID is not available')
        setLoading(false)
        return
      }
  
      try {
        const response = await postApi.getPost(postId)
        setPost(response.data)
      } catch (error) {
        setError('Failed to fetch post data')
        console.error('Error fetching post data:', error)
      } finally {
        setLoading(false)
      }
    }
  
    getPostData()
  }, [postId])

  if (loading) {
    return <div className="text-center py-8">Loading...</div>
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>
  }

  if (!post) {
    return <div className="text-center py-8">Post not found.</div>
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-4">
        Posted on {post.date} • {post.category}
      </div>
      {(post.picture || post.file) && (
        <img 
          src={post.file || post.picture} 
          alt={post.title} 
          className="mb-6 w-full h-auto rounded-lg shadow-md object-cover max-h-96"
        />
      )}
      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full dark:prose-invert">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkBreaks]}
          components={{
            // Customize heading rendering
            // Customize heading rendering
            h1: ({...props}) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,

            h2: ({...props}) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,

            h3: ({...props}) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,

            // Ensure paragraphs have proper spacing
            p: ({...props}) => <p className="mb-4" {...props} />,
            // Style blockquotes
            blockquote: ({...props}) => (
              <blockquote className="border-l-4 border-gray-300 pl-4 italic" {...props} />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags && post.tags.map((tag) => (
          <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default PostDetail