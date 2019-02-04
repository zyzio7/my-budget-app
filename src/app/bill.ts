import {Category} from "./category.enum";

export interface Bill {
  date: Date;
  entries: BillEntry[];
}

export interface BillEntry {
  name: string;
  value: number;
  category: Category
  rawLine?: string;
}

