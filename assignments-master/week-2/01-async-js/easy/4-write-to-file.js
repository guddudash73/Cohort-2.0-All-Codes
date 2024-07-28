let fs = require("fs");
let data = "this is from the code";

fs.writeFile("a.txt", data, "utf-8", function () {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
  });
});
