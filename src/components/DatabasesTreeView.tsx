import databases from "../data/databases.json";

import DatabaseRowContent from "./DatabaseRowContent";
import TreeView from "./TreeView";

export default function DatabasesTreeView() {
  return (
    <TreeView
      title="Database Explorer"
      nodes={databases}
      RowContent={DatabaseRowContent}
    />
  );
}
