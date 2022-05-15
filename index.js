const { odd, even } = require("./var");
const checkOddorEven = require("./func");

const strCheck = (str) => {
  if (str.length % 2 === 0) {
    return even;
  } else {
    return odd;
  }
};

console.log(checkOddorEven(4));
console.log(strCheck("asdd"));
