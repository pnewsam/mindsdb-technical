import DatabaseRowContent from "@/components/DatabaseRowContent";
import TreeView from "@/components/TreeView";
import databases from "@/data/databases.json";

export default function DatabasesTreeView() {
  return (
    <TreeView
      title="Database Explorer"
      nodes={databases}
      RowContent={DatabaseRowContent}
    />
  );
}
