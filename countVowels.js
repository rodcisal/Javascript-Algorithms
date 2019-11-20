// function countVowels (str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   const lowerCaseString = str.toLowerCase()

//   const allVowels = [...lowerCaseString].filter((char) => {
//     return vowels.includes(char)
//   })
//   return allVowels.length
// }

function countVowels (str) {
  return str.toLowerCase().match(/[aeiou]/g).length
}

// function countVowels (str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   return [...str].reduce((acc, cur) => {
//     const lowerCaseChar = cur.toLowerCase()
//     if (vowels.includes(lowerCaseChar)) {
//       return acc.concat(cur)
//     }
//     return acc
//   }, []).length
// }

module.exports = countVowels
