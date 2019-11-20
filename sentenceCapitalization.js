function sentenceCapitalization (str) {
  const splittedStrArr = str.split(' ')
  const result = splittedStrArr.map((string) => {
    return string.slice(0, 1).toUpperCase() + string.slice(1, string.length).toLowerCase()
  })

  return result.join(' ')
}

module.exports = sentenceCapitalization
