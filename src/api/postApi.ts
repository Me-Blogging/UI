import api from './apiConfig';

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

interface PostsResponse {
  posts: Post[];
  total: number;
  page: number;
  limit: number;
}

const postApi = {
  getPosts: () => 
    api.get<Post[]>('/post/getposts'),
    
  getPost: (postId: string) => 
    api.get<Post>(`/post/getpost${postId}`),
};

export type { Post, PostsResponse };
export default postApi;