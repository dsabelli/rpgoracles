export interface main_tags {
  id: number;
  tag_name: string;
  tag_path: string;
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

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      doc_types: {
        Row: {
          doc_name: string;
          doc_path: string;
          id: number;
          subtag_id: number | null;
          tag_id: number | null;
        };
        Insert: {
          doc_name: string;
          doc_path: string;
          id?: number;
          subtag_id?: number | null;
          tag_id?: number | null;
        };
        Update: {
          doc_name?: string;
          doc_path?: string;
          id?: number;
          subtag_id?: number | null;
          tag_id?: number | null;
        };
      };
      main_tags: {
        Row: {
          id: number;
          tag_name: string;
          tag_path: string;
        };
        Insert: {
          id?: number;
          tag_name: string;
          tag_path: string;
        };
        Update: {
          id?: number;
          tag_name?: string;
          tag_path?: string;
        };
      };
      meta_tables: {
        Row: {
          doc_id: number;
          id: number;
          meta_date: string;
          meta_desc: string;
          meta_image: string;
          meta_name: string;
          subtag_id: number | null;
          tag_id: number;
          user_id: number | null;
        };
        Insert: {
          doc_id: number;
          id?: number;
          meta_date?: string;
          meta_desc: string;
          meta_image: string;
          meta_name: string;
          subtag_id?: number | null;
          tag_id: number;
          user_id?: number | null;
        };
        Update: {
          doc_id?: number;
          id?: number;
          meta_date?: string;
          meta_desc?: string;
          meta_image?: string;
          meta_name?: string;
          subtag_id?: number | null;
          tag_id?: number;
          user_id?: number | null;
        };
      };
      sub_tags: {
        Row: {
          id: number;
          tag_id: number;
          tag_name: string;
          tag_path: string;
        };
        Insert: {
          id?: number;
          tag_id: number;
          tag_name: string;
          tag_path: string;
        };
        Update: {
          id?: number;
          tag_id?: number;
          tag_name?: string;
          tag_path?: string;
        };
      };
      table_entry: {
        Row: {
          entry_value: string;
          id: number;
          table_id: number | null;
        };
        Insert: {
          entry_value: string;
          id?: number;
          table_id?: number | null;
        };
        Update: {
          entry_value?: string;
          id?: number;
          table_id?: number | null;
        };
      };
      users: {
        Row: {
          created_at: string | null;
          email: string;
          fav_table: number | null;
          id: number;
          password: string;
          username: string;
        };
        Insert: {
          created_at?: string | null;
          email: string;
          fav_table?: number | null;
          id?: number;
          password: string;
          username: string;
        };
        Update: {
          created_at?: string | null;
          email?: string;
          fav_table?: number | null;
          id?: number;
          password?: string;
          username?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
