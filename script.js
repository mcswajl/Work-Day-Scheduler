// list of variables
var taskText = "";
var taskTime = "";
var currentDate;
var currentTime;
var currentContainer;
var tempArray = [];
var storedTask;
var returnedTask;

// call function to display current date and time
$(document).ready(function () {
    currentDate = moment().format("dddd MMM Do YYYY, h:mm:ss a");
    $("#date-time").append(currentDate);
    currentTime = moment().format("H");
    

    // call function to store to local storage, run if/for/if
    function renderAppointments() {
        storedTask = JSON.parse(localStorage.getItem("appointments"));
        if (storedTask !== null) {
            for (i = 0; i < storedTask.length; i++) {
                returnedTask = storedTask[i];
                details = returnedTask.details;
                timeIndex = returnedTask.time;
                timeIndex = timeIndex.replace(":00", '');
                if (details !== null) {
                    $("#" + timeIndex).children('.description').val(details);
                    console.log(details);
                }
            }
        }
    }

    renderAppointments();

// for loop watching for i to be greater than 23 and stop the loop
    for (i = 0; i <= 23; i++) {
        CurrentContainer = i;
        if (currentTime == i) {
            $('#' + CurrentContainer).addClass("past");
            $('#' + CurrentContainer).children('.description').addClass("past");
        }
        else if (currentTime > i) {
            $('#' + CurrentContainer).addClass("present");
            $('#' + CurrentContainer).children( 'description').addClass("present");
        }
        else {
            $('#' + CurrentContainer).addClass("future");
            $('#' + CurrentContainer).children( 'description').addClass("future");
        }
    }
})


// save button click function 
$(document).on('click', '.saveBtn', function () {
    taskText = $(this).parent().children('.description').val();
    console.log();
    taskTime = $(this).parent().parent('.hour').text();
    appointment = {
        time: taskTime,
        details: taskText
    }
    tempArray = JSON.parse(localStorage.getItem("appointments"));
    if (tempArray === null) {
        localStorage.setItem("appointments", JSON.stringify([{ time: taskTime, details: taskText }]));
    }
    else {
        tempArray.push(appointment);
        localStorage.setItem("appointments", JSON.stringify(tempArray));

    }
    //$(this).parent('div').children('div').children('textarea').replaceWith($('<textarea>' + taskText.addClass("textarea") + '</textarea>'));
})