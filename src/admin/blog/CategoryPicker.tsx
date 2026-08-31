import { useEffect, useState } from "react";
import { BLOG_CATEGORIES } from "../blog/blogHubSettings";
import { IconTag } from "../blocks/EditorIcons";
import { createBlogCategory, fetchBlogCategories } from "../../lib/cms/blog";
import { OptionPicker } from "../shared/OptionPicker";

type Props = {
  value: string;
  onChange: (name: string) => void;
};

export function CategoryPicker({ value, onChange }: Props) {
  const [options, setOptions] = useState<string[]>([...BLOG_CATEGORIES]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    void fetchBlogCategories().then((rows) => {
      if (cancelled) return;
      const names = rows.map((r) => r.name);
      if (names.length) setOptions(names);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <OptionPicker
      label="Category"
      icon={<IconTag size={16} />}
      value={value}
      options={options}
      loading={loading}
      placeholder="Category name"
      onChange={onChange}
      onAdd={async (name) => {
        const created = await createBlogCategory(name);
        if (!created) return null;
        setOptions((prev) => [...new Set([...prev, created.name])].sort((a, b) => a.localeCompare(b)));
        return created.name;
      }}
    />
  );
}
