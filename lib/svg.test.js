const SVG = require('./svg')

test("should render a 300 x 200 svg", () => {
    const shouldBe = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
    const testObject = new SVG();
    expect(testObject).toEqual(shouldBe)
})