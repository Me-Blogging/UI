import { useEffect, useState } from 'react';
import PostGrid from '../components/blog/PostGrid';
import Categories from '../components/blog/Categories';
import Tags from '../components/blog/Tags';
import postApi, { type Post } from '../api/postApi';

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await postApi.getPosts();
        setPosts(response.data);
        setFilteredPosts(response.data);
      } catch (err) {
        setError('Failed to fetch posts');
        console.error('Error fetching posts:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Get unique categories with counts
  const categories = Array.from(new Set(posts.map(post => post.category)))
    .map(category => ({
      name: category,
      count: posts.filter(post => post.category === category).length
    }));

  // Get unique tags
  const tags = Array.from(new Set(posts.flatMap(post => post.tags)));

  // Filter posts based on selected category and tags
  useEffect(() => {
    let filtered = [...posts];
    
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post => 
        selectedTags.every(tag => post.tags.includes(tag))
      );
    }
    
    setFilteredPosts(filtered);
  }, [posts, selectedCategory, selectedTags]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === selectedCategory ? undefined : category);
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading posts...</div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 py-8">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <PostGrid posts={filteredPosts} showHeading={false} />
        </div>
        <div className="space-y-6">
          <Categories 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
          <Tags 
            tags={tags}
            selectedTags={selectedTags}
            onSelectTag={handleTagSelect}
          />
        </div>
      </div>
    </div>
  );
}