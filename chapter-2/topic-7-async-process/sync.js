const fs = require("fs");

const data1Txt = fs.readFileSync("./data1.txt").toString();
console.log(data1Txt);

const data2Txt = fs.readFileSync("./data2.txt").toString();
console.log(data2Txt);