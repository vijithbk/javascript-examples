let cleanRoom = new Promise((resolve, reject) => {
	resolve('Cleaned Room');
})

let cleanCycle = new Promise((resolve, reject) => {
	resolve('Cleaned Cycle');
})

let goForMovie = new Promise((resolve, reject) => {
	resolve('Go for movie');
})

cleanRoom.then((message) => {
	console.log(message);
	return cleanCycle;
}).then((message) => {
	console.log(message);
	return goForMovie;
}).then((message) => {
	console.log("Finished");
});