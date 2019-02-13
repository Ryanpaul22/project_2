const workoutData = [{
    "Workout": "Chest",
    "sets": 3,
    "repeatition": 12,
    "weight": 225,
    "Date": "Monday"
  },
  {
    "Workout": "Legs",
    "sets": 3,
    "repeatition": 12,
    "weight": 200,
    "Date": "Tuesday"
  },
  {
    "Workout": "Arms",
    "sets": 3,
    "repeatition": 12,
    "weight": 180,
    "Date": "Wednesday"
  },
  {
    "Workout": "Back",
    "sets": 3,
    "repeatition": 12,
    "weight": 160,
    "Date": "Thursday"
  },
  {
    "Workout": "Chest",
    "sets": 3,
    "repeatition": 12,
    "weight": 225,
    "Date": "Monday"
  },
  {
    "Workout": "Legs",
    "sets": 3,
    "repeatition": 12,
    "weight": 200,
    "Date": "Tuesday"
  },
  {
    "Workout": "Arms",
    "sets": 3,
    "repeatition": 12,
    "weight": 180,
    "Date": "Wednesday"
  },
  {
    "Workout": "Back",
    "sets": 3,
    "repeatition": 12,
    "weight": 160,
    "Date": "Thursday"
  },
  {
    "Workout": "Chest",
    "sets": 3,
    "repeatition": 12,
    "weight": 225,
    "Date": "Monday"
  },
  {
    "Workout": "Legs",
    "sets": 3,
    "repeatition": 12,
    "weight": 200,
    "Date": "Tuesday"
  },
  {
    "Workout": "Arms",
    "sets": 3,
    "repeatition": 12,
    "weight": 180,
    "Date": "Wednesday"
  },
  {
    "Workout": "Back",
    "sets": 3,
    "repeatition": 12,
    "weight": 160,
    "Date": "Thursday"
  },
  {
    "Workout": "Chest",
    "sets": 3,
    "repeatition": 12,
    "weight": 225,
    "Date": "Monday"
  },
  {
    "Workout": "Legs",
    "sets": 3,
    "repeatition": 12,
    "weight": 200,
    "Date": "Tuesday"
  },
  {
    "Workout": "Arms",
    "sets": 3,
    "repeatition": 12,
    "weight": 180,
    "Date": "Wednesday"
  },
  {
    "Workout": "Back",
    "sets": 3,
    "repeatition": 12,
    "weight": 160,
    "Date": "Thursday"
  },
  {
    "Workout": "Chest",
    "sets": 3,
    "repeatition": 12,
    "weight": 225,
    "Date": "Monday"
  },
  {
    "Workout": "Legs",
    "sets": 3,
    "repeatition": 12,
    "weight": 200,
    "Date": "Tuesday"
  },
  {
    "Workout": "Arms",
    "sets": 3,
    "repeatition": 12,
    "weight": 180,
    "Date": "Wednesday"
  },
  {
    "Workout": "Back",
    "sets": 3,
    "repeatition": 12,
    "weight": 160,
    "Date": "Thursday"
  },
  {
    "Workout": "Chest",
    "sets": 3,
    "repeatition": 12,
    "weight": 225,
    "Date": "Monday"
  },
  {
    "Workout": "Legs",
    "sets": 3,
    "repeatition": 12,
    "weight": 200,
    "Date": "Tuesday"
  },
  {
    "Workout": "Arms",
    "sets": 3,
    "repeatition": 12,
    "weight": 180,
    "Date": "Wednesday"
  },
  {
    "Workout": "Back",
    "sets": 3,
    "repeatition": 12,
    "weight": 160,
    "Date": "Thursday"
  },
  {
    "Workout": "Chest",
    "sets": 3,
    "repeatition": 12,
    "weight": 225,
    "Date": "Monday"
  },
  {
    "Workout": "Legs",
    "sets": 3,
    "repeatition": 12,
    "weight": 200,
    "Date": "Tuesday"
  },
  {
    "Workout": "Arms",
    "sets": 3,
    "repeatition": 12,
    "weight": 180,
    "Date": "Wednesday"
  },
  {
    "Workout": "Back",
    "sets": 3,
    "repeatition": 12,
    "weight": 160,
    "Date": "Thursday"
  },
  {
    "Workout": "Chest",
    "sets": 3,
    "repeatition": 12,
    "weight": 225,
    "Date": "Monday"
  },
  {
    "Workout": "Legs",
    "sets": 3,
    "repeatition": 12,
    "weight": 200,
    "Date": "Tuesday"
  },
  {
    "Workout": "Arms",
    "sets": 3,
    "repeatition": 12,
    "weight": 180,
    "Date": "Wednesday"
  },
  {
    "Workout": "Back",
    "sets": 3,
    "repeatition": 12,
    "weight": 160,
    "Date": "Thursday"
  }
];

 // Alpa
 for (let i = 0; i < workoutData.length; i++) {
  const workoutForm = `<form id="workout-form">
      <div class="form-group">
        <label for="email">Date Of Workout</label>
        <h6 required type="date" class="form-control" id="date-input">${workoutData[i].Date}<h6>
      </div>
      <!-- template for an exercise, we'll use this to clone -->
      <div class="form-group exercise border border-dark p-3 my-4" id="main-exercise">
        <h4>Exercise <span class="exercise-num">1</span></h4>
        <h6 type="text" class="mb-3 form-control muscle-group" placeholder="Muscle Group">
            ${workoutData[i].Workout}
        </h6>
        <h6 type="text" class="form-control exercise-name" placeholder="Exercise Name">${workoutData[i].sets} </h6>
        <!-- begin set data -->
        <div class="row mt-3 set-data">
          <div class="input-group mb-3 col">
            <h6 type="number" class="form-control reps" placeholder="How Many Reps?" aria-describedby="basic-addon2">${workoutData[i].repeatition}</h6>
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">Reps</span>
            </div>
          </div>
          <div class="input-group mb-3 col">
            <h6 type="number" class="form-control weight" placeholder="How much weight (lbs)?" aria-describedby="basic-addon2">${workoutData[i].weight}</h6>
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">lbs</span>
            </div>
          </div>
        </div>
        <!-- end set data -->
      </div>
    </form>`

    $("#workoutDiv").append(workoutForm);

}
