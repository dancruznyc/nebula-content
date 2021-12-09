class Animal {
  constructor(name, sound, food, home) {
    this.name = name;
    this.sound = sound;
    this.food = food;
    this.home = home;
  }
  makeNoise() {
    console.log(`${this.sound} ${this.sound}`);
  }
  eat() {
    console.log(`The ${this.name} eats ${this.food}`);
  }
  description() {
    console.log(
      `${this.name}s live in the ${this.home} and they eat ${this.food}`
    );
  }
}

const frog = new Animal("frog", "ribbit", "flys", "pond");
const pig = new Animal("pig", "oink", "slop", "pen");
const dog = new Animal("dog", "woof", "kibbles", "dog house");
console.log(frog);
pig.makeNoise();
dog.description();
frog.description();

class Shoes {
  constructor(type, size, color, age) {
    this.type = type;
    this.size = size;
    this.color = color;
    this.age = age;
  }
  describe() {
    console.log(
      `My ${this.type} are ${this.color}, size ${this.size} and are ${this.age} year(s) old.`
    );
  }
}

const loafers = new Shoes("loafers", 8.5, "black", 3);
const wingtips = new Shoes("wingtips", 9, "brown", 1);
const sneaker = new Shoes("sneakers", 11, "white", 2);

loafers.describe();
wingtips.describe();
sneaker.describe();

class Shape {
  constructor(height) {
    this.height = height;
  }
}

class Rectangle extends Shape {
  constructor(height, width) {
    super(height);
    this.width = width;
  }
  area() {
    console.log(this.height * this.width);
  }
}

const block = new Rectangle(5, 8);
block.area();

class Triangle extends Shape {
  constructor(height, width) {
    super(height);
    this.width = width;
  }
  area() {
    console.log((this.height * this.width) / 2);
  }
}

const threePointShape = new Triangle(3, 9);
threePointShape.area();

class Circle extends Shape {
  constructor(height) {
    super(height);
  }
  area() {
    console.log(Math.pow(this.height / 2, 2) * Math.PI);
  }
}

const roundShape = new Circle(7);
roundShape.area();

class Trapezoid extends Shape {
  constructor(height, widtha, widthb) {
    super(height);
    this.widtha = widtha;
    this.widthb = widthb;
  }
  area() {
    console.log((this.height / 2) * (this.widtha + this.widthb));
  }
}

const block2 = new Trapezoid(3, 9, 8);
block2.area();
