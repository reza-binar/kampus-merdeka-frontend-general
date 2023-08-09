const fs = require("fs");
const { promisify } = require("util");

// Async
// fs.readFile("./data1.txt", (_, dataCallback) => {
//   console.log(dataCallback.toString());

//   fs.readFile("./data2.txt", (_, data2Callback) => {
//     console.log(data2Callback.toString());
//   });
// });

// console.log("aku duluan");

// Promise
const readFilePromise = promisify(fs.readFile);

const readFileAsyncAwait = async () => {
  const data1 = await readFilePromise("./data1.txt"); // 1
  console.log(data1.toString()); // 2

  const data2 = await readFilePromise("./data2.txt"); // 3
  console.log(data2.toString()); // 4
};
readFileAsyncAwait();
