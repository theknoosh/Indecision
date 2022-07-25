// Arguments object no longer bound with arrow functions
// this keyword no longer bound with arrow functions

const add = (a, b) => a + b;

console.log(add(55, 10));

const user = {
  name: "Andrew",
  cities: ["Phily", "New York", "Dublin"],
  printPlacesLived: function () {
    console.log(this.name);
    console.log(this.cities);

    this.cities.forEach((city) => {
      console.log(this.name + " has lived in " + city);
    });
  },
};

user.printPlacesLived();
