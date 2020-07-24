// date and time in header
setInterval(() => {
  moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm:ss a'));

}, 1000)

// for loop, changing color to each row
  for(i = 9; i < 18; i++) {
    // variable for current hour
    var currentHour = parseInt(moment().format('HH')); 
    // variable for teh row ID
    var rowHour = $("#hour-" + i);
    // if it's the currrent hour, the row will be red
    if (currentHour === i) {
      $("#hour-" + i).addClass("present");
    }
    // if it's a past hour, the row will be grey
    if (currentHour > i) {
      $("#hour-" + i).addClass("past");
    }
    //if the hour is in the future, the row will be green
    if (currentHour < i) {
      $("#hour-" + i).addClass("future");
    }
    //pulls data from local storage to view in textarea
    $("#hour-" + i).val(localStorage.getItem("hour-" + i));

  }

// click function to save textarea data to local storage

$(".saveBtn").on("click", function () {
    var id = $(this).attr("data-id");
    var value = $("#" + id).val();
    localStorage.setItem(id, value);
  });