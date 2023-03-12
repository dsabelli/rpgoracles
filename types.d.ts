export interface Tag {
  name: string;
  path: string;
}
export interface Subtag {
  name: string;
  path: string;
  parent: string;
}
export interface Document {
  name: string;
  subtag: string[];
  document: string;
}
export interface NavPath {
  name: string;
  pathway: string;
  subPathways?: NavPath[];
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
  tag: string;
  subtag: string;
  table: OracleTable[];
  image: string;
}
