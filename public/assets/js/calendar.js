YUI().use('calendar', 'datatype-date', 'cssbutton', function (Y) {


  // Create a new instance of calendar, placing it in
  // #mycalendar container, setting its width to 340px,
  // the flags for showing previous and next month's
  // dates in available empty cells to true, and setting
  // the date to today's date.
  var calendar = new Y.Calendar({
    contentBox: "#mycalendar",
    width: '600px',
    showPrevMonth: true,
    showNextMonth: true,
    date: new Date()
  }).render();

  // Get a reference to Y.DataType.Date
  var dt = Y.DataType.Date;
  console.log(dt);

  // Listen to calendar's selectionChange event.
  calendar.on("selectionChange", function (ev) {
    $("#workout-name").empty();
    $("#exercise-div").empty();
    

    // Get the date from the list of selected

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


    $.ajax({
      url: "api/workouts",
      method: "GET"
    }).then(function (results) {
      //console.log(results);


        for (let i = 0; i < results.length; i++) {
          
          if (results[i].date === theDate) {
           // console.log(results[i].date);

            let workoutName = results[i].name;
            $("#workout-name").append(`
            <h3>Workout Name: ${workoutName}</h3>
            `);

          let dbData = results[i];
          

          

          dbData.exercises.forEach(exercise => {


           // specific exercise
           let exerciseName = exercise.specific_exercise;
           //# console.log("Exercise Name:" + exerciseName);


            // set count
            let setsCount = exercise.sets.length;
            //console.log("Sets:" + setCount);
            $("#exercise-div").append(`
            <br>
            <h4>Exercise Name: ${exerciseName}</h4>
            <h5>Sets: ${setsCount}</h5>
            `)

            //console.log(exercise.sets); 
            exercise.sets.forEach(set => {
              //console.log(set);

              let repsCount = set.reps;
              // console.log("Reps:" + set.reps);

              let weightCount = set.weight;
             // console.log("Weight:" + set.weight);
            

              //APPEND================================

              $("#exercise-div").append(`
              <p>Reps: ${repsCount}</p>
              <p>Weight: ${weightCount} lbs</p>
              `)

            })
          });
        } 
       } 
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

  })
});