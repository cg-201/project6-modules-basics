let username = "rohit";
let total = 1000;
let refObj = {};
let list = [];

let sayHello = () => "Hello World!!";
let addition = (n1, n2) => n1 + n2; // Lamda/Arrow Function

function additionV1(n1, n2) {
  return n1 + n2;
}

export { username, total, refObj, list, addition, additionV1 };

// special member and ONLY one member can be default member
// 1. there is no curly braces
// 2. there is default keyword
export default sayHello;
