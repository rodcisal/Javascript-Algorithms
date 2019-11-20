function maxRecurringChar (str) {
  const arr = [...str]
  const obj = {}

  for (let i = 0; arr.length > i; i++) {
    const char = arr[i]
    obj[char] > 0
      ? obj[char] = obj[char] + 1
      : obj[char] = 1
  }

  const arrKeys = Object.keys(obj)
  const arrValues = Object.values(obj)
  const maxValue = Math.max(...arrValues)
  const maxElemIndex = arrValues.indexOf(maxValue)

  return arrKeys[maxElemIndex]
}

module.exports = maxRecurringChar
