let promiseToCleanRoom = new Promise(function(resolve, reject) {
	let roomCleaned = true;
	
	if(roomCleaned) {
		resolve('Cleaned');
	} else {
		reject('Not cleaned');
	}
});

promiseToCleanRoom.then(function(message) {
	console.log("Room is " + message)
}).catch(function(message) {
	console.log("Room is " + message)
})