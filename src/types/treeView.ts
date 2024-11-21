export interface TreeViewNode {
  name: string; // Display text for the node
  class: string;
  type?: string;
  deletable: boolean;
  visible?: boolean;
  children?: TreeViewNode[];
}
