var interval;
var timer = 0;
var timerIsRunning = false;

function addActivity() {
    // Get the value of the input field for activity
    var activity = document.getElementById('activity-field').value;

    // Render the new activity
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.onclick = activityClick;
    button.appendChild(document.createTextNode(activity));
    li.appendChild(button)
    document.getElementById('activities').appendChild(li);
}

function activityClick() {
    if (!timerIsRunning) {
        timerIsRunning = true;

        interval = setInterval(function() {
            timer += .1;
            document.getElementById("timer-display").innerText = timer + " seconds";
        }, 100);
    } else {
        timerIsRunning = false;
        clearInterval(interval);
    }
}