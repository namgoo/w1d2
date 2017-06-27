var roll = process.argv.slice(2)

var rollnum = roll[0]


function dice() {
  return Math.ceil((6*Math.random()))
  }

function rand(number) {
  var rollArray = ""
  for (i = 0; i < rollnum; i++) {
    if (i === rollnum -1) {
      rollArray = rollArray + dice()
    } else {
    rollArray = rollArray + dice() +", "
    }
  }
  return rollArray
}


console.log(rand(rollnum))


// console.log(dice())
// console.log(dice())
// console.log(dice())
// console.log(dice())
// function rolldice(rolls) {
//   var dices =""
//   for (i = 0; i < rollnum; i++) {

//     dices = dices + ", "
//   }
// }