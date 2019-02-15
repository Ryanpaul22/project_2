$(document).ready(function() {



  function printWorkout() {
    $.ajax({
      url: "api/workouts",
      method: "GET"
    }).then(function (results) {
      for (let i = results.length - 1; i < results.length; i++) {
        console.log(results);
        let dbData = results[i];
        //console.log(dbData);
        const date = (dbData.date);
        //console.log(date);
        $(".center-div").append(date);

        dbData.exercises.forEach(exercise => {
          // console.log(exercise);
          let dbWo =
          `<div class="container-fluid text-center">
          <div>
            <h5>${exercise.muscle_group}</h5>
            <h5>${exercise.exercise_name}</h5>
          </div>`;
          
          exercise.sets.forEach(set => {
            dbWo += `${set.reps} reps x ${set.weight} lbs</div><br>`
          });
          $(".center-div").append(dbWo);
        })
      }
    })
  }

  printWorkout();

})