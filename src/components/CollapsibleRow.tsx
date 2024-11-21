import { useState } from "react";
import { ChevronUp } from "lucide-react";
import Icon from "./Icon";
import { cn } from "../lib/utils";
import { Database } from "../types/database";
import Row from "./Row";

export default function CollapsibleRow({
  name,
  items,
}: {
  name: string;
  items: Database[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="flex cursor-pointer items-center justify-start gap-2 rounded p-2 hover:bg-neutral-100"
        aria-role=""
        onClick={() => {
          setOpen(!open);
        }}
      >
        <ChevronUp
          className={cn(
            "h-4 w-4 transition duration-200",
            open && "rotate-180",
          )}
        />
        <Icon />
        <span className="font-medium tracking-tight">{name}</span>
      </div>
      <div
        className={cn(
          "hidden px-4 transition duration-150",
          open ? "block h-auto" : "h-0",
        )}
      >
        {items?.map((item) => <Row key={item.name} name={item.name}></Row>)}
      </div>
    </div>
  );
}
