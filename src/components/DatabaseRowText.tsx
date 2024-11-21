import { TreeViewNode } from "../types/treeView";
import { DatabaseNode } from "../types/database";
import { cn } from "../utils/cn";
import { cva } from "class-variance-authority";

const variants = cva("font-medium tracking-tight", {
  variants: {
    type: {
      system: "text-gray-600",
      model: "text-purple-600",
      view: "text-green-600",
      agent: "text-orange-600",
      project: "text-blue-600",
      data: "text-blue-600",
    },
  },
  defaultVariants: {
    type: "system",
  },
});

export default function DatabaseRowText({ ...node }: TreeViewNode) {
  const { name, type } = node as DatabaseNode;
  return <h4 className={cn(variants({ type }))}>{name}</h4>;
}
