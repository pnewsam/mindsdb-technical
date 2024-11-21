import { TreeViewNode } from "../types/treeView";
import TreeViewRow from "./TreeViewRow";

export default function TreeView({
  title,
  items,
}: {
  title: string;
  items: TreeViewNode[];
}) {
  return (
    <div className="rounded-lg border bg-white shadow">
      <div className="mx-5 border-b-2 border-gray-100 py-5">
        <h4 className="text-xl font-semibold tracking-tight">{title}</h4>
      </div>
      <div className="flex flex-col gap-2 p-5">
        {items.map((item, index) => (
          <TreeViewRow key={`${item.name}-${index}`} item={item} level={0} />
        ))}
      </div>
    </div>
  );
}
