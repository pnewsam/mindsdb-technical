import { type TreeViewNode } from "./treeView";

export interface DatabaseNode extends TreeViewNode {
  class: "db" | "table";
  type: "project" | "model" | "agent";
  engine: "lightwood" | "files" | "web" | null;
  children?: DatabaseNode[];
}
