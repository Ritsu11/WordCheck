"use strict";

const fs = require("fs");

let text = fs.readFileSync("./oko.txt", "utf8");
let lines = text.toString().split("¥n");
for (let line of lines) {
  console.log(line);
}
