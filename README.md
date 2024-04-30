# wdio-pom-ts
WebDriverIO pageobject model with test data usin json, csv and xlsx

# WebDriverIO Parameterize Tests

### why we need Parameterize Tests?

1. **Reusability and Maintainability**:
    *   By parameterizing tests, you can write a single test scenario that can be reused with different input values. This reduces code duplication and makes your test suite more maintainable.
    *   Imagine testing a login functionality. Instead of writing separate tests for each user, you can create a single test that accepts different usernames and passwords as parameters.
2. **Test Coverage**:
    *   Parameterization allows you to test a wide range of scenarios without writing separate tests for each case.
    *   For instance, if you’re testing a search feature, you can parameterize the search query and test various search terms, special characters, and edge cases.
3. **Data-Driven Testing**:
    *   Parameterized tests are excellent for data-driven testing. You can load test data from external sources like CSV files, databases, or APIs.
    *   For example, you can create a test that validates product prices by reading data from a spreadsheet.
4. **Dynamic Behavior**:
    *   Some tests require dynamic behavior based on input parameters. Parameterization allows you to adapt your test logic accordingly.
    *   Consider testing a calculator app. You can parameterize the input values (operands and operators) to verify different calculations.
5. **Localization and Internationalization**:
    *   When testing applications with multiple language support, parameterization helps validate functionality across various locales.
    *   You can parameterize test data (such as translated strings) to ensure proper localization.
6. **Boundary Testing**:
    *   Parameterized tests are useful for boundary testing. You can test edge cases, limits, and boundary values.
    *   For instance, testing a form validation where you check both valid and invalid input values.
7. **Efficient Test Execution**:
    *   Parameterization allows you to run the same test with different data sets efficiently.
    *   Instead of writing separate tests, you can iterate through a list of parameters within a single test.
8. **Scalability**:
    *   As your application grows, so does your test suite. Parameterization ensures scalability by handling diverse scenarios.
    *   Whether you’re testing a small feature or a complex workflow, parameterized tests adapt easily.

### Array vs Object vs JSON in Javascript

Array, Object and JSON is most widely used terms in Javascript. This posts explains in detail what is the difference between array, object and json. In simple words, arrays and objects are data structure to hold your data and JSON is the format to marshal(serialization) or unmarshal (deserialization) data.

# **Initialization of Arrays and Objects**

JavaScript

```javascript
// Array
var arr = []; // This is basic syntax for array in javascript.
typeof arr; // outputs object
Array.isArray(arr); // outputs true
arr instanceOf Array; // outputs true.// Objects
var obj = {}; // This represents objects in javascript.
typeof obj; // outputs object.
```

If you have worked on java or c# then, You must be surprised that how come array and objects both are typeof objects? Well, In javascript, everything is typeof objects or one of six primitive data types (Boolean, null, undefined, number, string, and symbol). Use `Array.isArray()` or `instanceOf` method to check whether object is array or not.

# **Explore data structure of Arrays and Objects**

Arrays are numbered indexes and objects are named indexes. Check out below examples to understand how arrays and objects supports different operations on data.

JavaScript

```javascript
//Array
// Arrays are numbered indexes which can hold values
var arr = ["one", "two", 3];// access array value using numbered index.
arr[0]; // Outputs one
// Push elements to end of array.
arr.push("four"); //arr will be ["one", "two", 3, "four"]// Pop elements from end of array.
arr.pop(); // arr will be ["one", "two", 3]// Get size of array.
arr.length; // will return 3 for arr.// Insert into array at specific index
arr[3] = "four"; // arr will be ["one", "two", 3, "four"]// Get index of element in the array
arr.indexOf("two"); // returns 1 as an index of "two" in the arr.
arr.indexOf("dummy"); // returns -1 as dummy is not in the arr.// Sort array
arr.sort(); // sorts array. arr will be [3, "four", "one", "two"]// Objects// Objects are key - value pair data structure which can hold values for given key
var obj = {firstname : "Hiral", lastname : "Patel"};// access object value using key.
obj.firstname; //returns hiral// add another key-value in object
obj.middlename = "nareshkumar"; // adds middlename:"nareshkumar" in object key-value pair list
obj["country"] = "india"; //add country:"india" in object key-value pair list.//remove element from object
delete obj.middlename; // deleted middlename key and its value from object key-value pair list.// Get size of object
Object.keys(obj).length; // returns 3// check key exists in object or not
obj.hasOwnProperty("firstname"); // returns true;
obj.hasOwnProperty("dummy"); // returns false;
```

## **JSON**

You can convert your arrays and objects to/from a JSON string. Check out below example.

JavaScript

```javascript
//Array
var arr = ["one", "two", "three", "four"];
//get JSON string from array.
var jsonStrofArray = JSON.stringify(arr); // returns json string of "["one","two","three","four"]"
// Recover array from JSON string
var arrFromJSONString = JSON.parse(jsonStrofArray); // Returns ["one", "two", "three", "four"]

//Objects
var obj = {firstname:"hiral", lastname: "patel"};
//get json string from object
var jsonStrofObj = JSON.stringify(obj); 
// returns json string of "{"firstname":"hiral","lastname":"patel"}"
// Recover object from JSON string
var objFromJSONString = JSON.parse(jsonStrofObj); 
// Returns json object with keys of firstname and lastname along with values.


```

  

### **Parameterizing tests** in **WebdriverIO**:

1. **Test-Level Parameterization**:
    *   You can **parameterize tests** directly at the test level using simple **for loops**. For example:

```dart
  const people = ['Alice', 'Bob'];
  
  describe('my tests', () => {
    for (const name of people) {
      it(`testing with ${name}`, async () => {
        // Your test logic here...
      });
    }
  });
```

*       *   This approach allows you to run the same test with different parameters.

  

**2\. Dynamic Functions**:

*       *   Another way is to extract tests into **dynamic functions**. For instance:

```javascript
  import { browser } from '@wdio/globals';
  
  function testComponent(componentName, options) {
    it(`should test my ${componentName}`, async () => {
      await browser.url(`/${componentName}`);
      await expect($('input')).toHaveValue(options.expectedValue);
    });
  }
  
  describe('page components', () => {
    testComponent('component-a', { expectedValue: 'some expected value' });
    testComponent('component-b', { expectedValue: 'some other expected value' });
  });
```

*       *   Here, you can customize the test behavior based on the component name and options.

  

**3\. Passing Environment Variables**:

*       *   Use environment variables to configure tests from the command line. For example, if your test file requires a username and password:

  

```lisp
  it(`example test`, async () => {
```

```typescript
    // ...await $('#username').setValue(process
```

```lisp
env.USERNAME);
```

```typescript
    await $('#password').setValue(process.env.PAS
```

```lisp
WORD);
  });
```

  

```typescript
Run this test with your secret username and 
asswo
```

*       *   d set in the command line:
        *   **Bash**: `USERNAME=me PASSWORD=secret npx wdio run wdio.conf.js`
        *   **PowerShell**: `$env:USERNAME=me $env:PASSWORD=secret npx wdio run wdio.conf.js`
        *   **Batch**: `set USERNAME=me set PASSWORD=secret npx wdio run wdio.conf.js`

  

**4\. Configuration File and Environment Variables**:

*       *   Your configuration file can also read environment variables passed through the command line. For instance:

  

```awk
  export const config = {
    // ...baseURL: process.env.STAGING === '1' ? 'http://staging.example.test/' : 'http://example.test/',
    // ...
  };
```

  

*       *   Run tests against a staging or production environment:
        *   **Bash**: `STAGING=1 npx wdio run wdio.conf.js`
        *   **PowerShell**: `$env:STAGING=1 npx wdio run wdio.conf.js`
        *   **Batch**: `set STAGING=1 npx wdio run wdio.conf.js`

  

**5\. env Files**:

*       *   To manage environment variables more easily, consider using **.env files**. WebdriverIO automatically loads .env files into your environment. Define your variables in a .env file:

```ini
  # .env file
  STAGING=0
  USERNAME=me
  PASSWORD=secret
```

*       *   Run tests as usual, and your environment variables will be picked up:
        *   `npx wdio run wdio.conf.js`

  

**6\. CSV File-Based Tests**:

*       *   WebdriverIO runs in Node.js, so you can read files from the file system. Create tests via a CSV file:

```plain
name,country,subcountry,geonameid
les Escaldes,Andorra,Escaldes-Engordany,3040051
Andorra la Vella,Andorra,Andorra la Vella,3041563
Umm al Qaywayn,United Arab Emirates,Umm al Qaywayn,290594
Ras al-Khaimah,United Arab Emirates,Raʼs al Khaymah,291074
Khawr Fakkān,United Arab Emirates,Ash Shāriqah,291696
```

*       *   Generate tests using a CSV library, such as `csv-parse`. Read the CSV file and dynamically create tests based on its content.

```plain
import * as fs from "fs";
import { parse } from 'csv-parse/sync';


```

```typescript
const csvPath = "input.csv
```

```plain
;

type RowData = {
    id: number;
```

```plain
eonameid: string;
};


```

```typescript
const 
vContent = fs.re
dFileSync(csvPa
```

```plain
h, "utf-8");
```

```typescript
const rec
rd
```

```plain
 RowData[] = parse(csvContent, {
    columns: true,
```

```plain
  skip_empty_lines: true
  });
```

```typescript
  const country
ames = records.map
record => record.geonameid
```

```plain
;


```

```typescript
co
```

```plain
sole.log(countryNames)
```

  

  

**7\. CSV File-Based Tests**:

```typescript
WebdriverIO r
s in Node.js, so you can 
```

*   ead files from the file system. Create tests via a xlsx file:

  

**sportsdata.xlsx**

  

![](https://t9002023706.p.clickup-attachments.com/t9002023706/dd6e78be-590e-4869-a69f-eb0f73335b1d/image.png)

  

**player.ts**

```typescript
// player.ts
export type Team = 'M' | 'W';
export type Country = 'Canada' | 'USA';
export type Position = 'Goalie' | 'Defence' | 'Forward';

export type Player = {
  id: number;
  team: Team;
  country: Country;
  firstName: string;
  lastName: string;
  weight: number;
  height: number;
  dateOfBirth: string; // (YYY-MM-DD)
  hometown: string;
  province: string;
  position: Position;
  age: number;
  heightFt: number;
  htln: number;
  bmi: number;
};


```

  

**testdataxlsx.ts**

```typescript
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


```

  

**Run test**

```stata
npx wdio run ./wdio.conf.ts --spec .\test\specs\testdataxlsx.ts
```

  

**8\. CSV File-Based Tests**:

*   WebdriverIO runs in Node.js, so you can read files from the file system. Create tests via a json file:

**login.json**

```plain
{
    "valid": {
       "username": "standard_user",
       "password": "secret_sauce"
    },
    "invalid": {
       "username": "randomuser",
       "password": "secret_sauce"
    }
 }
```

  

**testdatajson.ts**

  

```typescript
import jsondata from "../data/login.json" assert{type:'json'};
import { browser } from '@wdio/globals'

// test\data\login.json

describe("Sauce demo app login", () => {

    it("valid login", async () => {
        await browser.url('https://the-internet.herokuapp.com/login')
        await $('#username').setValue(jsondata.valid.username)

    })

})
console.log(jsondata.valid.username)


```
