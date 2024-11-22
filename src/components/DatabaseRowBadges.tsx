import { cva } from "class-variance-authority";
import { cn } from "../utils/cn";
import { DatabaseNode } from "../types/database";

const variants = cva("rounded px-[8px] py-[4px] text-xs font-medium", {
  variants: {
    type: {
      system: "bg-gray-400/10 text-gray-500",
      model: "bg-purple-400/10 text-purple-500",
      view: "bg-green-400/10 text-green-500",
      agent: "bg-orange-400/10 text-orange-500",
      project: "bg-blue-400/10 text-blue-500",
      data: "bg-blue-400/10 text-blue-500",
      table: "bg-gray-400/10 text-gray-500",
    },
    engine: {
      lightwood: "bg-blue-400/10 text-blue-500",
      files: "bg-gray-400/10 text-gray-500",
      web: "bg-sky-400/10 text-sky-500",
    },
  },
  defaultVariants: {
    type: "system",
  },
});

export default function DatabaseRowBadges({ ...node }: DatabaseNode) {
  const { type, engine } = node;
  return (
    <>
      {engine && <span className={cn(variants({ engine }))}>{engine}</span>}
      <span className={cn(variants({ type }))}>{type}</span>
    </>
  );
}
