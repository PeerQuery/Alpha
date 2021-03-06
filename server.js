
const path = require('path')
var express = require('express');
var app = express();
var sm = require('sitemap');


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));


 
var sitemap = sm.createSitemap ({
  hostname: 'https://www.peerquery.com',
  cacheTime: 600000,        // 600 sec - cache purge period 
    urls: [
     { url: '/',  changefreq: 'daily', priority: 0.3 },
     { url: '/about/',  changefreq: 'daily', priority: 0.3 },
     { url: '/proposals/',  changefreq: 'daily', priority: 0.3 },
     { url: '/questions',  changefreq: 'daily', priority: 0.3 },
     { url: '/contests/',  changefreq: 'daily', priority: 0.3 },
     { url: '/quizzes/',  changefreq: 'daily', priority: 0.3 },
     { url: '/gigs/',  changefreq: 'daily', priority: 0.3 },
     { url: '/tags/',  changefreq: 'daily', priority: 0.3 }
    ]
});



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname + '/about.html'))
})

app.get('/questions', function (req, res) {
  res.sendFile(path.join(__dirname + '/questions.html'))
})

app.get('/proposals', function (req, res) {
  res.sendFile(path.join(__dirname + '/proposals.html'))
})

app.get('/contests', function (req, res) {
  res.sendFile(path.join(__dirname + '/contests.html'))
})

app.get('/quizzes', function (req, res) {
  res.sendFile(path.join(__dirname + '/quizzes.html'))
})

app.get('/gigs', function (req, res) {
  res.sendFile(path.join(__dirname + '/gigs.html'))
})

app.get('/user', function (req, res) {
  res.sendFile(path.join(__dirname + '/user.html'))
})

app.get('/tags', function (req, res) {
  res.sendFile(path.join(__dirname + '/tags.html'))
})

app.get('/tag/:tag', function (req, res) {
  res.sendFile(path.join(__dirname + '/tag.html'))
})
 
app.get('/@:username/feed', function (req, res) {
  res.sendFile(path.join(__dirname + '/feed.html'))
})

app.get('/@:username/community', function (req, res) {
  res.sendFile(path.join(__dirname + '/community.html'))
})

app.get('/@:username/wallet', function (req, res) {
  res.sendFile(path.join(__dirname + '/wallet.html'))
})

app.get('/publish', function (req, res) {
  res.sendFile(path.join(__dirname + '/publish.html'))
})

app.get('/me', function (req, res) {
  res.sendFile(path.join(__dirname + '/me.html'))
})

app.get('/@:username', function (req, res) {
  res.sendFile(path.join(__dirname + '/user.html'))
})

app.get('/@:username/:permLink', function (req, res) {
  res.sendFile(path.join(__dirname + '/post-view.html'))
})

app.get('/:category/@:username/:permLink', function (req, res) {
  res.sendFile(path.join(__dirname + '/post-view.html'))
})


app.get('/sitemap.xml', function(req, res) {
  sitemap.toXML( function (err, xml) {
      if (err) {
        return res.status(500).end();
      }
      res.header('Content-Type', 'application/xml');
      res.send( xml );
  });
});



app.use(function (req, res) {
  res.status(404).sendFile(path.join(__dirname + '/404.html'))
})

 
 var port = process.env.PORT || 80;
  app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});

