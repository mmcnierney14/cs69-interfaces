$(document).ready(function() {
  
  var people = ["Johnnie Butter", "John Butter", "Johnny Better", "Johnnie Betters", "Jennell Branson", "Geneva Dearborn",
                "Rae Labrador", "Raiye Librador", "Tonda Woodley", "Tonda Wheatley", "Tobias Corprew", "Tonias Wheprew", "Tony Wheatley",
                "Valentine Noone", "Jenelle Fyock", "Roseann Body", "Rosie Jekes", "Rachel Body",
                "Robbie Mcnemar", "Rob McNamera", "Robert McNaims", "Bob Mcnemar", "Shantel Deems", "Concetta Lovette"];
  
  $("input#friends-list").tagit({
    autocomplete: {
      source: people
    },
    beforeTagAdded: function(event, ui) {
      return _.indexOf(people, ui.tagLabel) >= 0;
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
    
    window.location.href = "/thanks";
    
    event.preventDefault();
    return false;
  });
  
});