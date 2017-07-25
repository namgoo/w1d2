function joinWord(words) {
  var output = words.length > 0 ? words[0] : ""
  for (var i = 1; i < words.length; i++) {
    output += ' ' + words[i]
  }
  return output
}


function reverseSentence(input) {
  // parse input into an array of owrds (ie get rid of whitespace)
  var wordArray = input.split(' ')
  console.log(wordArray)
  // reverse the array
  wordArray.reverse()
  // return the new array
  console.log(joinWord(wordArray))
  return joinWord(wordArray)
}
console.log(reverseSentence("the bird is the word"))
console.log(reverseSentence("the bird is the word") === "word the is bird the" ? 'Pass' : "Fail")