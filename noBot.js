if (String(message).indexOf("あ") !== -1) {
  //テキストに対してテキストで対応;
  let channel = message.channel;
  let author = message.author.username;
  let reply_text = `😡`;

  message
    .reply(reply_text)
    .then((message) => console.log(`Sent message: ${reply_text}`))
    .catch(console.error);
  return;
}
