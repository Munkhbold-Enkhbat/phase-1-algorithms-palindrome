function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split('').reverse().join('')
  return word === reversedWord
}

/* 
  Add your pseudocode here
  word -> array
  array.reverse() => reversed array
  reversed array => reversedWord
  if(reversedWord === word)
  if yes => return true
  if not => return false
*/

/*
  Add written explanation of your solution here
  turn a given string into an array 
  reverse it with javascript's builtin method reverse() 
  turn array to string
  compare it with the given string
  return true if palindrome, else false 
*/
let myTest = str => isPalindrome(str) ? console.log(`${str} is a palindrome!`) : console.log(`${str} is not a palindrome!`)

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  myTest('madam')
  myTest('maiden')

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
