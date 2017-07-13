// 1) Get input at the commandline, 2)  take a first letter to and send it back, and 3) Add "ay" at the end
// Answers from Lighthouse

var originalWords = process.argv.slice(2);
var pigLatinWords = [];

for (var i = 0; i < originalWords.length; i++) {
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

console.log(pigLatinWords.join(' '));

function translateToPigLatin(word) {
  return word.slice(1) + word[0] + "ay";
}

// -----------------------------------------------------------------------------------------
// Answers from Me


var originalWord = process.argv.slice(2);

console.log("Original Word")
console.log(originalWord)

var pigLatin = [];



for (i = 0; i < originalWord.length; i++) {
  console.log(i, originalWord[i])
  var changed = ""
  changed = originalWord[i].slice(1) + originalWord[i][0] + "ay"
  // pigLatin += (changed // Made it all one string
  pigLatin.push(changed)

  // pigLatin = pigLatin + word
}

// pigLatin = pigLatin.split(" ");

console.log(pigLatin)



