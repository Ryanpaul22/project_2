$(document).ready(function () {

  const $workoutForm = $("#workout-form");
  const $addExercise = $("#add-exercise");
  const $exerciseDiv = $("#exercise-inputs");

  // for performance reasons, immediately make an empty copy of the first exercise form elements so we can use it to create new inputs
  const $exerciseTemplate = $("#main-exercise").clone();
  $exerciseTemplate.find("input").val("");

  function addExercise(e) {
    e.preventDefault();
    // clone exercise
    const $newExercise = $exerciseTemplate.clone();

    // add it to page
    $newExercise.appendTo($exerciseDiv);
    // renumber each exercise to keep track
    $(".exercise").each(function (i) {
      console.log(i);
      $(this).find(".exercise-num").text(i + 1);
    });
  }

  function addSet(e) {
    e.preventDefault();
    // clone existing set (it's right above it... or previous)
    const $newSet = $(this).prev().clone();
    $newSet.find("input").val("");
    $(this).prev().after($newSet);
  }


  function collectData(e) {
    e.preventDefault();

    const workoutData = {
      date: $("#date-input").val().trim(),
      exercises: []
    }

    $(".exercise").each(function (i) {
      const exerciseData = {
        exercise_name: $(this).find(".exercise-name").val().trim(),
        muscle_group: $(this).find(".muscle-group").val().trim(),
        sets: []
      }

      $(this).find(".set-data").each(function (i) {
        const setData = {
          reps: $(this).find(".reps").val().trim(),
          weight: $(this).find(".weight").val().trim()
        }
        // make sure both exist or just ignore it
        if (setData.reps && setData.weight) {
          exerciseData.sets.push(setData);
        }
      });

      workoutData.exercises.push(exerciseData);



    });

    console.log(workoutData);
    // send it to the database
    sendWorkoutInfo(workoutData);
  }

  function sendWorkoutInfo(workoutData) {

    $.ajax({
      url: "/api/workouts",
      method: "POST",
      data: workoutData
    }).then(function (data) {
      console.log(data);
    });
  }

  // function printWorkout() {

  //   $.ajax({
  //     url: "api/workouts",
  //     method: "GET"
  //   }).then(function (results) {

  //     for (let i = 0; i < results.length; i++) {

  //       let dbData = results[i];
  //       console.log(dbData);
  //       dbData.exercises.forEach(exercise => {
  //         console.log(exercise);
  //         let dbWo =
  //           `<div class="container-fluid text-center">
            
  //         <div><h3>${exercise.muscle_group}</h3>
  //         <h4>${exercise.exercise_name}</h4>
  //         </div>`;
          
  //         exercise.sets.forEach(set => {
  //           dbWo += `${set.reps} reps x ${set.weight} lbs<br></div>`
  //         });
  //         $("#workoutDiv").append(dbWo);
  //       })
  //     }
  //   })
  // }

  $addExercise.on("click", addExercise);
  $(document).on("click", '.add-set', addSet);
  $workoutForm.on("submit", collectData);

  // printWorkout();

});