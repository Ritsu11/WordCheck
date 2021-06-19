"use strict";

// discord.js FileStream モジュールのインポート
const Discord = require("discord.js");
const fs = require("fs");
// Discord Clientのインスタンス作成
const client = new Discord.Client();
// トークンの用意
const token = "";

//テキストファイル読み込み
let textAnger = fs.readFileSync("./emotions/oko.txt", "utf8");
let textJoy = fs.readFileSync("./emotions/yorokobi.txt", "utf8");
let textLove = fs.readFileSync("./emotions/ai.txt", "utf8");
let textBad = fs.readFileSync("./emotions/Bad.txt", "utf8");

//分割して配列にまとめ
let Angers = textAnger.toString().split("\n");
let Joys = textJoy.toString().split("\n");
let Loves = textLove.toString().split("\n");
let Bads = textBad.toString().split("\n");

//分割確認コンソール(今後削除予定)
console.log(Angers);
console.log(Joys);
console.log(Loves);
console.log(Bads);

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

  //愛情検出
  for (let Love of Loves) {
    if (message.content.match(Love)) {
      message.react("😍").catch(console.error);
    }
  }

  //不適切検出
  for (let Bad of Bads) {
    if (message.content.match(Bad)) {
      let reply_text = `不適切な言葉が含まれています\n言葉遣いに気を付けましょう`;

      //メッセージで内容を指摘
      message
        .reply(reply_text)
        .then(() => console.log(`Sent message: ${reply_text}`))
        .catch(console.error);
      return;
    }
  }
});
client.login(token);
