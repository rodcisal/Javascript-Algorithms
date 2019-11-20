const maxRecurringChar = require('./maxRecurringChar')

test('return max recurring character in string', () => {
  expect(maxRecurringChar('aabacada')).toBe('a')
})

test('return max recurring character in string', () => {
  expect(maxRecurringChar('rrrrrrrrrabcdefghijklmnopqrstuvwxybcdefghijklmnopqrstuvwxy')).toBe('r')
})

test('return max recurring character in string', () => {
  expect(maxRecurringChar('aabacada  $$##')).toBe('a')
})
