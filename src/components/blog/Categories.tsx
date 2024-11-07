
interface Category {
  name: string;
  count: number;
}

interface CategoriesProps {
  categories: Category[];
  selectedCategory?: string;
  onSelectCategory: (category: string) => void;
}

export default function Categories({ categories, selectedCategory, onSelectCategory }: CategoriesProps) {
  return (
    <div className="bg-card rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <div 
            key={category.name}
            className={`flex justify-between items-center p-2 rounded cursor-pointer hover:bg-muted ${
              selectedCategory === category.name ? 'bg-muted' : ''
            }`}
            onClick={() => onSelectCategory(category.name)}
          >
            <span>{category.name}</span>
            <span className="text-muted-foreground">({category.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
}