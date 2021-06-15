"use strict";

// discord.js FileStream モジュールのインポート
const Discord = require("discord.js");
const fs = require("fs");
// Discord Clientのインスタンス作成
const client = new Discord.Client();
// トークンの用意
const token = "";

//テキストファイル読み込み
let textAnger = fs.readFileSync("./oko.txt", "utf8");
let textJoy = fs.readFileSync("./yorokobi.txt", "utf8");

//分割して配列にまとめ
let Angers = textAnger.toString().split("\n");
let Joys = textJoy.toString().split("\n");

//分割確認コンソール
console.log(Angers);
console.log(Joys);

//処理待ち
client.on("ready", () => {
  console.log("ready...");
});
//Bot自身の発言を無視する
client.on("message", (message) => {
  if (message.author.bot) {
    return;
  }

  //怒り検出
  for (let Anger of Angers) {
    if (message.content.match(Anger)) {
      message.react("😡").catch(console.error);
    }
  }

  //喜び検出
  for (let Joy of Joys) {
    if (message.content.match(Joy)) {
      message.react("😆").catch(console.error);
    }
  }
});
client.login(token);
