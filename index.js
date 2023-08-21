const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

function writeFile(fileName, answer) {
  let svg = "";
  svg = '<svg width="300px" height="200px" xmlns="http://www.w3.org/2000/svg">';

  let shapeChoice;
  if (answer.shape === "triangle") {
    shapeChoice = new Triangle(answer.shape_color);
    svg += shapeChoice.render();
  } else if (answer.shape === "circle") {
    shapeChoice = new Circle(answer.shape_color);
    svg += shapeChoice.render();
  } else if (answer.shape === "square") {
    shapeChoice = new Square(answer.shape_color);
    svg += shapeChoice.render();
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
      writeFile("./examples/logo.svg", answer);
    }
  });
