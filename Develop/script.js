// date and time in header
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

// for loop, changing color to each row
  for(i = 0; i < 17, i++) {
    // variable for current hour
    var currentHour = moment().format('HH'); 
    var rowHour = $("#hour-i");

    if (currentHour === rowHour) {
      $("#hour-"i).addClass("present");
    }

    if (currentHour > rowHour) {
      $("#hour-"i).addClass("past");
    }

    if (currentHour < rowHour) {
      $("#hour-"i).addClass("future");
    }
  }
