// Get references to page elements
var $firstName = $("#first-name");
var $lastName = $("#last-name");
var $username = $("#username");
var $password = $("#password");
var $submitBtn = $("#submit");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(user)
    });
  }
};


// handleFormSubmit is called whenever we submit a new user
// Save the new user to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var user = {
    firstName: $firstName.val().trim(),
    lastName: $password.val().trim(),
    username: $lastName.val().trim(),
    password: $username.val().trim()
  };

  if (!(user.firstName && user.lastName && user.username && user.password) {
    alert("You must enter an user text and description!");
    return;
  }

  API.saveExample(user).then(function() {
    refreshExamples();
  });

  $firstName.val("");
  $password.val("");
  $lastName.val("");
  $username.val("");
};


// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
