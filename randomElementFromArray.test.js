const randomElementFromArray = require('./randomElementFromArray')

test('get random element from array', () => {
  const array = [2, 5, 'rodrigo', 10]
  const result = randomElementFromArray(array)
  expect(array.includes(result)).toBe(true)
})

test('get random element from big array', () => {
  const array = []
  for (let i = 0; i < 1000; i++) {
    array.push(Math.ceil(Math.random() * 10))
  }
  const result = randomElementFromArray(array)
  expect(array.includes(result)).toBe(true)
})
