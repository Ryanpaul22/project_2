$(document).ready(function () {
  function printUser() {
    $.ajax({
      url: "api/users/status",
      method: "GET"
    }).then(function (response) {
      var userInfo =

        `<h6>Name: ${response.full_name}</h6>
      <h6>Email: ${response.email}</h6>
      <h6>Age: ${response.age}</h6>
      <h6>From: ${response.where_from}</h6>
      <h6>Bio: ${response.bio}</h6>`;

      $(".userInfo").append(userInfo);

      // var userPicture =

      // `<img src="${response.picture} height="50" width="50">`
      // ;


    })
  };
  printUser();

  function printWorkout() {
    
    $.ajax({
      url: "api/users/status",
      method: "GET"
    }).then(function (userResult) {
      //console.log(userResult.id);
      let activeUser = userResult.id;
      console.log(activeUser);

      $.ajax({
        url: "api/workouts",
        method: "GET"
      }).then(function (results) {
       console.log(results);

        results.forEach(resDates => {

      if (resDates.UserId === activeUser) {
       let workoutDates = [];
        let userArray = [];

          let resDateWorkout = resDates.date;
          let formatWorkout = new Date(resDateWorkout);
          let workoutDay = formatWorkout.getDate(resDateWorkout) + 1;
        // console.log(workoutDay);
          workoutDates.push(workoutDay);
       // console.log(workoutDates);
          //console.log(resDates.UserId);
          let userNum = resDates.UserId;
         //console.log(userNum);
          userArray.push(userNum);

        var mostRecent = Math.max(...workoutDates);
        if (mostRecent > 9) {
          let mostRecentDate = "2019-02-" + mostRecent;

          if (mostRecentDate === resDates.date) {
            console.log(mostRecentDate);
            console.log(resDates.name);
            $(".dateDiv").append(mostRecentDate);
            $(".name").append(resDates.name);
          }

        for (let i = 0; i < resDates.exercises.length; i++) {
        //  console.log(resDates.exercises[i]);
         // console.log(resDates.date)
          console.log(resDates.exercises[i].specific_exercise);
          $(".center-div").append(`<br>
        <h6>${resDates.exercises[i].specific_exercise}</h6>
          `)
          console.log(resDates.exercises[i].sets);
          sets = resDates.exercises[i].sets;
          sets.forEach(set => {
            $(".center-div").append(`
            <div>${set.reps} reps x ${set.weight} lbs
            </div>`)
          })
 
        };
    
      };
      };
    }); 

      });
    });
  }
  printWorkout();
});
  