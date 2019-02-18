$(document).ready(function() {
  function printUser() {
    $.ajax({
      url: "api/users/status",
      method: "GET"
    }).then(function(response) {
      var userIfno =  
      
    
    `<h6>Name: ${response.full_name}</h6>
    <h6>Email: ${response.email}</h6>
    <h6>Age: ${response.age}</h6>
    <h6>From: ${response.where_from}</h6>
    <h6>Bio: ${response.bio}</h6>`
    ;

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
        //console.log(dbData);
        const date = dbData.updatedAt.split("T").shift();
        const name = (dbData.name);
        $(".name").append(name);
        console.log(date);
        // let nameWO = dbData.
        $(".dateDiv").append(date);
 
 
        dbData.exercises.forEach(exercise => {
          // console.log(exercise);
          let dbWo =
            `<div class="container-fluid text-center">
            <br>
          <div>
          <h5>${exercise.specific_exercise}</h5>
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