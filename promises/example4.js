let cleanRoom = new Promise((resolve, reject) => {
	resolve('Cleaned Room');
})

let cleanCycle = new Promise((resolve, reject) => {
	resolve('Cleaned Cycle');
})

let goForMovie = new Promise((resolve, reject) => {
	resolve('Go for movie');
})

Promise.race([cleanRoom, cleanCycle, goForMovie]).then(() => {
	console.log("One of them got finished now");
})