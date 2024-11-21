import { Database, FolderTree, Brain, Bot, View } from "lucide-react";

const iconByCategory = {
  db: Database,
  schema: FolderTree,
  model: Brain,
  agent: Bot,
  view: View,
};

const getIconByCategory = (category: string) => {
  const match = iconByCategory[category as keyof typeof iconByCategory];
  return match || Database;
};

export default function Icon({ category }: { category: string }) {
  const Component = getIconByCategory(category);
  return <Component className="h-4 w-4" />;
}
