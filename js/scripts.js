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
      } else if(ruleOne(i)=== true){
            arr.push("Boop!")

console.log(arr)

          } else if(userInput.toString().indexOf(0)===!-1){
            arr.push("Beep!")
          } else

            arr.push(i)
        }
      }
    return arr;
  }

var ruleOne   = function(userInput){
var result = userInput.toString().indexOf(1);
if(result === -1){
return false;
} else {
return true;
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
