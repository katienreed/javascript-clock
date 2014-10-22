$(document).ready( function() {
	var d = new Date();
	var tz = d.toString().split("EST")[1].split(" (")[0];

	setInterval(function () { seconds()}, 1000);
	function seconds() {
		var seconds = $("#seconds").text();
		if(seconds < 59){
			seconds++;
		} else {
			seconds = 0;
		} $("#seconds").text(seconds);
	}

	setInterval(function () { minutes()}, 60000);
	function minutes() {
		var minutes = $("#minutes").text();
		if(minutes < 59){
			minutes++;
		} else {
			minutes = 0;
		}$("#minutes").text(minutes);
	}

	setInterval(function () { hours()}, 6000000);
	function hours() {
		var hours = $("#hours").text();
		if(hours < 24){
			hours++;
		} else {
			hours = 0;
		}$("#hours").text(hours);
	}

});