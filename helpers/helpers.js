//Convert parameter strings to arrays
function stringConverter(inputString) {
  let isArr = inputString.includes("[") ? true : false
  let numberArr

  if (isArr) {
    let cleanString = inputString.replace(/[\[\]']+/g, "")
    numberArr = cleanString.split(",").map(Number)
  } else {
    numberArr = inputString.split(",").map(Number)
  }

  return numberArr
}

module.exports = { stringConverter }