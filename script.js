// date and time in header
setInterval(() => {
  moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm:ss a'));

}, 1000)

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

    $("#hour-" + i).val(localStorage.getItem("hour-" + i))

  }

  // button to save data and retrieve it

  // $(".saveBtn").on("click", function () {
  //   ​
  //     var id = $(this).attr("data-id")
      
  //     var value = $("#" + id).val()
  //   ​
  //     localStorage.setItem(id, value)
  //   ​
  //   });
    