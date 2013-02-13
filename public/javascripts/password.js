$(document).ready(function() {
  
  $('form#create-account').submit(function(event) {
    submission = $('form#create-account').serializeArray();
    errors = [];
    
    // password and password confirmation don't match
    if (submission[1].value != submission[2].value)
      errors.push("The password and the confirmation don't match.");
    
    // password isn't 8 characters
    if (submission[1].value.length != 8)
      errors.push("Password must be 8 characters in length.");
    
    // password doesn't contain any special characters
    if (!submission[1].value.match(/[^A-Za-z0-9]+/))
      errors.push("Password doesn't contain any special characers.");
    
    // password doesn't contain any numbers
    if (!submission[1].value.match(/[0-9]+/))
      errors.push("Password doesn't contain a number.");
    
    // display errors
    if (errors.length > 0) {
      $("#success").hide();
      $("#error").html("<strong>Oh snap!</strong> Something went wrong.<ul>");
      $.each(errors, function(index,value) {
        $("#error").append("<li>" + value + "</li>");
      });
      $("#error").append("</ul>").show();
    }
    else {
      errors = [];
      $("#error").hide();
      $("#success").show();
    }
        
    event.preventDefault();
  });
  
});