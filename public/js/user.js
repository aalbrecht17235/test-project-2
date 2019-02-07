// Get references to page elements
var $firstName = $("#first-name");
var $lastName = $("#last-name");
var $birthday = $('#birthday');
var $username = $("#username");
var $password = $("#password");
var $submitBtn = $("#submit");



// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function (user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/users",
      data: JSON.stringify(user)
    });
  },
  getExamples: function () {
    return $.ajax({
      url: "api/users",
      type: "GET"
    });
  }
};



// handleFormSubmit is called whenever we submit a new user
// Save the new user to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var user = {
    firstName: $firstName.val().trim(),
    lastName: $lastName.val().trim(),
    birthday: $birthday.val().trim(),
    username: $username.val().trim(),
    password: $password.val().trim()
  };

  if (!(user.firstName && user.lastName && user.username && user.password) ){
    alert("You must enter an user text and description!");
    return;
  }

  API.saveExample(user).then(function() {
    refreshExamples();
  });

  $firstName.val("");
  $password.val("");
  $birthday.val("")
  $lastName.val("");
  $username.val("");
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};



// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
