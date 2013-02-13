$(document).ready(function() {
  
  $('form#create-account').submit(function(event) {
    submission = $('form#create-account').serializeArray();
    errors = [];
    
    // password and password confirmation don't match
    if (submission[1].value != submission[2].value)
      errors.push("The password and the confirmation don't match");
    
    // password isn't 8 characters
    if (submission[1].value.length != 8)
      errors.push("Password must be 8 characters in length");
    
    // display errors
    if (errors.length > 0) {
      $("#error").html("<strong>Oh snap!</strong> Something went wrong.<ul>");
      
      $.each(errors, function(index,value) {
        $("#error").append("<li>" + value + "</li>");
      });
      
      $("#error").append("</ul>").show();
    }
    else {
      errors = [];
      $("#error").hide();
    }
        
    event.preventDefault();
  });
  
});