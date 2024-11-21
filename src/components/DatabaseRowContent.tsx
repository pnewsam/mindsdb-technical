import DatabaseRowBadges from "./DatabaseRowBadges";
import { TreeViewNode } from "../types/treeView";
import DatabaseRowText from "./DatabaseRowText";
import DatabaseRowIcon from "./DatabaseRowIcon";

export default function DatabaseRowContent({ ...node }: TreeViewNode) {
  return (
    <div className="flex items-center gap-2">
      <DatabaseRowIcon {...node} />
      <DatabaseRowText {...node} />
      <DatabaseRowBadges {...node} />
    </div>
  );
}
