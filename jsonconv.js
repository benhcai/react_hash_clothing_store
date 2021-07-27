let fs = require("fs");

let data = require("./directory.data");
data = JSON.stringify(data);

fs.writeFileSync("./data.json", data);

console.log(data);
