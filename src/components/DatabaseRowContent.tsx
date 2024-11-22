import DatabaseRowBadges from "@/components/DatabaseRowBadges";
import DatabaseRowIcon from "@/components/DatabaseRowIcon";
import DatabaseRowText from "@/components/DatabaseRowText";
import { type DatabaseNode } from "@/types/database";
import { type TreeViewNode } from "@/types/treeView";

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
