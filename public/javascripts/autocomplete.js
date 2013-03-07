$(document).ready(function() {
  var people = [
    {value: "Johnnie Butter", friend: false},
    {value: "Jennell Branson", friend: true},
    {value: "Geneva Dearborn", friend: true},
    {value: "Rae Labrador", friend: false},
    {value: "Tonda Woodley", friend: true},
    {value: "Tobias Corprew", friend: true},
    {value: "Tobias Corprew", friend: false},
    {value: "Valentine Noone", friend: true},
    {value: "Valentine Noone", friend: false},
    {value: "Jenelle Fyock", friend: false},
    {value: "Roseann Body", friend: true},
    {value: "Robbie Mcnemar", friend: true},
    {value: "Shantel Deems", friend: true},
    {value: "Concetta Lovette", friend: false},
    {value: "Concetta Lovette", friend: true}
  ];
  
  $("ul#friends-list").tagit({
    autocomplete: {
      source: people
    }
  });
  
});