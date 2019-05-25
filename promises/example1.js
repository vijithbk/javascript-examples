let promiseToCleanRoom = new Promise((resolve, reject) => {
	let roomCleaned = true;
	
	if(roomCleaned) {
		resolve('Cleaned');
	} else {
		reject('Not cleaned');
	}
});

promiseToCleanRoom.then((message) => {
	console.log("Room is " + message)
}).catch((message) => {
	console.log("Room is " + message)
})