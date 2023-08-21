const { Circle, Square, Triangle } = require("./shapes");

describe("circle", () => {
  it("should return <circle width='100%' height='100%' fill='blue' cx='50%' cy='50%' r='100' />", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual(
      `<circle width="100%" height="100%" fill='blue' cx="50%" cy="50%" r='100' />`
    );
  });
});
describe("square", () => {
  it("should return <rect width='200' height='200' fill='${this.color}' x='50' />", () => {
    const circle = new Square();
    circle.setColor("blue");
    expect(circle.render()).toEqual(
      `<rect width="200" height="200" fill='blue' x='50' />`
    );
  });
});
describe("triangle", () => {
  it("should return <polygon width='100%' height='100%' fill='blue' points='0,200 300, 200 150,0' />", () => {
    const circle = new Triangle();
    circle.setColor("blue");
    expect(circle.render()).toEqual(
      `<polygon width="100%" height="100%" fill='blue' points='0,200 300, 200 150,0' />`
    );
  });
});
