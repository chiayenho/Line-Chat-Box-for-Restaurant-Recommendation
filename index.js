var linebot = require('linebot');
var express = require('express');
const http = require('http');

//使用套件

var bot = linebot({
  channelId: '1552347114',
  channelSecret: 'b76d2078d71935667f27238d8da103c1',
  channelAccessToken: 'd51aMapLxFqCfYHahC30D8UOFhsQewF/dfFUHrColnMyJjAycDWbkGLNI4P7OZ1HT0GDaBh1Hsk/Zi4kXyty57Y45JzbdEL+IrAXjmfqLs6i77L7lDbRlCQW3aIF8x53yYZknb+xlrd1sBbRf3RGGwdB04t89/1O/w1cDnyilFU='  
});


bot.on('message', function(event) {
    console.log(event); //把收到訊息的 event 印出來看看
});


bot.on('message', function(event) {
  inputtype = event.message.type
  console.log(inputtype)
  if (inputtype = 'text') {
    var msg = event.message.text;
    var sendMsg = '哈哈哈';
    event.reply(msg+sendMsg).then(function(data) {
      // success 
      console.log(msg);
    }).catch(function(error) {
      // error 
      console.log('error');
    });
  }

  else if (inputtype = 'sticker'){
    /*var stk = {
      type: 'sticker',
      packageId: '1',
      stickerId: '2'
    }*/
    var sendMsg = '您真幽默XDD';
    event.reply(sendMsg).then(function(data){
      console.log('sticker succcess');
    }).catch(function(error){
      console.log('sticker error')
    })
  }

  else if(event.message.type = 'image'){
    event.reply({
      type: 'template',
      altText: 'this is a buttons template',
      template: {
        type: 'buttons',
        thumbnailImageUrl: 'https://example.com/bot/images/image.jpg',
        title: 'Menu',
        text: 'Please select',
        actions: [{
          type: 'postback',
          label: 'Buy',
          data: 'action=buy&itemid=123'
        }, {
          type: 'postback',
          label: 'Add to cart',
          data: 'action=add&itemid=123'
        }, {
          type: 'uri',
          label: 'View detail',
          uri: 'http://example.com/page/123'
        }]}})
  }
});


setTimeout(function(){
  var userId = ('U00cfed38baad82fbc08344097ff65ad9','U0924b640a03c435e9b9f52d7d6aecb3e');
  var sendMsg = '哈哈哈哈哈';
  bot.push(userId,sendMsg);
  console.log('send: '+sendMsg);
},5000);


  
  const app = express();
  const linebotParser = bot.parser();
  app.post('/', linebotParser);
  
/*var server = http.createServer(function(req, res) {
    
    var resHeader = {
        'Accept-Charset': 'utf-8',
        'Accept-Language': 'zh-TW',
        'Content-Type': 'text/html; charset=utf-8',
    }
    
    res.writeHead(200, resHeader)
    res.write('<h1>Hello</h1>', 'utf8');
    res.write('<p>這是由 node.js 建立的 WebServer</p>', 'utf8');
    res.end();
});
*/
    
// 將 Server 開啟 port 1234 執行起來
//server.listen(1234);
//console.log('Server running at http://127.0.0.1:1234');

  //因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {

    var port = server.address().port;
    console.log("App now running on port", port);
  });