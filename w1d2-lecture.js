// first scenario "All numbers"
// node add-all-the-things.js 10 20 5.5


function run() {
  // background:
  // set the starting running total
  var sum = 0


  // execution phase -> what we are going to actually be doing


  // output phase

  return sum
}

if (process.env.Node_ENV === 'test') {
  console.log("Test 1")
  console.log(run ([10 20 5.5]) === 35.5 ? 'PASS' : 'FAIL')
  console.log(run ([10 -10 0]) === 0 ? 'PASS' : 'FAIL')
}

