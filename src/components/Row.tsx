import React from "react";
import { TreeViewNode } from "../types/treeView";

export default function Row({
  RowContent,
  ...node
}: {
  RowContent: React.ComponentType<TreeViewNode>;
} & TreeViewNode) {
  return (
    <div className="flex cursor-pointer items-center justify-start gap-2 rounded p-2 transition hover:bg-gray-100">
      <RowContent {...node} />
    </div>
  );
}
