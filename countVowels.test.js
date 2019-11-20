const countVowels = require('./countVowels')

test('count all vowels in rodrigo', () => {
  expect(countVowels('rodrigo')).toBe(3)
})

test('count all vowels in CHARLOTTE', () => {
  expect(countVowels('CHARLOTTE')).toBe(3)
})

test('count all vowels in LeONaRdo', () => {
  expect(countVowels('LeONaRdo')).toBe(4)
})

test('count all vowels in LeONaRdo CiSTERNAS', () => {
  expect(countVowels('LeONaRdo CiSTERNAS')).toBe(7)
})
