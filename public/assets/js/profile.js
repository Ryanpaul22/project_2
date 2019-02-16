$(document).ready(function () {
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

            
            dbWo += `<pre>${set.reps} reps x ${set.weight} lbs</pre>`
          });
          $(".center-div").append(dbWo);
        })
      }
    })
  }
  printWorkout();
})