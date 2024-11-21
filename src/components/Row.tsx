import Icon from "./Icon";

export default function Row({ name }: { name: string }) {
  return (
    <div
      className="flex cursor-pointer items-center justify-start gap-2 rounded p-2 hover:bg-neutral-100"
      aria-role=""
    >
      <Icon />
      <span className="font-medium tracking-tight">{name}</span>
    </div>
  );
}
