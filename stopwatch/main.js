"use strict";
var startCounterDate, timerId, timezoneOffset, counterOffset = 0;
var timezoneOffset = new Date().getTimezoneOffset() * 60000;

function startTimer(){
	if (timerId === undefined){
		startCounterDate = new Date();
		startCounterDate = startCounterDate - counterOffset;
		timerId = setInterval(setTimerValue, 10);
	}
}

function stopTimer(){
	if (timerId !== undefined){
		counterOffset = (new Date() - startCounterDate);
		clearInterval(timerId);
		timerId = undefined;
	}
}

function resetTimer(){
	startCounterDate = new Date();
	counterOffset = 0;
	setTimerValue();
}

function setTimerValue(){
	var currentTime = startCounterDate ? new Date() - startCounterDate : new Date(0);
	currentTime = new Date(currentTime - 0 + timezoneOffset);

	document.getElementById('stopwatch').innerHTML = ''
		+ ('00' + currentTime.getHours()).slice(-2) + ':'
		+ ('00' + currentTime.getMinutes()).slice(-2) + ':'
		+ ('00' + currentTime.getSeconds()).slice(-2) + '.'
		+ Math.trunc(currentTime.getMilliseconds() / 100);
}

setTimerValue();
buttonStart.onclick = startTimer;
buttonStop.onclick = stopTimer;
buttonReset.onclick = resetTimer;