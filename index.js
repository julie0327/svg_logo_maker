const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./shapes");
// class Svg {
//   constructor() {
//     this.text = "";
//     this.shape = "";
//   }
//   render() {
//     return `<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">`;
//   }
//   setText(text, color) {
//     this.text = `<text x='150' y='100' dominant-baseline="middle" text-anchor="middle" font-size="30" fill=${color}>${text}</text>`;
//   }
//   setShape(shape) {
//     this.shape = shape.render();
//   }
// }
function writeFile(fileName, answer) {
  let svg = "";
  svg = '<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">';
  //svg += `${answer.shape}`;

  let shapeChoice;
  if (answer.shape === "triangle") {
    shapeChoice = new Triangle();
    svg += `<polygon width="100%" height="100%" fill='${answer.shape_color}' points='0,200 300, 200 150,0' />`;
  } else if (answer.shape === "circle") {
    shapeChoice = new Circle();
    svg += `<circle width="100%" height="100%" fill='${answer.shape_color}' cx="50%" cy="50%" r='100' />`;
  } else if (answer.shape === "square") {
    shapeChoice = new Square();
    svg += `<rect width="200" height="200" fill='${answer.shape_color}' x='50' />`;
  }
  svg += `<text x='150' y='100' dominant-baseline="middle" text-anchor="middle" font-size="50" fill='${answer.text_color}'>
${answer.text}
</text>`;
  svg += `</svg>`;

  fs.writeFile(fileName, svg, (err) => {
    err ? console.log(err) : console.log("Generate logo.svg");
  });
}

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter up to three characters",
      name: "text",
    },
    {
      type: "input",
      message: "Enter the color of characters",
      name: "text_color",
    },
    {
      type: "list",
      message: "Enter the shape",
      choices: ["circle", "triangle", "square"],
      name: "shape",
    },
    {
      type: "input",
      message: "Enter the color of shape",
      name: "shape_color",
    },
  ])
  .then((answer) => {
    console.log(answer.text);
    console.log(answer.text_color);
    console.log(answer.shape);
    console.log(answer.shape_color);
    if (answer.text.length > 3) {
      console.log("No more than 3 characters");
      return;
    } else {
      writeFile("logo.svg", answer);
    }
  });
