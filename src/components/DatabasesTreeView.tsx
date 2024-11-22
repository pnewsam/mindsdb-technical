import TreeView from "./TreeView";

import databases from "../data/databases.json";
import DatabaseRowContent from "./DatabaseRowContent";

export default function DatabasesTreeView() {
  return (
    <TreeView
      title="Database Explorer"
      nodes={databases}
      RowContent={DatabaseRowContent}
    />
  );
}
