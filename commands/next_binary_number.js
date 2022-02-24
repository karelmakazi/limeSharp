const { stringConverter, matchLength } = require("../helpers/helpers")

const next_binary_number = (inputBinary) => {
  let userInput = stringConverter(inputBinary)
  let binaryAdd = matchLength(userInput, false)
  let binNext = matchLength(userInput, true)
  let carry = false

  for (let i = userInput.length - 1; i >= 0; i--) {
    let comparisonPosition = carry ? 1 : userInput[i]
    let check = comparisonPosition + binaryAdd[i]

    if (check === 2) {
      carry = true
      binNext[i] = 0
    } else {
      binNext[i] = check
      carry = false
    }
  }

  console.log(binNext)
}

module.exports = next_binary_number
