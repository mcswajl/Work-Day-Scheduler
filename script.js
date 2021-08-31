// list of variables
var appointText = "";
var appointTime = "";
var currentDate;
var currentTime;
var currentContainer;
var tempArray = [];
var storedAppointments;
var returnedAppointments;

// call function to display current date and time
$(document).ready("load", function () {
    currentDate = moment().format("dddd MMM Do YYYY, h:mm:ss a");
    $("#date-time").append(currentDate);
    currentTime = moment().format("H");

    // call function to store to local storage, run if/for/if
    function renderAppointments() {
        storedAppointments = JSON.parse(localStorage.getItem("appointments"));
        if (storedAppointments !== null) {
            for (i = 0; i < storedAppointments.length; i++) {
                returnedAppointments = storedAppointments[i];
                details = returnedAppointments.details;
                timeIndex = returnedAppointments.time;
                timeIndex = timeIndex.replace(":00", '');
                if (details !== null) {
                    $("#" + timeIndex).children('div').children('div').children('textarea').val(details);
                }
            }
        }
    }

    renderAppointments();

// for loop watching for i to be greater than 23 and stop the loop
    for (i = 0; i <= 23; i++) {
        CurrentContainer = i;
        if (currentTime == i) {
            $('#' + CurrentContainer).addClass("present");
            $('#' + CurrentContainer).children('div').children('div').children("textarea").addClass("present");
        }
        else if (currentTime > i) {
            $('#' + CurrentContainer).addClass("past");
            $('#' + CurrentContainer).children('div').children('div').children("textarea").addClass("past");
        }
        else {
            $('#' + CurrentContainer).addClass("future");
            $('#' + CurrentContainer).children('div').children('div').children("textarea").addClass("future");
        }
    }
})


// save button click function 
$(document).on('click', '.saveBtn', function () {
    appointText = $(this).parent('div').children('div').children('textarea').val();
    appointTime = $(this).parent('div').parent().attr("id");
    appointment = {
        time: appointTime,
        details: appointText
    }
    tempArray = JSON.parse(localStorage.getItem("appointments"));
    if (tempArray === null) {
        localStorage.setItem('appointments', JSON.stringify([{ time: appointTime, details: appointText }]));
    }
    else {
        tempArray.push(appointment);
        localStorage.setItem("appointments", JSON.stringify(tempArray));

    }
    $(this).parent('div').children('div').children('textarea').replaceWith($('<textarea>' + appointText.addClass("textarea") + '</textarea>'));
})