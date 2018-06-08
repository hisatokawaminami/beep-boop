// business logic
var beepBoop = function(userInput){
  var arr =[]
  if (userInput <1 || isNaN(userInput)){
    return "INVALID ENTRY"
  }
}



// user interface logic
$(document).ready(function() {
 $("form#formOne").submit(function(event) {
   event.preventDefault();
   var userInput = parseInt($("input#userInput").val());
   var output = beepBoop(userInput);
   $("#result").text(output);
 });
});
