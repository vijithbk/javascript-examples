let cleanRoom = new Promise(function(resolve, reject) {
	resolve('Cleaned Room');
})

let cleanCycle = new Promise(function(resolve, reject) {
	resolve('Cleaned Cycle');
})

let goForMovie = new Promise(function(resolve, reject) {
	resolve('Go for movie');
})

cleanRoom.then(function(message) {
	console.log(message);
	return cleanCycle;
}).then(function(message) {
	console.log(message);
	return goForMovie;
}).then(function(message) {
	console.log("Finished");
});