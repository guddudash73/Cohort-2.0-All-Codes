let fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  data = data.replace(/\s+/g, " ");
  fs.writeFile("a.txt", data, "utf-8", function (err) {
    console.log(fs.readFileSync("a.txt", "utf-8"));
  });
});
