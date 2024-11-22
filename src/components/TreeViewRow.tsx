import CollapsibleRow from "@/components/CollapsibleRow";
import Row from "@/components/Row";
import { type TreeViewNode } from "@/types/treeView";

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
