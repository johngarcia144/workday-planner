// date and time in header
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

// for loop, changing color to each row
  for(i = 9; i < 18; i++) {
    // variable for current hour
    var currentHour = parseInt(moment().format('HH')); 
    // refers to 
    var rowHour = $("#hour-" + i);
  
    if (currentHour === i) {
      $("#hour-" + i).addClass("present");
    }

    if (currentHour > i) {
      $("#hour-" + i).addClass("past");
    }

    if (currentHour < i) {
      $("#hour-" + i).addClass("future");
    }
  }