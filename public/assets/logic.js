// login modal logic

$("#login-btn").click(function(){
    var loginEmail = $("#loginForm-email").val().trim();
    console.log(loginEmail);
    var loginPassword = $("#loginForm-password").val().trim();
    console.log(loginPassword);
    location.href = "profile.html";
    });

// sign up modal logic

$("#join-btn").click(function(){
  var signUpEmail = $("#signUpForm-email").val().trim();
  console.log(signUpEmail);
  var signUpPassword = $("#signUpForm-password").val().trim();
  console.log(signUpPassword);
  location.href = "profile.html";
  });


