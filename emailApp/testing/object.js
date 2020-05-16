var person = {firstName: [1, 2], lastName: 'Doe', age: 50, eyeColor: 'blue'};
const key = Object.keys(person);

console.log(person[key[0]]);
const type = typeof person;

if (type === 'object') {
  person[key[0]].push(20);
}

console.log(person);
