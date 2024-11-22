import { type TreeViewNode } from "../types/treeView";

export default function Row({
  RowContent,
  ...node
}: {
  RowContent: React.ComponentType<TreeViewNode>;
} & TreeViewNode) {
  return (
    <div className="flex items-center justify-start gap-2 rounded px-2 py-1 transition hover:bg-gray-100">
      <RowContent {...node} />
    </div>
  );
}
