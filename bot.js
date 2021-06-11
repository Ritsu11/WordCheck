// discord.js モジュールのインポート
const Discord = require("discord.js");
// Discord Clientのインスタンス作成
const client = new Discord.Client();
// トークンの用意
// const token = "ODUyNzE2Mjk4ODk4ODk4OTQ1.YMK38A.vms-e41NlzM339rayNcPc1eqxT4";

//処理待ち
client.on("ready", () => {
  console.log("ready...");
});
//Bot自身の発言を無視する
client.on("message", (message) => {
  if (message.author.bot) {
    return;
  }

  //関数を使った文字検出
  if (String(message).indexOf("かわいい") !== -1) {
    message.react("😆").catch(console.error);
  }

  if (String(message).indexOf("しね") !== -1) {
    message.react("😡").catch(console.error);
  }

  if (String(message).indexOf("うれしい") !== -1) {
    message.react("🤗").catch(console.error);
  }

  if (String(message).indexOf("かなしい") !== -1) {
    message.react("😖").catch(console.error);
  }

  //正規表現を使った文字検出
  if (message.content.match(/うわああ/)) {
    message.react("😡").catch(console.error);
  }

  if (message.content.match(/また/)) {
    message.react("🤗").catch(console.error);
  }

  //テキスト削除
  if (message.content.match(/discord.gg/)) {
    message.delete(100);
  }
});
client.login(token);
