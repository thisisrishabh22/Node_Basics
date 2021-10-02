const { people, ages } = require("./people");
const os = require("os"); // OS Module

console.log(people, ages);

console.log(os.platform(), os.homedir());
