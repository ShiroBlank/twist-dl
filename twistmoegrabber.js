const request = require('request');
const JsonFind = require('json-find');
var fs = require('fs');
var file = fs.createWriteStream("anime.json");

function cum() {
  const options = {
          url : "http://twist.moe/api/anime",
          headers : {
              "referer": "https://twist.moe/",
              "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36",
              "x-access-token": "0df14814b9e590a1f26d3071a4ed7974"
          }
      };


      request(options, function(err, res, body) {
          let json = JSON.parse(body);
          const doc = JsonFind(json);
          //console.log(doc.findValues('title'));
          console.log("animemes: " +json.length);
      }).pipe(file);

}

cum();
