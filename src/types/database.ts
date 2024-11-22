import { type TreeViewNode } from "./treeView";

export interface DatabaseNode extends TreeViewNode {
  class: "db" | "schema" | "table";
  type: "system" | "project" | "model" | "view" | "agent" | "data" | "table";
  engine: "lightwood" | "files" | "web" | null;
  children?: DatabaseNode[];
  schema: null;
}
