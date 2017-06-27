
function definitelyANumber(maybeNumber) {
  return !isNaN(maybeNumber);
}

function getNumbers(rawNumbers) {
  var numbers = [];
  for (var number of rawNumbers) {
    // debugger;
    if (definitelyANumber(number)) {
      numbers.push(Number(number));
    }
  }
  return numbers
}

function sumNumbers(numbers) {
  var total = 0;
  for (var i =0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

var args = ['10', 'banana', 500, 'James Bond', 1337, 42]
var result = sumNumbers(getNumbers(args));

console.log(result);

// Test Code
if (sumNumbers([1, 10, 100]) === 111) console.log("It works")
