let cleanRoom = new Promise(function(resolve, reject) {
	resolve('Cleaned Room');
})

let cleanCycle = new Promise(function(resolve, reject) {
	resolve('Cleaned Cycle');
})

let goForMovie = new Promise(function(resolve, reject) {
	resolve('Go for movie');
})

Promise.race([cleanRoom, cleanCycle, goForMovie]).then(function() {
	console.log("One of them got finished now");
})