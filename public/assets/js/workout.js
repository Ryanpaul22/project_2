$(document).ready(function() {
  const $workoutForm = $("#workout-form");
  const $addExercise = $("#add-exercise");
  const $exerciseDiv = $("#exercise-inputs");
  $("#chest").hide();
  $("#back").hide();
  $("#shoulder").hide();
  $("#arm").hide();
  $("#leg").hide();
  $("#abdominal").hide();
  document.getElementById("muscle-group").onchange = function() {showExercise()};
function showExercise() {
  var $muscleGroup = $("#muscle-group").val().trim();
  if ($muscleGroup === "choose-muscle-group") {
    $("#chest").hide();
    $("#back").hide();
    $("#shoulder").hide();
    $("#arm").hide();
    $("#leg").hide();
    $("#abdominal").hide();
<<<<<<< HEAD
  }
  if ($muscleGroup === "Chest") {
    $("#chest").show();
    $("#back").hide();
  $("#shoulder").hide();
  $("#arm").hide();
  $("#leg").hide();
  $("#abdominal").hide();
  }
  else if ($muscleGroup === "Back") {
    $("#back").show();
    $("#chest").hide();
    $("#shoulder").hide();
  $("#arm").hide();
  $("#leg").hide();
  $("#abdominal").hide();
  }
  else if ($muscleGroup === "Shoulders") {
    $("#shoulder").show();
    $("#chest").hide();
    $("#back").hide();
    $("#arm").hide();
  $("#leg").hide();
  $("#abdominal").hide();
=======

  

    $(document).on("change", ".muscle-group", showExercise);

  function showExercise() {

    var $muscleGroup = $(this).val().trim();
    

    if ($muscleGroup === "choose-muscle-group") {
      $(this).parent(".exercise").find(".shoulder").hide();
      $(this).parents(".exercise").find(".chest").hide();
      $(this).parents(".exercise").find(".back").hide();
      $(this).parents(".exercise").find(".arm").hide();
      $(this).parents(".exercise").find(".leg").hide();
      $(this).parents(".exercise").find(".abdominal").hide();

    }

    if ($muscleGroup === "Chest") {

      $(this).parent(".exercise").find(".shoulder").hide();
      $(this).parents(".exercise").find(".chest").show();
      $(this).parents(".exercise").find(".back").hide();
      $(this).parents(".exercise").find(".arm").hide();
      $(this).parents(".exercise").find(".leg").hide();
      $(this).parents(".exercise").find(".abdominal").hide();


    }
    else if ($muscleGroup === "Back") {

      $(this).parent(".exercise").find(".shoulder").hide();
      $(this).parents(".exercise").find(".chest").hide();
      $(this).parents(".exercise").find(".back").show();
      $(this).parents(".exercise").find(".arm").hide();
      $(this).parents(".exercise").find(".leg").hide();
      $(this).parents(".exercise").find(".abdominal").hide();


    }
    else if ($muscleGroup === "Shoulders") {

      $(this).parent(".exercise").find(".shoulder").show();
      $(this).parents(".exercise").find(".chest").hide();
      $(this).parents(".exercise").find(".back").hide();
      $(this).parents(".exercise").find(".arm").hide();
      $(this).parents(".exercise").find(".leg").hide();
      $(this).parents(".exercise").find(".abdominal").hide();

    }
    else if ($muscleGroup === "Arms") {

      $(this).parent(".exercise").find(".shoulder").hide();
      $(this).parents(".exercise").find(".chest").hide();
      $(this).parents(".exercise").find(".back").hide();
      $(this).parents(".exercise").find(".arm").show();
      $(this).parents(".exercise").find(".leg").hide();
      $(this).parents(".exercise").find(".abdominal").hide();



    }
    else if ($muscleGroup === "Legs") {

      $(this).parent(".exercise").find(".shoulder").hide();
      $(this).parents(".exercise").find(".chest").hide();
      $(this).parents(".exercise").find(".back").hide();
      $(this).parents(".exercise").find(".arm").hide();
      $(this).parents(".exercise").find(".leg").show();
      $(this).parents(".exercise").find(".abdominal").hide();


    }
     else if ($muscleGroup === "Abdominal") {

      $(this).parent(".exercise").find(".shoulder").hide();
      $(this).parents(".exercise").find(".chest").hide();
      $(this).parents(".exercise").find(".back").hide();
      $(this).parents(".exercise").find(".arm").hide();
      $(this).parents(".exercise").find(".leg").hide();
      $(this).parents(".exercise").find(".abdominal").show();


    }
    console.log($muscleGroup);
    ;
>>>>>>> 7701de1e730db88f71f1c2dfb5385ca6035f83dd
  }
  else if ($muscleGroup === "Arms") {
    $("#arm").show();
    $("#chest").hide();
  $("#back").hide();
  $("#shoulder").hide();
  $("#leg").hide();
  $("#abdominal").hide();
  }
  else if ($muscleGroup === "Legs") {
    $("#leg").show();
    $("#chest").hide();
  $("#back").hide();
  $("#shoulder").hide();
  $("#arm").hide();
  $("#abdominal").hide();
  }
   else if ($muscleGroup === "Abdominal") {
    $("#abdominal").show();
    $("#chest").hide();
  $("#back").hide();
  $("#shoulder").hide();
  $("#arm").hide();
  $("#leg").hide();
  }
  console.log($muscleGroup);
}

<<<<<<< HEAD
=======

 

  
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
      $(".exercise").each(function(i) {
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
>>>>>>> 7701de1e730db88f71f1c2dfb5385ca6035f83dd

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
    $(".exercise").each(function(i) {
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
      date: $("date-input").val(),
      exercises: []
    }
  

  $(".exercise").each(function(i) {
    const exerciseData = {
      exercise_name: $(this).find("#exercise-name").val(),
      muscle_group: $(this).find("#muscle-group").val().trim(),
      specific_exercise: $(this).find(".specific-exercise").val().trim(),
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