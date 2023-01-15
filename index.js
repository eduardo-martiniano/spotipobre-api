const express = require("express");
const app = express();
const ytdl = require('ytdl-core');
const port = process.env.PORT || 3001;



app.get("/", (req, res) => {
    var now = new Date();
    now.toLocaleString("pt-br");
    res.json("online " + now);
  });
  
  
  app.get('/downloadmp3', async (req, res, next) => {
      try {
          var url = req.query.url;
          if(!ytdl.validateURL(url)) {
              return res.sendStatus(400);
          }
          let title = 'audio';
          await ytdl.getBasicInfo(url, {
              format: 'mp4'
          }, (err, info) => {
              if (err) throw err;
              title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
          });
          
          title = await (await ytdl.getInfo(url)).videoDetails.title
          res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);
          ytdl(url, {
              format: 'mp3',
              filter: 'audioonly',
              quality: 'highestaudio'
          }).pipe(res);
  
      } catch (err) {
          console.error(err);
      }
  });
  
  
  
  app.listen(port, () => console.log(`app listening on port ${port}!`));

  