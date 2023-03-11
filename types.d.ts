export interface Tag {
  name: string;
  path: string;
}
export interface Subtag {
  name: string;
  subtag: string;
  parent: string;
}
export interface Document {
  name: string;
  subtag: string;
  path: string;
}
export interface OracleTable {
  entry: number;
  value: string;
}
export interface DataTable {
  id: number;
  name: string;
  description: string;
  date: Date;
  document: string;
  tags: string[];
  subtags: string[];
  table: OracleTable[];
  image: string;
}
