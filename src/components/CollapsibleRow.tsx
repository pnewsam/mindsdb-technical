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
  dbClass,
}: {
  name: string;
  type?: string;
  items: Database[];
  engine?: string | null;
  dbClass?: string;
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
        {(type || engine || dbClass) && (
          <Icon category={type || engine || (dbClass as string)} />
        )}
        <span className="font-medium tracking-tight">{name}</span>
        {[type, engine, dbClass].filter(Boolean).map((category) => (
          <Badge key={category} variant={category as string}>
            {category}
          </Badge>
        ))}
      </div>
      <div
        className={cn(
          "ml-8 transition duration-150",
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
