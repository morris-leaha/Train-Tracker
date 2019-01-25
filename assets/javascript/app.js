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
var tName;
var tDestination;
var firstTTime;
var tFrequency;

// Create an on click event tied to the submit button
$("#add-train-btn").on("click", function (event) {
  // Utilize the event.preventDefault() method bc of submit button
  event.preventDefault();
  // Grab values from input fields and store in respective global variables
  tName = $("#train-name-input").val().trim();
  tDestination = $("#train-destination-input").val().trim();
  firstTTime = $("#first-train-input").val().trim();
  tFrequency = $("#train-frequency-input").val().trim();

  // Push these values into firebase route directory 
  // First initialize the input data to be stored in object format for DB
  var newTrain = {
    name: tName,
    destination: tDestination,
    time: firstTTime,
    frequency: tFrequency
  }

  // Upload new train information to database
  database.ref().push(newTrain);
  console.log(newTrain);

  // clear text input fields from input form so that it's blank after input is submitted
  $("#train-name-input").val("");
  $("#train-destination-input").val("");
  $("#first-train-input").val("");
  $("#train-frequency-input").val("");
});

// Create an event listener function that allows new info input that's added to database so that it can be written to DOM when user adds
database.ref().on("child_added", function (childSnapshot) {
  // console.log the 'snapshot'
  console.log(childSnapshot);

  // store each value in its own variable
  var tName = childSnapshot.val().name;
  console.log(tName);
  var tDestination = childSnapshot.val().destination;
  console.log(tDestination);
  var firstTTime = childSnapshot.val().time;
  console.log(firstTTime);
  var tFrequency = childSnapshot.val().frequency;
  console.log(tFrequency);

  // DO SOME MATH TO GET THE NEXT TRAIN TIME AND HOW MANY MINS AWAY
  // store current time in variable
  var currentTime = moment();
  console.log("Current Time: " + moment(currentTime).format("hh:mm"));
  // convert first train time
  var firstTimeConvert = moment(firstTTime, "HH:mm").subtract(1, "years");
  console.log(firstTimeConvert);
  // calculate the difference (in minutes) between the current and first train time
  var diffT = moment().diff(moment(firstTimeConvert), "minutes");
  console.log("Difference in time: " + diffT);
  // calculate the remainding minutes based on frequence of train
  var tRemaining = diffT % tFrequency;
  console.log(tRemaining);
  var tMinTilTrain = tFrequency - tRemaining;
  console.log("Minutes until train: " + tMinTilTrain);

  // use minutes remaining to how many minutes until next train from the current time 
  var nxtTrain = moment().add(tMinTilTrain, "minutes");
  console.log("Next train arrival: " + moment(nxtTrain).format("hh:mm"));


  // write respective values to table 
  // create new row:
  var newRow = $("<tr>").append(
    $("<td>").text(tName),
    $("<td>").text(tDestination),
    $("<td>").text(tFrequency),
    $("<td>").text(moment(nxtTrain).format("hh:mmA")),
    $("<td>").text(tMinTilTrain)
  );
  // add to table
  $("#train-table > tbody").append(newRow);
 
});


