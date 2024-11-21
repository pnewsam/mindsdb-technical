import Icon from "./Icon";
import Badge from "./Badge";
import { cn } from "../utils/cn";
import { getClassesByType } from "../utils/database";

export default function Row({
  name,
  type,
  engine,
  dbClass,
}: {
  name: string;
  type?: string;
  engine?: string | null;
  dbClass?: string;
}) {
  return (
    <div className="flex cursor-pointer items-center justify-start gap-2 rounded p-2 transition hover:bg-gray-100">
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
    </div>
  );
}
