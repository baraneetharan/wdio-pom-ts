// testdataxlsx.ts
import { Country, Player, Position, Team } from './player';
import Excel from 'exceljs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const filePath = path.resolve(__dirname, 'sportsdata.xlsx');

async function readExcelData() {
  console.log('&&&&&&&&& __dirname &&&&&&&&&'+__dirname)
  console.log('&&&&&&&&& filePath &&&&&&&&&'+filePath)

  const workbook = new Excel.Workbook();
  // const worksheet = content.worksheets[1]; 
  const worksheet = workbook.getWorksheet('PlayerData');

  if (!worksheet) {
    throw new Error('Worksheet not found');
  }

  const numberOfRows = worksheet?.rowCount
  console.log('********* numberOfRows ********'+numberOfRows)

  let data: Player[] = [];
  worksheet?.eachRow({ includeEmpty: false }, (row, rowNumber) => {
    const rowData: Player = {
      id: +row.getCell(1).value!,
      team: row.getCell(2).value as Team,
      country: row.getCell(3).value as Country,
      firstName: row.getCell(4).value as string,
      lastName: row.getCell(5).value as string,
      weight: +row.getCell(6).value!,
      height: +row.getCell(7).value!,
      dateOfBirth: row.getCell(8).value as string,
      hometown: row.getCell(9).value as string,
      province: row.getCell(10).value as string,
      position: row.getCell(11).value as Position,
      age: +row.getCell(12).value!,
      heightFt: +row.getCell(13).value!,
      htln: +row.getCell(14).value!,
      bmi: +row.getCell(15).value!
    };
    if (rowNumber > 1) { // Skip header row
      data.push(rowData);
    }
  });

  console.log(data);
}

readExcelData();
