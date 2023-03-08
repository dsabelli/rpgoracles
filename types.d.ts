export interface navTable {
  name: string;
  pathway: string;
  subTables?: navTable[];
}
