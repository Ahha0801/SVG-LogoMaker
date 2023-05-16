const Square = require("./square");
const Circle = require("./circle");
const Triangle = require("./triangle");
const { describe } = require("node:test");

describe("Square", () => {
  test("creates circle based on values given", () => {
    const shouldBe = '<circle cx="150" cy="100" r="80" fill="orange" />';
    const object = new Circle();
    object.setColor("orange");
    const testObject = object.render();
    expect(testObject).toEqual(shouldBe);
  });
});
