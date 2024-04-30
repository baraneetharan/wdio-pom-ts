import * as fs from "fs";
import { parse } from 'csv-parse/sync';

const csvPath = "input.csv";

type RowData = {
    id: number;
    geonameid: string;
};

const csvContent = fs.readFileSync(csvPath, "utf-8");
const records: RowData[] = parse(csvContent, {
    columns: true,
    skip_empty_lines: true
  });
  const countryNames = records.map(record => record.geonameid);

console.log(countryNames)