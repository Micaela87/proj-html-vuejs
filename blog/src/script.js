let csvToJson = require('convert-csv-to-json');

let fileInputName = '../../../../simulazione database blog.csv'; 
let fileOutputName = '../../../../myOutputFile-1.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);