$(document).ready(function() {

    const $workoutForm = $("#workout-form");
    const $addExercise = $("#add-exercise");
    const $exerciseDiv = $("#exercise-inputs");
    // Alpaa
    const workoutData = require("../../../db/seeds.json")
    // /Alpa
  
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
        date: $("#date-input").val().trim(),
        exercises: []
      }
  
      $(".exercise").each(function(i) {
        const exerciseData = {
          exercise_name: $(this).find(".exercise-name").val().trim(),
          muscle_group: $(this).find(".muscle-group").val().trim(),
          sets: []
        }
  
        $(this).find(".set-data").each(function(i) {
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
      }).then(function(data) {
        console.log(data);
      });
  
    
    }
  
  
    $addExercise.on("click", addExercise);
    $(document).on("click", '.add-set', addSet);
    $workoutForm.on("submit", collectData);
  


    // Alpa
    for (let i = 0; i < workoutData.length; i++) {
      const workoutForm = `<form id="workout-form">
          <div class="form-group">
            <label for="email">Date Of Workout</label>
            <input required type="date" class="form-control" id="date-input">
          </div>
          <!-- template for an exercise, we'll use this to clone -->
          <div class="form-group exercise border border-dark p-3 my-4" id="main-exercise">
            <h4>Exercise <span class="exercise-num">1</span></h4>
            <select type="text" class="mb-3 form-control muscle-group" placeholder="Muscle Group">
              <option value="chest">Chest</option>
              <option value="back">Back</option>
              <option value="shoulders">Shoulders</option>
              <option value="arms">Arms</option>
              <option value="legs">Legs</option>
              <option value="abs">Abs</option>
            </select>
            <input type="text" class="form-control exercise-name" placeholder="Exercise Name">
            <!-- begin set data -->
            <div class="row mt-3 set-data">
              <div class="input-group mb-3 col">
                <input type="number" class="form-control reps" placeholder="How Many Reps?" aria-describedby="basic-addon2">
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2">Reps</span>
                </div>
              </div>
              <div class="input-group mb-3 col">
                <input type="number" class="form-control weight" placeholder="How much weight (lbs)?" aria-describedby="basic-addon2">
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2">lbs</span>
                </div>
              </div>
            </div>
            <!-- end set data -->
            <button class="btn btn-block btn-info add-set">Add Set</button>
          </div>
          <div id="exercise-inputs"></div>
          <button class="btn btn-success btn-block mb-3" id="add-exercise">Add an exercise</button>
          <div class="form-group">
            <button type="submit" class="btn btn-block btn-dark">Login</button>
          </div>
        </form>`

    }








  
  });
  