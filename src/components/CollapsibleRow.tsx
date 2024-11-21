import { useState } from "react";
import { ChevronUp } from "lucide-react";
import Icon from "./Icon";
import Badge from "./Badge";
import { cn } from "../utils/cn";
import { Database } from "../types/database";
import Row from "./Row";

export default function CollapsibleRow({
  name,
  type,
  items,
  engine,
}: {
  name: string;
  type?: string;
  items: Database[];
  engine?: string | null;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="flex cursor-pointer items-center justify-start gap-2 rounded p-2 transition hover:bg-neutral-100"
        aria-role=""
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
        <Icon />
        <span className="font-medium tracking-tight">{name}</span>
        {type && <Badge>{type}</Badge>}
        {engine && <Badge>{engine}</Badge>}
      </div>
      <div
        className={cn(
          "px-4 transition duration-150",
          open ? "block h-auto" : "collapse h-0",
        )}
      >
        {items?.map((item) => (
          <Row
            key={item.name}
            name={item.name}
            type={item.type}
            engine={item.engine}
          />
        ))}
      </div>
    </div>
  );
}
