export type Database = {
  name: string;
  class: string;
  type?: string;
  engine?: string | null;
  deletable: boolean;
  visible?: boolean;
  children?: Database[];
};
