"use strict";

// discord.js モジュールのインポート
const Discord = require("discord.js");
const fs = require("fs");
// Discord Clientのインスタンス作成
const client = new Discord.Client();
// トークンの用意
const token = "";

let text = fs.readFileSync("./oko.txt", "utf8");
let lines = text.toString().split("\n");
console.log(lines);

//処理待ち
client.on("ready", () => {
  console.log("ready...");
});
//Bot自身の発言を無視する
client.on("message", (message) => {
  if (message.author.bot) {
    return;
  }

  for (let line of lines) {
    if (String(message).indexOf(line) !== -1) {
      message.react("😡").catch(console.error);
      console.log(line);
    }
  }
  //関数を使った文字検出

  //正規表現を使った文字検出
  if (message.content.match(/うわああ/)) {
    message.react("😡").catch(console.error);
  }
});
client.login(token);
