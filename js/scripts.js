// business logic
var beepBoop = function(userInput){
  var arr =[]
  if (userInput <1 || isNaN(userInput)){
    return "INVALID ENTRY"
  }
  else {
    for (var i = 0; i <= userInput; i++){
      if(i === 0){
        arr.push("Beep!")
      }
      else if(i % 3 === 0){
        arr.push("I'm sorry, Dave. I'm afraid I can't do that.")

console.log(arr)

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
