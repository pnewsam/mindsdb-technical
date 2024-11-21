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
  console.log(
    "types",
    items.map((item) => item.type),
  );

  console.log(
    "engines",
    items.map((item) => item.engine),
  );

  console.log(
    "classs",
    items.map((item) => item.class),
  );

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
              type={item.type}
              engine={item.engine}
              dbClass={item.class}
            />
          ) : (
            <Row
              key={item.name}
              name={item.name}
              type={item.type}
              engine={item.engine}
              dbClass={item.class}
            />
          ),
        )}
      </div>
    </div>
  );
}
