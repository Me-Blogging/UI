interface TagsProps {
  tags: string[];
  selectedTags: string[];
  onSelectTag: (tag: string) => void;
}

export default function Tags({ tags, selectedTags, onSelectTag }: TagsProps) {
  return (
    <div className="bg-card rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Tags</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onSelectTag(tag)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedTags.includes(tag)
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}