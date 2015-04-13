var request = process.argv[2]

var http = require('http')
var bl = require('bl')

http.get(request, function (response) {
	response.pipe(bl(function (err, data) {
		if (err) {
			console.error("Error: " + err.message)
		}

		console.log(data.toString().length)
		console.log(data.toString())
	}))
})