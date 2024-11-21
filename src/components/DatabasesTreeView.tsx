import TreeView from "./TreeView";

import databases from "../data/databases.json";
import DatabaseRowContent from "./DatabaseRowContent";

const nodes = [
  ...databases,
  // ...databases,
  // ...databases,
];

export default function DatabasesTreeView() {
  return (
    <TreeView
      title="Database Explorer"
      nodes={nodes}
      RowContent={DatabaseRowContent}
    />
  );
}
