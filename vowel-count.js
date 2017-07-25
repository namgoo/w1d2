function countVowels(input) {
  var vowelCount = {
    a: 0,
    e: 0,
    i: 0,
    u: 0,
    o: 0
  }

  for (var i = 0; i < input.length; i++) {
    switch(input[i]) {
      case 'a' :
        vowelCount.a += 1
        break;
      case 'e' :
        vowelCount.e += 1
        break;
      case ' i':
        vowelCount.i += 1
        break;
      case 'o':
        vowelCount.o += 1
        break;
      case 'u':
        vowelCount.u += 1
        break;
    }
  }
  return vowelCount
}

var testResults = countVowels('the bird is the word')

// console.log(countVowels('the bird is the word')[])

console.log(testResults.e === 2 ? 'Pass' : 'Fail')
console.log(testResults.o === 1 ? 'Pass' : 'Fail')
console.log(testResults.a === 0 ? 'Pass' : 'Fail')