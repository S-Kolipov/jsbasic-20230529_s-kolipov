/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];
*/

function namify(users) {
  let names = users.map((item) => item.name);
  return names;
}

/*
const names = namify(users);
console.log("the result is:", names);
*/
