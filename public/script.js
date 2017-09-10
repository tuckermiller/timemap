// Counter for timers, to give each one a unique identifier
var timerIdCounter = 0;

const TIMER_STATES = Object.freeze({
    STOPPED: Symbol("STOPPED"),
    RUNNING: Symbol("RUNNING")
});

class Activity {
    constructor(name, timerId) {
        this.name = name;
        this.timerId = 'timer' + timerId;
        this.timer = 0;
        this.timerState = TIMER_STATES.STOPPED;
    }

    onClick() {
        var self = this;
        if (self.timerState === TIMER_STATES.STOPPED) {
            self.timerState = TIMER_STATES.RUNNING;

            self.interval = setInterval(function() {
                self.timer += .1;
                document.getElementById(self.timerId).innerText = parseFloat(self.timer).toFixed(1) + " seconds";
            }, 100);
        } else {
            self.timerState = TIMER_STATES.STOPPED;
            clearInterval(self.interval);
        }
    }
}

function addActivity() {
    // Get the value of the input field for activity
    var activityName = document.getElementById('activity-field').value;

    // Create new activity
    window[activityName] = new Activity(activityName, timerIdCounter++);

    // Create activity button
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.addEventListener("click", function() { window[activityName].onClick(); });
    button.appendChild(document.createTextNode(window[activityName].name));

    // Create timer
    var span = document.createElement("span");
    span.id = window[activityName].timerId;
    span.innerText = " ";

    // Render li
    li.appendChild(button);
    li.appendChild(span);
    document.getElementById('activities').appendChild(li);
}