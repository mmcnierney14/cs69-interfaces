$(document).ready(function() {
  var people = [
    "Johnnie Butter",
    "Jennell Branson",
    "Geneva Dearborn",
    "Rae Labrador",
    "Tonda Woodley",
    "Tobias Corprew",
    "Valentine Noone",
    "Jenelle Fyock",
    "Roseann Body",
    "Robbie Mcnemar",
    "Shantel Deems",
    "Concetta Lovette"
  ];
  
  $('input#autocomplete-input').autocomplete({
    source: people,
    select: function(event, ui) {
      $("#empty-msg").hide();
      $("#friends.table").append("<tr><td>" + ui.item.value + "</td></tr>").show();
    }
  });
});