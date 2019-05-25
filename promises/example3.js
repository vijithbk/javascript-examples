let cleanRoom = new Promise(function(resolve, reject) {
	resolve('Cleaned Room');
})

let cleanCycle = new Promise(function(resolve, reject) {
	resolve('Cleaned Cycle');
})

let goForMovie = new Promise(function(resolve, reject) {
	resolve('Go for movie');
})

Promise.all([cleanRoom, cleanCycle, goForMovie]).then(function() {
	console.log("Finished all");
})