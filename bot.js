// discord.js モジュールのインポート
const Discord = require("discord.js");
// Discord Clientのインスタンス作成
const client = new Discord.Client();
// トークンの用意
const token = "ODQ2NTc2Njc2MTU4MTc3MzAw.YKxh-A.RSlTuGhanAUGd4ZjM4iSkvCNnC8";

//処理待ち
client.on("ready", () => {
  console.log("ready...");
});
//Bot自身の発言を無視する
client.on("message", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === "あ") {
    //テキストに対してテキストで対応
    // let channel = message.channel;
    // let author = message.author.username;
    // let reply_text = `😡`;

    // message
    //   .reply(reply_text)
    //   .then((message) => console.log(`Sent message: ${reply_text}`))
    //   .catch(console.error);
    // return;

    //テキストに対してリアクションで対応
    message.react("😇").catch(console.error);
  }

  if (message.content.match(/discord.gg/)) {
    message.delete(100);
  }
});
client.login(token);
