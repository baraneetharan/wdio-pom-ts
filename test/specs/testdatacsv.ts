import * as fs from "fs";
import { parse } from 'csv-parse/sync';

const csvPath = "input.csv";

type UserRow = {
  id: number;
  name: string;
};

const csvContent = fs.readFileSync(csvPath, "utf-8");
const rows: UserRow[] = parse(csvContent, {
  columns: true,
  skip_empty_lines: true,
});

console.log(rows);