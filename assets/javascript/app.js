// Initialize Firebase
  var config = {
    apiKey: "AIzaSyADH1-OQYvcLWb6xPxT6JehYtTqHPqbzMU",
    authDomain: "train-tracker-hmwk7.firebaseapp.com",
    databaseURL: "https://train-tracker-hmwk7.firebaseio.com",
    projectId: "train-tracker-hmwk7",
    storageBucket: "",
    messagingSenderId: "265818880974"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database.
  var database = firebase.database();

  