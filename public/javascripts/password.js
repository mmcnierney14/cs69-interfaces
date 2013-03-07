$(document).ready(function() {
  
  $('form#create-account').submit(function(event) {
    submission = $('form#create-account').serializeArray();
    
    // make the username uneditable after the first submission to get consistent data
    $('input#inputUsername').attr('readonly', true);
    
    // log the data
    $.ajax({
      url: '/password_data',
      method: 'post',
      data: submission
    });
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
      html = "<strong>Oh snap!</strong> Something went wrong.<ul>";
      $("#error").html();
      $.each(errors, function(index,value) {
        html += "<li>" + value + "</li>";
      });
      $("#error").html(html + "</ul>").show();
    }
    else {
      errors = [];
      $("#error").hide();
      $("#success").show();
    }
        
    event.preventDefault();
  });
  
});