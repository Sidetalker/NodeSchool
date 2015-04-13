var http = require('http');
	bl = require('bl')

var argv = process.argv.splice(2),
    truecount = argv.length,
    pages = [];
 
function printUrls() {
	if (--truecount > 0)
		return;
	for (i = 0; i < pages.length; i++) {
		console.log(pages[i].data);
	}
}
 
function HTMLPage(url) {
	this.data = "test"

	http.get(url, function (response) {
		response.pipe(bl(function (err, data) {
			if (err) {
				console.error("Error: " + err.message)
			}
			console.log(data.toString())
			this.data = data.toString()

			printUrls()
		}))
	})
}
 
for (var i = 0; i < argv.length; i++)
	pages.push(new HTMLPage(argv[i]));



// var requests = [process.argv[2], process.argv[3], process.argv[4]]

// var http = require('http')
// var bl = require('bl')
// var async = require('async')

// var answers = []

// var finished = function() {
// 	console.log(requests[0])
// 	console.log(requests[1])
// 	console.log(requests[2])
// }

// async.parallel([
// 	http.get(requests[0], function(response) {
// 		response.pipe(bl(function (err, data) {
// 			answered.push(data.toString())
// 		}))
// 	}),
// 	http.get(requests[1], function(response) {
// 		response.pipe(bl(function (err, data) {
// 			answered.push(data.toString())
// 		}))
// 	}),
// 	http.get(requests[2], function(response) {
// 		response.pipe(bl(function (err, data) {
// 			answered.push(data.toString())
// 		}))
// 	})
// ], finished);

// var asyncblock = require('asyncblock');
 
// asyncblock(function(flow) {
	// for (var i = 0; i < requests.length; i++) {
	// 	http.get(requests[i], flow.set('request' + i))
	// }

// 	console.log(flow.get('request1'));

	

    //Start two parallel file reads
    // fs.readFile(path1, 'utf8', flow.set('contents1'));
    // fs.readFile(path2, 'utf8', flow.set('contents2'));

    // //Print the concatenation of the results when both reads are finished
    // console.log(flow.get('contents1') + flow.get('contents2'));

    // //Wait for a large number of tasks
    // for(var i = 0; i < 100; i++){
    //     //Add each task in parallel with i as the key
    //     fs.readFile(paths[i], 'utf8', flow.add(i));                                    
    // }

    // //Wait for all the tasks to finish. Results is an object of the form {key1: value1, key2: value2, ...}
    // var results = flow.wait();

//     // //One-liner syntax for waiting on a single task
//     // var contents = flow.sync( fs.readFile(path, 'utf8', flow.callback()) );

//     //See overview & API docs for more extensive description of techniques
// });

// var completed = 0
// var results = [null, null, null]


