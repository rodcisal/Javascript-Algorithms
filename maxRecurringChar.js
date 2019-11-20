function maxRecurringChar (str) {
  const arr = [...str]
  const obj = {}
  let maxChar
  let maxCharNumber = 0

  for (let i = 0; arr.length > i; i++) {
    const char = arr[i]
    obj[char] > 0
      ? obj[char] = obj[char] + 1
      : obj[char] = 1
  }

  for (const prop in obj) {
    if (maxCharNumber < obj[prop]) {
      maxChar = prop
      maxCharNumber = obj[prop]
    }
  }

  return maxChar
}

module.exports = maxRecurringChar
