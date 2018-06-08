// business logic
var beepBoop = function(userInput){
  var arr =[]
  if (userInput <1 || isNaN(userInput)){
    return "INVALID ENTRY"
  }
  else {
    for (var i = 0; i <= userInput; i++){
      if(i % 10 === 0){
        arr.push("I'm sorry, Dave. I'm afraid I can't do that.")
      }
      else if(i.toString().match(1)){
        arr.push("Boop!")
      }
      else if(i.toString().match(0)){
        arr.push("Beep!")
      } else
      arr.push(i)
    }
  }
  return arr;
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
