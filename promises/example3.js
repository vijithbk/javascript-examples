let cleanRoom = new Promise((resolve, reject) => {
	resolve('Cleaned Room');
})

let cleanCycle = new Promise((resolve, reject) => {
	resolve('Cleaned Cycle');
})

let goForMovie = new Promise((resolve, reject) => {
	resolve('Go for movie');
})

Promise.all([cleanRoom, cleanCycle, goForMovie]).then(() => {
	console.log("Finished all");
})