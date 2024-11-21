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
  level,
}: {
  name: string;
  type?: string;
  children?: TreeViewNode[];
  engine?: string | null;
  dbClass?: string;
  level: number;
}) {
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
        className={cn(
          "ml-8 overflow-hidden transition-transform duration-300 ease-in-out",
          open ? "h-auto" : "h-0",
        )}
        role="region"
        aria-labelledby={buttonId}
      >
        {children?.map((item) => (
          <TreeViewRow key={item.name} item={item} level={level} />
        ))}
      </div>
    </div>
  );
}
