import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postApi from '../../api/postApi';

function PostDetail() {
  const { postId } = useParams<{ postId: string }>();
  
  interface Post {
    _id: string;
    title: string;
    content: string;
    picture: string;
    category: string;
    tags: string[];
    status: string;
    date: string;
    file?: string;
  }

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPostData = async () => {
      if (!postId) {
        setError('Post ID is not available');
        setLoading(false);
        return;
      }
  
      try {
        console.log(postId)
        const response = await postApi.getPost(postId);
        setPost(response.data);
      } catch (error) {
        setError('Failed to fetch post data');
        console.error('Error fetching post data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    getPostData();
  }, [postId]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!post) {
    return <div className="text-center">Post not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-2">
        Posted on {new Date(post.date).toLocaleDateString()}
      </div>
      {post.picture && (
        <img src={post.picture} alt={post.title} className="mb-4 w-full h-auto rounded" />
      )}
      <div className="prose">
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default PostDetail;