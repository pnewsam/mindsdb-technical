import { type TreeViewNode } from "../types/treeView";

import CollapsibleRow from "./CollapsibleRow";
import Row from "./Row";

export default function TreeViewRow({
  node,
  level = 0,
  RowContent,
}: {
  node: TreeViewNode;
  level: number;
  RowContent: React.ComponentType<TreeViewNode>;
}) {
  return node.children ? (
    <CollapsibleRow level={level + 1} RowContent={RowContent} {...node} />
  ) : (
    <Row RowContent={RowContent} {...node} />
  );
}
