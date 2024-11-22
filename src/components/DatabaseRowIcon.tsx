import { cva } from "class-variance-authority";
import { Bot, Brain, Database as Db, FolderTree, View } from "lucide-react";

import { type DatabaseNode } from "../types/database";
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
  if (node.class === "schema") {
    // "class": "schema" is one exception to the rule that icons are determined by type
    return <FolderTree className="text-yellow-500" />;
  }

  const { type } = node;
  const Icon = getIconByType(type);
  return <Icon className={cn(variants({ type }))} />;
}
