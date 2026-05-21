var Telegram = require('node-telegram-bot-api');
var request = require("request");
var token = 'YOUR_TELEGRAM_BOT_TOKEN';

var opt = {
  polling: true
};

var bot = new Telegram(token, opt);

bot.on("message", function(msg) {
  var text = msg.text;

  if (text == '/start') {
    bot.sendMessage(msg.chat.id, "👋 Hi, I am a bot for downloading TikTok videos without watermark.");
    
    function delay(time) {
      return new Promise(resolve => setTimeout(resolve, time));
    }

    delay(500).then(() => bot.sendMessage(msg.chat.id, "✨ Please send the video link"));
  } else if (text.includes('tiktok.com')) {
    bot.sendMessage(msg.chat.id, "⏳Please wait...");

    var reqvideourl = "https://www.tikwm.com/api/?url=" + text + "&hd=1";
    request(reqvideourl, function(error, response, body) {
      var json = JSON.parse(body);

      if (json.data == undefined) {
        bot.sendMessage(msg.chat.id, "😔 Sorry, I can't download this video right now. Please try again later.");
      } else {
        function delay(time) {
          return new Promise(resolve => setTimeout(resolve, time));
        }

        delay(500).then(() => bot.sendVideo(msg.chat.id, json.data.hdplay));
      }
    });
  } 
  else {
    bot.sendMessage(msg.chat.id, "🧐 Please send a valid video link");
  }
});