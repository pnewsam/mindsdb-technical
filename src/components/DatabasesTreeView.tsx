import TreeView from "./TreeView";
import databases from "../data/databases.json";

const items = [
  ...databases,
  // ...databases,
  // ...databases,
];

export default function DatabasesTreeView() {
  return <TreeView title="Database Explorer" items={items} />;
}
