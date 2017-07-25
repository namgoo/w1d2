// first scenario "All numbers"
// node add-all-the-things.js 10 20 5.5

function toNum(potentialNumber) {
  // background
  // execution
  // if number return it else return 0
  return isNaN(potentialNumber) ? 0 : Number(potentialNumber)
  // if (isNaN(potentialNumber)) {
  //   return 0
  // } else {
  //   return Number(potentialNumber)
  // }
  // output

}

function run(input) {
  // background:
  // set the starting running total
  var sum = 0


  // execution phase -> what we are going to actually be doing
  // for each item in the array, add it to the sum
  for (var i = 0; i < input.length; i++ ) {
    // make sure each element is a number
    sum += toNum(input[i])
  }

  // output phase
  return sum
}

// if (process.env.NODE_ENV === 'test') {
  console.log("Test 1")
  console.log(run ([10, 20, 5.5]) === 35.5 ? 'PASS' : 'FAIL')
  console.log(run ([10, -10, 0]) === 0 ? 'PASS' : 'FAIL')
  console.log("Test 2 - Non number input")
  console.log(run([10, 'f', 'foo', 0]) === 10 ? 'PASS' : 'FAIL')

  console.log(run(['10','20']) === 30 ? 'PASS' : 'FAIL')
  console.log('Sum = ' + run([process.argv.slice(2)]))

