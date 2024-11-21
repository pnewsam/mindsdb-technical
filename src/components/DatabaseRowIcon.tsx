import { Database as Db, FolderTree, Brain, Bot, View } from "lucide-react";
import { DatabaseNode } from "../types/database";
import { cva } from "class-variance-authority";
import { cn } from "../utils/cn";

const iconByType = {
  project: Db,
  model: Brain,
  agent: Bot,
  view: View,
};

const variants = cva("h-4 w-4", {
  variants: {
    type: {
      system: "text-blue-600",
      data: "text-blue-600",
      project: "text-blue-600",
      table: "text-blue-600",
      model: "text-purple-600",
      agent: "text-orange-600",
      view: "text-green-600",
    },
  },
  defaultVariants: {
    type: "project",
  },
});

const getIconByType = (type: DatabaseNode["type"]) => {
  const match = iconByType[type];
  return match || iconByType.project;
};

export default function DatabaseRowIcon({ ...node }: DatabaseNode) {
  const { type, class: nodeClass } = node;
  const Icon = nodeClass === "schema" ? FolderTree : getIconByType(type);
  return <Icon className={cn(variants({ type }))} />;
}
