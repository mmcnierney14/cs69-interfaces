$(document).ready(function() {
  
  $('form#create-account').submit(function(event) {
    var submission = $('form#create-account').serializeArray();
    var error;
    
    // password and password confirmation don't match
    if (submission[1].value != submission[2].value) {
      error = "The password and the confirmation don't match";
    }
    
    if (error)
      $("#error").html("<strong>Oh snap!</strong> " + error).show();
    
    event.preventDefault();
  });
  
});