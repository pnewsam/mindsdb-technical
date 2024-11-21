import { TreeViewNode } from "../types/treeView";
import CollapsibleRow from "./CollapsibleRow";
import Row from "./Row";

export default function TreeViewRow({
  item,
  level = 0,
}: {
  item: TreeViewNode;
  level: number;
}) {
  return item.children ? (
    <CollapsibleRow {...item} level={level + 1} />
  ) : (
    <Row {...item} />
  );
}
