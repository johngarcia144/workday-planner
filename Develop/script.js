$("#currentDay").append();

  function currentDate() { 
  $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm a'));
  
  } setInterval(currentDate, 1000);
 

  // Variables for save button, 
  //variable to current hour
  // variable current hourint


  // data attributes  for each hour so a color can be assigned
  $("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
// drilling into class, 
// start jqueary

// date and time in header

// for loop, changing color to each row, adding in above attributes for each input line reflecting current hour

// on click for save button that will save data

// function to retrieve stored data (funciton (enter) for loop)


