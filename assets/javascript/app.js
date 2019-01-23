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

  // Create initial variables 
  var name;
  var destination;
  var time;
  var frequency;

  // Create an on click event tied to the submit button
    // Utilize the event.preventDefault() method bc of submit button
    // Grab values from input fields and store in respective global variables
    // Push these values into firebase route directory 
    // clear text input fields from input form


  // Create an event listener function that allows new info input to be added to database and written to DOM when user adds
    // console.log the 'snapshot'
        // store each value in its own variable
    // write respective train values to table 
        // handle the errors 