import { TreeViewNode } from "../types/treeView";
import CollapsibleRow from "./CollapsibleRow";
import Row from "./Row";

export default function TreeViewRow({ item }: { item: TreeViewNode }) {
  return item.children ? <CollapsibleRow {...item} /> : <Row {...item} />;
}
