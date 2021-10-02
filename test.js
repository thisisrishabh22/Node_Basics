// const name = "Rishabh";

// console.log(name);

const greet = (name) => {
  console.log(`name: ${name}`);
};

greet("Rishabh");
greet("Singh");

const { people, ages } = require("./people");

console.log(people, ages);

const os = require("os"); // OS Module
console.log(os.platform(), os.homedir());
