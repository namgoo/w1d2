// console.log("1. Global Variable Outside, Local Variable Inside of a function, printing a local variable inside a function outside of a function")

var myGlobalVar = "global";

function printMyVars() {
  var myLocalVar = "local";
  console.log("myLocalVar is:", myLocalVar);
  console.log("myGlobalVar is:", myGlobalVar);
}

// // console.log(myLocalVar)


// function four() {
//   if (true) {
//     var a = 4;
//   }

//   console.log((a)); // alerts '4', not the global value of '1'
// }

var favouriteMeal = "BREAKFAST";

console.log(favouriteMeal.toLowerCase());
