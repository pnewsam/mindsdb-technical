export interface TreeViewNode {
  name: string; // Display text for the node
  class: string;
  type?: string; // Type of node
  deletable: boolean;
  visible?: boolean;
  children?: TreeViewNode[];
}
