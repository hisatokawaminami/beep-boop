// business logic
var beepBoop = function(userInput){
  var arr =[]
  if (userInput <1 || isNaN(userInput)){
    return "INVALID ENTRY"
  }
  //to make starting 0 -> Beep
  else {
    for (var i = 0; i <= userInput; i++){
      if(i === 0){
        arr.push("Beep!")
      }
      // divisible by 3 -> Sorry Dave
      else if(i % 3 === 0){
        arr.push("I'm sorry, " + $("input#userName").val() + ". I'm afraid I can't do that.")

      // 1s -> Boop
      } else if(ruleOne(i)=== true){
        arr.push("Boop!")

        console.log(arr)

      // 0s -> Beep
      } else if(ruleZero(i)=== true){
        arr.push("Beep!")

      // else shows as numbers
      } else
      arr.push(i)
    }
  }
  return arr;
}

// to find 1s
var ruleOne  = function(userInput){
  var result = userInput.toString().indexOf(1);
  if(result === -1){
    return false;
  } else {
    return true;
  }
}
// to find 0s
var ruleZero = function(userInput){
  var result = userInput.toString().indexOf(0);
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
    // var userName = $("input#userName").val();
    $("#result").text(output);
  });
});
