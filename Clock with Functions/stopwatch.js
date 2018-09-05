let timer;
let seconds;
let minutes;
let hours;
let currentSeconds;
let currentMinutes;
let currentHours;                

function startTimer (startingSeconds, startingMinutes, startingHours) {

    seconds = startingSeconds;
    minutes = startingMinutes;
    hours = startingHours;

    timer = setInterval(function () {

        seconds++;

        if (seconds === 60) {

            minutes++;

            if (minutes < 10) {

                minutes = '0' + minutes;

            }

            seconds = 0;

        }

        if (seconds < 10) {

            seconds = '0' + seconds;

        }

        document.getElementById("timerLabel").innerHTML = hours + ":" + minutes + ":" + seconds;

    }, 100);

}

function pauseTimer () {

    if (document.getElementById("toggleButton").innerHTML === "PAUSE") {

        document.getElementById("toggleButton").innerHTML = "RESUME";

        currentSeconds = seconds;
        currentMinutes = minutes;
        currentHours = hours;

        clearInterval(timer);

    } else {

        document.getElementById("toggleButton").innerHTML = "PAUSE";

        startTimer(currentSeconds, currentMinutes, currentHours);

    }

    // if (document.getElementById("toggleButton").innerHTML === "RESUME TIMER") {

    //     document.getElementById("toggleButton").innerHTML = "PAUSE TIMER";

    //     // startTimer(currentSeconds);

    // }

}