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
        $(".date").append(date);

        const name = (dbData.name);
        $(".name").append(name);


      
        

        dbData.exercises.forEach(exercise => {
          // console.log(exercise);
          let dbWo =
          `<p class ="specific-exercise-margin">
          <br>
          ${exercise.specific_exercise}
          </p>`;


          
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