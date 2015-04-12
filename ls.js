var directory = process.argv[2]
var extension = process.argv[3]

var filter = require('./filter')

var finished = function(err, data) {
	if (err) {
		console.log("Error" + err)
	}

	for (var i = 0; i < data.length; i++) {
		console.log(data[i])
	}
}

filter(directory, extension, finished)

