let cat = "BabyCat";
// For loop, split, and then pop of the end and concat to new string.
function reverseString(str) {
  let strArr = str.split("");
  let newString = "";
  for (let index = 0; index < str.length; index++) {
    newString += strArr.pop(index);
  }
  return newString;
}
console.log(reverseString(cat));

//iterate from the end of the string, and concat to new string.
function rS(str) {
  let newString = "";
  for (let index = str.length - 1; index >= 0; index--) {
    newString += str[index];
  }
  return newString;
}

console.log(rS(cat));

//split string, pop into new array, and then join()
function reverseS(str) {
  let newStr = [];
  let splitStr = str.split("");
  for (let i = 0; i < str.length; i++) {
    newStr.push(splitStr.pop());
  }
  return newStr.join("");
}

console.log(reverseS(cat));

//iterate, slice, and push.

function sliceReverse(str) {
  let newString = "";
  for (let i = str.length -1; i >= 0; i--){
    newString += str.split('').splice(i);
    console.log(newString);
  }
  return newString;
}

console.log(sliceReverse(cat));


//recursive 
function rString(str) {
  console.log(str);
  return str === "" ? "" : rString(str.substr(1)) + str.charAt(0);
}
console.log(rString(cat));























if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("ih"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
