export interface NavTable {
  name: string;
  pathway: string;
  subTables?: NavTable[];
}
export interface OracleTable {
  entry: number;
  value: string;
}
export interface DataTable {
  id: number;
  name: string;
  description: string;
  tags: string[];
  table: OracleTable;
  image: string;
}
