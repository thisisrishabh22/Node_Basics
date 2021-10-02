console.log(global);

setTimeout(() => {
  console.log("Hello World");
  clearInterval(intervalTest);
}, 5000);

const intervalTest = setInterval(() => {
  console.log("Interval");
}, 500);

console.log(__dirname);
console.log(__filename);
