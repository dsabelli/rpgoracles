export interface NavTable {
  name: string;
  pathway: string;
  subTables?: NavTable[];
}
export interface DataTable {
  id: number;
  value: string;
}
