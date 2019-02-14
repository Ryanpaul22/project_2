const workout = {
    UserId: 1,
    date: "2019-02-11",
    workoutData: [{
        muscleGroup: 'chest',
        exercise: 'pure strength press',
        sets: [{
            reps: 25,
            weight: 140
          },
          {
            reps: 15,
            weight: 200
          },
          {
            reps: 12,
            weight: 230
          },
          {
            reps: 25,
            weight: 140
          }
        ]
      },
      {
        muscleGroup: 'chest',
        exercise: 'decline barbell press',
        sets: [{
            reps: 20,
            weight: 135
          },
          {
            reps: 12,
            weight: 185
          },
          {
            reps: 10,
            weight: 225
          },
          {
            reps: 20,
            weight: 135
          }
        ]
      },
      {
        muscleGroup: 'chest',
        exercise: 'Machine flies',
        sets: [{
            reps: 20,
            weight: 140
          },
          {
            reps: 10,
            weight: 225
          },
          {
            reps: 10,
            weight: 225
          },
          {
            reps: 20,
            weight: 145
          }
        ]
      },
      {
        muscleGroup: 'chest',
        exercise: 'incline barbell press',
        sets: [{
            reps: 20,
            weight: 90
          },
          {
            reps: 10,
            weight: 185
          },
          {
            reps: 8,
            weight: 185
          },
          {
            reps: 18,
            weight: 90
          }
        ]
      },
      {
        muscleGroup: 'chest',
        exercise: 'cable crossover',
        sets: [{
            reps: 12,
            weight: 50
          },
          {
            reps: 15,
            weight: 50
          },
          {
            reps: 12,
            weight: 60
          },
          {
            reps: 25,
            weight: 30
          }
        ]
      },
      {
        muscleGroup: 'Back',
        exercise: 'Barbell Curl',
        sets: [{
            reps: 12,
            weight: 90
          },
          {
            reps: 10,
            weight: 185
          },
          {
            reps: 8,
            weight: 185
          },
          {
            reps: 15,
            weight: 90
          }
        ]
      },
      {
        muscleGroup: 'Back',
        exercise: 'Pullups',
        sets: [{
            reps: 12,
            weight: 90
          },
          {
            reps: 10,
            weight: 185
          },
          {
            reps: 8,
            weight: 185
          },
          {
            reps: 15,
            weight: 90
          }
        ]
      },
      {
        muscleGroup: 'Back',
        exercise: 'Bent Over Two-Dumbbell Row',
        sets: [{
            reps: 12,
            weight: 90
          },
          {
            reps: 10,
            weight: 185
          },
          {
            reps: 8,
            weight: 185
          },
          {
            reps: 15,
            weight: 90
          }
        ]
      },
      {
        muscleGroup: 'Legs',
        exercise: 'Seated Leg Curl',
        sets: [{
            reps: 12,
            weight: 50
          },
          {
            reps: 15,
            weight: 50
          },
          {
            reps: 12,
            weight: 60
          },
          {
            reps: 15,
            weight: 30
          }
        ]
      },
      {
        muscleGroup: 'Legs',
        exercise: 'Leg Press',
        sets: [{
            reps: 12,
            weight: 50
          },
          {
            reps: 15,
            weight: 50
          },
          {
            reps: 12,
            weight: 60
          },
          {
            reps: 10,
            weight: 30
          }
        ]
      },
      {
        muscleGroup: 'Legs',
        exercise: 'Jogging-Treadmill',
        sets: [{
            reps: 12,
            weight: 50
          },
          {
            reps: 15,
            weight: 50
          },
          {
            reps: 12,
            weight: 60
          },
          {
            reps: 10,
            weight: 30
          }
        ]
      }
    ]
  },
  
  
// login modal logic

  $("#login-btn").click(function () {
    var loginEmail = $("#loginForm-email").val().trim();
    console.log(loginEmail);
    var loginPassword = $("#loginForm-password").val().trim();
    console.log(loginPassword);
    location.href = "profile.html";
  });

// sign up modal logic

$("#join-btn").click(function () {
  var signUpEmail = $("#signUpForm-email").val().trim();
  console.log(signUpEmail);
  var signUpPassword = $("#signUpForm-password").val().trim();
  console.log(signUpPassword);
  location.href = "profile.html";
});



