var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require("path")

http.createServer(function(req, res) {

  var pathObj = url.parse(req.url, true)


  if (pathObj.pathname == "/loadMore") {
    var page = pathObj.query.page;
    var length = 3
    var data = [{
      link: "https://en.wikipedia.org/wiki/Kyoto",
      photo: "https://images.unsplash.com/photo-1503640538573-148065ba4904?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=07c73b2d07218491dacf8511f3ee79e3&auto=format&fit=crop&w=1050&q=80",
      region: "Kyoto",
      description: "Kyoto is a region located in the central part of the island of Honshu, Japan. It has a population close to 1.5 million."
    }, {
      link: "https://en.wikipedia.org/wiki/Dubai",
      photo: "https://images.unsplash.com/photo-1465414951857-102134ffaa57?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90e9feaf6e61c61f64f444ac52b606ed&auto=format&fit=crop&w=1053&q=80",
      region: "Dubai",
      description: "Dubai is the largest and most populous city in the United Arab Emirates. It is located on the southeast coast of the Persian Gulf and is the capital of the Emirate of Dubai, one of the seven emirates that make up the country."
    }, {
      link: "https://en.wikipedia.org/wiki/Hong_Kong",
      photo: "https://images.unsplash.com/photo-1477520353136-d75b998f342f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=77354021928dbd71be5fe33f57721e0e&auto=format&fit=crop&w=1950&q=80",
      region: "Hong Kong",
      description: "Hong Kong, officially the Hong Kong Special Administrative Region of the People's Republic of China, is an autonomous territory on the eastern side of the Pearl River estuary in East Asia. "
    }, {
      link: "https://en.wikipedia.org/wiki/Bangkok",
      photo: "https://images.unsplash.com/photo-1503933166348-a1a86c17b3a0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=625fe6fd55bfcc756490582ae368b210&auto=format&fit=crop&w=1050&q=80",
      region: "Bangkok",
      description: "Bangkok is the capital and most populous city of the Kingdom of Thailand. It is known in Thai as Krung Thep Maha Nakhon or simply Krung Thep. "
    }, {
      link: "https://en.wikipedia.org/wiki/Singapore",
      photo: "https://images.unsplash.com/photo-1485774043635-d42ceede5758?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=74a601135b20a2da7e40325945effa5b&auto=format&fit=crop&w=1050&q=80",
      region: "Singapore",
      description: "Singapore, officially the Republic of Singapore, is a sovereign city-state and island country in Southeast Asia. It lies one degree north of the equator, at the southern tip of the Malay Peninsula, with Indonesia's Riau Islands to the south and Peninsular Malaysia to the north."
    }, {
      link: "https://en.wikipedia.org/wiki/Bali",
      photo: "https://images.unsplash.com/photo-1513092907274-a337201e3210?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00dfe0ffeeee4672bbf2fab1eab2a6b9&auto=format&fit=crop&w=1050&q=80",
      region: "Bali",
      description: "Bali is an island and province of Indonesia. The province includes the island of Bali and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan and Nusa Ceningan."
    }, {
      link: "https://en.wikipedia.org/wiki/Maldives",
      photo: "https://images.unsplash.com/photo-1519114056088-b877fe073a5e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=148b001f50f5029d6193578567d18eca&auto=format&fit=crop&w=1190&q=80",
      region: "Maldives",
      description: "The Maldives, officially the Republic of Maldives, is a South Asian island country, located in the Indian Ocean, situated in the Arabian Sea. "
    }, {
      link: "https://en.wikipedia.org/wiki/Tibet",
      photo: "https://images.unsplash.com/photo-1505585310466-e79c7e18a05b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2f93a30f3dde33e8e7fde0d5f6ac48b6&auto=format&fit=crop&w=1075&q=80",
      region: "Tibet",
      description: "Tibet is a historical region covering much of the Tibetan Plateau in Central Asia. "
    }, {
      link: "https://en.wikipedia.org/wiki/Hokkaido",
      photo: "https://images.unsplash.com/photo-1514162646479-788afb83fdb9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=490160b93c33f2879017391daee2634b&auto=format&fit=crop&w=1189&q=80",
      region: "Hokkaido",
      description: "Hokkaido, formerly known as Ezo, Yezo, Yeso, or Yesso, is the second largest island of Japan, and the largest and northernmost prefecture. "
    }, {
      link: "https://en.wikipedia.org/wiki/Iceland",
      photo: "https://images.unsplash.com/photo-1439725434120-c1b50e0cc329?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5642edf6a871b440a417c76bf48e7947&auto=format&fit=crop&w=1050&q=80",
      region: "Iceland",
      description: "Iceland is a Nordic island country in the North Atlantic, with a population of 348,580 and an area of 103,000 km2, making it the most sparsely populated country in Europe."
    }, {
      link: "https://en.wikipedia.org/wiki/Bergen",
      photo: "https://images.unsplash.com/photo-1510823088177-41fc4b0a6e73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7adb4ee034e18087b536ec30f1bfe442&auto=format&fit=crop&w=1051&q=80",
      region: "Bergen",
      description: "Bergen, historically Bjørgvin, is a city and municipality in Hordaland on the west coast of Norway. At the end of the first quarter of 2016, the municipality's population was 278,121, and the Bergen metropolitan region has about 420,000 inhabitants. "
    }, {
      link: "https://en.wikipedia.org/wiki/Zurich",
      photo: "https://images.unsplash.com/photo-1520631023082-a5fe1cf21c5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=acca4c52c277fe1ffd6c636acdd9eb0c&auto=format&fit=crop&w=1050&q=80",
      region: "Zurich",
      description: "Zürich or Zurich is the largest city in Switzerland and the capital of the canton of Zürich. It is located in north-central Switzerland at the northwestern tip of Lake Zürich. "
    }, {
      link: "https://en.wikipedia.org/wiki/Istanbul",
      photo: "https://images.unsplash.com/photo-1491252476179-5f2566566ab8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a07605049d70a7edf3ea7a052d5db8d&auto=format&fit=crop&w=1189&q=80",
      region: "Istanbul",
      description: "Istanbul, historically known as Constantinople and Byzantium, is the most populous city in what is modern-day Turkey and the country's economic, cultural, and historic center. "
    }, {
      link: "https://en.wikipedia.org/wiki/Paris",
      photo: "https://images.unsplash.com/photo-1438955185657-797f29aeaea8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=736daac70975c507e67e7c8bf5589c08&auto=format&fit=crop&w=1050&q=80",
      region: "Paris",
      description: "Paris is the capital and most populous city in France, with an administrative-limits area of 105 square kilometres and an official population of 2,206,488."
    }, {
      link: "https://en.wikipedia.org/wiki/Madeira",
      photo: "https://images.unsplash.com/photo-1517162089003-1c569ea81187?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee042881c1e0125ab8c3278d83d953f3&auto=format&fit=crop&w=1051&q=80",
      region: "Madeira",
      description: "Madeira is a Portuguese archipelago situated in the north Atlantic Ocean, southwest of Portugal. Its total population was estimated in 2011 at 267,785."
    }]
    var start = page * length
    var end = start + length
    var block = data.slice(start, end)

    res.end(JSON.stringify(block));
  } else {
    fs.readFile(path.join(__dirname, pathObj.pathname), function(err, data) {
      if (err) {
        res.statusCode = 404
        res.end('Not found')
      } else {
        res.end(data)
      }
    })
  }
}).listen(8080);
