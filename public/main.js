let time = 0.00;
let count = false;
let interval = null;
let pauseInterval = null;
let pauseCounter = 0;
let timerButton = document.getElementById('counter');

function formatTime(time) {
  let timeArr = time.toFixed(2).split('.')
  let seconds = +timeArr[0]
  let miliseconds = timeArr[1]
  if(seconds >=60){
    let sec = seconds % 60;
    let min = parseInt(seconds / 60);
    sec = sec < 10 ? `0${sec}` : `${sec}`
    min = min < 10 ? `0${min}` : `${min}`
    seconds = `${min}:${sec}`
    return `<span class='minutes' id="seconds">${seconds}</span><span id="miliseconds"> ${miliseconds}</span>`
  } else {
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `<span id="seconds">${seconds}</span><span id="miliseconds"> ${miliseconds}</span>`
  }
  
}

function start() {
  time += 0.01
  timerButton.innerHTML = formatTime(time)
}

function pause() {
  pauseCounter++
  if (pauseCounter % 2 === 0) {
    timerButton.innerHTML = formatTime(time)
  } else {
    timerButton.innerHTML = ""
  }
}

function pauseResume() {
  count = !count;
  if (count) {
    interval = setInterval(start, 10)
    timerButton.classList.add('active')
    pauseCounter = 0;
    window.clearInterval(pauseInterval)
  } else {
    window.clearInterval(interval)
    timerButton.classList.remove('active')
    pauseInterval = setInterval(pause, 500)
  }
}

