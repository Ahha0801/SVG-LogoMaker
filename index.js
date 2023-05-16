import inquirer from "inquirer";
import { writeFile } from "fs";
import SVG from "./lib/svg.js";
import Triangle from "./lib/triangle.js";
import Circle from "./lib/circle.js";
import Square from "./lib/square.js";

const writeToFile = ({ text, textC, shape, shapeC }) => {
  let generatedShape;

  switch (shape) {
    case "circle":
      generatedShape = new Circle();
      break;
    case "triangle":
      generatedShape = new Triangle();
      break;
    case "square":
      generatedShape = new Square();
      break;
    default:
      console.error("Invalid shape entered!");
      return;
  }

  generatedShape.setColor(shapeC);
  const svg = new SVG();
  svg.setText(text, textC);
  svg.setShape(generatedShape);
  return writeFile("examplesvg.svg", svg.render(), (err) =>
    err ? console.error(err) : console.log("Logo generated!")
  );
};

function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "What will the text for the logo be? (Max 3 characters)",
      },
      {
        type: "input",
        name: "textC",
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
        name: "shapeC",
        message: "What should the shape's color be? Enter a color.",
      },
    ])

    .then(({ text, textC, shape, shapeC }) => {
      writeToFile({ text, textC, shape, shapeC });
    });
}

init();
