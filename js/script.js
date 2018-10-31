// let
// 	when = [],
// 	setStream = time => when = [time.split(":")[0], time.split(":")[1]];
//
// setInterval(
// 	() => {
// 		let streamCountdown = countdown(null, new Date().setHours(when[0], when[1], 0));
// 		$("#stream-begins").html("Stream begins in <span id='stream-begins__countdown'>" + streamCountdown.toString() + "</span>")
// 	},
// 	500
// );

let stream = {
	_interval: undefined
};

stream.stop = () => {
	clearInterval(stream._interval);
};

stream.start = time => {

	stream.timeFormatted = [time.split(":")[0], time.split(":")[1]];

	stream.countdown = () => countdown(null, new Date().setHours(stream.timeFormatted[0], stream.timeFormatted[1], 0));

	stream._interval = setInterval(
		() => {

			if(stream.countdown().value > 0) {
				$("#stream-begins").html("Stream begins in <span id='stream-begins__countdown'>" + stream.countdown().toString() + "</span>");
			}

			else {
				$("#stream-begins").html("Stream begins in <span id='stream-begins__countdown'>0 seconds</span>");
				stream.stop();
				console.log("Countdown stopped, time has passed");
			}

		},
		500
	)

};