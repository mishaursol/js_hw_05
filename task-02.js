class User {
    constructor(name, age, followers) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }
    getIfo() {
        console.log(`${name}, ${age}, ${followers}`);
    }
}
const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});
console.log(mango);
const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});
console.log(poly);