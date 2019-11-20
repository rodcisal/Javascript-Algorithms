const sentenceCapitalization = require('./sentenceCapitalization')

test('capitalizes sentence', () => {
  expect(sentenceCapitalization('rodrigo is programming')).toBe('Rodrigo Is Programming')
})
