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

//Match create working arrays to match input length
function matchLength(arr, storage) {
  let length = arr.length
  let newArr = Array(length).fill(0)

  if (!storage) {
    newArr[arr.length - 1] = 1
  }
  return newArr
}


module.exports = { stringConverter, matchLength }