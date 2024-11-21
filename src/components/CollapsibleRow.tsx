import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "../utils/cn";
import TreeViewRow from "./TreeViewRow";
import { TreeViewNode } from "../types/treeView";

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
    <div>
      <button
        type="button"
        id={buttonId}
        className="flex w-full cursor-pointer items-center justify-start gap-2 rounded p-2 transition hover:bg-gray-100"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen(!open)}
      >
        <ChevronUp
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
        <RowContent {...node} />
      </button>
      <div
        id={contentId}
        className={cn(
          "ml-8 overflow-hidden transition-transform duration-300 ease-in-out",
          open ? "h-auto" : "h-0",
        )}
        role="region"
        aria-labelledby={buttonId}
      >
        {children?.map((node) => (
          <TreeViewRow
            key={node.name}
            node={node}
            level={level}
            RowContent={RowContent}
          />
        ))}
      </div>
    </div>
  );
}
