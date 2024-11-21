import Icon from "./Icon";
import Badge from "./Badge";

export default function Row({
  name,
  type,
  engine,
}: {
  name: string;
  type?: string;
  engine?: string | null;
}) {
  return (
    <div
      className="flex cursor-pointer items-center justify-start gap-2 rounded p-2 transition hover:bg-neutral-100"
      aria-role=""
    >
      <Icon />
      <span className="font-medium tracking-tight">{name}</span>
      {type && <Badge>{type}</Badge>}
      {engine && <Badge>{engine}</Badge>}
    </div>
  );
}
