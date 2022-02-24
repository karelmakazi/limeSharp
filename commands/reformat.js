const reformat = (string) => {
  let reformattedString = string.replace(/[aeiou]/gi, "")
  console.log(reformattedString)
}

module.exports = reformat
