var tweeps = ['@waxy','@mozilla'];

console.log("My tweeps: ", tweeps);

function addOne (someArray, theOne) {
  someArray.push(theOne);
  return someArray;
}

var showFirst = function (someArray, howToShow) {
  howToShow(someArray[0]);
  return someArray[0];
}


console.log("What is showFirst? ", showFirst);

// var printFirst = showFirst

// console.log(addOne());
newTweeps = addOne(tweeps, '@lighthouselabs');
newTweeps = addOne (newTweeps, '@wired');
newTweeps = addOne (newTweeps, showFirst);

console.log("My tweeps again: ", newTweeps);

console.log("The first item is: ", showFirst(newTweeps, function (what) {console.log("win: ", what);}))

console.log("The first item is: ", newTweeps[4](newTweeps, function (what) {console.log("win: ", what);}))

