YUI().use('calendar', 'datatype-date', 'cssbutton',  function(Y) {
        
  // Create a new instance of calendar, placing it in
  // #mycalendar container, setting its width to 340px,
  // the flags for showing previous and next month's
  // dates in available empty cells to true, and setting
  // the date to today's date.
  var calendar = new Y.Calendar({
    contentBox: "#mycalendar",
    width:'250px',
    showPrevMonth: true,
    showNextMonth: true,
    date: new Date()}).render();

  // Get a reference to Y.DataType.Date
  var dt = Y.DataType.Date;

  // Listen to calendar's selectionChange event.
  calendar.on("selectionChange", function (ev) {

    // Get the date from the list of selected
    // dates returned with the event (since only
    // single selection is enabled by default,
    // we expect there to be only one date)
    var newDate = ev.newSelection[0];

    var formatDate = new Date(newDate);

    var year = formatDate.getFullYear(newDate);
    var month = formatDate.getMonth(newDate) + 1;
    var day = formatDate.getDate(newDate);

    if (month < 10) {
      var month = "0" + month
    }

    if (day < 10) {
      var day = "0" + day
    }

    var theDate = year + "-" + month + "-" + day;
    console.log(theDate);
    // Format the date and output it to a DOM
    // element.
    Y.one("#selecteddate").setHTML(theDate);

    //Y.one("#selecteddate").setHTML(dt.format(formatDate));
    
  });
  
  // When the 'Show Previous Month' link is clicked,
  // modify the showPrevMonth property to show or hide
  // previous month's dates
  Y.one("#togglePrevMonth").on('click', function (ev) {
    ev.preventDefault();
    calendar.set('showPrevMonth', !(calendar.get("showPrevMonth")));
  });

  // When the 'Show Next Month' link is clicked,
  // modify the showNextMonth property to show or hide
  // next month's dates
  Y.one("#toggleNextMonth").on('click', function (ev) {
    ev.preventDefault();
    calendar.set('showNextMonth', !(calendar.get("showNextMonth")));
  });
});