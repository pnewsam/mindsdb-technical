import DatabaseRowBadges from "./DatabaseRowBadges";
import { TreeViewNode } from "../types/treeView";
import DatabaseRowText from "./DatabaseRowText";
import DatabaseRowIcon from "./DatabaseRowIcon";
import { DatabaseNode } from "../types/database";

export default function DatabaseRowContent({ ...node }: TreeViewNode) {
  // Coerce type here to avoid having to do it further down
  const dbNode = node as DatabaseNode;
  return (
    <div className="flex items-center gap-2">
      <DatabaseRowIcon {...dbNode} />
      <DatabaseRowText {...dbNode} />
      <DatabaseRowBadges {...dbNode} />
    </div>
  );
}
