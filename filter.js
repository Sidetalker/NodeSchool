fs = require('fs')
path = require('path')

module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		if (err) {
			return callback(err)
		}

		ext = "." + ext

		filtered = []

		for (var i = 0; i < list.length; i++) {
			if (path.extname(list[i]) == ext) {
				filtered.push(list[i])
			}
		}

		return callback(null, filtered)
	})
}