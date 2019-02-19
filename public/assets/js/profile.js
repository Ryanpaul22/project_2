$(document).ready(function() {
  function printUser() {
    $.ajax({
      url: "api/users/status",
      method: "GET"
    }).then(function(response) {
      var userIfno =  
    
      `<div class="center-text">
      <h6><b>Name:</b> ${response.full_name}</span></h6>
       <h6><b>Email:</b> <u>${response.email}</u></h6>
       <h6><b>Age:</b> ${response.age}</h6>
       <h6><b>From:</b> ${response.where_from}</h6>
       <h6><b>Bio:</b> ${response.bio}</h6>
       </div>`;
    
    $(".userIfno").append(userIfno);

      // var userPicture =

      // `<img src="${response.picture} height="50" width="50">`
      // ;

      
    })};
      printUser();

    function printWorkout() {
    $.ajax({
      url: "api/workouts",
      method: "GET"
    }).then(function (results) {
      for (let i = results.length - 1; i < results.length; i++) {
 
        let dbData = results[i];
        console.log(dbData);
        const date = dbData.date;
        const name = (dbData.name);
        $(".name").append(`<b>${name}<b>`);
        console.log(date);
        // let nameWO = dbData.
        $(".dateDiv").append(date);
 
        dbData.exercises.forEach(exercise => {
          // console.log(exercise);
          let dbWo =
            `<div class="container-fluid text-center" id="forEach"> 
            <br>
          <div>
          <h5><b>${exercise.specific_exercise}<b></h5>
          </div>`;
 
          exercise.sets.forEach(set => {
            dbWo += `${set.reps} reps x ${set.weight} lbs<br></div>`
          });
          $(".center-div").append(dbWo);
        })
      }
    })
  }
  printWorkout();

  // function currentUserWorkouts() {
  // $.ajax({
  //   url: "api/users/status",
  //   method: "GET"
  // }).then(function (first) {
  //   var firstId = (first.id);
  //   $.ajax({
  //     url: "api/workouts",
  //     method: "GET"
  //   }).then (function (second) {})

  // })}
})