import CollapsibleRow from "./CollapsibleRow";
import { type Database } from "../types/database";
import Row from "./Row";

export default function TreeView({
  title,
  items,
}: {
  title: string;
  items: Database[];
}) {
  return (
    <div className="rounded-lg border bg-white shadow">
      <div className="mx-4 border-b py-4">
        <h4 className="text-xl font-semibold tracking-tight">{title}</h4>
      </div>
      <div className="flex flex-col gap-2 p-4">
        {items.map((item) =>
          item.children ? (
            <CollapsibleRow
              key={item.name}
              name={item.name}
              items={item.children}
            />
          ) : (
            <Row key={item.name} name={item.name} />
          ),
        )}
      </div>
    </div>
  );
}
