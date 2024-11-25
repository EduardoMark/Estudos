const Address = require("./Address");
const People = require('./People');

const addr = new Address('Qnj 7', 11, 'Taguatinga-Norte', 'Brasília', 'DF');
const john = new People("John Doe", addr);

console.log(john);
console.log(john.address.fullAddress());
