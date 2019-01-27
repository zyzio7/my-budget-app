export interface Bill {
  date: Date;
  entries: BillEntry[];
}

export interface BillEntry {
  name: string;
  value: number;
  rawLine?: string;
}

const val = {
  name: 'a',
  value: 10
}
