import api from './apiConfig';

interface Post {
  _id: string;
  title: string;
  content: string;
  htmlContent?: string; // Add this line
  picture: string;
  file?: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published';
  date: string;
}

interface PostsResponse {
  posts: Post[];
  total: number;
  page: number;
  limit: number;
}

const postApi = {
  getPosts: () => 
    api.get<Post[]>('/post/getposts'),
  
  getPublishedPosts: () => 
    api.get<Post[]>('/post/getpublishedposts'),

  getPost: (postId: string) => 
    api.get<Post>(`/post/getpost/${postId}`),
  
  // getPost: (id: string) =>
  //   axios.get<Post>(`/post/getpost/${id}`)
};

export type { Post, PostsResponse };
export default postApi;