var $select1 = $( '#select1' ),
		$select2 = $( '#select2' ),
    $options = $select2.find( 'option' );
    
$select1.on('change', function() {
	$select2.html( $options.filter( '[value="' + this.value + '"]' ) );
} ).trigger('change');

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
        exercise_name: $(this).find(".exercise-name").val(),
        muscle_group: $(this).find(".muscle-group").val(),
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
  function printWorkout() {
    $.ajax({
      url: "api/workouts",
      method: "GET"
    }).then(function (results) {
      for (let i = results.length - 1; i < results.length; i++) {
        let dbData = results[i];
        console.log(dbData);
        dbData.exercises.forEach(exercise => {
          console.log(exercise);
          let dbWo =
            `<div class="container text-center">
              <div>
                <p>${exercise.muscle_group}</p>
                <p>${exercise.exercise_name}</p>
              </div>`;
              exercise.sets.forEach(set => {
            dbWo += `
            <p>${set.reps}</p>
            <p>${set.weight}</p>
            `
          });
          $("#workoutDiv").append(dbWo);
        })
      }
    })
  }
  $addExercise.on("click", addExercise);
  $(document).on("click", '.add-set', addSet);
  $workoutForm.on("submit", collectData);
  printWorkout();
});