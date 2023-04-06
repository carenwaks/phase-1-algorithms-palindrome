function isPalindrome(word) {
  // Write your algorithm here
  const wordArray=word.split('')
  const reverseWordArray= wordArray.reverse()
  const reverseWord = reverseWordArray.join('')
   if (word === reverseWord) {
    return true
   } else {
    return false
   }  
}


/* 
 Add your pseudocode here
  function isPalindrome(word) {
    reverse the word 
    test whether word is palindrome
    if function on test to return true or false dependeng on the test result
  }
*/


/*
  Add written explanation of your solution here
  The word is first split and turned to an array.Each letter in the word is assigned an index.
  The index of the word are then reversed in order and joined to form a new word
  The new word is compared to the original word and tested on whether they are simillar.
  If simillar, true is returned, otherwise false is returned 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log(isPalindrome('mom'))
  console.log(isPalindrome('woman'));
}

module.exports = isPalindrome;
