document.getElementById('heading').innerHTML = document
	.getElementById('heading')
	.innerHTML.toUpperCase();

document.querySelector('.completed').style.display = 'none';

function countdown() {
	var currentTime = new Date().getTime();
	var finalTime = new Date('Jan 1, 2021 00:00:00').getTime();

	var remTime = finalTime - currentTime;

	if (remTime < 0) {
		document.querySelector('.completed').style.display = 'block';
	}

	var sec = Math.floor(remTime / 1000);
	var min = Math.floor(sec / 60);
	var hour = Math.floor(min / 60);
	var day = Math.floor(hour / 24);

	hour = hour % 24;
	min = min % 60;
	sec = sec % 60;

	day = day < 10 ? '00' + day : day < 100 ? '0' + day : day;
	hour = hour < 10 ? '0' + hour : hour;
	min = min < 10 ? '0' + min : min;
	sec = sec < 10 ? '0' + sec : sec;

	document.querySelector('.day .timer-box').innerHTML = day;
	document.querySelector('.hour .timer-box').innerHTML = hour;
	document.querySelector('.minute .timer-box').innerHTML = min;
	document.querySelector('.second .timer-box').innerHTML = sec;

	setTimeout(countdown, 1000);
}

countdown();
