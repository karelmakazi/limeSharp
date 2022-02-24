const { stringConverter } = require("../helpers/helpers")

const repeat = (input) => {
  let arr = stringConverter(input)
  let repeatArr = []
  for (let i = 0; i < 3; i++) {
    repeatArr = [...repeatArr, ...arr]
  }
  console.log(repeatArr)
}

module.exports = repeat
