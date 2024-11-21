import { type TreeViewNode } from "./treeView";

export interface DatabaseNode extends TreeViewNode {
  class: "db" | "table" | "schema";
  type: "project" | "model" | "agent";
  engine: "lightwood" | "files" | "web" | null;
  children?: DatabaseNode[];
  schema?: string | null;
}
