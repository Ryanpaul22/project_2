const router = require('express').Router();
const path = require('path');

// only get to new posts
router.route('/').get((req, res) => {
  res.sendFile(path.join(__dirname, '../../public/profile.html'));
});

router.route('/workouts').get((req, res) => {
  res.sendFile(path.join(__dirname, '../../public/workoutForm.html'));
});

router.route('/register').get((req, res) => {
  res.sendFile(path.join(__dirname, '../../public/signup.html'));
});

router.route('/login').get((req, res) => {
  res.sendFile(path.join(__dirname, '../../public/login.html'));
});

router.route('/workout-form').get((req, res) => {
  if (!req.user) {
    return res.redirect('/login');
  }
  res.sendFile(path.join(__dirname, '../../public/workout.html'));
}); 

router.route('/calendar').get((req, res) => {
  res.sendFile(path.join(__dirname, '../../public/calendar.html'));
})

router.route('/user-data-base').get((req, res) => {
  res.sendFile(path.join(__dirname, '../../public/database.html'));
})



module.exports = router;
