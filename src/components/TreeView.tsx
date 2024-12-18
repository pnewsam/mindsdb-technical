import { type TreeViewNode } from "../types/treeView";

import TreeViewRow from "./TreeViewRow";

export default function TreeView({
  title,
  nodes,
  RowContent,
}: {
  title: string;
  nodes: TreeViewNode[];
  RowContent: React.ComponentType<TreeViewNode>;
}) {
  return (
    <div className="rounded-lg border bg-white shadow">
      <div className="mx-5 border-b-2 border-gray-100 pt-5 pb-3">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      </div>
      <div className="flex flex-col gap-[6px] px-5 py-4">
        {nodes.map((node, index) => (
          <TreeViewRow
            key={`${node.name}-${index}`}
            level={0}
            node={node}
            RowContent={RowContent}
          />
        ))}
      </div>
    </div>
  );
}
