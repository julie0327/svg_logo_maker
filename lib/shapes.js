class Shapes {
  constructor(color) {
    this.color = color;
  }
}
class Circle extends Shapes {
  render() {
    return `<circle width="100%" height="100%" fill='${this.color}' cx="50%" cy="50%" r='100' />`;
  }
}
class Square extends Shapes {
  render() {
    return `<rect width="200" height="200" fill='${this.color}' x='50' />`;
  }
}
class Triangle extends Shapes {
  render() {
    return `<polygon width="100%" height="100%" fill='${this.color}' points='0,200 300, 200 150,0' />`;
  }
}
module.exports = { Circle, Square, Triangle };
