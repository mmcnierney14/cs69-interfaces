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
      $("#friends.well").append("<li>" + ui.item.value + "</li>").show();
    }
  });
  
});