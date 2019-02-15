$(document).ready(function() {
  function printWorkout() {
    $.ajax({
      url: "api/workouts",
      method: "GET"
    }).then(function (results) {
      for (let i = results.length - 1; i < results.length; i++) {
        let dbData = results[i];
        console.log(dbData);
        const date = (dbData.updatedAt[0] + dbData.updatedAt[1] + dbData.updatedAt[2] + dbData.updatedAt[3] + dbData.updatedAt[4] + dbData.updatedAt[5] + dbData.updatedAt[6] + dbData.updatedAt[7] + dbData.updatedAt[8] + dbData.updatedAt[9]);
        console.log(date);
        $(".dateDiv").append(date);
        dbData.exercises.forEach(exercise => {
          console.log(exercise);
          let dbWo =
            `<div class="container-fluid text-center">
            <br>
          <div><h3>${exercise.muscle_group}</h3>
<<<<<<< HEAD
          <h2>${exercise.specific_exercise}</h2>
=======
          <h4>${exercise.specific_exercise}</h4>
>>>>>>> 7701de1e730db88f71f1c2dfb5385ca6035f83dd
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
})