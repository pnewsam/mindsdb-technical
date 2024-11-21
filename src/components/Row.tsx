import Icon from "./Icon";
import Badge from "./Badge";

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
    <div
      className="flex cursor-pointer items-center justify-start gap-2 rounded p-2 transition hover:bg-neutral-100"
      aria-role=""
    >
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
  );
}
