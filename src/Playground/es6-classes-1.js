
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return`Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());

const me = new Person('Darrell Payne', 68);
console.log(me.getGreeting());
console.log(me.getDescription());