// list of global variables, others are inside the functions
var taskText = "";
var taskTime = "";
var currentDate;
var currentTime;
var currentContainer;

// call function to display current date and time
$(document).ready(function () {
    currentDate = moment().format("dddd MMM Do YYYY, h:mm:ss a");
    $("#date-time").append(currentDate);
    currentTime = moment().format("H");

    //cal each row id
    $("#09").children(".description").val(localStorage.getItem("09:00"))
    $("#10").children(".description").val(localStorage.getItem("10:00"))
    $("#11").children(".description").val(localStorage.getItem("11:00"))
    $("#12").children(".description").val(localStorage.getItem("12:00"))
    $("#13").children(".description").val(localStorage.getItem("13:00"))
    $("#14").children(".description").val(localStorage.getItem("14:00"))
    $("#15").children(".description").val(localStorage.getItem("15:00"))
    $("#16").children(".description").val(localStorage.getItem("16:00"))
    $("#17").children(".description").val(localStorage.getItem("17:00"))
 

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
    taskTime = $(this).parent().children('.hour').text();
var appointment = {
        time: taskTime,
        details: taskText
    };
  // write to local storage  
    localStorage.setItem(taskTime, taskText);
    
})
