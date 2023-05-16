// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

import inquirer from "inquirer";
import { writeFile } from "fs";
import Triangle from "./lib/triangle.js";
import Circle from "./lib/circle.js";
import Square from "./lib/square.js";

const questions = [
  {
    type: "input",
    name: "initials",
    message: "What will the text for the logo be? (Max 3 characters)",
  },
  {
    type: "input",
    name: "textcolor",
    message: "What should the color of the text be? Enter a color.",
  },
  {
    type: "list",
    name: "shape",
    choices: ["circle", "square", "triangle"],
    message: "Choose the shape of the logo be?",
  },
  {
    type: "input",
    name: "fillcolor",
    message: "What should the shape's color be? Enter a color.",
  },
];

function writeToFile(data) {
  let generatedShape;

  switch (data.shape) {
    case "circle":
      generatedShape = new Circle(
        data.fillcolor,
        data.initials,
        data.textcolor
      );
      break;
    case "triangle":
      generatedShape = new Triangle(
        data.fillcolor,
        data.initials,
        data.textcolor
      );
      break;
    case "square":
      generatedShape = new Square(
        data.fillcolor,
        data.initials,
        data.textcolor
      );
      break;
    default:
      console.error("Invalid shape entered!");
      return;
  }

  generatedShape = generatedShape.render(
    data.fillcolor,
    data.initials,
    data.textcolor
  );

  writeFile("examplesvg.svg", generatedShape, (err) =>
    err ? console.error(err) : console.log("Logo generated!")
  );
}

function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    writeToFile(data);
  });
}

init();
