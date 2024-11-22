import { ChevronUp } from "lucide-react";
import { useState } from "react";

import { type TreeViewNode } from "../types/treeView";
import { cn } from "../utils/cn";

import TreeViewRow from "./TreeViewRow";

export default function CollapsibleRow({
  children,
  level,
  RowContent,
  ...node
}: {
  children?: TreeViewNode[];
  level: number;
  RowContent: React.ComponentType<TreeViewNode>;
} & TreeViewNode) {
  const [open, setOpen] = useState(false);

  const buttonId = `${level}-${name}-button`;
  const contentId = `${level}-${name}-content`;

  return (
    <div className="w-full">
      <button
        type="button"
        id={buttonId}
        className={cn(
          "flex w-full items-center justify-start gap-2 rounded p-2 transition hover:bg-gray-100",
          "ring-2 ring-transparent focus:outline-none focus:ring-2 focus:ring-gray-200",
        )}
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen(!open)}
      >
        <ChevronUp
          className={cn(
            "h-4 w-4 transform transition-transform duration-200",
            open ? "rotate-180" : "",
          )}
        />
        <RowContent {...node} />
      </button>
      <div
        id={contentId}
        className={cn(
          "ml-8 grid transition-all duration-200 ease-in-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
        role="region"
        aria-labelledby={buttonId}
      >
        <div className="overflow-hidden px-1">
          {children?.map((node) => (
            <div key={node.name} className="py-1">
              <TreeViewRow
                node={node}
                level={level + 1}
                RowContent={RowContent}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
