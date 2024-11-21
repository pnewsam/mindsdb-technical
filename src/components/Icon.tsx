import { Database as Db, FolderTree, Brain, Bot, View } from "lucide-react";
import { cn } from "../utils/cn";

const iconByCategory = {
  db: ({ className }: { className?: string }) => (
    <Db className={cn("stroke-blue-600", className)} />
  ),
  schema: ({ className }: { className?: string }) => (
    <FolderTree className={cn("stroke-yellow-600", className)} />
  ),
  model: ({ className }: { className?: string }) => (
    <Brain className={cn("stroke-purple-600", className)} />
  ),
  agent: ({ className }: { className?: string }) => (
    <Bot className={cn("stroke-orange-600", className)} />
  ),
  view: ({ className }: { className?: string }) => (
    <View className={cn("stroke-green-600", className)} />
  ),
};

const getIconByCategory = (category: string) => {
  const match = iconByCategory[category as keyof typeof iconByCategory];
  return match || iconByCategory.db;
};

export default function Icon({
  category,
  className,
}: {
  category: string;
  className?: string;
}) {
  const Component = getIconByCategory(category);
  return <Component className={cn("h-4 w-4", className)} />;
}
