// class Greeter {
//   greeting : string;
//   constructor(message: string) {
//     this.greeting = message;
//   }
//   greet() {
//     return "Hello, " + this.greeting;
//   }
// }

// let greeter = new Greeter("world");

// let button = document.createElement('button');
// button.textContent = "Say Hello";
// button.onclick = function() {
//   alert(greeter.greet());
// }

// document.body.appendChild(button);

// const user = {
//   name: "Hayes",
//   id: "qwe",
// };
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

