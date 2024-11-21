import { useState } from "react";
import { ChevronUp } from "lucide-react";
import Icon from "./Icon";
import Badge from "./Badge";
import { getClassesByType } from "../utils/database";
import { cn } from "../utils/cn";
import TreeViewRow from "./TreeViewRow";
import { TreeViewNode } from "../types/treeView";

export default function CollapsibleRow({
  name,
  type,
  children,
  engine,
  dbClass,
}: {
  name: string;
  type?: string;
  children?: TreeViewNode[];
  engine?: string | null;
  dbClass?: string;
}) {
  const [open, setOpen] = useState(false);

  const buttonId = `${name}-button`;
  const contentId = `${name}-content`;

  return (
    <div>
      <button
        type="button"
        id={buttonId}
        className="flex w-full cursor-pointer items-center justify-start gap-2 rounded p-2 transition hover:bg-neutral-100"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <ChevronUp
          className={cn(
            "h-4 w-4 transition duration-100",
            open && "rotate-180",
          )}
        />
        {(type || engine || dbClass) && (
          <Icon
            category={type || engine || (dbClass as string)}
            className={getClassesByType(type)}
          />
        )}
        <span
          className={cn("font-medium tracking-tight", getClassesByType(type))}
        >
          {name}
        </span>
        {[engine, type, dbClass].filter(Boolean).map((category) => (
          <Badge key={category} variant={category as string}>
            {category}
          </Badge>
        ))}
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "ml-8 transition duration-150",
          open ? "block h-auto" : "collapse h-0",
        )}
      >
        {children?.map((item) => <TreeViewRow key={item.name} item={item} />)}
      </div>
    </div>
  );
}
