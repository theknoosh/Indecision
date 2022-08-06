class Person {
  constructor(name = "Anonymous", age = 10) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` and their major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let gretting = super.getGreeting();
    if (this.hasHomeLocation()) {
      gretting += `. I am visiting from ${this.homeLocation}`;
    }
    return gretting;
  }
}

const other = new Student();
console.log(other.getDescription());

const me = new Student("Darrell Payne", 68, "Computer Science");
console.log(me.getDescription());

const traveler = new Traveler("Stephanie Payne", 68, "California");
console.log(traveler.getGreeting());
