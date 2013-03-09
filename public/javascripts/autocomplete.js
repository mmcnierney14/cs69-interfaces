$(document).ready(function() {
  
  var people = ["Johnnie Butter", "Jennell Branson","Geneva Dearborn",
                "Rae Labrador", "Tonda Woodley", "Tobias Corprew",
                "Valentine Noone", "Jenelle Fyock", "Roseann Body",
                "Robbie Mcnemar", "Shantel Deems", "Concetta Lovette"];
  
  $("input#friends-list").tagit({
    autocomplete: {
      source: people
    },
    beforeTagAdded: function(event, ui) {
      if (_.indexOf(people, ui.tagLabel) < 0) {
        return false;
      }
      
      return true;
    }
  });
  
  $("button#send").click(function(event) {
    friends = $("input#friends-list").tagit("assignedTags").join();
    
    submission = [
      {
        name: "autocomplete_data[username]",
        value: $("input#username").val()
      },
      {
        name: "autocomplete_data[friends]",
        value: friends
      }
    ];
    
    // log the data
    $.ajax({
      url: '/autocomplete_data',
      method: 'post',
      data: submission
    });
    
    window.location.replace("/thanks");
    
    event.preventDefault();
    return false;
  });
  
});