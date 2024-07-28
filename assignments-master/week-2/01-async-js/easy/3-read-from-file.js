const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});

for (let i = 0; i <= 1000000000; i++) {}

console.log("heavy task is complete and the stack is now free");

for (let i = 0; i <= 1000000000; i++) {}

console.log("heavy task is complete and the stack is now free 2");
