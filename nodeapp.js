var http = require("http")

http.createServer(function (req, rev) {
  rev.write("Hello world!")
  rev.end()
}).listen(5500)
