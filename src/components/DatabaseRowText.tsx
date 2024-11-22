import { cva } from "class-variance-authority";

import { type DatabaseNode } from "../types/database";
import { cn } from "../utils/cn";

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

export default function DatabaseRowText({ ...node }: DatabaseNode) {
  const { name, type } = node;
  return <h4 className={cn(variants({ type }))}>{name}</h4>;
}
