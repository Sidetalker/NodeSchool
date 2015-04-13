var request = process.argv[2]

var http = require('http')

http.get(request, function (response) {
	response.setEncoding('utf8')

	.on('data', console.log)
	.on('error', console.error)
})

